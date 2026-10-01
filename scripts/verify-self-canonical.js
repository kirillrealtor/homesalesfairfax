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
let mismatches = [];
let validSelfCanonical = 0;

files.forEach(f => {
  let rel = f.replace('.next\\server\\app\\', '').replace('.next/server/app/', '').replace(/\\/g, '/');
  let expectedCanonical = rel === 'index.html' ? 'https://www.homesalesfairfax.com' : 'https://www.homesalesfairfax.com/' + rel.replace('.html', '');
  
  const html = fs.readFileSync(f, 'utf8');
  // Match <link rel="canonical" href="..."> or <link href="..." rel="canonical">
  const match = html.match(/<link[^>]+rel="canonical"[^>]+href="([^"]+)"/i) || html.match(/<link[^>]+href="([^"]+)"[^>]+rel="canonical"/i);
  
  if (!match) {
    mismatches.push({ file: rel, expected: expectedCanonical, actual: 'NONE' });
  } else {
    const actualCanonical = match[1];
    if (actualCanonical === expectedCanonical || (expectedCanonical === 'https://www.homesalesfairfax.com' && actualCanonical === 'https://www.homesalesfairfax.com/')) {
      validSelfCanonical++;
    } else {
      mismatches.push({ file: rel, expected: expectedCanonical, actual: actualCanonical });
    }
  }
});

console.log('Total files checked:', files.length);
console.log('Valid self-canonical tags:', validSelfCanonical);
console.log('Mismatches or missing:', mismatches.length);
if (mismatches.length > 0) {
  console.log('Mismatches details:');
  console.log(mismatches);
} else {
  console.log('PERFECT 100% SELF-CANONICAL across all pages!');
}
