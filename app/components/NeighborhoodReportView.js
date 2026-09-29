"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ShowingModal from "./ShowingModal";

export default function NeighborhoodReportView({ data }) {
  const [isPostcardScan, setIsPostcardScan] = useState(false);
  const [addressInput, setAddressInput] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (params.get("ref") === "postcard" || params.get("source") === "qr" || params.get("qr") === "true") {
        setIsPostcardScan(true);
      }
    }
  }, []);

  const internationalPhone = "17036257888";
  const displayPhone = "(703) 625-7888";
  const email = "ElenaYSC@gmail.com";

  const getCustomSms = () => {
    const addr = addressInput.trim() ? encodeURIComponent(addressInput.trim()) : `my%20${encodeURIComponent(data.name)}%20home`;
    return `sms:+${internationalPhone}?body=Hi%20Elena,%20I'm%20a%20homeowner%20in%20${encodeURIComponent(data.name)}%20(${data.zip}).%20Please%20send%20me%20a%20verified%20CMA%20valuation%20for%20${addr}.`;
  };

  const getCustomWhatsapp = () => {
    const addr = addressInput.trim() ? encodeURIComponent(addressInput.trim()) : `my%20${encodeURIComponent(data.name)}%20home`;
    return `https://wa.me/${internationalPhone}?text=Hi%20Elena,%20I'm%20a%20homeowner%20in%20${encodeURIComponent(data.name)}%20(${data.zip}).%20Please%20send%20me%20a%20verified%20CMA%20valuation%20for%20${addr}.`;
  };

  const getCustomMail = () => {
    const addr = addressInput.trim() ? addressInput.trim() : `My ${data.name} Home`;
    return `mailto:${email}?subject=${encodeURIComponent(data.name)}%20Market%20Report%20%26%20Home%20Valuation%20Request&body=Hi%20Elena,%0A%0AI%20am%20reviewing%20the%20${encodeURIComponent(data.name)}%20Market%20Report.%20I%20would%20like%20a%20verified%20pricing%20breakdown%20and%20sales%20comparables%20for%20my%20property:%0A%0AAddress:%20${encodeURIComponent(addr)}%0A%0AThank%20you!`;
  };

  return (
    <main>
      <div className="page-wrapper" style={{ paddingBottom: 0 }}>
        <Navbar onOpenTourModal={() => setModalOpen(true)} />
      </div>

      {/* Postcard Direct Mail Welcome Banner */}
      <div style={{ background: "#0F172A", color: "#FFFFFF", padding: "12px 20px", borderBottom: "1px solid rgba(197,168,128,0.3)" }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "10px", fontSize: "0.88rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ background: "rgba(197,168,128,0.2)", color: "var(--accent-gold)", padding: "3px 10px", borderRadius: "9999px", fontSize: "0.75rem", fontWeight: 800, letterSpacing: "0.06em", textTransform: "uppercase" }}>
              📬 Direct Mail Dossier
            </span>
            <span>
              {isPostcardScan ? (
                <strong>Postcard QR Verified: Welcome {data.name} Neighbor!</strong>
              ) : (
                <>Exclusive <strong>{data.name} (ZIP {data.zip})</strong> Monthly Real Estate &amp; Sales Comps Report</>
              )}
            </span>
          </div>

          <a 
            href={`sms:+${internationalPhone}?body=Hi%20Elena,%20I%20scanned%20the%20${encodeURIComponent(data.name)}%20market%20card.%20Can%20you%20send%20me%20recent%20comps%20for%20my%20street?`}
            style={{ color: "var(--accent-gold)", fontWeight: 700, textDecoration: "underline", fontSize: "0.85rem" }}
          >
            Text Elena for Street Comps &rarr;
          </a>
        </div>
      </div>

      {/* Hero Header */}
      <section className="container" style={{ padding: "44px 20px 32px", textAlign: "center", maxWidth: "920px" }}>
        <span className="section-pretitle">Hyper-Local Neighborhood Intelligence • ZIP {data.zip}</span>
        <h1 className="hero-title-main" style={{ fontSize: "3.2rem", margin: "10px auto 14px", lineHeight: "1.15" }}>
          {data.headline}
        </h1>
        <p className="hero-subtitle-clean" style={{ maxWidth: "760px", margin: "0 auto 24px" }}>
          {data.subheadline}. Real settled transactions from Bright MLS, median equity appreciation, and exact sales comparables.
        </p>

        {/* Postcard Greeting Box */}
        <div style={{ background: "rgba(197, 168, 128, 0.08)", border: "1px solid rgba(197, 168, 128, 0.25)", borderRadius: "14px", padding: "18px 24px", maxWidth: "780px", margin: "0 auto 28px", textAlign: "left", display: "flex", gap: "16px", alignItems: "flex-start" }}>
          <span style={{ fontSize: "1.6rem", lineHeight: "1" }}>🏡</span>
          <div>
            <strong style={{ color: "var(--ink-950)", fontSize: "0.95rem", display: "block", marginBottom: "4px" }}>
              Neighborhood Equity Alert • {data.name} Subdivision
            </strong>
            <p style={{ margin: 0, fontSize: "0.9rem", color: "var(--ink-700)", lineHeight: "1.6" }}>
              {data.postcardGreeting}
            </p>
          </div>
        </div>
      </section>

      {/* 4 Live Market Metrics Strip */}
      <section className="container" style={{ marginBottom: "48px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "18px" }}>
          <div style={{ background: "#FFFFFF", padding: "26px", borderRadius: "var(--radius-md)", border: "1px solid var(--ink-200)", boxShadow: "var(--shadow-card)", textAlign: "center" }}>
            <span style={{ fontSize: "0.78rem", color: "var(--ink-500)", textTransform: "uppercase", fontWeight: 700, letterSpacing: "0.05em" }}>Median Sold Benchmark</span>
            <div style={{ fontSize: "2.3rem", fontWeight: 800, color: "var(--ink-950)", margin: "6px 0", letterSpacing: "-0.02em" }}>{data.medianPrice}</div>
            <span style={{ fontSize: "0.82rem", color: "var(--status-active)", fontWeight: 700 }}>{data.priceChangeYoY} YoY Growth</span>
          </div>

          <div style={{ background: "#FFFFFF", padding: "26px", borderRadius: "var(--radius-md)", border: "1px solid var(--ink-200)", boxShadow: "var(--shadow-card)", textAlign: "center" }}>
            <span style={{ fontSize: "0.78rem", color: "var(--ink-500)", textTransform: "uppercase", fontWeight: 700, letterSpacing: "0.05em" }}>Days on Market (DOM)</span>
            <div style={{ fontSize: "2.3rem", fontWeight: 800, color: "var(--ink-950)", margin: "6px 0", letterSpacing: "-0.02em" }}>{data.avgDOM}</div>
            <span style={{ fontSize: "0.82rem", color: "var(--status-active)", fontWeight: 700 }}>Rapid Absorption Velocity</span>
          </div>

          <div style={{ background: "#FFFFFF", padding: "26px", borderRadius: "var(--radius-md)", border: "1px solid var(--ink-200)", boxShadow: "var(--shadow-card)", textAlign: "center" }}>
            <span style={{ fontSize: "0.78rem", color: "var(--ink-500)", textTransform: "uppercase", fontWeight: 700, letterSpacing: "0.05em" }}>Sale-to-List Ratio</span>
            <div style={{ fontSize: "2.3rem", fontWeight: 800, color: "var(--ink-950)", margin: "6px 0", letterSpacing: "-0.02em" }}>{data.listToSaleRatio}</div>
            <span style={{ fontSize: "0.82rem", color: "var(--status-active)", fontWeight: 700 }}>Above Asking Average</span>
          </div>

          <div style={{ background: "#FFFFFF", padding: "26px", borderRadius: "var(--radius-md)", border: "1px solid var(--ink-200)", boxShadow: "var(--shadow-card)", textAlign: "center" }}>
            <span style={{ fontSize: "0.78rem", color: "var(--ink-500)", textTransform: "uppercase", fontWeight: 700, letterSpacing: "0.05em" }}>Neighborhood Inventory</span>
            <div style={{ fontSize: "1.45rem", fontWeight: 800, color: "var(--ink-950)", margin: "12px 0 6px" }}>{data.activeInventoryMonths}</div>
            <span style={{ fontSize: "0.8rem", color: "var(--ink-500)", fontWeight: 600 }}>Active Pre-Approved Buyers Waiting</span>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <section className="container" style={{ marginBottom: "60px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: "36px", alignItems: "start" }}>
          
          {/* Left Column: Recent Closed Sales Table & Local Dynamics */}
          <div>
            {/* Closed Comps Table */}
            <div style={{ background: "#FFFFFF", padding: "32px", borderRadius: "var(--radius-card)", border: "1px solid var(--ink-200)", boxShadow: "var(--shadow-card)", marginBottom: "32px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", flexWrap: "wrap", gap: "10px" }}>
                <div>
                  <span style={{ fontSize: "0.78rem", color: "var(--accent-gold)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                    Verified Bright MLS Settled Records
                  </span>
                  <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--ink-950)", margin: "4px 0" }}>
                    Recent Closed Sales in {data.name}
                  </h3>
                </div>
                <span style={{ fontSize: "0.82rem", background: "var(--bg-subtle)", padding: "4px 12px", borderRadius: "9999px", color: "var(--ink-600)", fontWeight: 600 }}>
                  Subdivision Code: {data.subdivisionCode}
                </span>
              </div>

              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "0.92rem" }}>
                  <thead>
                    <tr style={{ borderBottom: "1.5px solid var(--ink-200)", color: "var(--ink-500)", textTransform: "uppercase", fontSize: "0.72rem", letterSpacing: "0.05em" }}>
                      <th style={{ padding: "10px 12px" }}>Street Address</th>
                      <th style={{ padding: "10px 12px" }}>Specs</th>
                      <th style={{ padding: "10px 12px" }}>List Price</th>
                      <th style={{ padding: "10px 12px" }}>Sold Price</th>
                      <th style={{ padding: "10px 12px" }}>DOM</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.recentComps.map((comp, idx) => (
                      <tr key={idx} style={{ borderBottom: "1px solid var(--ink-100)" }}>
                        <td style={{ padding: "14px 12px" }}>
                          <strong style={{ color: "var(--ink-950)", display: "block" }}>{comp.address}</strong>
                          <span style={{ fontSize: "0.78rem", color: "var(--ink-500)" }}>{comp.feature}</span>
                        </td>
                        <td style={{ padding: "14px 12px", color: "var(--ink-600)", whiteSpace: "nowrap" }}>
                          {comp.beds}b / {comp.baths}ba • {comp.sqft.toLocaleString()} sqft
                        </td>
                        <td style={{ padding: "14px 12px", color: "var(--ink-500)", textDecoration: "line-through", fontSize: "0.86rem" }}>
                          {comp.listPrice}
                        </td>
                        <td style={{ padding: "14px 12px" }}>
                          <span style={{ fontWeight: 800, color: "var(--ink-950)", fontSize: "1.05rem" }}>{comp.soldPrice}</span>
                          <span style={{ display: "block", fontSize: "0.75rem", color: "var(--status-active)", fontWeight: 700 }}>
                            {comp.saleToList} of list
                          </span>
                        </td>
                        <td style={{ padding: "14px 12px", color: "var(--status-active)", fontWeight: 700 }}>
                          {comp.daysOnMarket}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div style={{ marginTop: "20px", paddingTop: "14px", borderTop: "1px solid var(--ink-100)", fontSize: "0.82rem", color: "var(--ink-500)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "8px" }}>
                <span>✦ Bright MLS settled comp archives. Updated monthly.</span>
                <a href={getCustomSms()} style={{ color: "var(--ink-950)", fontWeight: 700, textDecoration: "underline" }}>
                  Request Full 24-Month Sales History &rarr;
                </a>
              </div>
            </div>

            {/* Hyper-Local Valuation Blueprint */}
            <div style={{ background: "#FFFFFF", padding: "32px", borderRadius: "var(--radius-card)", border: "1px solid var(--ink-200)", boxShadow: "var(--shadow-card)", marginBottom: "32px" }}>
              <span style={{ fontSize: "0.78rem", color: "var(--accent-gold)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                Subdivision Pricing Strategy
              </span>
              <h3 style={{ fontSize: "1.45rem", fontWeight: 800, color: "var(--ink-950)", margin: "4px 0 14px" }}>
                Why Automated Online Estimates Fail in {data.name}
              </h3>
              <p style={{ color: "var(--ink-700)", lineHeight: "1.7", fontSize: "0.95rem", marginBottom: "16px" }}>
                {data.sellerInsight}
              </p>
              <p style={{ color: "var(--ink-700)", lineHeight: "1.7", fontSize: "0.95rem", margin: 0 }}>
                {data.communityVibe}
              </p>
            </div>

            {/* School Pyramid Badge */}
            <div style={{ background: "var(--bg-subtle)", padding: "28px", borderRadius: "var(--radius-card)", border: "1px solid var(--ink-200)" }}>
              <span style={{ fontSize: "0.78rem", color: "var(--accent-gold)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                Fairfax County Public Schools Boundary
              </span>
              <h4 style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--ink-950)", margin: "4px 0 12px" }}>
                {data.name} School Pyramid &amp; Buyer Equity Driver
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.92rem", color: "var(--ink-700)" }}>
                <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ color: "var(--accent-gold)", fontWeight: 800 }}>✓</span>
                  <span><strong>Elementary:</strong> {data.schoolPyramid.elementary}</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ color: "var(--accent-gold)", fontWeight: 800 }}>✓</span>
                  <span><strong>Middle School:</strong> {data.schoolPyramid.middle}</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ color: "var(--accent-gold)", fontWeight: 800 }}>✓</span>
                  <span><strong>High School:</strong> {data.schoolPyramid.high}</span>
                </li>
              </ul>
              <span style={{ display: "block", fontSize: "0.82rem", color: "var(--ink-500)", marginTop: "14px" }}>
                Top school pyramids in Fairfax County consistently preserve 8–14% higher equity resilience during market shifts.
              </span>
            </div>
          </div>

          {/* Right Column: Instant "How Much Is My Home Worth?" Card */}
          <div style={{ position: "sticky", top: "100px" }}>
            <div style={{ background: "#FFFFFF", padding: "34px", borderRadius: "var(--radius-card)", border: "1.5px solid var(--ink-950)", boxShadow: "var(--shadow-card)" }}>
              <span style={{ background: "var(--ink-950)", color: "#FFFFFF", padding: "4px 12px", borderRadius: "9999px", fontSize: "0.75rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em", display: "inline-block", marginBottom: "14px" }}>
                ⚡ 1-Tap Homeowner Valuation
              </span>
              
              <h3 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--ink-950)", lineHeight: "1.2", marginBottom: "10px", letterSpacing: "-0.02em" }}>
                How Much Is Your {data.name} Home Worth Today?
              </h3>
              
              <p style={{ color: "var(--ink-600)", fontSize: "0.93rem", lineHeight: "1.6", marginBottom: "22px" }}>
                Don't rely on generic computer algorithms. Enter your address below or text Elena Gorbounova directly. She will pull the 5 most recent closed sales on your exact block and text you the verified comps analysis.
              </p>

              {/* Address Input Field */}
              <div style={{ marginBottom: "16px" }}>
                <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 700, color: "var(--ink-700)", textTransform: "uppercase", marginBottom: "6px" }}>
                  Your {data.name} Property Address:
                </label>
                <input 
                  type="text"
                  placeholder={`e.g. 1234 Street in ${data.name}...`}
                  value={addressInput}
                  onChange={(e) => setAddressInput(e.target.value)}
                  style={{ width: "100%", padding: "14px 16px", borderRadius: "10px", border: "1.5px solid var(--ink-300)", fontSize: "0.95rem", background: "var(--bg-page)", boxSizing: "border-box" }}
                />
              </div>

              {/* 4 Instant Actions (No Dead Web Forms) */}
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <a 
                  href={getCustomSms()} 
                  className="btn-capsule-black"
                  style={{ width: "100%", padding: "16px 20px", fontSize: "1rem", fontWeight: 700, textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", boxSizing: "border-box" }}
                  title="Text Elena via SMS"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                  <span>Text Elena for {data.name} Comps &rarr;</span>
                </a>

                <a 
                  href={getCustomWhatsapp()} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-card-ask"
                  style={{ width: "100%", padding: "13px 20px", fontSize: "0.95rem", fontWeight: 700, textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", background: "#FFFFFF", boxSizing: "border-box" }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67Z"/>
                  </svg>
                  <span>WhatsApp Elena ({displayPhone})</span>
                </a>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                  <a 
                    href={`tel:${internationalPhone}`} 
                    className="btn-card-ask"
                    style={{ textAlign: "center", padding: "12px", fontSize: "0.88rem", fontWeight: 700 }}
                  >
                    📞 Call Direct
                  </a>

                  <a 
                    href={getCustomMail()} 
                    className="btn-card-ask"
                    style={{ textAlign: "center", padding: "12px", fontSize: "0.88rem", fontWeight: 700 }}
                  >
                    ✉️ Email Elena
                  </a>
                </div>

                <Link 
                  href="/sell"
                  className="btn-capsule-black"
                  style={{ width: "100%", padding: "14px", fontSize: "0.92rem", fontWeight: 700, textAlign: "center", background: "#FFFFFF", color: "var(--ink-950)", border: "1.5px solid var(--ink-950)", marginTop: "6px", boxSizing: "border-box" }}
                >
                  Book In-Home Listing Appointment &rarr;
                </Link>
              </div>

              <div style={{ marginTop: "22px", paddingTop: "16px", borderTop: "1px solid var(--ink-200)", fontSize: "0.82rem", color: "var(--ink-600)", lineHeight: "1.6" }}>
                🔒 <strong>Zero sales pressure:</strong> You communicate straight with top producer Elena Gorbounova (RE/MAX Allegiance • YSC). No call centers or robo-dialers.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Fairfax Submarkets Strip */}
      <section className="container" style={{ marginBottom: "80px", paddingTop: "32px", borderTop: "1px solid var(--ink-200)" }}>
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <span className="section-pretitle">Fairfax County Hyper-Local Network</span>
          <h3 className="section-title-bold" style={{ fontSize: "1.8rem" }}>
            Explore Neighboring Fairfax Submarkets &amp; ZIP Reports
          </h3>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "18px" }}>
          <Link href="/mantua-real-estate" style={{ background: "#FFFFFF", padding: "20px", borderRadius: "12px", border: "1px solid var(--ink-200)", textDecoration: "none", color: "inherit", boxShadow: "var(--shadow-card)" }}>
            <strong style={{ display: "block", color: "var(--ink-950)", fontSize: "1.05rem" }}>Mantua (22031)</strong>
            <span style={{ fontSize: "0.82rem", color: "var(--ink-500)" }}>Median $995K • Woodson Pyramid</span>
          </Link>

          <Link href="/mosby-woods-market" style={{ background: "#FFFFFF", padding: "20px", borderRadius: "12px", border: "1px solid var(--ink-200)", textDecoration: "none", color: "inherit", boxShadow: "var(--shadow-card)" }}>
            <strong style={{ display: "block", color: "var(--ink-950)", fontSize: "1.05rem" }}>Mosby Woods (22030)</strong>
            <span style={{ fontSize: "0.82rem", color: "var(--ink-500)" }}>Median $865K • Walk to Old Town</span>
          </Link>

          <Link href="/franklin-farm-values" style={{ background: "#FFFFFF", padding: "20px", borderRadius: "12px", border: "1px solid var(--ink-200)", textDecoration: "none", color: "inherit", boxShadow: "var(--shadow-card)" }}>
            <strong style={{ display: "block", color: "var(--ink-950)", fontSize: "1.05rem" }}>Franklin Farm (22033)</strong>
            <span style={{ fontSize: "0.82rem", color: "var(--ink-500)" }}>Median $935K • Oakton / Chantilly</span>
          </Link>

          <Link href="/kings-park-west-real-estate" style={{ background: "#FFFFFF", padding: "20px", borderRadius: "12px", border: "1px solid var(--ink-200)", textDecoration: "none", color: "inherit", boxShadow: "var(--shadow-card)" }}>
            <strong style={{ display: "block", color: "var(--ink-950)", fontSize: "1.05rem" }}>Kings Park West (22032)</strong>
            <span style={{ fontSize: "0.82rem", color: "var(--ink-500)" }}>Median $825K • Robinson IB Pyramid</span>
          </Link>
        </div>
      </section>

      <Footer />

      <ShowingModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
      />
    </main>
  );
}
