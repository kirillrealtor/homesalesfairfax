"use client";

import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { DOCUMENT_ELEMENTS } from "../data/fairfaxHistoryDoc";

// Helper to render inline formatting (bold, italic)
function renderRuns(runs) {
  if (!runs || !runs.length) return null;
  return runs.map((r, i) => {
    if (r.bold && r.italic) return <strong key={i}><em>{r.text}</em></strong>;
    if (r.bold) return <strong key={i}>{r.text}</strong>;
    if (r.italic) return <em key={i}>{r.text}</em>;
    return <span key={i}>{r.text}</span>;
  });
}

// Slugify helper
function slugify(text) {
  return String(text || "")
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/[\s_-]+/g, "-");
}

export default function HistoryClient() {
  // Group consecutive ListParagraph items into <ul> blocks while rendering
  const renderedContent = [];
  let listBuffer = [];

  const flushListBuffer = (key) => {
    if (listBuffer.length > 0) {
      renderedContent.push(
        <ul key={`list-${key}`} className="doc-ul">
          {listBuffer.map((liItem, liIdx) => (
            <li key={liIdx} className="doc-li">
              {renderRuns(liItem.runs)}
            </li>
          ))}
        </ul>
      );
      listBuffer = [];
    }
  };

  DOCUMENT_ELEMENTS.forEach((item, idx) => {
    if (item.type === "paragraph" && item.style === "ListParagraph") {
      listBuffer.push(item);
    } else {
      flushListBuffer(idx);

      if (item.type === "paragraph") {
        if (item.style === "Heading1") {
          renderedContent.push(
            <h1 key={idx} className="doc-h1">
              {item.raw_text}
            </h1>
          );
        } else if (item.style === "Heading2") {
          const h2Id = slugify(item.raw_text);
          renderedContent.push(
            <h2 key={idx} id={h2Id} className="doc-h2">
              {item.raw_text}
            </h2>
          );
        } else if (item.style === "Heading3") {
          const h3Id = slugify(item.raw_text);
          renderedContent.push(
            <h3 key={idx} id={h3Id} className="doc-h3">
              {item.raw_text}
            </h3>
          );
        } else {
          renderedContent.push(
            <p key={idx} className="doc-p">
              {renderRuns(item.runs)}
            </p>
          );
        }
      } else if (item.type === "table") {
        const headers = item.rows[0] || [];
        const bodyRows = item.rows.slice(1);
        renderedContent.push(
          <div key={idx} className="doc-table-wrap">
            <table className="doc-table">
              <thead>
                <tr>
                  {headers.map((cell, cIdx) => (
                    <th key={cIdx} scope="col">
                      {cell.map((p, pIdx) => (
                        <div key={pIdx}>{renderRuns(p.runs)}</div>
                      ))}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {bodyRows.map((row, rIdx) => (
                  <tr key={rIdx}>
                    {row.map((cell, cIdx) => (
                      <td key={cIdx}>
                        {cell.map((p, pIdx) => (
                          <div key={pIdx}>{renderRuns(p.runs)}</div>
                        ))}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
    }
  });

  flushListBuffer("end");

  return (
    <main className="doc-page-root">
      <div className="doc-nav-wrapper">
        <Navbar />
      </div>

      <div className="doc-container">
        {/* Simple clean breadcrumb */}
        <nav aria-label="Breadcrumb" className="doc-breadcrumb">
          <Link href="/" className="doc-breadcrumb-link">Home</Link>
          <span className="doc-breadcrumb-sep">/</span>
          <span className="doc-breadcrumb-curr">Fairfax County History &amp; Real Estate Landscape</span>
        </nav>

        {/* Verbatim Word Document Content */}
        <article className="doc-article-full">
          {renderedContent}
        </article>
      </div>

      <Footer />
    </main>
  );
}
