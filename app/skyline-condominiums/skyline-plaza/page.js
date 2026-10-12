import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Skyline Plaza- Elena Gorbounova - Your True Skyline Expert",
  description: "Skyline Plaza, Falls Church, 22041 located at Rt 7 and S. George Mason Dr. Two towers, 26 floors, 957 units.",
  alternates: {
    canonical: "https://www.homesalesfairfax.com/skyline-condominiums/skyline-plaza",
  },
};

export default function SkylinePlazaPage() {
  return (
    <main>
      <div className="page-wrapper" style={{ paddingBottom: 0 }}>
        <Navbar />
      </div>

      <div className="title-module-wrap page-title-module-custom" style={{ background: "#F8FAFC", borderBottom: "1px solid var(--ink-200)", padding: "28px 0" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <h1 style={{ fontSize: "1.8rem", fontWeight: 800, margin: 0, color: "var(--ink-950)" }}>
            Skyline Plaza
          </h1>
          <div style={{ fontSize: "0.86rem", color: "var(--ink-500)" }}>
            <Link href="/" style={{ color: "var(--ink-600)", textDecoration: "none" }}>Home</Link>
            {" / "}
            <Link href="/skyline-condominiums" style={{ color: "var(--ink-600)", textDecoration: "none" }}>Skyline Condominiums</Link>
            {" / "}
            <span style={{ color: "var(--ink-950)", fontWeight: 600 }}>Skyline Plaza</span>
          </div>
        </div>
      </div>

      <div className="container" style={{ padding: "60px 20px", maxWidth: "900px" }}>
        <div style={{ background: "#FFFFFF", borderRadius: "16px", border: "1px solid var(--ink-200)", padding: "40px 36px", boxShadow: "0 4px 20px rgba(0,0,0,0.04)" }}>
          <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "#DC2830", textTransform: "uppercase", letterSpacing: "0.06em", display: "block", marginBottom: "8px" }}>
            ✦ Landmark High-Rise • Prime Route 7 Access
          </span>

          <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "var(--ink-950)", marginBottom: "20px" }}>
            About Skyline Plaza
          </h2>

          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "var(--ink-800)", marginBottom: "28px" }}>
            Skyline Plaza, Falls Church, 22041 is located at the intersection of Rt 7 (King St / Leesburg Pike) and S. George Mason Dr (3701-3705 George Mason Dr. Falls Church VA 22041). Its construction began in 1973 and finished in 1979. It consists of two towers, 26 floors, and 957 units. This building is located in Falls Church VA about 7 miles from Reagan Airport; 5 miles from Pentagon; and close to I-395 / 495 / Rt 50.
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
            <div><strong>Location:</strong> 3701–3705 S George Mason Dr, Falls Church, VA 22041</div>
            <div><strong>Intersection:</strong> Rt 7 (King St / Leesburg Pike) &amp; S George Mason Dr</div>
            <div><strong>Towers:</strong> 2 Landmark Towers</div>
            <div><strong>Floors:</strong> 26 Stories</div>
            <div><strong>Total Units:</strong> 957 Condominiums</div>
            <div><strong>Built:</strong> 1973–1979</div>
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
