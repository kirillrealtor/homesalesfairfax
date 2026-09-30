"use client";

import { useState } from "react";
import Link from "next/link";

export default function HeroSearch({ onSearch, onOpenTourModal, onSellerAddressSubmit, initialAddress = "" }) {
  const [activeMode, setActiveMode] = useState("sell"); // "sell" is default per boss's business goal!
  const [sellerAddress, setSellerAddress] = useState(initialAddress);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeArea, setActiveArea] = useState("all");

  const handleSellerSubmit = (e) => {
    e.preventDefault();
    if (!sellerAddress.trim()) return;
    if (onSellerAddressSubmit) {
      onSellerAddressSubmit(sellerAddress);
    }
    const sellEl = document.getElementById("sell");
    if (sellEl) {
      sellEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch({
        neighborhood: activeArea === "all" ? searchTerm : activeArea,
        propertyType: "all",
        priceRange: "all",
        beds: "all"
      });
    }
    const listingsEl = document.getElementById("listings");
    if (listingsEl) {
      listingsEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handlePillClick = (areaName) => {
    setActiveArea(areaName);
    if (onSearch) {
      onSearch({
        neighborhood: areaName,
        propertyType: "all",
        priceRange: "all",
        beds: "all"
      });
    }
    const listingsEl = document.getElementById("listings");
    if (listingsEl) {
      listingsEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero-inset-card">
      {/* Dual Intent Mode Switcher (Sell vs Buy) */}
      <div>
        <div className="hero-mode-tabs">
          <button 
            type="button" 
            onClick={() => setActiveMode("sell")} 
            className={`hero-mode-btn ${activeMode === "sell" ? "active" : ""}`}
          >
            Sell My Home (Book Appointment)
          </button>
          <button 
            type="button" 
            onClick={() => setActiveMode("buy")} 
            className={`hero-mode-btn ${activeMode === "buy" ? "active" : ""}`}
          >
            Search Active MLS Homes
          </button>
        </div>
      </div>

      {activeMode === "sell" ? (
        <>
          <h1 className="hero-title-main">
            Hire Northern Virginia's Top Listing Team.
          </h1>

          <p className="hero-subtitle-clean">
            Thinking of selling? Over 400 properties closed with a 102.8% average list-to-sale ratio and 5.2 days absorption. Book an in-home listing consultation with Elena &amp; Kirill to maximize your net equity.
          </p>

          {/* Seller Address Input Box */}
          <form onSubmit={handleSellerSubmit} className="search-capsule-box" style={{ maxWidth: "720px" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" style={{ color: "var(--ink-400)", marginRight: "12px", flexShrink: 0 }}>
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <input 
              type="text"
              placeholder="Enter your property address..."
              value={sellerAddress}
              onChange={(e) => setSellerAddress(e.target.value)}
              className="search-input-field"
              required
            />
            <button type="submit" className="btn-search-pill" style={{ background: "var(--ink-950)", color: "#FFFFFF", flexShrink: 0 }}>
              Book Appointment &rarr;
            </button>
          </form>

          {/* Hyper-Local Divisions & Subdivisions Quick Links */}
          <div style={{ marginTop: "18px", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", flexWrap: "wrap" }}>
            <span style={{ fontSize: "0.78rem", color: "#CBD5E1", textTransform: "uppercase", fontWeight: 700, letterSpacing: "0.05em", marginRight: "4px" }}>
              Explore Divisions &amp; Subdivisions:
            </span>
            <Link href="/divisions/fairfax-county" style={{ background: "rgba(255,255,255,0.14)", backdropFilter: "blur(4px)", color: "#FFFFFF", padding: "4px 12px", borderRadius: "9999px", fontSize: "0.8rem", fontWeight: 600, textDecoration: "none", border: "1px solid rgba(255,255,255,0.25)" }}>
              Fairfax County
            </Link>
            <Link href="/divisions/city-of-fairfax" style={{ background: "rgba(255,255,255,0.14)", backdropFilter: "blur(4px)", color: "#FFFFFF", padding: "4px 12px", borderRadius: "9999px", fontSize: "0.8rem", fontWeight: 600, textDecoration: "none", border: "1px solid rgba(255,255,255,0.25)" }}>
              Fairfax City
            </Link>
            <Link href="/subdivisions/mantua" style={{ background: "rgba(255,255,255,0.14)", backdropFilter: "blur(4px)", color: "#FFFFFF", padding: "4px 12px", borderRadius: "9999px", fontSize: "0.8rem", fontWeight: 600, textDecoration: "none", border: "1px solid rgba(255,255,255,0.25)" }}>
              Mantua
            </Link>
            <Link href="/subdivisions/mosby-woods" style={{ background: "rgba(255,255,255,0.14)", backdropFilter: "blur(4px)", color: "#FFFFFF", padding: "4px 12px", borderRadius: "9999px", fontSize: "0.8rem", fontWeight: 600, textDecoration: "none", border: "1px solid rgba(255,255,255,0.25)" }}>
              Mosby Woods
            </Link>
            <Link href="/subdivisions/franklin-farm" style={{ background: "rgba(255,255,255,0.14)", backdropFilter: "blur(4px)", color: "#FFFFFF", padding: "4px 12px", borderRadius: "9999px", fontSize: "0.8rem", fontWeight: 600, textDecoration: "none", border: "1px solid rgba(255,255,255,0.25)" }}>
              Franklin Farm
            </Link>
            <Link href="/subdivisions/burke-centre" style={{ background: "rgba(255,255,255,0.14)", backdropFilter: "blur(4px)", color: "#FFFFFF", padding: "4px 12px", borderRadius: "9999px", fontSize: "0.8rem", fontWeight: 600, textDecoration: "none", border: "1px solid rgba(255,255,255,0.25)" }}>
              Burke Centre
            </Link>
            <Link href="/divisions" style={{ background: "rgba(197, 168, 128, 0.28)", color: "var(--accent-gold)", padding: "4px 12px", borderRadius: "9999px", fontSize: "0.8rem", fontWeight: 700, textDecoration: "none", border: "1px solid rgba(197, 168, 128, 0.45)" }}>
              All Divisions &rarr;
            </Link>
          </div>

          {/* Clean, quiet proof line */}
          <div style={{ marginTop: "18px", fontSize: "0.9rem", color: "#CBD5E1", fontWeight: 500, textShadow: "0 1px 6px rgba(0,0,0,0.4)" }}>
            400+ Properties Closed • Top 1% Northern Virginia Producers • Free In-Home Listing Strategy
          </div>
        </>
      ) : (
        <>
          <h1 className="hero-title-main">
            Find Your Next Home in Fairfax.
          </h1>

          <p className="hero-subtitle-clean">
            Browse active homes updated every 15 minutes from Bright MLS. Book private home tours with zero sales pressure, or plan your move with Elena.
          </p>

          {/* Sleek Capsule Search Bar */}
          <form onSubmit={handleSearchSubmit} className="search-capsule-box">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ color: "var(--ink-400)", marginRight: "12px", flexShrink: 0 }}>
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input 
              type="text"
              placeholder="City, neighborhood, ZIP, or address..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input-field"
            />
            <button type="submit" className="btn-search-pill" style={{ flexShrink: 0 }}>
              Search Homes
            </button>
          </form>

          {/* Quick Filter Area Pills */}
          <div className="filter-pills-row">
            {[
              { label: "All Fairfax Homes", value: "all" },
              { label: "Fairfax City (22030)", value: "Fairfax City" },
              { label: "Mosaic District (22031)", value: "Mosaic District" },
              { label: "Oakton Estates (22124)", value: "Oakton" },
              { label: "Burke & Lake Braddock (22015)", value: "Burke" },
              { label: "Falls Church & Skyline", value: "Skyline" }
            ].map((pill) => (
              <button
                key={pill.value}
                type="button"
                onClick={() => handlePillClick(pill.value)}
                className={`filter-pill-btn ${activeArea === pill.value ? "active" : ""}`}
              >
                {pill.label}
              </button>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
