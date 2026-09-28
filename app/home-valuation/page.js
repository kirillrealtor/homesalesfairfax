import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomeValuationTool from "../components/HomeValuationTool";
import Link from "next/link";

export const metadata = {
  title: "Fairfax Home Valuation | Instant Market Value & Pricing Estimate | homesalesfairfax.com",
  description: "Get an instant computational home valuation for your Fairfax County property based on recent Bright MLS comparable sales with Kirill.",
  alternates: {
    canonical: "https://homesalesfairfax.com/home-valuation",
  },
};

export default function HomeValuationPage() {
  return (
    <main>
      <div className="page-wrapper" style={{ paddingBottom: 0 }}>
        <Navbar />
      </div>
      
      <section className="container" style={{ padding: "40px 20px 20px", textAlign: "center", maxWidth: "860px" }}>
        <span className="section-pretitle">Fairfax County Home Equity</span>
        <h1 className="hero-title-main" style={{ fontSize: "3.2rem", margin: "10px auto 16px" }}>
          Fairfax County Home Valuation
        </h1>
        <p className="hero-subtitle-clean" style={{ maxWidth: "700px" }}>
          See what your home is worth today based on recent neighborhood sales and active buyer demand.
        </p>
      </section>

      <HomeValuationTool />

      <section className="content-section" style={{ background: "var(--bg-page)" }}>
        <div className="container" style={{ maxWidth: "860px" }}>
          <h2 className="section-title-bold" style={{ fontSize: "2rem", marginBottom: "16px" }}>How Fairfax Homes Are Evaluated</h2>
          <p style={{ marginBottom: "16px", color: "var(--ink-700)", lineHeight: "1.7" }}>
            Online price tools often miss key details. They do not know about your remodeled kitchen, finished basement, or quiet cul-de-sac lot. They also overlook top-rated school boundaries like Woodson, Oakton, and Lake Braddock.
          </p>
          <p style={{ marginBottom: "28px", color: "var(--ink-700)", lineHeight: "1.7" }}>
            Kirill compares your home directly against verified Bright MLS sales. You get an accurate, honest price range so you can plan your next move with confidence.
          </p>
          <div style={{ textAlign: "center", marginTop: "32px" }}>
            <Link href="/" className="btn-capsule-black" style={{ padding: "12px 28px" }}>
              ← Return to Full Fairfax Portal
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
