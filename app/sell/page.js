import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SellerAppointmentSection from "../components/SellerAppointmentSection";
import HomeValuationTool from "../components/HomeValuationTool";

export const metadata = {
  title: "Sell Your Fairfax Home | Book an In-Home Listing Appointment | homesalesfairfax.com",
  description: "Schedule an in-home listing consultation with Kirill. Maximize your net proceeds in Fairfax County with our active pre-approved buyer network and top producer negotiation.",
  alternates: {
    canonical: "https://homesalesfairfax.com/sell",
  },
};

export default function SellPage() {
  return (
    <main>
      <div className="page-wrapper" style={{ paddingBottom: 0 }}>
        <Navbar />
      </div>

      <section className="container" style={{ padding: "40px 20px 20px", textAlign: "center" }}>
        <span className="section-pretitle">Fairfax County Home Sellers</span>
        <h1 className="hero-title-main" style={{ fontSize: "3.2rem", maxWidth: "880px", margin: "10px auto 16px" }}>
          Sell Your Fairfax Home for Top Dollar with Kirill
        </h1>
        <p className="hero-subtitle-clean" style={{ maxWidth: "700px" }}>
          Over $320 Million in closed sales across Northern Virginia. We connect your property with active local buyers. Enjoy professional staging, sharp pricing, and dedicated contract negotiation.
        </p>
      </section>

      <SellerAppointmentSection />

      <HomeValuationTool />

      <Footer />
    </main>
  );
}
