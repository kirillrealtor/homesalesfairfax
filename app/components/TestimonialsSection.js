"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { testimonials } from "../data/testimonials";

export default function TestimonialsSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedId, setExpandedId] = useState(null);
  const reviewsPerPage = 6;

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

  const totalPages = Math.max(1, Math.ceil(filteredReviews.length / reviewsPerPage));
  const displayedList = filteredReviews.slice((currentPage - 1) * reviewsPerPage, currentPage * reviewsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);
    const el = document.getElementById("reviews");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const getVisiblePages = () => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    if (currentPage <= 3) {
      return [1, 2, 3, 4, "...", totalPages];
    }
    if (currentPage >= totalPages - 2) {
      return [1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    }
    return [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages];
  };

  return (
    <section id="reviews" className="content-section" style={{ background: "var(--bg-page)", padding: "80px 0" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-head-clean" style={{ textAlign: "center", maxWidth: "820px", margin: "0 auto 40px auto" }}>
          <span className="section-pretitle">100% Genuine Client Experiences</span>
          <h2 className="section-title-bold" style={{ fontSize: "2.3rem", letterSpacing: "-0.02em", marginTop: "8px" }}>
            325+ Verified Five-Star Client Reviews
          </h2>
          <p className="section-lead-text" style={{ fontSize: "1.05rem", color: "var(--ink-700)", lineHeight: "1.7" }}>
            Real stories of record-setting sales, stress-free negotiations, and dedicated representation across Fairfax County and Northern Virginia with Elena Gorbounova.
          </p>

          {/* Trust Metrics Bar */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: "16px",
            marginTop: "28px",
            padding: "20px 24px",
            background: "#FFFFFF",
            borderRadius: "var(--radius-md)",
            border: "1px solid var(--ink-200)",
            boxShadow: "0 2px 8px rgba(0,0,0,0.04)"
          }}>
            <div>
              <div style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--ink-950)" }}>325+</div>
              <div style={{ fontSize: "0.78rem", color: "var(--ink-500)", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 600 }}>Verified Reviews</div>
            </div>
            <div>
              <div style={{ fontSize: "1.6rem", fontWeight: 800, color: "#D97706" }}>★★★★★</div>
              <div style={{ fontSize: "0.78rem", color: "var(--ink-500)", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 600 }}>5.0 Average Rating</div>
            </div>
            <div>
              <div style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--accent-gold-hover)" }}>Top 1%</div>
              <div style={{ fontSize: "0.78rem", color: "var(--ink-500)", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 600 }}>NVAR Top Producer</div>
            </div>
            <div>
              <div style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--ink-950)" }}>100%</div>
              <div style={{ fontSize: "0.78rem", color: "var(--ink-500)", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 600 }}>Authentic Submissions</div>
            </div>
          </div>
        </div>

        {/* Search & Category Filter Toolbar */}
        <div style={{ maxWidth: "900px", margin: "0 auto 36px auto" }}>
          {/* Search Box */}
          <div style={{ position: "relative", marginBottom: "18px" }}>
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Search by client name, neighborhood, building, or keyword (e.g., 'offer', 'listing', 'Fairfax')..."
              style={{
                width: "100%",
                padding: "14px 20px 14px 44px",
                fontSize: "0.95rem",
                borderRadius: "var(--radius-sm)",
                border: "1px solid var(--ink-300)",
                background: "#FFFFFF",
                color: "var(--ink-950)",
                boxShadow: "0 1px 3px rgba(0,0,0,0.03)"
              }}
            />
            <svg 
              width="18" 
              height="18" 
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
                onClick={() => setSearchQuery("")}
                style={{
                  position: "absolute",
                  right: "14px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "transparent",
                  border: "none",
                  color: "var(--ink-400)",
                  cursor: "pointer",
                  fontSize: "1.1rem"
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
                onClick={() => {
                  setActiveCategory(c.id);
                  setCurrentPage(1);
                }}
                style={{
                  padding: "8px 16px",
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

        {/* Results Counter */}
        <div style={{ textAlign: "center", marginBottom: "24px", fontSize: "0.88rem", color: "var(--ink-500)" }}>
          Showing <strong>{Math.min(displayedList.length, filteredReviews.length)}</strong> of <strong>{filteredReviews.length}</strong> matching reviews
        </div>

        {/* Testimonials Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "24px",
          alignItems: "start"
        }}>
          {displayedList.map((r) => {
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
                  position: "relative",
                  transition: "transform 0.15s ease, box-shadow 0.15s ease"
                }}
              >
                {/* Top Row: Stars + Verified Badge */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                  <div style={{ color: "#D97706", fontSize: "1.05rem", letterSpacing: "2px" }}>
                    {"★".repeat(r.stars)}
                  </div>
                  <span style={{
                    fontSize: "0.72rem",
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
                    Verified Review
                  </span>
                </div>

                {/* Quote Text */}
                <div style={{
                  fontSize: "0.93rem",
                  color: "var(--ink-800)",
                  lineHeight: "1.65",
                  marginBottom: "18px",
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

                {/* Author Info */}
                <div style={{
                  borderTop: "1px solid var(--ink-100)",
                  paddingTop: "14px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between"
                }}>
                  <div>
                    <strong style={{ display: "block", color: "var(--ink-950)", fontSize: "0.95rem" }}>
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

        {/* Circular Pagination & Full Directory Navigation */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          marginTop: "48px"
        }}>
          {/* Circular Navigation Bar: [ ← ] [ 1 ] [ 2 ] [ 3 ] [ 4 ] [ → ] */}
          {totalPages > 1 && (
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "#FFFFFF",
              padding: "8px 14px",
              borderRadius: "9999px",
              border: "1.5px solid var(--ink-200)",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.06)"
            }}>
              {/* Circular Left Arrow Button */}
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label="Previous Reviews"
                title="Previous Page"
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "50%",
                  border: "1.5px solid #E2E8F0",
                  background: currentPage === 1 ? "#F8FAFC" : "#FFFFFF",
                  color: currentPage === 1 ? "#CBD5E1" : "var(--ink-950)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: currentPage === 1 ? "not-allowed" : "pointer",
                  transition: "all 0.2s ease"
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>

              {/* Circular Page Numbers */}
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                {getVisiblePages().map((p, idx) => {
                  if (p === "...") {
                    return (
                      <span key={`dots-${idx}`} style={{ padding: "0 6px", color: "var(--ink-400)", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "1px" }}>
                        •••
                      </span>
                    );
                  }

                  const isActive = p === currentPage;
                  return (
                    <button
                      key={p}
                      onClick={() => handlePageChange(p)}
                      aria-label={`Go to page ${p}`}
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        border: isActive ? "1.5px solid var(--ink-950)" : "1.5px solid transparent",
                        background: isActive ? "var(--ink-950)" : "transparent",
                        color: isActive ? "#FFFFFF" : "var(--ink-800)",
                        fontWeight: isActive ? 800 : 600,
                        fontSize: "0.92rem",
                        cursor: "pointer",
                        transition: "all 0.15s ease",
                        boxShadow: isActive ? "0 4px 10px rgba(15, 23, 42, 0.22)" : "none"
                      }}
                    >
                      {p}
                    </button>
                  );
                })}
              </div>

              {/* Circular Right Arrow Button */}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                aria-label="Next Reviews"
                title="Next Page"
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "50%",
                  border: "1.5px solid #E2E8F0",
                  background: currentPage === totalPages ? "#F8FAFC" : "#FFFFFF",
                  color: currentPage === totalPages ? "#CBD5E1" : "var(--ink-950)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: currentPage === totalPages ? "not-allowed" : "pointer",
                  transition: "all 0.2s ease"
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          )}

          {/* Clean Directory CTA Link */}
          <div>
            <Link
              href="/testimonials"
              style={{
                fontSize: "0.88rem",
                color: "var(--ink-700)",
                fontWeight: 700,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 20px",
                borderRadius: "9999px",
                background: "rgba(197, 168, 128, 0.12)",
                border: "1px solid rgba(197, 168, 128, 0.35)",
                transition: "all 0.2s ease"
              }}
            >
              <span>Explore Complete Directory of 325+ Client Stories</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
