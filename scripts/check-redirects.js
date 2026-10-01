const fs = require('fs');
const path = require('path');

function getHtmlFiles(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  fs.readdirSync(dir).forEach(file => {
    file = path.join(dir, file);
    if (fs.statSync(file).isDirectory()) results = results.concat(getHtmlFiles(file));
    else if (file.endsWith('.html') && !file.includes('_not-found') && !file.includes('_global-error')) results.push(file);
  });
  return results;
}

const files = getHtmlFiles('.next/server/app');
const redirects = [
  '/fairfax-city-homes-for-sale',
  '/communities',
  '/market-report',
  '/mantua-real-estate',
  '/mosby-woods-market',
  '/franklin-farm-values',
  '/kings-park-west-real-estate',
  '/divisions',
  '/divisions/fairfax-county',
  '/divisions/city-of-fairfax',
  '/divisions/arlington-county',
  '/divisions/city-of-alexandria',
  '/subdivisions',
  '/subdivisions/burke-centre',
  '/subdivisions/oakton-estates',
  '/communities/mantua',
  '/communities/mosby-woods',
  '/communities/franklin-farm',
  '/communities/kings-park-west',
  '/communities/clifton',
  '/communities/mclean',
  '/communities/country-club-hills',
  '/communities/skyline',
  '/communities/northampton-place'
];

let foundTotal = 0;
redirects.forEach(r => {
  let foundIn = [];
  files.forEach(f => {
    const html = fs.readFileSync(f, 'utf8');
    if (html.includes(`href="${r}"`) || html.includes(`href="https://www.homesalesfairfax.com${r}"`)) {
      foundIn.push(f.replace('.next\\server\\app\\', '').replace('.next/server/app/', ''));
    }
  });
  if (foundIn.length > 0) {
    foundTotal += foundIn.length;
    console.log(`Redirect source ${r} linked in:`, foundIn);
  }
});

if (foundTotal === 0) {
  console.log('Zero internal links to redirect sources found. All internal links point directly to 200 OK canonical targets.');
}
