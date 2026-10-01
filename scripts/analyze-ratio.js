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
let allAbove10 = true;

for (const filePath of files) {
  const html = fs.readFileSync(filePath, 'utf8');
  const noScripts = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  const noStyles = noScripts.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '');
  const noComments = noStyles.replace(/<!--[\s\S]*?-->/g, '');
  const textOnly = noComments.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  const ratio = (textOnly.length / html.length * 100);
  const rel = filePath.replace('.next\\server\\app\\', '').replace('.next/server/app/', '');
  console.log(`${rel.padEnd(45)} Text: ${textOnly.length.toString().padStart(5)} | HTML: ${html.length.toString().padStart(6)} | Ratio: ${ratio.toFixed(2)}%`);
  if (ratio < 10) allAbove10 = false;
}

console.log('\nAll pages >= 10% ratio:', allAbove10);
