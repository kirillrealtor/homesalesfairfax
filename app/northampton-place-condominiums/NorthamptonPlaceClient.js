"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function NorthamptonPlaceClient() {
  const images = [
    {
      src: "/images/northampton/northampton-place-condominiums.jpg",
      alt: "Northampton Place Condominiums Exterior & Grand Portico - Alexandria VA"
    },
    {
      src: "/images/northampton/northampton-new-1.jpg",
      alt: "Northampton Place Luxury Marble & Granite Executive Lobby"
    },
    {
      src: "/images/northampton/northampton-new-2.jpg",
      alt: "Northampton Place Lobby Lounge & 24-Hour Concierge Desk"
    },
    {
      src: "/images/northampton/northampton-new-3.jpg",
      alt: "Northampton Place Resident Fitness Center & Cardio Equipment"
    },
    {
      src: "/images/northampton/northampton-new-4.jpg",
      alt: "Northampton Place Billiards Parlor & Game Room"
    },
    {
      src: "/images/northampton/northampton-new-5.jpg",
      alt: "Northampton Place Resident Social Party Room & Catering Bar"
    },
    {
      src: "/images/northampton/northampton-2.jpg",
      alt: "Northampton Place Heated Outdoor Swimming Pool & Sundeck"
    },
    {
      src: "/images/northampton/northampton-new-7.jpg",
      alt: "Northampton Place Private Gated Courtyard with Grills & Dining"
    },
    {
      src: "/images/northampton/northampton-new-6.jpg",
      alt: "Northampton Place Courtyard Terrace & Outdoor Seating"
    },
    {
      src: "/images/northampton/northampton-6.jpg",
      alt: "Northampton Place Tower Architecture & Balcony Views"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, images.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <main>
      <div className="page-wrapper" style={{ paddingBottom: 0 }}>
        <Navbar />
      </div>

      {/* Header Breadcrumb & Title */}
      <section className="container" style={{ padding: "40px 20px 24px", textAlign: "center", maxWidth: "980px" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "8px", fontSize: "0.85rem", color: "var(--ink-500)", marginBottom: "16px" }}>
          <Link href="/" style={{ color: "var(--ink-600)", textDecoration: "none" }}>Home</Link>
          <span>/</span>
          <span style={{ color: "var(--ink-950)", fontWeight: 600 }}>Northampton Place Condominiums</span>
        </div>

        <span className="section-pretitle">Alexandria, VA • 3110 S. Columbia Pike Corridor</span>
        <h1 className="hero-title-main" style={{ fontSize: "clamp(2.4rem, 4.5vw, 3.4rem)", margin: "10px auto 16px" }}>
          Northampton Place Condominiums
        </h1>
        <p className="hero-subtitle-clean" style={{ maxWidth: "780px", margin: "0 auto" }}>
          A distinguished 16-story luxury high-rise condominium community in Alexandria, Virginia—featuring 24-hour executive concierge, marble finishes, heated swimming pool, and pristine management.
        </p>
      </section>

      {/* Two-Column Showcase Section: Interactive Image Carousel + Monograph Text */}
      <section className="content-section" style={{ background: "#FFFFFF", borderTop: "1px solid var(--ink-200)", borderBottom: "1px solid var(--ink-200)", padding: "64px 0" }}>
        <div className="container">
          <div className="condo-showcase-grid">
            {/* Left Column: Image Carousel with 10 Photos */}
            <div
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              style={{
                position: "relative",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 10px 32px -6px rgba(15, 23, 42, 0.15)",
                border: "1px solid var(--ink-200)",
                background: "#0F172A"
              }}
            >
              <div style={{ position: "relative", width: "100%", height: "420px", overflow: "hidden" }}>
                <img
                  src={images[currentIndex].src}
                  alt={images[currentIndex].alt}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    transition: "opacity 0.4s ease"
                  }}
                />

                {/* Top Badge: City & Zip */}
                <div style={{
                  position: "absolute",
                  top: "16px",
                  left: "16px",
                  background: "rgba(15, 23, 42, 0.88)",
                  backdropFilter: "blur(6px)",
                  color: "#FFFFFF",
                  padding: "6px 14px",
                  borderRadius: "9999px",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase"
                }}>
                  Alexandria, VA • 22302
                </div>

                {/* Bottom Photo Counter */}
                <div style={{
                  position: "absolute",
                  bottom: "16px",
                  right: "16px",
                  background: "rgba(15, 23, 42, 0.82)",
                  color: "#FFFFFF",
                  padding: "4px 10px",
                  borderRadius: "6px",
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  letterSpacing: "0.04em"
                }}>
                  {currentIndex + 1} / {images.length}
                </div>

                {/* Prev / Next Arrows */}
                <button
                  onClick={handlePrev}
                  aria-label="Previous image"
                  style={{
                    position: "absolute",
                    left: "14px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "rgba(255, 255, 255, 0.9)",
                    border: "none",
                    borderRadius: "50%",
                    width: "42px",
                    height: "42px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                    color: "var(--ink-950)",
                    fontSize: "1.2rem",
                    transition: "all 0.15s ease"
                  }}
                >
                  &#10094;
                </button>

                <button
                  onClick={handleNext}
                  aria-label="Next image"
                  style={{
                    position: "absolute",
                    right: "14px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "rgba(255, 255, 255, 0.9)",
                    border: "none",
                    borderRadius: "50%",
                    width: "42px",
                    height: "42px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                    color: "var(--ink-950)",
                    fontSize: "1.2rem",
                    transition: "all 0.15s ease"
                  }}
                >
                  &#10095;
                </button>
              </div>

              {/* Dots Indicator */}
              <div style={{
                display: "flex",
                justifyContent: "center",
                gap: "6px",
                padding: "12px",
                background: "#0F172A"
              }}>
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    style={{
                      width: idx === currentIndex ? "22px" : "8px",
                      height: "8px",
                      borderRadius: "4px",
                      border: "none",
                      background: idx === currentIndex ? "#DC2830" : "rgba(255,255,255,0.35)",
                      cursor: "pointer",
                      padding: 0,
                      transition: "all 0.2s ease"
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Right Column: Exact Monograph Text from Live Site */}
            <div>
              <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--accent-gold)", letterSpacing: "0.08em", textTransform: "uppercase", display: "block", marginBottom: "8px" }}>
                ✦ Luxury Alexandria High-Rise Living
              </span>
              <h2 style={{ fontSize: "2.2rem", fontWeight: 800, color: "var(--ink-950)", marginBottom: "18px", lineHeight: "1.25" }}>
                About Northampton Place
              </h2>

              <p style={{ fontSize: "1.02rem", color: "var(--ink-700)", lineHeight: 1.75, marginBottom: "20px" }}>
                Northampton Place stands as a premier 16-story luxury condominium tower comprising 275 refined residences along the prestigious South Columbia Pike corridor in Alexandria, Virginia. The building welcomes residents with an imposing marble and granite foyer, round-the-clock executive concierge services, an expansive fitness center, a billiards lounge, and private hospitality suites.
              </p>

              <p style={{ fontSize: "1.02rem", color: "var(--ink-700)", lineHeight: 1.75, marginBottom: "20px" }}>
                Backed by state-of-the-art building infrastructure and an exceptional management team, Northampton Place maintains pristine condition throughout the year. The community offers seamless connectivity to Historic Old Town Alexandria, Crystal City, Amazon HQ2, the Pentagon, and downtown Washington, D.C.
              </p>

              <p style={{ fontSize: "1.02rem", color: "var(--ink-700)", lineHeight: 1.75, marginBottom: "28px" }}>
                Full-service lifestyle amenities include 24-hour concierge reception, a heated outdoor swimming pool, a landscaped private courtyard with barbecue dining stations, and secured underground garage parking.
              </p>


            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
