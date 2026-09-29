"use client";

import Link from "next/link";

export default function Navbar({ onOpenTourModal }) {
  return (
    <header className="nav-header">
      {/* Left: Clean typography brand with Your Skyline Connection + RE/MAX logo */}
      <Link href="/" className="nav-brand-group" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
        <img
          src="/images/logo-ysc-remax.png"
          alt="Your Skyline Connection - RE/MAX Allegiance"
          style={{ height: "42px", width: "auto", display: "block" }}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span className="brand-name" style={{ lineHeight: 1.15 }}>
            HomesalesFairfax
          </span>
          <span style={{ fontSize: "0.66rem", color: "var(--ink-500)", fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase" }}>
            Elena Gorbounova • RE/MAX
          </span>
        </div>
      </Link>

      {/* Center: Clean minimalist navigation links */}
      <nav className="nav-menu-center">
        <Link href="/communities" className="nav-item-link">Communities</Link>
        <Link href="/about" className="nav-item-link">About Elena</Link>
        <Link href="/market-report" className="nav-item-link">Market Reports</Link>
        <Link href="/testimonials" className="nav-item-link">Reviews (325+)</Link>
        <Link href="/sell" className="nav-item-link">Sell Your Home</Link>
        <Link href="/home-valuation" className="nav-item-link">Home Valuation</Link>
        <a href="/#listings" className="nav-item-link">Active Homes</a>
      </nav>

      {/* Right Action: Direct Phone & Sleek Black Capsule Pill Button */}
      <div className="nav-actions-group">
        <a href="tel:7036257888" className="nav-phone-link" title="Call Us Direct">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          <span>(703) 625-7888</span>
        </a>

        <a href="/#sell" className="btn-capsule-black">
          Book Appointment
        </a>
      </div>
    </header>
  );
}
