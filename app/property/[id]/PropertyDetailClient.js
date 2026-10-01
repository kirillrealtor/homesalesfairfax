"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ShowingModal from "../../components/ShowingModal";
import Link from "next/link";
import { FAIRFAX_LISTINGS } from "../../data/listings";

export default function PropertyDetailClient({ property }) {
  const [tourModalOpen, setTourModalOpen] = useState(false);

  return (
    <main>
      <div className="page-wrapper" style={{ paddingBottom: 0 }}>
        <Navbar onOpenTourModal={() => setTourModalOpen(true)} />
      </div>

      <div className="container" style={{ padding: "30px 20px 80px" }}>
        {/* Back Link */}
        <div style={{ marginBottom: "20px" }}>
          <Link href="/#listings" style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "0.88rem", color: "var(--ink-600)", fontWeight: 600 }}>
            ← Back to All Fairfax Listings
          </Link>
        </div>

        {/* Property Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "16px", marginBottom: "24px" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
              <span className="card-tag-status" style={{ position: "static" }}>
                <span className="dot-green"></span>
                <span>{property.status}</span>
              </span>
              <span style={{ fontSize: "0.85rem", color: "var(--ink-500)", fontWeight: 600 }}>
                MLS #{property.mlsNumber} • {property.neighborhood}
              </span>
            </div>
            <h1 style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--ink-950)", letterSpacing: "-0.02em" }}>
              {property.address}
            </h1>
            <p style={{ fontSize: "1.05rem", color: "var(--ink-500)" }}>
              {property.city}, {property.state} {property.zip}
            </p>
          </div>

          <div>
            <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--ink-950)", textAlign: "right" }}>
              Price Upon Request
            </div>
            <span style={{ fontSize: "0.85rem", color: "var(--accent-gold)", fontWeight: 700, display: "block", textAlign: "right" }}>
              Contact Elena for Details &amp; Showing
            </span>
          </div>
        </div>

        {/* Main Photo Showcase */}
        <div style={{ borderRadius: "var(--radius-card)", overflow: "hidden", height: "480px", marginBottom: "36px", position: "relative", boxShadow: "var(--shadow-card)" }}>
          <img 
            src={property.image} 
            alt={property.title} 
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        {/* 2-Column Layout: Details on Left, Booking Sidebar on Right */}
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: "40px", alignItems: "flex-start" }}>
          {/* Left Details */}
          <div>
            {/* Quick Specs Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px", background: "#FFFFFF", padding: "20px", borderRadius: "var(--radius-md)", border: "1px solid var(--ink-200)", marginBottom: "30px", textAlign: "center" }}>
              <div>
                <span style={{ display: "block", fontSize: "1.5rem", fontWeight: 800, color: "var(--ink-950)" }}>{property.beds}</span>
                <span style={{ fontSize: "0.8rem", color: "var(--ink-500)", textTransform: "uppercase" }}>Bedrooms</span>
              </div>
              <div>
                <span style={{ display: "block", fontSize: "1.5rem", fontWeight: 800, color: "var(--ink-950)" }}>{property.baths}</span>
                <span style={{ fontSize: "0.8rem", color: "var(--ink-500)", textTransform: "uppercase" }}>Bathrooms</span>
              </div>
              <div>
                <span style={{ display: "block", fontSize: "1.5rem", fontWeight: 800, color: "var(--ink-950)" }}>{property.sqft?.toLocaleString()}</span>
                <span style={{ fontSize: "0.8rem", color: "var(--ink-500)", textTransform: "uppercase" }}>Square Feet</span>
              </div>
              <div>
                <span style={{ display: "block", fontSize: "1.5rem", fontWeight: 800, color: "var(--ink-950)" }}>{property.yearBuilt}</span>
                <span style={{ fontSize: "0.8rem", color: "var(--ink-500)", textTransform: "uppercase" }}>Year Built</span>
              </div>
            </div>

            {/* Description */}
            <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "12px", color: "var(--ink-950)" }}>
              Property Overview
            </h2>
            <p style={{ fontSize: "1rem", color: "var(--ink-600)", lineHeight: "1.7", marginBottom: "30px" }}>
              {property.description}
            </p>

            {/* Key Features */}
            <h3 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: "14px", color: "var(--ink-950)" }}>
              Property Highlights &amp; Features
            </h3>
            <ul style={{ listStyle: "none", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "36px" }}>
              <li style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.92rem", color: "var(--ink-700)" }}>
                ✓ Parking: {property.garage}
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.92rem", color: "var(--ink-700)" }}>
                ✓ County: Fairfax County, VA
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.92rem", color: "var(--ink-700)" }}>
                ✓ Subdivision: {property.neighborhood}
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.92rem", color: "var(--ink-700)" }}>
                ✓ Showing Advisory: Elena (RE/MAX Allegiance / YSC)
              </li>
            </ul>

            {/* Schools & Educational Pyramid */}
            <div style={{ background: "var(--bg-subtle)", padding: "24px", borderRadius: "var(--radius-md)", border: "1px solid var(--ink-200)", marginBottom: "28px" }}>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 800, marginBottom: "8px", color: "var(--ink-950)" }}>Fairfax County Public Schools &amp; Education</h3>
              <p style={{ fontSize: "0.92rem", color: "var(--ink-700)", lineHeight: "1.7", margin: 0 }}>
                This property is located in an established Fairfax County residential corridor. Proximity to advanced academics, International Baccalaureate programs, and premier high school pyramids sustains strong long-term property equity. Contact Elena directly to verify exact current bus routes, boundary assignments, and enrollment details for this parcel.
              </p>
            </div>

            {/* Buyer Advocacy & Tactical Representation */}
            <div style={{ background: "#FFFFFF", padding: "28px", borderRadius: "var(--radius-md)", border: "1px solid var(--ink-200)", marginBottom: "28px" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 800, marginBottom: "12px", color: "var(--ink-950)" }}>
                Buyer Advocacy &amp; Negotiation Protection
              </h3>
              <p style={{ fontSize: "0.94rem", color: "var(--ink-700)", lineHeight: "1.75", marginBottom: "14px" }}>
                When purchasing residential real estate in Northern Virginia, having an elite fiduciary advocate in your corner is essential. Elena Gorbounova holds a Master of Laws (LL.M.) from American University's Washington College of Law and is an accredited Master Certified Negotiation Expert (MCNE®).
              </p>
              <p style={{ fontSize: "0.94rem", color: "var(--ink-700)", lineHeight: "1.75", margin: 0 }}>
                Our team meticulously audits NVAR residential sales contracts, home inspection contingencies, HOA covenants, and title commitments, ensuring buyers secure ideal price terms and contingency leverage before submitting formal offers.
              </p>
            </div>

            {/* Purchase & Touring FAQs */}
            <div style={{ background: "#FFFFFF", padding: "28px", borderRadius: "var(--radius-md)", border: "1px solid var(--ink-200)" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 800, marginBottom: "16px", color: "var(--ink-950)" }}>
                Private Showing &amp; Offer Consultation FAQ
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div>
                  <h4 style={{ fontSize: "0.98rem", fontWeight: 700, color: "var(--ink-950)", marginBottom: "4px" }}>
                    How do I schedule an in-person or virtual walkthrough for this home?
                  </h4>
                  <p style={{ fontSize: "0.9rem", color: "var(--ink-600)", lineHeight: "1.65", margin: 0 }}>
                    Simply call or text Elena Gorbounova at (703) 625-7888 or tap the SMS/WhatsApp buttons. We coordinate directly with the listing brokerage to confirm instant lockbox access and private showings around your personal schedule.
                  </p>
                </div>
                <div>
                  <h4 style={{ fontSize: "0.98rem", fontWeight: 700, color: "var(--ink-950)", marginBottom: "4px" }}>
                    Can you provide recent settled sales comparables for this neighborhood?
                  </h4>
                  <p style={{ fontSize: "0.9rem", color: "var(--ink-600)", lineHeight: "1.65", margin: 0 }}>
                    Yes. We generate comprehensive Bright MLS comparative market analysis (CMA) reports showing unadjusted and adjusted settled sales from the past 90 days, days on market, and list-to-sold ratios across this immediate subdivision.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Instant Showing Tour Sidebar */}
          <div style={{ background: "#FFFFFF", padding: "32px", borderRadius: "var(--radius-md)", border: "1px solid var(--ink-200)", boxShadow: "var(--shadow-card)", position: "sticky", top: "100px" }}>
            <span style={{ fontSize: "0.78rem", color: "var(--accent-gold)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Private Property Tour
            </span>
            <h3 style={{ fontSize: "1.5rem", fontWeight: 800, margin: "6px 0 12px", color: "var(--ink-950)" }}>
              Tour This Home in Person
            </h3>
            <p style={{ fontSize: "0.88rem", color: "var(--ink-500)", marginBottom: "20px" }}>
              Elena will coordinate your private walkthrough directly. No pushy sales calls.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "16px" }}>
              <a 
                href={`sms:+17036257888?body=Hi%20Elena,%20I'm%20interested%20in%20a%20private%20showing%20for%20${encodeURIComponent(property.address)}.`}
                className="btn-capsule-black"
                style={{ width: "100%", padding: "14px", fontSize: "0.95rem", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}
                title="Text Us via SMS"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
                Text Us: (703) 625-7888 &rarr;
              </a>

              <a 
                href="tel:7036257888" 
                className="btn-card-ask"
                style={{ width: "100%", padding: "12px", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", fontWeight: 700 }}
                title="Call Us Direct"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                Call Us: (703) 625-7888
              </a>

              <a 
                href={`https://wa.me/17036257888?text=Hi%20Elena,%20I'm%20interested%20in%20a%20private%20showing%20for%20${encodeURIComponent(property.address)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-card-ask"
                style={{ width: "100%", padding: "12px", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", fontWeight: 600, background: "#FFFFFF" }}
              >
                WhatsApp Us Direct
              </a>
            </div>

            <div style={{ marginTop: "18px", paddingTop: "14px", borderTop: "1px solid var(--ink-200)", fontSize: "0.82rem", color: "var(--ink-500)", textAlign: "center" }}>
              ⚡ Direct agent communication • Instant lockbox &amp; tour access
            </div>
          </div>
        </div>

        {/* Other Featured Listings */}
        <div style={{ marginTop: "64px", borderTop: "1px solid var(--ink-200)", paddingTop: "40px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px", flexWrap: "wrap", gap: "10px" }}>
            <div>
              <span style={{ fontSize: "0.8rem", color: "var(--accent-gold)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                Active Portfolio
              </span>
              <h3 style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--ink-950)", margin: "4px 0 0" }}>
                Explore More Featured Fairfax Listings
              </h3>
            </div>
            <Link href="/#listings" style={{ fontSize: "0.9rem", color: "var(--accent-gold-hover)", fontWeight: 700 }}>
              View All Listings &rarr;
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
            {FAIRFAX_LISTINGS.filter(p => p.id !== property.id).map((other) => (
              <Link
                key={other.id}
                href={`/property/${other.id}`}
                style={{
                  background: "#FFFFFF",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid var(--ink-200)",
                  overflow: "hidden",
                  textDecoration: "none",
                  color: "inherit",
                  boxShadow: "var(--shadow-card)",
                  transition: "transform 0.15s ease"
                }}
              >
                <div style={{ height: "180px", overflow: "hidden", position: "relative" }}>
                  <img
                    src={other.image}
                    alt={other.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    loading="lazy"
                  />
                  <div style={{ position: "absolute", bottom: "8px", left: "8px", background: "rgba(15,23,42,0.85)", color: "#fff", padding: "3px 8px", borderRadius: "6px", fontSize: "0.75rem", fontWeight: 700 }}>
                    {other.neighborhood}
                  </div>
                </div>
                <div style={{ padding: "16px" }}>
                  <strong style={{ fontSize: "1.05rem", color: "var(--ink-950)", display: "block" }}>{other.address}</strong>
                  <span style={{ fontSize: "0.82rem", color: "var(--ink-500)", display: "block", marginTop: "2px" }}>{other.city}, VA • {other.beds} Beds • {other.baths} Baths</span>
                  <span style={{ fontSize: "0.82rem", color: "var(--accent-gold)", fontWeight: 700, display: "block", marginTop: "8px" }}>
                    View Property Details &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />

      <ShowingModal 
        property={property} 
        isOpen={tourModalOpen} 
        onClose={() => setTourModalOpen(false)} 
      />
    </main>
  );
}
