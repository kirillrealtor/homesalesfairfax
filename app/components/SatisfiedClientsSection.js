"use client";

import Link from "next/link";

export default function SatisfiedClientsSection() {
  return (
    <section className="satisfied-social-proof-section" aria-label="Client Satisfaction and Reviews">
      <div className="satisfied-social-proof-container">
        <h2 className="satisfied-social-proof-title">
          100&apos;s of satisfied buyers and sellers
        </h2>

        <p className="satisfied-social-proof-quote">
          &ldquo;Working with Elena is an absolute masterclass in client advocacy. Her in-depth market expertise, proactive communication, and strategic negotiation skills ensure every hurdle is resolved before it ever impacts closing. Elena consistently goes above and beyond to protect her clients&apos; interests and deliver exceptional outcomes. We recommend her without reservation to anyone navigating Northern Virginia real estate.&rdquo;
        </p>

        <div className="satisfied-social-proof-actions">
          <Link
            href="/testimonials"
            className="satisfied-btn-testimonials"
            title="Read Elena's Testimonials"
          >
            ELENA&apos;S TESTIMONIALS
          </Link>
          <a
            href="https://www.zillow.com/profile/zuser20150407173742126/"
            target="_blank"
            rel="noopener noreferrer"
            className="satisfied-btn-zillow"
            title="Read Elena's 5-Star Reviews on Zillow"
          >
            ELENA&apos;S ZILLOW REVIEWS
          </a>
        </div>
      </div>
    </section>
  );
}
