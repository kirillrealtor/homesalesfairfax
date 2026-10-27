"use client";

import Link from "next/link";
import Image from "next/image";

export default function FeaturedCondosSection() {
  return (
    <section className="featured-condos-section" aria-label="Featured Northern Virginia Condominiums">
      <div className="featured-condos-container">
        {/* Card 1: Skyline Condominiums */}
        <div className="featured-condo-card">
          <div className="featured-condo-img-wrap">
            <img
              src="/images/skyline-condominiums.jpg"
              alt="Skyline Condominiums - Falls Church, VA"
              className="featured-condo-img"
              loading="lazy"
            />
          </div>

          <div className="featured-condo-content">
            <h2 className="featured-condo-title">
              Skyline Condominiums
            </h2>
            <p className="featured-condo-text">
              Welcome to Skyline Subdivision located in Falls Church, Virginia, across the Potomac River from Washington DC. It is only 5 miles from the Pentagon and 7 miles from Reagan National Airport. In the heart of Northern Virginia, it offers a convenient lifestyle in a serene surrounding.
            </p>
            <p className="featured-condo-text">
              Envisioned by developer Charles E. Smith in the early 1970s Skyline, situated in the historic Bailey&apos;s Crossroads section of Falls Church, Skyline Subdivision offers a total living environment with places to eat, shop, work, play and reside - all within an easy distance from your front door.
            </p>
            <Link
              href="/skyline-condominiums"
              className="featured-condo-btn"
              title="View Skyline Condominiums Floorplans and Listings"
            >
              VIEW FLOORPLANS AND LISTINGS
            </Link>
          </div>
        </div>

        {/* Card 2: Northampton Place Condominiums */}
        <div className="featured-condo-card">
          <div className="featured-condo-img-wrap">
            <img
              src="/images/northampton-place.jpg"
              alt="Northampton Place Condominiums - Alexandria, VA"
              className="featured-condo-img"
              loading="lazy"
            />
          </div>

          <div className="featured-condo-content">
            <h2 className="featured-condo-title">
              Northampton Place Condominiums
            </h2>
            <p className="featured-condo-text">
              NHP is a beautiful, 16 story, 275-unit condominium community located in Alexandria Virginia. Northampton Place boasts an elegant lobby with marble and granite finishes, a fitness center, billiards room and party room available for resident use twenty-four hours daily. It&apos;s state of the art building systems and professional management team keep the property and grounds in pristine condition year-round. If location is everything, Northampton Place has it all, perfectly located just outside of historic Old Town Alexandria and just minutes from Crystal City, the Pentagon, Pentagon City, and Washington, D.C. Other amenities include 24 h. concierge service, heated outdoor pool, gated courtyard with dining tables and charcoal grills, and underground parking.
            </p>
            <Link
              href="/northampton-place-condominiums"
              className="featured-condo-btn"
              title="View Northampton Place Condominiums Floorplans and Listings"
            >
              VIEW FLOORPLANS AND LISTINGS
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
