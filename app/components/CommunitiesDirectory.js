"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { FAIRFAX_COMMUNITIES } from "../data/communities";

export default function CommunitiesDirectory() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredCard, setHoveredCard] = useState(null);

  const categories = [
    { id: "all", label: `All Communities (${FAIRFAX_COMMUNITIES.length})` },
    { id: "subdivisions", label: "High-Turnover Subdivisions (22030–22033)" },
    { id: "luxury", label: "Luxury Estates & Acreage" },
    { id: "urban", label: "Urban Walkable & Metro" },
    { id: "lake", label: "Park & Lake Communities" }
  ];

  const filtered = useMemo(() => {
    let list = FAIRFAX_COMMUNITIES;

    if (activeCategory !== "all") {
      list = list.filter(c => c.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(c => 
        c.name.toLowerCase().includes(q) ||
        c.cityState.toLowerCase().includes(q) ||
        c.zip.includes(q) ||
        c.schools.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q)
      );
    }

    return list;
  }, [activeCategory, searchQuery]);

  return (
    <div>
      {/* Search & Filter Toolbar */}
      <div style={{ maxWidth: "980px", margin: "0 auto 48px auto", textAlign: "center" }}>
        {/* Search Input */}
        <div style={{ position: "relative", maxWidth: "680px", margin: "0 auto 24px auto" }}>
          <input 
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search communities by name, ZIP code, or school pyramid (e.g. 'Mantua', '22030', 'Woodson')..."
            style={{
              width: "100%",
              padding: "16px 20px 16px 48px",
              fontSize: "0.98rem",
              borderRadius: "9999px",
              border: "1px solid var(--ink-300)",
              background: "#FFFFFF",
              color: "var(--ink-950)",
              boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
              outline: "none"
            }}
          />
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="var(--ink-400)" 
            strokeWidth="2"
            style={{ position: "absolute", left: "18px", top: "50%", transform: "translateY(-50%)" }}
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              style={{
                position: "absolute",
                right: "18px",
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
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center" }}>
          {categories.map(c => (
            <button
              key={c.id}
              onClick={() => setActiveCategory(c.id)}
              style={{
                padding: "9px 20px",
                borderRadius: "9999px",
                fontSize: "0.85rem",
                fontWeight: 600,
                cursor: "pointer",
                border: activeCategory === c.id ? "1px solid var(--ink-950)" : "1px solid var(--ink-200)",
                background: activeCategory === c.id ? "var(--ink-950)" : "#FFFFFF",
                color: activeCategory === c.id ? "#FFFFFF" : "var(--ink-700)",
                transition: "all 0.2s ease"
              }}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid var(--ink-200)", paddingBottom: "14px", marginBottom: "32px" }}>
        <div style={{ fontSize: "0.88rem", color: "var(--ink-600)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>
          Showing {filtered.length} of {FAIRFAX_COMMUNITIES.length} Communities
        </div>
        <div style={{ fontSize: "0.82rem", color: "var(--ink-500)" }}>
          Fairfax County &amp; Northern Virginia
        </div>
      </div>

      {/* Cortazzo-Style Area Cards Grid */}
      <div 
        className="community-cards-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "28px 24px",
          alignItems: "stretch"
        }}
      >
        {filtered.map((item) => {
          const isHovered = hoveredCard === item.id;

          return (
            <div 
              key={item.id}
              onMouseEnter={() => setHoveredCard(item.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.25s ease, opacity 0.25s ease",
                opacity: hoveredCard && hoveredCard !== item.id ? 0.75 : 1
              }}
            >
              <Link 
                href={item.href}
                style={{ textDecoration: "none", color: "inherit", display: "flex", flexDirection: "column", height: "100%" }}
              >
                {/* 4:3 Aspect Ratio Cinematic Cover Image Container */}
                <div style={{
                  position: "relative",
                  width: "100%",
                  paddingTop: "72%", /* ~4:3 Luxury Architectural Aspect Ratio */
                  borderRadius: "10px",
                  overflow: "hidden",
                  background: "#0F172A",
                  boxShadow: isHovered ? "0 14px 28px rgba(15, 23, 42, 0.16)" : "0 4px 12px rgba(15, 23, 42, 0.06)",
                  transition: "box-shadow 0.3s ease"
                }}>
                  {/* Photo with subtle scale zoom on hover */}
                  <img 
                    src={item.image} 
                    alt={item.name}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transform: isHovered ? "scale(1.06)" : "scale(1.0)",
                      transition: "transform 0.45s cubic-bezier(0.2, 0, 0.2, 1)"
                    }}
                  />

                  {/* Elegant Gradient Vignette Overlay */}
                  <div style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: item.imageTone,
                    transition: "opacity 0.3s ease",
                    opacity: isHovered ? 0.9 : 0.75
                  }} />

                  {/* Top Badge: Highlight Tag */}
                  <div style={{
                    position: "absolute",
                    top: "14px",
                    left: "14px",
                    background: "rgba(15, 23, 42, 0.75)",
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                    color: "#FFFFFF",
                    padding: "4px 10px",
                    borderRadius: "4px",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    border: "1px solid rgba(255, 255, 255, 0.2)"
                  }}>
                    {item.badge}
                  </div>

                  {/* Bottom Stats Overlay inside image */}
                  <div style={{
                    position: "absolute",
                    bottom: "12px",
                    left: "14px",
                    right: "14px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                    color: "#FFFFFF"
                  }}>
                    <div>
                      <span style={{ fontSize: "0.72rem", color: "#CBD5E1", textTransform: "uppercase", letterSpacing: "0.06em", display: "block", fontWeight: 600 }}>
                        Market Velocity
                      </span>
                      <strong style={{ fontSize: "1.1rem", fontWeight: 800, color: "#FFFFFF", letterSpacing: "-0.01em" }}>
                        High Seller Demand
                      </strong>
                    </div>

                    <span style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      background: "rgba(197, 168, 128, 0.9)",
                      color: "#0F172A",
                      padding: "3px 8px",
                      borderRadius: "3px"
                    }}>
                      {item.avgDOM} DOM
                    </span>
                  </div>
                </div>

                {/* Typography Block below image: Cortazzo Luxury Area Info */}
                <div style={{ paddingTop: "14px", paddingBottom: "8px", flexGrow: 1, display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "8px" }}>
                    <h3 style={{
                      fontSize: "1.25rem",
                      fontWeight: 800,
                      color: isHovered ? "var(--accent-gold-hover)" : "var(--ink-950)",
                      letterSpacing: "-0.015em",
                      margin: 0,
                      transition: "color 0.2s ease"
                    }}>
                      {item.name}
                    </h3>
                    <span style={{ fontSize: "0.82rem", fontWeight: 600, color: "var(--ink-500)" }}>
                      {item.zip}
                    </span>
                  </div>

                  <span style={{
                    fontSize: "0.84rem",
                    color: "var(--ink-600)",
                    fontWeight: 500,
                    marginTop: "3px",
                    display: "block"
                  }}>
                    {item.cityState} • {item.schools}
                  </span>

                  <p style={{
                    fontSize: "0.88rem",
                    color: "var(--ink-700)",
                    lineHeight: "1.55",
                    marginTop: "8px",
                    marginBottom: "14px",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden"
                  }}>
                    {item.description}
                  </p>

                  <div style={{
                    marginTop: "auto",
                    paddingTop: "10px",
                    borderTop: "1px solid var(--ink-100)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                  }}>
                    <span style={{
                      fontSize: "0.82rem",
                      fontWeight: 700,
                      color: isHovered ? "var(--accent-gold-hover)" : "var(--ink-900)",
                      letterSpacing: "0.02em",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px"
                    }}>
                      View Community &amp; Comps
                      <span style={{ transform: isHovered ? "translateX(4px)" : "translateX(0)", transition: "transform 0.2s ease" }}>&rarr;</span>
                    </span>
                    <span style={{
                      fontSize: "0.72rem",
                      fontWeight: 600,
                      color: "var(--ink-400)",
                      textTransform: "uppercase"
                    }}>
                      Bright MLS Comps
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div style={{ textAlign: "center", padding: "60px 20px", background: "#FFFFFF", borderRadius: "var(--radius-md)", border: "1px solid var(--ink-200)" }}>
          <h3 style={{ fontSize: "1.2rem", color: "var(--ink-900)", marginBottom: "8px" }}>No communities match your search</h3>
          <p style={{ color: "var(--ink-600)", marginBottom: "16px" }}>Try searching for a different neighborhood, ZIP code, or school pyramid.</p>
          <button 
            onClick={() => { setSearchQuery(""); setActiveCategory("all"); }}
            className="btn btn-outline"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}
