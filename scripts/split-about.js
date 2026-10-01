const fs = require('fs');
const content = fs.readFileSync('app/about/page.js', 'utf8');

const faqsIdx = content.indexOf('const faqs = [');
const jsxStart = content.indexOf('<div className="page-wrapper"');
const jsxEnd = content.lastIndexOf('</main>');

const clientCode = `"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export default function AboutClient() {
  ${content.slice(faqsIdx, content.indexOf('return (', faqsIdx)).trim()}

  return (
    <main style={{ background: "#F8F9FA", minHeight: "100vh" }}>
      ${content.slice(jsxStart, jsxEnd + 7)}
  );
}
`;

fs.writeFileSync('app/about/AboutClient.js', clientCode);
console.log('Created app/about/AboutClient.js, length:', clientCode.length);

const serverCode = `import AboutClient from "./AboutClient";

${content.slice(content.indexOf('export const metadata'), faqsIdx).trim()}

export default function AboutPage() {
  const structuredData = ${content.slice(content.indexOf('const structuredData = [') + 23, content.indexOf('const faqs = [')).trim()}

  return (
    <>
      {structuredData.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <AboutClient />
    </>
  );
}
`;

fs.writeFileSync('app/about/page.js', serverCode);
console.log('Updated app/about/page.js, length:', serverCode.length);
