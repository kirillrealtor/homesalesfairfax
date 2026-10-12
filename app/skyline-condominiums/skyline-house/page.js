import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Skyline House - Elena Gorbounova - Your True Skyline Expert",
  description: "Skyline House, Falls Church, 22041 built in 1979 consists of 556 units in two angled towers on 7.8 acres with unobstructed views.",
  alternates: {
    canonical: "https://www.homesalesfairfax.com/skyline-condominiums/skyline-house",
  },
};

export default function SkylineHousePage() {
  return (
    <main>
      <div className="page-wrapper" style={{ paddingBottom: 0 }}>
        <Navbar />
      </div>

      <div className="title-module-wrap page-title-module-custom" style={{ background: "#F8FAFC", borderBottom: "1px solid var(--ink-200)", padding: "28px 0" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <h1 style={{ fontSize: "1.8rem", fontWeight: 800, margin: 0, color: "var(--ink-950)" }}>
            Skyline House
          </h1>
          <div style={{ fontSize: "0.86rem", color: "var(--ink-500)" }}>
            <Link href="/" style={{ color: "var(--ink-600)", textDecoration: "none" }}>Home</Link>
            {" / "}
            <Link href="/skyline-condominiums" style={{ color: "var(--ink-600)", textDecoration: "none" }}>Skyline Condominiums</Link>
            {" / "}
            <span style={{ color: "var(--ink-950)", fontWeight: 600 }}>Skyline House</span>
          </div>
        </div>
      </div>

      <div className="container" style={{ padding: "60px 20px", maxWidth: "900px" }}>
        <div style={{ background: "#FFFFFF", borderRadius: "16px", border: "1px solid var(--ink-200)", padding: "40px 36px", boxShadow: "0 4px 20px rgba(0,0,0,0.04)" }}>
          <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "#DC2830", textTransform: "uppercase", letterSpacing: "0.06em", display: "block", marginBottom: "8px" }}>
            ✦ Unobstructed Views • 7.8-Acre Grounds
          </span>

          <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "var(--ink-950)", marginBottom: "20px" }}>
            About Skyline House
          </h2>

          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "var(--ink-800)", marginBottom: "28px" }}>
            Skyline House, Falls Church, 22041 was built in 1979 and consists of 556 units in two towers that do not face each other, which provides residents with unobstructed views from 17 stories. Property located on 7.8 acres.
          </p>

          <div style={{
            background: "var(--bg-subtle)",
            borderRadius: "12px",
            padding: "24px",
            marginBottom: "32px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "16px",
            fontSize: "0.92rem",
            color: "var(--ink-700)"
          }}>
            <div><strong>Location:</strong> Falls Church, VA 22041</div>
            <div><strong>Parcel:</strong> 7.8 Private Acres</div>
            <div><strong>Towers:</strong> 2 Non-Facing Towers</div>
            <div><strong>Floors:</strong> 17 Stories</div>
            <div><strong>Total Units:</strong> 556 Condominiums</div>
            <div><strong>Year Built:</strong> 1979</div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px", borderTop: "1px solid var(--ink-200)", paddingTop: "24px" }}>
            <Link
              href="/skyline-condominiums"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                color: "#DC2830",
                fontWeight: 700,
                fontSize: "0.95rem",
                textDecoration: "none"
              }}
            >
              ← Go back to main Skyline Condominiums page
            </Link>

            <a
              href="tel:7036257888"
              style={{
                backgroundColor: "#DC2830",
                color: "#FFFFFF",
                padding: "11px 22px",
                borderRadius: "6px",
                fontSize: "0.85rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.04em",
                textDecoration: "none"
              }}
            >
              Contact Elena: (703) 625-7888
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
