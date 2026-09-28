"use client";

import Link from "next/link";

export default function Navbar({ onOpenTourModal }) {
  return (
    <header className="nav-header">
      {/* Left: Clean typography brand */}
      <Link href="/" className="nav-brand-group">
        <span className="brand-name">
          HomesalesFairfax
        </span>
      </Link>

      {/* Center: Clean minimalist navigation links */}
      <nav className="nav-menu-center">
        <a href="#listings" className="nav-item-link">Fairfax Listings</a>
        <a href="#sell" className="nav-item-link">Sell Your Home</a>
        <a href="#valuation" className="nav-item-link">Home Valuation</a>
        <a href="#neighborhoods" className="nav-item-link">Neighborhoods</a>
      </nav>

      {/* Right Action: Direct Phone & Sleek Black Capsule Pill Button */}
      <div className="nav-actions-group">
        <a href="tel:5712760986" className="nav-phone-link" title="Call Us Direct">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          <span>(571) 276-0986</span>
        </a>

        <a href="/#sell" className="btn-capsule-black">
          Book Appointment
        </a>
      </div>
    </header>
  );
}
