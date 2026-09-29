"use client";

import { useState } from "react";
import { FAIRFAX_LISTINGS } from "../data/listings";

export default function ListingsSection({ searchFilters, onSelectPropertyForTour }) {
  const [activeTab, setActiveTab] = useState("all");

  const filteredListings = FAIRFAX_LISTINGS.filter((item) => {
    // Tab filtering
    if (activeTab === "single-family" && item.propertyType !== "Single Family") return false;
    if (activeTab === "townhome" && item.propertyType !== "Townhome") return false;
    if (activeTab === "condo" && item.propertyType !== "Condo") return false;

    // Search filters if applied
    if (searchFilters && searchFilters.neighborhood && searchFilters.neighborhood !== "all") {
      const q = searchFilters.neighborhood.toLowerCase();
      const match = 
        item.neighborhood.toLowerCase().includes(q) ||
        item.address.toLowerCase().includes(q) ||
        item.zip.includes(q) ||
        item.city.toLowerCase().includes(q);
      if (!match) return false;
    }

    return true;
  });

  return (
    <section id="listings" className="content-section">
      <div className="container">
        <div className="section-head-clean">
          <span className="section-pretitle">Active Inventory &amp; Buyer Demand</span>
          <h2 className="section-title-bold">Active Fairfax County Home Sales</h2>
          <p className="section-lead-text">
            See how Elena markets properties across Northern Virginia. Browse current MLS listings, view sale prices, or call us / text us for private off-market access.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="filter-pills-row" style={{ marginBottom: "36px" }}>
          {[
            { label: `All Fairfax Homes (${FAIRFAX_LISTINGS.length})`, value: "all" },
            { label: "Single Family", value: "single-family" },
            { label: "Townhomes", value: "townhome" },
            { label: "Condominiums", value: "condo" }
          ].map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`filter-pill-btn ${activeTab === tab.value ? "active" : ""}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 3 Column Grid */}
        <div className="properties-3col">
          {filteredListings.length > 0 ? (
            filteredListings.map((property) => (
              <article key={property.id} className="property-card-clean">
                <div className="card-top-img-wrap">
                  <img 
                    src={property.image} 
                    alt={property.title} 
                    className="card-img-element"
                    loading="lazy"
                  />
                  <div className="card-tag-status">
                    <span className="dot-green"></span>
                    <span>{property.status}</span>
                  </div>
                  <div className="card-tag-area">
                    {property.neighborhood}
                  </div>
                </div>

                <div className="card-body-clean">
                  <div className="card-price-headline">
                    <span className="price-big">{property.priceFormatted}</span>
                    <span className="property-badge-type">{property.propertyType}</span>
                  </div>

                  <h3 className="card-street-name">{property.address}</h3>
                  <p className="card-city-zip">
                    {property.city}, {property.state} {property.zip} • MLS #{property.mlsNumber}
                  </p>

                  {property.highlightBadge && (
                    <div style={{
                      display: "inline-block",
                      background: "rgba(184, 142, 82, 0.1)",
                      border: "1px solid rgba(184, 142, 82, 0.25)",
                      color: "var(--accent-gold-hover)",
                      padding: "3px 10px",
                      borderRadius: "6px",
                      fontSize: "0.76rem",
                      fontWeight: 700,
                      margin: "4px 0 12px"
                    }}>
                      ✦ {property.highlightBadge}
                    </div>
                  )}

                  <div className="card-specs-row">
                    <div className="spec-entry">
                      <strong>{property.beds}</strong> <span>Beds</span>
                    </div>
                    <div className="spec-entry">
                      <strong>{property.baths}</strong> <span>Baths</span>
                    </div>
                    <div className="spec-entry">
                      <strong>{property.sqft.toLocaleString()}</strong> <span>SqFt</span>
                    </div>
                    <div className="spec-entry" style={{ marginLeft: "auto" }}>
                      <span>{property.garage}</span>
                    </div>
                  </div>

                  <p className="card-description-text">
                    {property.description}
                  </p>

                  <div style={{ fontSize: "0.8rem", color: "var(--ink-500)", marginBottom: "14px", display: "flex", alignItems: "center", gap: "6px" }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    <span>Showing Contact: <strong>{property.showingAgent}</strong></span>
                  </div>

                  <div className="card-btns-grid">
                    <button 
                      onClick={() => onSelectPropertyForTour(property)} 
                      className="btn-card-tour"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                      Schedule Tour
                    </button>

                    <a 
                      href={`sms:+17036257888?body=Hi%20Elena,%20I'm%20interested%20in%20a%20private%20showing%20for%20${encodeURIComponent(property.address)}.`}
                      className="btn-card-ask"
                      title="Text Us directly for lockbox or private showing"
                    >
                      Text Us: (703) 625-7888
                    </a>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div style={{ gridColumn: "1 / -1", textAlign: "center", padding: "50px 20px" }}>
              <h3 style={{ marginBottom: "10px", fontSize: "1.4rem" }}>No listings matched this area filter</h3>
              <p style={{ marginBottom: "18px", color: "var(--ink-500)" }}>Reset filter to view all active Fairfax properties currently on the market.</p>
              <button onClick={() => setActiveTab("all")} className="btn-capsule-black">
                View All Available Properties
              </button>
            </div>
          )}
        </div>

        <div style={{ marginTop: "40px", textAlign: "center", fontSize: "0.9rem", color: "var(--ink-600)", fontWeight: 500 }}>
          Direct Bright MLS IDX Integration. Information deemed reliable but not guaranteed. Equal Housing Opportunity.
        </div>
      </div>
    </section>
  );
}
