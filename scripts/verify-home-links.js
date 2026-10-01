const fs = require('fs');
const path = require('path');

function getHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(getHtmlFiles(file));
    } else if (file.endsWith('.html') && !file.includes('_not-found') && !file.includes('_global-error')) {
      results.push(file);
    }
  });
  return results;
}

const files = getHtmlFiles('.next/server/app');
let pagesWithHomeLinks = 0;
let totalHomeLinks = 0;
let missing = [];

files.forEach(f => {
  const html = fs.readFileSync(f, 'utf8');
  const homeLinks = html.match(/href="(\/|https:\/\/www\.homesalesfairfax\.com\/?)"/g) || [];
  if (homeLinks.length > 0) {
    pagesWithHomeLinks++;
    totalHomeLinks += homeLinks.length;
  } else {
    missing.push(f);
  }
});

console.log('Total pages checked:', files.length);
console.log('Pages containing internal link(s) to home:', pagesWithHomeLinks);
console.log('Missing home links:', missing.length);
console.log('Total internal links to home found across all pages:', totalHomeLinks);
console.log('Average home links per page:', (totalHomeLinks / files.length).toFixed(1));
