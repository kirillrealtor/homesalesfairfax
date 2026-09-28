"use client";

import { useState } from "react";

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
            Sell Your Fairfax Home for Top Dollar.
          </h1>

          <p className="hero-subtitle-clean">
            Thinking of selling? Find out what qualified buyers will pay for your property. Book an in-home listing consultation with Kirill to protect your equity and sell with confidence.
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

          {/* Clean, quiet proof line */}
          <div style={{ marginTop: "22px", fontSize: "0.9rem", color: "#CBD5E1", fontWeight: 500, textShadow: "0 1px 6px rgba(0,0,0,0.4)" }}>
            Over $320M in Closed Sales • Top 1% Northern Virginia Team • Free In-Home Pricing Strategy
          </div>
        </>
      ) : (
        <>
          <h1 className="hero-title-main">
            Find Your Next Home in Fairfax.
          </h1>

          <p className="hero-subtitle-clean">
            Browse active homes updated every 15 minutes from Bright MLS. Book private home tours with zero sales pressure, or plan your move with Kirill.
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
