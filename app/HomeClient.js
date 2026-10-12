"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "./components/Navbar";
import TrustStats from "./components/TrustStats";
import SellerAppointmentSection from "./components/SellerAppointmentSection";
import SkylineFeaturedSection from "./components/SkylineFeaturedSection";
import TestimonialsSection from "./components/TestimonialsSection";
import Footer from "./components/Footer";
import ShowingModal from "./components/ShowingModal";

export default function HomeClient() {
  const [searchFilters, setSearchFilters] = useState(null);
  const [tourModalOpen, setTourModalOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [sellerAddress, setSellerAddress] = useState("");

  const handlePropertyTour = (property) => {
    setSelectedProperty(property);
    setTourModalOpen(true);
  };

  const handleOpenGeneralTour = () => {
    setSelectedProperty(null);
    setTourModalOpen(true);
  };


  return (
    <main>
      <div className="page-wrapper" style={{ paddingBottom: 0 }}>
        <Navbar onOpenTourModal={handleOpenGeneralTour} />

        {/* Top Hero Image Banner: Fairfax, Tysons, and McLean */}
        <div className="home-top-hero-banner">
          <Link
            href="/fairfax-county-history-real-estate-landscape"
            target="_blank"
            rel="noopener noreferrer"
            className="home-top-hero-link"
            title="Fairfax County, Virginia: History, Neighborhoods and Real Estate Landscape"
          >
            <div className="home-top-hero-img-wrap">
              <img
                src="/images/Homepage.jpg"
                alt="Fairfax County, Virginia: History and Real Estate Landscape"
                className="home-top-hero-img"
                loading="eager"
                fetchPriority="high"
              />
              <div className="home-top-hero-overlay" />
              <div className="home-top-hero-badge">
                <span className="home-top-hero-badge-pill">
                  <svg className="home-top-hero-badge-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                  <span>Read about Fairfax</span>
                  <span className="home-top-hero-badge-arrow">→</span>
                </span>
              </div>
            </div>
          </Link>

          <Link
            href="/tysons-va-real-estate"
            target="_blank"
            rel="noopener noreferrer"
            className="home-top-hero-link"
            title="Tysons, VA Real Estate: The Complete 2026 Guide to Homes, Condos, and America’s Next Great City"
          >
            <div className="home-top-hero-img-wrap">
              <img
                src="/images/tysons.jpg"
                alt="Tysons, VA Real Estate: The Complete 2026 Guide to Homes, Condos, and America’s Next Great City"
                className="home-top-hero-img"
                loading="eager"
              />
              <div className="home-top-hero-overlay" />
              <div className="home-top-hero-badge">
                <span className="home-top-hero-badge-pill">
                  <svg className="home-top-hero-badge-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                  <span>Read about Tysons</span>
                  <span className="home-top-hero-badge-arrow">→</span>
                </span>
              </div>
            </div>
          </Link>

          <Link
            href="/mclean-va-real-estate-market"
            target="_blank"
            rel="noopener noreferrer"
            className="home-top-hero-link"
            title="McLean VA Real Estate Market: Trends, Schools & Outlook"
          >
            <div className="home-top-hero-img-wrap">
              <img
                src="/images/Mcleancounty.jpg"
                alt="McLean VA Real Estate Market: Trends, Schools & Outlook"
                className="home-top-hero-img"
                loading="eager"
              />
              <div className="home-top-hero-overlay" />
              <div className="home-top-hero-badge">
                <span className="home-top-hero-badge-pill">
                  <svg className="home-top-hero-badge-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                  <span>Read about McLean</span>
                  <span className="home-top-hero-badge-arrow">→</span>
                </span>
              </div>
            </div>
          </Link>

          <Link
            href="/vienna-va-real-estate"
            target="_blank"
            rel="noopener noreferrer"
            className="home-top-hero-link"
            title="Vienna, VA Real Estate: The Complete Guide to Homes, History, and Small-Town Charm"
          >
            <div className="home-top-hero-img-wrap">
              <img
                src="/images/vienna.jpg"
                alt="Vienna, VA Real Estate: The Complete Guide to Homes, History, and Small-Town Charm"
                className="home-top-hero-img"
                loading="eager"
              />
              <div className="home-top-hero-overlay" />
              <div className="home-top-hero-badge">
                <span className="home-top-hero-badge-pill">
                  <svg className="home-top-hero-badge-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                  <span>Read about Vienna</span>
                  <span className="home-top-hero-badge-arrow">→</span>
                </span>
              </div>
            </div>
          </Link>

          <Link
            href="/oakton-homes-for-sale"
            target="_blank"
            rel="noopener noreferrer"
            className="home-top-hero-link"
            title="Oakton, VA Real Estate: The Complete Guide to Wooded Acreage, Luxury Estates, and School Pyramids"
          >
            <div className="home-top-hero-img-wrap">
              <img
                src="/images/oakton.jpg"
                alt="Oakton, VA Real Estate: The Complete Guide to Wooded Acreage, Luxury Estates, and School Pyramids"
                className="home-top-hero-img"
                loading="eager"
              />
              <div className="home-top-hero-overlay" />
              <div className="home-top-hero-badge">
                <span className="home-top-hero-badge-pill">
                  <svg className="home-top-hero-badge-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                  <span>Read about Oakton</span>
                  <span className="home-top-hero-badge-arrow">→</span>
                </span>
              </div>
            </div>
          </Link>

          <Link
            href="/herndon-va-real-estate"
            target="_blank"
            rel="noopener noreferrer"
            className="home-top-hero-link"
            title="Herndon, VA Real Estate: The Definitive Guide to Historic Preservation, Zoning & the Dulles Tech Corridor"
          >
            <div className="home-top-hero-img-wrap">
              <img
                src="/images/herndon.jpg"
                alt="Herndon, VA Real Estate: The Definitive Guide to Historic Preservation, Zoning & the Dulles Tech Corridor"
                className="home-top-hero-img"
                loading="eager"
              />
              <div className="home-top-hero-overlay" />
              <div className="home-top-hero-badge">
                <span className="home-top-hero-badge-pill">
                  <svg className="home-top-hero-badge-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                  <span>Read about Herndon</span>
                  <span className="home-top-hero-badge-arrow">→</span>
                </span>
              </div>
            </div>
          </Link>

          <Link
            href="/chantilly-va-real-estate"
            target="_blank"
            rel="noopener noreferrer"
            className="home-top-hero-link"
            title="Chantilly, VA Real Estate: The Definitive Guide to Homes, Tech Corridors & Communities"
          >
            <div className="home-top-hero-img-wrap">
              <img
                src="/images/chantilly.jpg"
                alt="Chantilly, VA Real Estate: The Definitive Guide to Homes, Tech Corridors & Communities"
                className="home-top-hero-img"
                loading="eager"
              />
              <div className="home-top-hero-overlay" />
              <div className="home-top-hero-badge">
                <span className="home-top-hero-badge-pill">
                  <svg className="home-top-hero-badge-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                  <span>Read about Chantilly</span>
                  <span className="home-top-hero-badge-arrow">→</span>
                </span>
              </div>
            </div>
          </Link>

          <Link
            href="/centreville-va-real-estate"
            target="_blank"
            rel="noopener noreferrer"
            className="home-top-hero-link"
            title="Centreville, VA Real Estate: The Definitive Guide to Homes, PUDs & Bull Run Parkland"
          >
            <div className="home-top-hero-img-wrap">
              <img
                src="/images/centreville.jpg"
                alt="Centreville, VA Real Estate: The Definitive Guide to Homes, PUDs & Bull Run Parkland"
                className="home-top-hero-img"
                loading="eager"
              />
              <div className="home-top-hero-overlay" />
              <div className="home-top-hero-badge">
                <span className="home-top-hero-badge-pill">
                  <svg className="home-top-hero-badge-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                  <span>Read about Centreville</span>
                  <span className="home-top-hero-badge-arrow">→</span>
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <TrustStats />

      <SellerAppointmentSection prefilledAddress={sellerAddress} isH1={true} />

      <SkylineFeaturedSection />

      <TestimonialsSection />

      <Footer />

      <ShowingModal 
        property={selectedProperty} 
        isOpen={tourModalOpen} 
        onClose={() => setTourModalOpen(false)} 
      />
    </main>
  );
}
