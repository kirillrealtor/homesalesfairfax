const fs = require('fs');
const path = require('path');

function getHtmlFiles(dir) {
  let results = [];
  fs.readdirSync(dir).forEach(file => {
    file = path.join(dir, file);
    if (fs.statSync(file).isDirectory()) results = results.concat(getHtmlFiles(file));
    else if (file.endsWith('.html') && !file.includes('_not-found') && !file.includes('_global-error')) results.push(file);
  });
  return results;
}

const files = getHtmlFiles('.next/server/app');
const urlList = files.map(f => {
  let rel = f.replace('.next\\server\\app\\', '').replace('.next/server/app/', '').replace(/\\/g, '/');
  let pathname = rel === 'index.html' ? '/' : '/' + rel.replace('.html', '');
  return { file: f, rel, pathname };
});

const fileContents = files.map(f => ({
  file: f,
  html: fs.readFileSync(f, 'utf8')
}));

let linkCounts = {};
let buckets = {
  '1 incoming': [],
  '2-5 incoming': [],
  '6-15 incoming': [],
  '16-50 incoming': [],
  '51-150 incoming': [],
  '150+ incoming': []
};

urlList.forEach(target => {
  let incomingCount = 0;
  fileContents.forEach(source => {
    // Exclude self-links
    if (source.file === target.file) return;
    
    // Check if source links to target
    // target can be linked as href="/path" or href="https://www.homesalesfairfax.com/path"
    const pattern = target.pathname === '/' 
      ? /href="(\/|https:\/\/www\.homesalesfairfax\.com\/?)"/
      : new RegExp(`href="(${target.pathname}|https://www.homesalesfairfax.com${target.pathname})"`);
    
    if (pattern.test(source.html)) {
      incomingCount++;
    }
  });

  linkCounts[target.pathname] = incomingCount;
  if (incomingCount === 1) buckets['1 incoming'].push(target.pathname);
  else if (incomingCount >= 2 && incomingCount <= 5) buckets['2-5 incoming'].push(target.pathname);
  else if (incomingCount >= 6 && incomingCount <= 15) buckets['6-15 incoming'].push(target.pathname);
  else if (incomingCount >= 16 && incomingCount <= 50) buckets['16-50 incoming'].push(target.pathname);
  else if (incomingCount >= 51 && incomingCount <= 150) buckets['51-150 incoming'].push(target.pathname);
  else buckets['150+ incoming'].push(target.pathname);
});

console.log('=== Incoming Internal Links Distribution (Total pages: ' + urlList.length + ') ===');
Object.keys(buckets).forEach(b => {
  const count = buckets[b].length;
  const pct = ((count / urlList.length) * 100).toFixed(1);
  console.log(`${b}: ${count} pages (${pct}%)`);
  if (count > 0 && (b === '1 incoming' || b === '2-5 incoming' || b === '6-15 incoming')) {
    console.log('  Pages:', buckets[b]);
  }
});
