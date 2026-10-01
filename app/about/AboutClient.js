"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export default function AboutClient() {
  const faqs = [
    {
      q: "What distinguishes Elena Gorbounova from other Northern Virginia real estate agents?",
      a: "Elena combines an 18-year scholarly background as a university professor with a Master of Laws (LL.M.) from American University's Washington College of Law and the elite Master Certified Negotiation Expert (MCNE®) designation held by less than 1% of agents nationwide. Her legal acumen and tactical negotiation provide unmatched protection and financial leverage for clients."
    },
    {
      q: "What real estate credentials and designations does Elena Gorbounova hold?",
      a: "Elena is an Associate Broker, REALTOR®, Master Certified Negotiation Expert (MCNE®), and Graduate, REALTOR® Institute (GRI). She has been inducted into the RE/MAX Hall of Fame and Chairman's Club (Top 3% nationally), recognized in America's Top 100 Real Estate Agents (Top 1% nationwide), and honored as a Lifetime NVAR Top Producer."
    },
    {
      q: "Which geographic areas and subdivisions in Northern Virginia does Elena specialize in?",
      a: "Elena specializes across Fairfax County and Northern Virginia, including Fairfax City, Oakton, Vienna, McLean, Great Falls, Burke, Clifton, and Alexandria. She provides deep micro-market specialization for sought-after subdivisions including Mantua, Mosby Woods, Franklin Farm, and Kings Park West."
    },
    {
      q: "Which brokerage is Elena Gorbounova affiliated with?",
      a: "Elena is a Broker Associate with RE/MAX Allegiance and leads the YSC Real Estate Group, headquartered at 5100 Leesburg Pike, Suite 200, Alexandria, VA 22302."
    },
    {
      q: "How can buyers and sellers contact or schedule a consultation with Elena Gorbounova?",
      a: "Clients can reach Elena directly by calling or texting (703) 625-7888 or emailing ElenaYSC@gmail.com."
    }
  ];

  return (
    <main style={{ background: "#F8F9FA", minHeight: "100vh" }}>
      <div className="page-wrapper" style={{ paddingBottom: 0 }}>
        <Navbar />
      </div>

      {/* Breadcrumb Navigation */}
      <section style={{ maxWidth: "1380px", margin: "0 auto", padding: "18px 24px 0" }}>
        <nav aria-label="Breadcrumb" style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.85rem", color: "var(--ink-500)" }}>
          <Link href="/" style={{ color: "var(--ink-600)", textDecoration: "none" }}>Home</Link>
          <span>/</span>
          <span style={{ color: "var(--ink-950)", fontWeight: 600 }}>About Elena Gorbounova</span>
        </nav>
      </section>

      {/* Hero Profile Showcase */}
      <section style={{ maxWidth: "1380px", margin: "0 auto", padding: "32px 24px 64px" }}>
        <div style={{
          background: "#FFFFFF",
          borderRadius: "24px",
          border: "1px solid #E2E8F0",
          boxShadow: "0 10px 40px -10px rgba(15, 23, 42, 0.06)",
          padding: "48px 44px",
          display: "grid",
          gridTemplateColumns: "420px 1fr",
          gap: "56px",
          alignItems: "start"
        }}>
          {/* Left Column: Portrait & Verification Badges */}
          <div>
            <div style={{
              position: "relative",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 18px 36px -10px rgba(15, 23, 42, 0.18)",
              border: "1px solid #E2E8F0",
              background: "#F1F5F9"
            }}>
              <img
                src="/images/elena-portrait.jpg"
                alt="Elena Gorbounova - LL.M., Broker Associate, REALTOR®"
                width={1100}
                height={1380}
                fetchPriority="high"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  objectFit: "cover"
                }}
              />
              <div style={{
                position: "absolute",
                top: "16px",
                left: "16px",
                background: "rgba(15, 23, 42, 0.88)",
                backdropFilter: "blur(8px)",
                color: "#FFFFFF",
                padding: "6px 14px",
                borderRadius: "9999px",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px"
              }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#10B981" }}></span>
                Top 1% Agent in America
              </div>
            </div>

            {/* Official Accolades Insignia */}
            <div style={{
              marginTop: "24px",
              padding: "16px",
              background: "#F8FAFC",
              borderRadius: "14px",
              border: "1px solid #E2E8F0",
              textAlign: "center"
            }}>
              <img
                src="/images/elena-accolades.png"
                alt="Elena Gorbounova - Five Star Real Estate Agent & America's Top 100"
                width={600}
                height={120}
                loading="lazy"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  display: "block",
                  margin: "0 auto"
                }}
              />
              <p style={{ margin: "10px 0 0", fontSize: "0.78rem", color: "var(--ink-500)", fontWeight: 500 }}>
                Consecutive Five Star Winner 2021–2026 • America&apos;s Top 100
              </p>
            </div>

            {/* Quick Contact & Brokerage Box */}
            <div style={{
              marginTop: "24px",
              padding: "24px",
              background: "#FFFFFF",
              borderRadius: "16px",
              border: "1px solid #E2E8F0",
              fontSize: "0.9rem"
            }}>
              <div style={{ fontWeight: 800, color: "var(--ink-950)", fontSize: "1.02rem", marginBottom: "4px" }}>
                RE/MAX Allegiance
              </div>
              <div style={{ color: "var(--ink-500)", fontSize: "0.82rem", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 600 }}>
                YSC Real Estate Group
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px", color: "var(--ink-700)" }}>
                <a href="tel:7036257888" style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--ink-950)", fontWeight: 700, textDecoration: "none" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B88E52" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <span>Direct: (703) 625-7888</span>
                </a>
                <a href="tel:7038244800" style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--ink-700)", textDecoration: "none" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line></svg>
                  <span>Office: (703) 824-4800</span>
                </a>
                <a href="mailto:ElenaYSC@gmail.com" style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--ink-700)", textDecoration: "none" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B88E52" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  <span>ElenaYSC@gmail.com</span>
                </a>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginTop: "4px", fontSize: "0.82rem", color: "var(--ink-500)", lineHeight: "1.4" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: "2px" }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  <span>5100 Leesburg Pike, Suite 200, Alexandria, VA 22302</span>
                </div>
              </div>

              {/* Social Channels */}
              <div style={{ display: "flex", gap: "12px", marginTop: "18px", paddingTop: "16px", borderTop: "1px solid #F1F5F9" }}>
                <a href="https://www.youtube.com/c/ElenaGorbounova" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "0.8rem", color: "#DC2626", fontWeight: 600, textDecoration: "none" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  <span>YouTube</span>
                </a>
                <a href="https://www.linkedin.com/in/elenagorbounovaremax" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "0.8rem", color: "#0A66C2", fontWeight: 600, textDecoration: "none" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  <span>LinkedIn</span>
                </a>
                <a href="https://www.facebook.com/egorbounova" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "0.8rem", color: "#1877F2", fontWeight: 600, textDecoration: "none" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative, Accolades & Credentials */}
          <div>
            <div style={{
              display: "inline-block",
              background: "#F1F5F9",
              border: "1px solid #CBD5E1",
              borderRadius: "9999px",
              padding: "6px 16px",
              fontSize: "0.8rem",
              fontWeight: 700,
              color: "var(--ink-800)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "14px"
            }}>
              Top-Ranked Fairfax Real Estate Agents • Executive Profile
            </div>

            <h1 style={{
              fontFamily: "var(--font-main)",
              fontSize: "clamp(2.4rem, 4.5vw, 3.4rem)",
              fontWeight: 800,
              color: "var(--ink-950)",
              lineHeight: 1.15,
              marginBottom: "14px",
              letterSpacing: "-0.03em"
            }}>
              Elena Gorbounova
            </h1>

            <p style={{
              fontSize: "1.18rem",
              color: "var(--accent-gold)",
              fontWeight: 700,
              marginBottom: "28px",
              lineHeight: 1.45
            }}>
              Premier REALTOR® in Fairfax VA • Master of Laws (LL.M.) • Broker Associate • Master Certified Negotiation Expert (MCNE) • RE/MAX Hall of Fame
            </p>

            {/* Cortazzo 3-Dot Minimalist Divider */}
            <div style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "28px" }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--accent-gold)" }}></span>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--accent-gold)" }}></span>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--accent-gold)" }}></span>
            </div>

            {/* Core Stats Callout Bar */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "16px",
              background: "#F8FAFC",
              borderRadius: "16px",
              padding: "20px",
              border: "1px solid #E2E8F0",
              marginBottom: "28px"
            }}>
              <div>
                <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--ink-950)", lineHeight: 1.1 }}>Since 2006</div>
                <div style={{ fontSize: "0.78rem", color: "var(--ink-500)", marginTop: "4px", fontWeight: 600 }}>Serving NoVA</div>
              </div>
              <div>
                <div style={{ fontSize: "1.75rem", fontWeight: 800, color: "var(--accent-gold)", lineHeight: 1 }}>Top 1%</div>
                <div style={{ fontSize: "0.78rem", color: "var(--ink-500)", marginTop: "4px", fontWeight: 600 }}>America&apos;s Top 100</div>
              </div>
              <div>
                <div style={{ fontSize: "1.75rem", fontWeight: 800, color: "var(--ink-950)", lineHeight: 1 }}>Top 3%</div>
                <div style={{ fontSize: "0.78rem", color: "var(--ink-500)", marginTop: "4px", fontWeight: 600 }}>RE/MAX Nationally</div>
              </div>
              <div>
                <div style={{ fontSize: "1.75rem", fontWeight: 800, color: "var(--status-active)", lineHeight: 1 }}>325+</div>
                <div style={{ fontSize: "0.78rem", color: "var(--ink-500)", marginTop: "4px", fontWeight: 600 }}>5-Star Reviews</div>
              </div>
            </div>

            {/* AI Search & LLM Quick Facts Box - Optimized for Snippet Extraction */}
            <div style={{
              background: "#F8FAFC",
              borderRadius: "16px",
              border: "1px solid #E2E8F0",
              padding: "22px 24px",
              marginBottom: "32px"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                <span style={{ fontSize: "1rem" }}>📋</span>
                <span style={{ fontSize: "0.95rem", fontWeight: 800, color: "var(--ink-950)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  Executive Overview &amp; Practice Highlights
                </span>
              </div>
              <ul style={{
                margin: 0,
                paddingLeft: "20px",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "8px",
                fontSize: "0.9rem",
                color: "var(--ink-700)",
                lineHeight: 1.55
              }}>
                <li><strong>Designations:</strong> Broker Associate, REALTOR®, MCNE®, GRI</li>
                <li><strong>Legal Education:</strong> Master of Laws (LL.M.), American University WCL</li>
                <li><strong>Scholarly Foundation:</strong> 18-Year Former University Professor</li>
                <li><strong>Regional Experience:</strong> Serving Northern Virginia Since 2006</li>
                <li><strong>Sales Accomplishment:</strong> 400+ Properties Sold Across NoVA</li>
                <li><strong>National Standing:</strong> America&apos;s Top 100 Agents (Top 1% Nationwide)</li>
                <li><strong>Brokerage Affiliation:</strong> RE/MAX Allegiance • YSC Real Estate Group</li>
                <li><strong>Core Communities:</strong> Fairfax, Oakton, Vienna, Mantua, Franklin Farm</li>
              </ul>
            </div>

            {/* Semantic H2 to Maintain Strict Heading Hierarchy */}
            <h2 style={{
              fontSize: "1.55rem",
              fontWeight: 800,
              color: "var(--ink-950)",
              marginBottom: "16px",
              letterSpacing: "-0.02em"
            }}>
              Professional Background &amp; Advisory Standard
            </h2>

            {/* Editorial Narrative with High Readability & Bulleted Takeaways */}
            <div style={{ display: "flex", flexDirection: "column", gap: "22px", color: "var(--ink-700)", fontSize: "1rem", lineHeight: 1.7 }}>
              <p>
                <strong>Elena Gorbounova</strong> is a top real estate broker associate in Northern Virginia. For over 21 years, she has helped homeowners, attorneys, and local families sell and buy homes with complete confidence.
              </p>

              <p>
                Her philosophy is simple: <em>every client deserves expert advice, honest guidance, and top dollar for their home.</em>
              </p>

              {/* Sub-heading 1: Teaching & Global Background */}
              <div style={{ marginTop: "10px", background: "#F8FAFC", padding: "18px 20px", borderRadius: "14px", border: "1px solid #E2E8F0" }}>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--ink-950)", marginBottom: "8px" }}>
                  18 Years of Teaching &amp; Global Experience
                </h3>
                <p>
                  Before working in real estate, Elena spent <strong>18 years as a university professor</strong>. She taught classes, led academic research, and worked across Europe and Asia.
                </p>
                <ul style={{ margin: "10px 0 0", paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "6px", fontSize: "0.92rem" }}>
                  <li><strong>Clear Communication:</strong> Explains market data and contracts in simple terms.</li>
                  <li><strong>Global Reach:</strong> Connects with international buyers and relocations.</li>
                  <li><strong>Client-First Service:</strong> Focuses on your goals in every transaction.</li>
                </ul>
              </div>

              {/* Sub-heading 2: Legal Education */}
              <div style={{ marginTop: "10px", background: "#F8FAFC", padding: "18px 20px", borderRadius: "14px", border: "1px solid #E2E8F0" }}>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--ink-950)", marginBottom: "8px" }}>
                  Legal Degree: Master of Laws (LL.M.)
                </h3>
                <p>
                  Real estate sales involve binding legal agreements. To give her clients the best legal protection, Elena earned a <strong>Master of Laws (LL.M.) from American University Washington College of Law</strong>.
                </p>
                <ul style={{ margin: "10px 0 0", paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "6px", fontSize: "0.92rem" }}>
                  <li><strong>Contract Review:</strong> Checks every clause to protect your earnest money deposit.</li>
                  <li><strong>HOA &amp; Condo Audits:</strong> Spots hidden fees, special assessments, and budget deficits.</li>
                  <li><strong>Smooth Closings:</strong> Resolves inspection and title hurdles before they cause delays.</li>
                </ul>
              </div>

              {/* Sub-heading 3: Master Negotiation */}
              <div style={{ marginTop: "10px", background: "#F8FAFC", padding: "18px 20px", borderRadius: "14px", border: "1px solid #E2E8F0" }}>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--ink-950)", marginBottom: "8px" }}>
                  Master Certified Negotiation Expert (MCNE®)
                </h3>
                <p>
                  Less than 1% of agents in the nation hold the <strong>Master Certified Negotiation Expert (MCNE®)</strong> credential. Elena relies on proven market data and active negotiation tactics.
                </p>
                <ul style={{ margin: "10px 0 0", paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "6px", fontSize: "0.92rem" }}>
                  <li><strong>For Sellers:</strong> Creates bidding wars to sell homes above list price.</li>
                  <li><strong>For Buyers:</strong> Wins multiple-offer situations without overpaying.</li>
                  <li><strong>Appraisal Defense:</strong> Defends high sales prices directly with bank appraisers.</li>
                </ul>
              </div>

              {/* Sub-heading 4: Work Ethic */}
              <div style={{ marginTop: "10px", background: "#F8FAFC", padding: "18px 20px", borderRadius: "14px", border: "1px solid #E2E8F0" }}>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--ink-950)", marginBottom: "8px" }}>
                  Daily Athletic Discipline &amp; Direct Support
                </h3>
                <p>
                  Elena trains in the gym every day. Her physical stamina fuels a fast, dedicated work ethic. In Northern Virginia&apos;s fast market, her quick action helps clients win.
                </p>
                <ul style={{ margin: "10px 0 0", paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "6px", fontSize: "0.92rem" }}>
                  <li><strong>Direct Access:</strong> You always work directly with Elena, not a call center.</li>
                  <li><strong>Fast Response:</strong> Immediate replies to calls, texts, and emails 7 days a week.</li>
                  <li><strong>Full Support:</strong> Personal guidance from initial valuation to closing day.</li>
                </ul>
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
              alignItems: "center",
              marginTop: "40px",
              paddingTop: "28px",
              borderTop: "1px solid #E2E8F0"
            }}>
              <a href="/#sell" className="btn-capsule-black" style={{ padding: "14px 30px", fontSize: "0.98rem", textDecoration: "none" }}>
                Schedule Seller Consultation
              </a>
              <a href="tel:7036257888" className="btn-card-ask" style={{ padding: "13px 24px", fontSize: "0.95rem", display: "inline-flex", alignItems: "center", gap: "8px" }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                Call: (703) 625-7888
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Formal Credentials & Honors Grid */}
      <section style={{ maxWidth: "1380px", margin: "0 auto", padding: "0 24px 64px" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--accent-gold)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Proven Track Record of Distinction
          </span>
          <h2 style={{ fontSize: "2.3rem", fontWeight: 800, color: "var(--ink-950)", marginTop: "6px" }}>
            Credentials, Honors &amp; Designations
          </h2>
          <p style={{ color: "var(--ink-500)", maxWidth: "680px", margin: "10px auto 0", fontSize: "0.98rem" }}>
            Professional credentials and awards that recognize Elena among the top real estate brokers in Virginia.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(310px, 1fr))",
          gap: "24px"
        }}>
          {/* Card 1: LL.M. */}
          <div style={{ background: "#FFFFFF", padding: "30px", borderRadius: "18px", border: "1px solid #E2E8F0", boxShadow: "0 4px 20px -2px rgba(0,0,0,0.04)" }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "#FEF3C7", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B45309" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>
            </div>
            <h3 style={{ fontSize: "1.18rem", fontWeight: 800, color: "var(--ink-950)", marginBottom: "8px" }}>
              Master of Laws (LL.M.)
            </h3>
            <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--accent-gold)", marginBottom: "10px" }}>
              American University Washington College of Law
            </div>
            <p style={{ fontSize: "0.92rem", color: "var(--ink-600)", lineHeight: 1.6, margin: 0 }}>
              Advanced law degree focusing on contract review, property rights, and protecting client interests.
            </p>
          </div>

          {/* Card 2: MCNE */}
          <div style={{ background: "#FFFFFF", padding: "30px", borderRadius: "18px", border: "1px solid #E2E8F0", boxShadow: "0 4px 20px -2px rgba(0,0,0,0.04)" }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "#E0E7FF", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4338CA" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            </div>
            <h3 style={{ fontSize: "1.18rem", fontWeight: 800, color: "var(--ink-950)", marginBottom: "8px" }}>
              Master Certified Negotiation Expert (MCNE®)
            </h3>
            <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--accent-gold)", marginBottom: "10px" }}>
              Elite Top 1% Designation
            </div>
            <p style={{ fontSize: "0.92rem", color: "var(--ink-600)", lineHeight: 1.6, margin: 0 }}>
              Elite training in negotiation tactics, pricing psychology, and securing top dollar for sellers.
            </p>
          </div>

          {/* Card 3: Top 100 America */}
          <div style={{ background: "#FFFFFF", padding: "30px", borderRadius: "18px", border: "1px solid #E2E8F0", boxShadow: "0 4px 20px -2px rgba(0,0,0,0.04)" }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "#DCFCE7", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#15803D" strokeWidth="2"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
            </div>
            <h3 style={{ fontSize: "1.18rem", fontWeight: 800, color: "var(--ink-950)", marginBottom: "8px" }}>
              America&apos;s Top 100 Real Estate Agents
            </h3>
            <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--accent-gold)", marginBottom: "10px" }}>
              Top 1% Nationwide Peer Group
            </div>
            <p style={{ fontSize: "0.92rem", color: "var(--ink-600)", lineHeight: 1.6, margin: 0 }}>
              Recognized among the top 1% of agents nationwide for career sales volume and outstanding client reviews.
            </p>
          </div>

          {/* Card 4: RE/MAX Hall of Fame */}
          <div style={{ background: "#FFFFFF", padding: "30px", borderRadius: "18px", border: "1px solid #E2E8F0", boxShadow: "0 4px 20px -2px rgba(0,0,0,0.04)" }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "#FEE2E2", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B91C1C" strokeWidth="2"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.45 1-1 1H7v2h10v-2h-2c-.55 0-1-.45-1-1v-2.34"></path><path d="M6 4h12v7a6 6 0 0 1-12 0V4z"></path></svg>
            </div>
            <h3 style={{ fontSize: "1.18rem", fontWeight: 800, color: "var(--ink-950)", marginBottom: "8px" }}>
              RE/MAX Hall of Fame &amp; Chairman&apos;s Club
            </h3>
            <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--accent-gold)", marginBottom: "10px" }}>
              Top 3% of RE/MAX Agents in the U.S.
            </div>
            <p style={{ fontSize: "0.92rem", color: "var(--ink-600)", lineHeight: 1.6, margin: 0 }}>
              Honored for career sales volume, industry leadership, and exceptional results for clients.
            </p>
          </div>

          {/* Card 5: Lifetime NVAR Top Producer */}
          <div style={{ background: "#FFFFFF", padding: "30px", borderRadius: "18px", border: "1px solid #E2E8F0", boxShadow: "0 4px 20px -2px rgba(0,0,0,0.04)" }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "#EDE9FE", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6D28D9" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
            </div>
            <h3 style={{ fontSize: "1.18rem", fontWeight: 800, color: "var(--ink-950)", marginBottom: "8px" }}>
              Lifetime NVAR Top Producer
            </h3>
            <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--accent-gold)", marginBottom: "10px" }}>
              Northern Virginia Association of REALTORS®
            </div>
            <p style={{ fontSize: "0.92rem", color: "var(--ink-600)", lineHeight: 1.6, margin: 0 }}>
              Recognized for consistent multi-million dollar sales volume across Northern Virginia&apos;s top neighborhoods.
            </p>
          </div>

          {/* Card 6: GRI & Broker Associate */}
          <div style={{ background: "#FFFFFF", padding: "30px", borderRadius: "18px", border: "1px solid #E2E8F0", boxShadow: "0 4px 20px -2px rgba(0,0,0,0.04)" }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "#F3F4F6", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
            </div>
            <h3 style={{ fontSize: "1.18rem", fontWeight: 800, color: "var(--ink-950)", marginBottom: "8px" }}>
              GRI &amp; Associate Broker
            </h3>
            <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--accent-gold)", marginBottom: "10px" }}>
              Graduate, REALTOR® Institute
            </div>
            <p style={{ fontSize: "0.92rem", color: "var(--ink-600)", lineHeight: 1.6, margin: 0 }}>
              Highest level of real estate licensing with deep training in market analysis, finance, and contracts.
            </p>
          </div>
        </div>
      </section>


      {/* Verified Client Testimonials Highlight */}
      <section style={{ maxWidth: "1380px", margin: "0 auto", padding: "0 24px 64px" }}>
        <div style={{
          background: "#FFFFFF",
          borderRadius: "24px",
          border: "1px solid #E2E8F0",
          padding: "48px 44px"
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "20px", marginBottom: "36px" }}>
            <div>
              <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--accent-gold)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Client Endorsements &amp; Verified Reviews
              </span>
              <h2 style={{ fontSize: "2.2rem", fontWeight: 800, color: "var(--ink-950)", marginTop: "6px" }}>
                What Clients Say About Working with Elena
              </h2>
            </div>
            <Link href="/testimonials" className="btn-card-ask" style={{ padding: "10px 20px" }}>
              Read All 325+ Reviews →
            </Link>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "28px"
          }}>
            <div style={{ background: "#F8FAFC", borderRadius: "16px", padding: "28px", border: "1px solid #E2E8F0" }}>
              <div style={{ display: "flex", gap: "4px", color: "#F59E0B", marginBottom: "14px" }}>
                {"★★★★★"}
              </div>
              <p style={{ fontSize: "0.98rem", color: "var(--ink-800)", lineHeight: 1.7, fontStyle: "italic", marginBottom: "16px" }}>
                &ldquo;Elena&apos;s legal acumen and negotiation skills saved us tens of thousands on our purchase contract. She dissected the seller disclosures, identified critical title nuances, and guided us with complete poise. She is the fiercest advocate you could ever have in your corner.&rdquo;
              </p>
              <div style={{ fontWeight: 800, color: "var(--ink-950)", fontSize: "0.95rem" }}>Dr. Robert &amp; Sarah M.</div>
              <div style={{ fontSize: "0.8rem", color: "var(--ink-500)" }}>Verified Home Buyer • Fairfax, VA</div>
            </div>

            <div style={{ background: "#F8FAFC", borderRadius: "16px", padding: "28px", border: "1px solid #E2E8F0" }}>
              <div style={{ display: "flex", gap: "4px", color: "#F59E0B", marginBottom: "14px" }}>
                {"★★★★★"}
              </div>
              <p style={{ fontSize: "0.98rem", color: "var(--ink-800)", lineHeight: 1.7, fontStyle: "italic", marginBottom: "16px" }}>
                &ldquo;We listed our home with Elena after receiving her detailed subdivision market report. Her pricing strategy and staging recommendations led to 6 competitive offers within the first 48 hours, settling well above our original asking price. Unmatched energy and professionalism!&rdquo;
              </p>
              <div style={{ fontWeight: 800, color: "var(--ink-950)", fontSize: "0.95rem" }}>The Henderson Family</div>
              <div style={{ fontSize: "0.8rem", color: "var(--ink-500)" }}>Verified Home Seller • Northern Virginia</div>
            </div>

            <div style={{ background: "#F8FAFC", borderRadius: "16px", padding: "28px", border: "1px solid #E2E8F0" }}>
              <div style={{ display: "flex", gap: "4px", color: "#F59E0B", marginBottom: "14px" }}>
                {"★★★★★"}
              </div>
              <p style={{ fontSize: "0.98rem", color: "var(--ink-800)", lineHeight: 1.7, fontStyle: "italic", marginBottom: "16px" }}>
                &ldquo;Elena is on a completely different level than other agents. She answers calls within minutes, operates with absolute transparency, and will not stop until your goals are achieved. Her academic pedigree and legal training shine through in every email and negotiation.&rdquo;
              </p>
              <div style={{ fontWeight: 800, color: "var(--ink-950)", fontSize: "0.95rem" }}>Michael &amp; Christine K.</div>
              <div style={{ fontSize: "0.8rem", color: "var(--ink-500)" }}>Relocation Clients • Alexandria, VA</div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions (FAQ) Section - Optimized for AI Search & Featured Snippets */}
      <section style={{ maxWidth: "1380px", margin: "0 auto", padding: "0 24px 64px" }}>
        <div style={{
          background: "#FFFFFF",
          borderRadius: "24px",
          border: "1px solid #E2E8F0",
          boxShadow: "0 10px 40px -10px rgba(15, 23, 42, 0.04)",
          padding: "48px 44px"
        }}>
          <div style={{ marginBottom: "32px" }}>
            <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--accent-gold)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Direct Answers &amp; Advisory Intel
            </span>
            <h2 style={{ fontSize: "2.2rem", fontWeight: 800, color: "var(--ink-950)", marginTop: "6px" }}>
              Frequently Asked Questions About Elena Gorbounova
            </h2>
            <p style={{ color: "var(--ink-500)", maxWidth: "760px", marginTop: "8px", fontSize: "0.98rem" }}>
              Clear, structured answers about Elena&apos;s legal credentials, Master Negotiation certification, Northern Virginia coverage, and seller advisory methodology.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                style={{
                  background: "#F8FAFC",
                  borderRadius: "16px",
                  border: "1px solid #E2E8F0",
                  padding: "24px 28px"
                }}
              >
                <h3 style={{
                  fontSize: "1.1rem",
                  fontWeight: 800,
                  color: "var(--ink-950)",
                  marginBottom: "10px",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px"
                }}>
                  <span style={{ color: "var(--accent-gold)", fontSize: "1.1rem", flexShrink: 0 }}>Q:</span>
                  <span>{faq.q}</span>
                </h3>
                <p style={{
                  margin: 0,
                  fontSize: "0.95rem",
                  color: "var(--ink-700)",
                  lineHeight: 1.7,
                  paddingLeft: "26px"
                }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct In-Home Consultation / Evaluation Booking CTA */}
      <section style={{ maxWidth: "1380px", margin: "0 auto", padding: "0 24px 80px" }}>
        <div style={{
          background: "#FFFFFF",
          borderRadius: "24px",
          border: "1px solid #E2E8F0",
          boxShadow: "0 10px 40px -10px rgba(15, 23, 42, 0.06)",
          padding: "48px 44px",
          textAlign: "center"
        }}>
          <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--accent-gold)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Begin Your Real Estate Alliance
          </span>
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.6rem)", fontWeight: 800, color: "var(--ink-950)", margin: "8px 0 16px" }}>
            Connect Directly with Elena Gorbounova
          </h2>
          <p style={{ color: "var(--ink-600)", maxWidth: "680px", margin: "0 auto 36px", fontSize: "1.05rem", lineHeight: 1.7 }}>
            Whether you want to sell your home, find out its current market value, or tour homes for sale in Northern Virginia, Elena provides fast, direct guidance.
          </p>

          <div style={{
            display: "inline-flex",
            gap: "16px",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <a href="tel:7036257888" className="btn-capsule-black" style={{ padding: "16px 36px", fontSize: "1.02rem", display: "inline-flex", alignItems: "center", gap: "10px" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <span>Call Direct: (703) 625-7888</span>
            </a>
            <a href="/#sell" className="btn-card-ask" style={{ padding: "15px 30px", fontSize: "1rem", textDecoration: "none" }}>
              Book In-Home Consultation
            </a>
            <a href="mailto:ElenaYSC@gmail.com" className="btn-card-ask" style={{ padding: "15px 30px", fontSize: "1rem" }}>
              Email: ElenaYSC@gmail.com
            </a>
          </div>

          <p style={{ marginTop: "24px", fontSize: "0.85rem", color: "var(--ink-400)" }}>
            Licensed REALTOR® in the Commonwealth of Virginia • RE/MAX Allegiance • Equal Housing Opportunity
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
