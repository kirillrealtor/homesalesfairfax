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

const htmlFiles = getHtmlFiles('.next/server/app').map(f => {
  let rel = f.replace('.next\\server\\app\\', '').replace('.next/server/app/', '').replace(/\\/g, '/');
  if (rel === 'index.html') return 'https://www.homesalesfairfax.com';
  return 'https://www.homesalesfairfax.com/' + rel.replace('.html', '');
});

const sitemapXml = fs.readFileSync('.next/server/app/sitemap.xml.body', 'utf8');
const locMatches = (sitemapXml.match(/<loc>[^<]+<\/loc>/g) || []).map(l => l.replace(/<\/?loc>/g, ''));

console.log('HTML pages count:', htmlFiles.length);
console.log('Sitemap URLs count:', locMatches.length);

const inHtmlNotInSitemap = htmlFiles.filter(u => !locMatches.includes(u));
const inSitemapNotInHtml = locMatches.filter(u => !htmlFiles.includes(u));

console.log('\nIn HTML but NOT in sitemap (Count: ' + inHtmlNotInSitemap.length + '):');
if (inHtmlNotInSitemap.length > 0) console.log(inHtmlNotInSitemap);

console.log('\nIn sitemap but NOT in HTML (Count: ' + inSitemapNotInHtml.length + '):');
if (inSitemapNotInHtml.length > 0) console.log(inSitemapNotInHtml);

if (inHtmlNotInSitemap.length === 0 && inSitemapNotInHtml.length === 0) {
  console.log('\nPERFECT 100% 1-to-1 MATCH between crawled pages and sitemap.xml!');
}
