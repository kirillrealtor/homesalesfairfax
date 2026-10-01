"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar({ onOpenTourModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleBookClick = (e) => {
    if (onOpenTourModal) {
      e.preventDefault();
      onOpenTourModal();
    }
  };

  return (
    <header className="nav-header">
      {/* Left: Brand Group with RE/MAX & YSC Logo + Typography */}
      <Link href="/" className="nav-brand-group" aria-label="HomesalesFairfax Home">
        <img
          src="/images/logo-ysc-remax.png"
          alt="Your Skyline Connection - RE/MAX Allegiance"
          className="nav-brand-logo"
        />
        <div className="nav-brand-divider" aria-hidden="true" />
        <div className="nav-brand-text">
          <span className="brand-name">HomesalesFairfax</span>
        </div>
      </Link>

      {/* Center: Desktop Navigation Links (Strictly Single Line) */}
      <nav className="nav-menu-center" aria-label="Main Navigation">
        <Link href="/mortgage-calculator" className="nav-item-link">Calculator</Link>
        <Link href="/testimonials" className="nav-item-link">Reviews</Link>
        <Link href="/about" className="nav-item-link">About Elena</Link>
      </nav>

      {/* Right Action: Direct Phone, Sleek Capsule CTA & Mobile Hamburger */}
      <div className="nav-actions-group">
        <a href="tel:7036257888" className="nav-phone-link" title="Call Elena Gorbounova Direct">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          <span>(703) 625-7888</span>
        </a>

        {onOpenTourModal ? (
          <button
            type="button"
            onClick={onOpenTourModal}
            className="btn-capsule-black"
          >
            Book Listing Consultation
          </button>
        ) : (
          <Link
            href="/#sell"
            className="btn-capsule-black"
          >
            Book Listing Consultation
          </Link>
        )}

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className="nav-mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="nav-mobile-drawer" role="menu">
          <Link href="/" className="nav-mobile-link" onClick={() => setMobileMenuOpen(false)}>
            Home
          </Link>
          <Link href="/testimonials" className="nav-mobile-link" onClick={() => setMobileMenuOpen(false)}>
            Client Reviews (325+)
          </Link>
          <Link href="/about" className="nav-mobile-link" onClick={() => setMobileMenuOpen(false)}>
            About Elena
          </Link>
          <Link href="/mortgage-calculator" className="nav-mobile-link" onClick={() => setMobileMenuOpen(false)}>
            Mortgage Calculator
          </Link>

          <div style={{ borderTop: "1px solid #E2E8F0", margin: "6px 0", paddingTop: "12px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <a
              href="tel:7036257888"
              className="nav-mobile-link"
              style={{ display: "flex", alignItems: "center", gap: "8px", fontWeight: 700 }}
              onClick={() => setMobileMenuOpen(false)}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span>Call Direct: (703) 625-7888</span>
            </a>

            <a
              href="/#sell"
              className="btn-capsule-black"
              style={{ width: "100%", textAlign: "center" }}
              onClick={(e) => {
                setMobileMenuOpen(false);
                handleBookClick(e);
              }}
            >
              Book Appointment
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
