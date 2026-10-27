"use client";

import Link from "next/link";

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
              Welcome to the iconic Skyline Subdivision situated in Falls Church, Virginia, just across the Potomac River from Washington, D.C. Positioned merely five miles from the Pentagon and seven miles from Reagan National Airport, this landmark high-rise enclave provides unmatched regional convenience enveloped by serene, mature parkland.
            </p>
            <p className="featured-condo-text">
              Pioneered by master developer Charles E. Smith in the early 1970s within the historic Bailey&apos;s Crossroads corridor, Skyline delivers an all-inclusive vertical community. Comprising Skyline Plaza, Skyline Square, and Skyline House, residents enjoy seamless access to dining, shopping, outdoor recreation, and direct transit corridors right outside their front door.
            </p>
            <Link
              href="/skyline-condominiums"
              className="featured-condo-btn"
              title="Explore Skyline Condominiums Residences and Community Guide"
            >
              EXPLORE RESIDENCES &amp; LISTINGS
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
              Northampton Place stands as a premier 16-story luxury condominium tower comprising 275 refined residences along the prestigious South Columbia Pike corridor in Alexandria, Virginia. The building welcomes residents with an imposing marble and granite foyer, round-the-clock executive concierge services, an expansive fitness center, a billiards lounge, and private hospitality suites.
            </p>
            <p className="featured-condo-text">
              Backed by state-of-the-art building infrastructure and an exceptional management team, Northampton Place offers year-round resort living moments from Historic Old Town Alexandria, Crystal City, the Pentagon, and downtown Washington, D.C. Premium community amenities include a heated swimming pool, a landscaped private courtyard with barbecue dining, and secure garage parking.
            </p>
            <Link
              href="/northampton-place-condominiums"
              className="featured-condo-btn"
              title="Explore Northampton Place Condominiums Residences and Community Guide"
            >
              EXPLORE RESIDENCES &amp; LISTINGS
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
