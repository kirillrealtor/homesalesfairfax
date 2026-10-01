"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSearch from "./components/HeroSearch";
import TrustStats from "./components/TrustStats";
import ListingsSection from "./components/ListingsSection";
import HomeValuationTool from "./components/HomeValuationTool";
import SellerAppointmentSection from "./components/SellerAppointmentSection";
import NeighborhoodsSection from "./components/NeighborhoodsSection";
import AgentAuthority from "./components/AgentAuthority";
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

  const handleFilterNeighborhood = (neighborhoodName) => {
    setSearchFilters({
      neighborhood: neighborhoodName,
      propertyType: "all",
      priceRange: "all",
      beds: "all"
    });
    const el = document.getElementById("listings");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main>
      <div className="page-wrapper">
        <Navbar onOpenTourModal={handleOpenGeneralTour} />
        
        <HeroSearch 
          onSearch={setSearchFilters} 
          onOpenTourModal={handleOpenGeneralTour} 
          onSellerAddressSubmit={setSellerAddress}
          initialAddress={sellerAddress}
        />
      </div>

      <TrustStats />

      <SellerAppointmentSection prefilledAddress={sellerAddress} />

      <ListingsSection 
        searchFilters={searchFilters} 
        onSelectPropertyForTour={handlePropertyTour} 
      />

      <HomeValuationTool />

      <NeighborhoodsSection onFilterNeighborhood={handleFilterNeighborhood} />

      <SkylineFeaturedSection />

      <AgentAuthority onOpenTourModal={handleOpenGeneralTour} />

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
