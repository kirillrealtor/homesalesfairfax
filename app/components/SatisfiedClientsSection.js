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
          &ldquo;Elena is a pleasure to work with. She is highly professional, extremely knowledgeable, effective, efficient, proactive and responsive. She is a tireless advocate for her clients&apos; interests and is open and honest in all her dealings. For me, she went above and beyond to overcome countless obstacles and hurdles to get the deal done. I would recommend her highly and without hesitation.&rdquo;
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
