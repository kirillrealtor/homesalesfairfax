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
console.log('Total HTML files:', files.length);

let withoutCanonical = [];
let withCanonical = [];

files.forEach(f => {
  const html = fs.readFileSync(f, 'utf8');
  const relCanonical = html.includes('rel="canonical"');
  const shortName = f.replace('.next\\server\\app\\', '').replace('.next/server/app/', '');
  if (!relCanonical) {
    withoutCanonical.push(shortName);
  } else {
    const match = html.match(/<link[^>]*rel="canonical"[^>]*>/i) || html.match(/<link[^>]*href="[^"]*"[^>]*rel="canonical"[^>]*>/i);
    withCanonical.push({ file: shortName, tag: match ? match[0] : 'found' });
  }
});

console.log('Pages WITH canonical:', withCanonical.length);
console.log('Pages WITHOUT canonical:', withoutCanonical.length);
if (withoutCanonical.length > 0) {
  console.log('Pages missing canonical:');
  console.log(withoutCanonical.join('\n'));
}

// Also check sitemap.xml
if (fs.existsSync('.next/server/app/sitemap.xml.body')) {
  const sitemapXml = fs.readFileSync('.next/server/app/sitemap.xml.body', 'utf8');
  console.log('\nSitemap entries count:');
  const locs = sitemapXml.match(/<loc>[^<]+<\/loc>/g) || [];
  console.log('Total URLs in sitemap:', locs.length);
}
