"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { testimonials } from "../data/testimonials";

const ITEMS_PER_PAGE = 12;

export default function TestimonialsDirectory() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedId, setExpandedId] = useState(null);

  const categories = [
    { id: "all", label: `All Reviews (${testimonials.length})` },
    { id: "sellers", label: "Sellers & Closings" },
    { id: "skyline", label: "Falls Church & Skyline" },
    { id: "alexandria", label: "Alexandria & Arlington" },
    { id: "fairfax", label: "Fairfax & Suburbs" }
  ];

  const filteredReviews = useMemo(() => {
    let list = testimonials;

    if (activeCategory === "sellers") {
      list = list.filter(r => 
        /sold|seller|listing|asking|closing|as is|above list/i.test(r.quote) ||
        /seller|sold/i.test(r.author) ||
        /seller|sold/i.test(r.subtitle)
      );
    } else if (activeCategory === "skyline") {
      list = list.filter(r => 
        /skyline|falls church|seminary|george mason/i.test(r.subtitle) ||
        /skyline|falls church/i.test(r.quote)
      );
    } else if (activeCategory === "alexandria") {
      list = list.filter(r => 
        /alexandria|arlington|hampton|leesburg/i.test(r.subtitle) ||
        /alexandria|arlington/i.test(r.quote)
      );
    } else if (activeCategory === "fairfax") {
      list = list.filter(r => 
        /fairfax|oakton|burke|vienna|ashburn|centreville/i.test(r.subtitle) ||
        /fairfax|oakton|burke|vienna|ashburn/i.test(r.quote)
      );
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(r => 
        r.author.toLowerCase().includes(q) ||
        r.subtitle.toLowerCase().includes(q) ||
        r.quote.toLowerCase().includes(q)
      );
    }

    return list;
  }, [activeCategory, searchQuery]);

  // Reset to page 1 when category or query changes
  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(filteredReviews.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentReviews = filteredReviews.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div>
      {/* Search & Category Filter Toolbar */}
      <div style={{ maxWidth: "860px", margin: "0 auto 36px auto" }}>
        {/* Search Input */}
        <div style={{ position: "relative", marginBottom: "16px" }}>
          <input 
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search 325+ reviews by client name, building, street, or keyword..."
            style={{
              width: "100%",
              padding: "16px 20px 16px 46px",
              fontSize: "1rem",
              borderRadius: "var(--radius-sm)",
              border: "1px solid var(--ink-300)",
              background: "#FFFFFF",
              color: "var(--ink-950)",
              boxShadow: "0 2px 6px rgba(0,0,0,0.03)"
            }}
          />
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="var(--ink-400)" 
            strokeWidth="2"
            style={{ position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)" }}
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          {searchQuery && (
            <button
              onClick={() => { setSearchQuery(""); setCurrentPage(1); }}
              style={{
                position: "absolute",
                right: "16px",
                top: "50%",
                transform: "translateY(-50%)",
                background: "transparent",
                border: "none",
                color: "var(--ink-400)",
                cursor: "pointer",
                fontSize: "1.2rem"
              }}
            >
              ✕
            </button>
          )}
        </div>

        {/* Filter Pills */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", justifyContent: "center" }}>
          {categories.map(c => (
            <button
              key={c.id}
              onClick={() => handleCategoryChange(c.id)}
              style={{
                padding: "8px 18px",
                borderRadius: "20px",
                fontSize: "0.85rem",
                fontWeight: 600,
                cursor: "pointer",
                border: activeCategory === c.id ? "1px solid var(--accent-gold-hover)" : "1px solid var(--ink-200)",
                background: activeCategory === c.id ? "var(--ink-950)" : "#FFFFFF",
                color: activeCategory === c.id ? "#FFFFFF" : "var(--ink-700)",
                transition: "all 0.15s ease"
              }}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* Counter bar */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid var(--ink-200)",
        paddingBottom: "16px",
        marginBottom: "28px"
      }}>
        <div style={{ fontSize: "0.92rem", color: "var(--ink-600)" }}>
          Showing <strong>{startIndex + 1}–{Math.min(startIndex + ITEMS_PER_PAGE, filteredReviews.length)}</strong> of <strong>{filteredReviews.length}</strong> verified reviews
        </div>
        <div style={{ fontSize: "0.85rem", color: "var(--ink-500)" }}>
          Page {currentPage} of {Math.max(1, totalPages)}
        </div>
      </div>

      {/* Grid of Reviews */}
      {currentReviews.length === 0 ? (
        <div style={{ textAlign: "center", padding: "60px 20px", background: "#FFFFFF", borderRadius: "var(--radius-md)", border: "1px solid var(--ink-200)" }}>
          <h3 style={{ fontSize: "1.2rem", color: "var(--ink-900)", marginBottom: "8px" }}>No reviews matched your search</h3>
          <p style={{ color: "var(--ink-600)", marginBottom: "16px" }}>Try searching for a different keyword or reset the category filter.</p>
          <button 
            onClick={() => { setSearchQuery(""); setActiveCategory("all"); setCurrentPage(1); }}
            className="btn btn-outline"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "24px",
          alignItems: "start"
        }}>
          {currentReviews.map((r) => {
            const isLong = r.quote.length > 280;
            const isExpanded = expandedId === r.id;
            const displayText = isLong && !isExpanded ? r.quote.substring(0, 280) + "..." : r.quote;

            return (
              <div 
                key={r.id} 
                style={{
                  background: "#FFFFFF",
                  borderRadius: "var(--radius-md)",
                  padding: "28px 24px",
                  border: "1px solid var(--ink-200)",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.03)",
                  position: "relative"
                }}
              >
                {/* Header: Stars + Review ID / Badge */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                  <div style={{ color: "#D97706", fontSize: "1.05rem", letterSpacing: "2px" }}>
                    {"★".repeat(r.stars)}
                  </div>
                  <span style={{
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    color: "#059669",
                    background: "#ECFDF5",
                    padding: "3px 8px",
                    borderRadius: "4px",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px"
                  }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Verified Client
                  </span>
                </div>

                {/* Quote Text */}
                <div style={{
                  fontSize: "0.93rem",
                  color: "var(--ink-800)",
                  lineHeight: "1.65",
                  marginBottom: "20px",
                  flexGrow: 1,
                  whiteSpace: "pre-line"
                }}>
                  "{displayText}"
                  {isLong && (
                    <button
                      onClick={() => setExpandedId(isExpanded ? null : r.id)}
                      style={{
                        background: "none",
                        border: "none",
                        color: "var(--accent-gold-hover)",
                        fontWeight: 600,
                        cursor: "pointer",
                        padding: "0 4px",
                        fontSize: "0.85rem",
                        display: "inline-block",
                        textDecoration: "underline"
                      }}
                    >
                      {isExpanded ? "Show Less" : "Read Full Story"}
                    </button>
                  )}
                </div>

                {/* Author Info Footer */}
                <div style={{
                  borderTop: "1px solid var(--ink-100)",
                  paddingTop: "14px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between"
                }}>
                  <div>
                    <strong style={{ display: "block", color: "var(--ink-950)", fontSize: "0.94rem" }}>
                      {r.author}
                    </strong>
                    <span style={{ fontSize: "0.8rem", color: "var(--ink-500)", display: "block", marginTop: "2px" }}>
                      {r.subtitle}
                    </span>
                  </div>
                  <div style={{
                    width: "34px",
                    height: "34px",
                    borderRadius: "50%",
                    background: "#F1F5F9",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--accent-gold-hover)",
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    flexShrink: 0
                  }}>
                    {r.author.charAt(0)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "8px",
          marginTop: "48px",
          flexWrap: "wrap"
        }}>
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            style={{
              padding: "8px 16px",
              borderRadius: "4px",
              border: "1px solid var(--ink-300)",
              background: currentPage === 1 ? "#F1F5F9" : "#FFFFFF",
              color: currentPage === 1 ? "var(--ink-400)" : "var(--ink-900)",
              cursor: currentPage === 1 ? "not-allowed" : "pointer",
              fontWeight: 600,
              fontSize: "0.88rem"
            }}
          >
            ← Previous
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1)
            .filter(p => p === 1 || p === totalPages || Math.abs(p - currentPage) <= 2)
            .map((p, idx, arr) => {
              const prev = arr[idx - 1];
              const showEllipsis = prev && p - prev > 1;

              return (
                <span key={p} style={{ display: "inline-flex", alignItems: "center" }}>
                  {showEllipsis && <span style={{ padding: "0 6px", color: "var(--ink-400)" }}>...</span>}
                  <button
                    onClick={() => setCurrentPage(p)}
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "4px",
                      border: currentPage === p ? "1px solid var(--ink-950)" : "1px solid var(--ink-300)",
                      background: currentPage === p ? "var(--ink-950)" : "#FFFFFF",
                      color: currentPage === p ? "#FFFFFF" : "var(--ink-800)",
                      fontWeight: currentPage === p ? 700 : 500,
                      cursor: "pointer",
                      fontSize: "0.88rem"
                    }}
                  >
                    {p}
                  </button>
                </span>
              );
            })}

          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            style={{
              padding: "8px 16px",
              borderRadius: "4px",
              border: "1px solid var(--ink-300)",
              background: currentPage === totalPages ? "#F1F5F9" : "#FFFFFF",
              color: currentPage === totalPages ? "var(--ink-400)" : "var(--ink-900)",
              cursor: currentPage === totalPages ? "not-allowed" : "pointer",
              fontWeight: 600,
              fontSize: "0.88rem"
            }}
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
}
