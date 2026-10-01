const fs = require('fs');

const html = fs.readFileSync('.next/server/app/subdivisions.html', 'utf8');
const scripts = html.match(/<script type="application\/ld\+json">[\s\S]*?<\/script>/gi) || [];
scripts.forEach((s, i) => {
  console.log(`--- Schema ${i} (length: ${s.length}) ---`);
  console.log(s.substring(0, 400) + '...\n');
});

const contactHtml = fs.readFileSync('.next/server/app/contact.html', 'utf8');
const contactScripts = contactHtml.match(/<script type="application\/ld\+json">[\s\S]*?<\/script>/gi) || [];
contactScripts.forEach((s, i) => {
  console.log(`--- Contact Schema ${i} (length: ${s.length}) ---`);
  console.log(s.substring(0, 400) + '...\n');
});
