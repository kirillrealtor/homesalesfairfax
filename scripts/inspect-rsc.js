const fs = require('fs');

const html = fs.readFileSync('.next/server/app/contact.html', 'utf8');
const rscMatches = html.match(/self\.__next_f\.push\(\[1,"([\s\S]*?)"\]\)/g) || [];

console.log('Found', rscMatches.length, 'RSC chunks in contact.html');
rscMatches.forEach((chunk, i) => {
  console.log(`\n=== Chunk ${i} (length: ${chunk.length}) ===`);
  // Unescape backslashes to read it cleanly
  const preview = chunk.slice(0, 500);
  console.log(preview);
});
