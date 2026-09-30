import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export const metadata = {
  title: "About Elena Gorbounova | Master of Laws (LL.M.), Broker Associate & Top 1% REALTOR®",
  description: "Meet Elena Gorbounova: Master of Laws (LL.M.), Master Certified Negotiation Expert (MCNE), 18-year former university professor, and Lifetime NVAR Top Producer delivering elite seller & buyer representation across Fairfax County and Northern Virginia.",
  alternates: {
    canonical: "https://homesalesfairfax.com/about",
  },
  openGraph: {
    title: "About Elena Gorbounova | Elite Northern Virginia Real Estate Advisory",
    description: "Legal precision, master negotiation, and 20+ years of dedicated market leadership across Fairfax County, VA.",
    url: "https://homesalesfairfax.com/about",
    siteName: "homesalesfairfax.com",
    locale: "en_US",
    type: "profile",
    images: [
      {
        url: "https://homesalesfairfax.com/images/elena-portrait.jpg",
        width: 1100,
        height: 1380,
        alt: "Elena Gorbounova - RE/MAX Allegiance Broker Associate",
      }
    ],
  }
};

export default function AboutPage() {
  const agentSchema = {
    "@context": "https://schema.org",
    "@type": ["Person", "RealEstateAgent"],
    "name": "Elena Gorbounova",
    "jobTitle": "Broker Associate, REALTOR®, Master Certified Negotiation Expert",
    "image": "https://homesalesfairfax.com/images/elena-portrait.jpg",
    "telephone": "+17036257888",
    "email": "ElenaYSC@gmail.com",
    "url": "https://homesalesfairfax.com/about",
    "worksFor": {
      "@type": "RealEstateAgent",
      "name": "RE/MAX Allegiance • YSC Real Estate Group",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "5100 Leesburg Pike, Suite 200",
        "addressLocality": "Alexandria",
        "addressRegion": "VA",
        "postalCode": "22302",
        "addressCountry": "US"
      }
    },
    "alumniOf": [
      {
        "@type": "CollegeOrUniversity",
        "name": "American University Washington College of Law",
        "award": "Master of Laws (LL.M.)"
      }
    ],
    "award": [
      "Top 1% Real Estate Agents in America (America's Top 100)",
      "Top 3% of ALL RE/MAX Agents in the United States",
      "RE/MAX Hall of Fame",
      "RE/MAX Chairman's Club",
      "RE/MAX Platinum Club",
      "Lifetime NVAR Top Producer",
      "Five Star Real Estate Agent Award (2021-2026)"
    ],
    "knowsAbout": [
      "Fairfax County Real Estate",
      "Residential Contract Law",
      "Real Estate Negotiation",
      "Home Valuation & Bright MLS Comps",
      "Mantua Real Estate",
      "Mosby Woods Real Estate",
      "Franklin Farm Real Estate",
      "Oakton Real Estate",
      "Clifton Luxury Estates"
    ],
    "sameAs": [
      "https://www.youtube.com/c/ElenaGorbounova",
      "https://www.linkedin.com/in/elenagorbounovaremax",
      "https://www.facebook.com/egorbounova",
      "https://www.yourskylineconnection.com/about-elena/"
    ]
  };

  return (
    <main style={{ background: "#F8F9FA", minHeight: "100vh" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(agentSchema) }}
      />

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
              Executive Profile &amp; Practice Philosophy
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
              Master of Laws (LL.M.) • Broker Associate • Master Certified Negotiation Expert (MCNE) • RE/MAX Hall of Fame
            </p>

            {/* Cortazzo 3-Dot Minimalist Divider */}
            <div style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "32px" }}>
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
              marginBottom: "36px"
            }}>
              <div>
                <div style={{ fontSize: "1.75rem", fontWeight: 800, color: "var(--ink-950)", lineHeight: 1 }}>20+</div>
                <div style={{ fontSize: "0.78rem", color: "var(--ink-500)", marginTop: "4px", fontWeight: 600 }}>Years in NoVA</div>
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

            {/* Deep Rephrased Editorial Narrative */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px", color: "var(--ink-700)", fontSize: "1.02rem", lineHeight: 1.8 }}>
              <p>
                In an era where real estate is frequently commoditized into impersonal algorithms and rushed transactions, <strong>Elena Gorbounova</strong> represents a rare and commanding standard of advisory excellence. For over two decades, Elena has served as the trusted advisor of choice for discerning homeowners, corporate executives, attorneys, and international families navigating the high-stakes property landscapes of Fairfax County and Northern Virginia.
              </p>

              <p>
                Her practice is constructed upon a singular, unwavering creed: <em>real estate representation is not a transactional service, but the strategic stewardship of a client’s most significant financial and emotional milestone.</em>
              </p>

              {/* Sub-heading 1: Academic Pedigree */}
              <div style={{ marginTop: "12px" }}>
                <h3 style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--ink-950)", marginBottom: "8px" }}>
                  An 18-Year Scholarly Foundation &amp; Global Worldview
                </h3>
                <p>
                  Elena’s analytical depth distinguishes her from the conventional real estate field. Prior to entering American residential real estate, she completed an illustrious <strong>18-year tenure as a Senior University Professor</strong> at a premier academic institution in Russia. Throughout her scholarly career, Elena lectured, conducted research, and traveled extensively across Europe, Asia, and Africa.
                </p>
                <p style={{ marginTop: "12px" }}>
                  This international immersion instilled a sophisticated mastery of cross-cultural diplomacy, demographic migration, and macroeconomic forces. In Northern Virginia—one of the most cosmopolitan, international, and intellectually rigorous metropolitan regions in the world—Elena’s ability to communicate with cultural fluidity and strategic empathy provides her clients with an invaluable competitive advantage.
                </p>
              </div>

              {/* Sub-heading 2: Legal Foundation */}
              <div style={{ marginTop: "12px" }}>
                <h3 style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--ink-950)", marginBottom: "8px" }}>
                  Forensic Legal Acumen: Master of Laws (LL.M.)
                </h3>
                <p>
                  Recognizing that residential property transactions are fundamentally binding legal covenants involving hundreds of thousands to millions of dollars in equity, Elena advanced her expertise by earning a <strong>Master of Laws (LL.M.) from American University&apos;s Washington College of Law</strong>. Her rigorous curriculum focused on complex United States legal frameworks, statutory interpretation, refugee and asylum policy, and contractual governance.
                </p>
                <p style={{ marginTop: "12px" }}>
                  This formidable legal training directly benefits her clients at every inflection point of the purchase and sale cycle. Whether dissecting complex HOA and condominium resale disclosures, drafting airtight escalation clauses, structuring creative financing terms, or resolving title defects, Elena operates with attorney-grade scrutiny. Her clients move forward with total certainty, shielded against latent liabilities and contractual ambiguities.
                </p>
              </div>

              {/* Sub-heading 3: Negotiation Excellence */}
              <div style={{ marginTop: "12px" }}>
                <h3 style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--ink-950)", marginBottom: "8px" }}>
                  Master Certified Negotiation Expert (MCNE®)
                </h3>
                <p>
                  Less than 1% of licensed REALTORS® nationwide hold the prestigious <strong>Master Certified Negotiation Expert (MCNE®)</strong> designation. Elena does not approach negotiations with passive hope; she enters negotiations armed with tactical game theory, psychological framing, and exhaustive market data.
                </p>
                <p style={{ marginTop: "12px" }}>
                  For home sellers, this means positioning properties to orchestrate competitive bidding environments, defending appraisal benchmarks, and capturing the absolute apex of market value. For buyers, it translates to winning fiercely contested multiple-offer situations without recklessly overpaying or relinquishing critical statutory protections.
                </p>
              </div>

              {/* Sub-heading 4: Fitness & Tenacity */}
              <div style={{ marginTop: "12px" }}>
                <h3 style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--ink-950)", marginBottom: "8px" }}>
                  Athletic Discipline, Unyielding Stamina &amp; 24/7 Advocacy
                </h3>
                <p>
                  Elena’s professional tenacity is fueled by a profound personal commitment to health and physical fitness. A dedicated daily gym athlete, she approaches her real estate practice with the same relentless focus, stamina, and mental clarity that define elite conditioning.
                </p>
                <p style={{ marginTop: "12px" }}>
                  In Northern Virginia&apos;s fast-moving market—where high-demand homes in Mantua, Mosby Woods, or Franklin Farm can secure multiple contracts within 48 hours—Elena’s tireless energy ensures lightning-fast responsiveness. When you partner with Elena, you work directly with her. You never encounter call centers, inexperienced assistants, or passing-the-buck excuses. Your telephone calls are answered, your inquiries are prioritized, and your interests are defended around the clock.
                </p>
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
              <Link href="/sell" className="btn-capsule-black" style={{ padding: "14px 30px", fontSize: "0.98rem" }}>
                Schedule Seller Consultation
              </Link>
              <Link href="/home-valuation" className="btn-card-ask" style={{ padding: "13px 24px", fontSize: "0.95rem" }}>
                Request Home Valuation
              </Link>
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
            The formal certifications and regional accolades that validate Elena&apos;s standing among the upper echelon of real estate practitioners in the Commonwealth of Virginia.
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
              Specialized postgraduate legal mastery in U.S. jurisprudence, contractual construction, statutory compliance, and risk containment.
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
              Advanced training in multi-party bargaining, behavioral economics, competitive concession strategy, and high-value transactional closing.
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
              Independently verified for career transaction sales volume, community integrity, and unparalleled client satisfaction ratings.
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
              Awarded for enduring career sales excellence, benchmark production, and superior dedication to real estate industry standards.
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
              Recognizing multiple consecutive years of multi-million dollar settled volume across Northern Virginia&apos;s most competitive submarkets.
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
              Highest level of real estate professional licensing and in-depth training in market research, taxation, technology, and real estate finance.
            </p>
          </div>
        </div>
      </section>

      {/* Hyper-Local Fairfax County & Subdivision Mastery */}
      <section style={{ maxWidth: "1380px", margin: "0 auto", padding: "0 24px 64px" }}>
        <div style={{
          background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
          borderRadius: "24px",
          padding: "56px 48px",
          color: "#FFFFFF"
        }}>
          <div style={{ maxWidth: "820px" }}>
            <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--accent-gold)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Hyper-Local Micro-Market Focus
            </span>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.7rem)", fontWeight: 800, color: "#FFFFFF", margin: "10px 0 18px", lineHeight: 1.2 }}>
              Why Hyper-Local Subdivision Intel Wins for Sellers
            </h2>
            <p style={{ fontSize: "1.05rem", color: "#CBD5E1", lineHeight: 1.7, marginBottom: "32px" }}>
              Broad city-wide statistics obscure true property value. In Fairfax County, market dynamics vary by individual streets, high school pyramids, and micro-subdivisions. Elena structures targeted market campaigns and custom direct-mail reports tailored directly to the community:
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "20px"
          }}>
            <Link href="/mantua-real-estate" style={{ textDecoration: "none" }}>
              <div style={{ background: "rgba(255, 255, 255, 0.06)", border: "1px solid rgba(255, 255, 255, 0.12)", borderRadius: "14px", padding: "20px", transition: "transform 0.2s ease" }}>
                <div style={{ color: "var(--accent-gold)", fontWeight: 800, fontSize: "1.1rem" }}>Mantua Real Estate</div>
                <div style={{ color: "#94A3B8", fontSize: "0.82rem", marginTop: "4px" }}>ZIP 22031 • Woodson Pyramid</div>
                <p style={{ color: "#E2E8F0", fontSize: "0.86rem", marginTop: "10px", lineHeight: 1.5 }}>
                  Wooded half-acre mid-century architecture and custom additions.
                </p>
              </div>
            </Link>

            <Link href="/mosby-woods-market" style={{ textDecoration: "none" }}>
              <div style={{ background: "rgba(255, 255, 255, 0.06)", border: "1px solid rgba(255, 255, 255, 0.12)", borderRadius: "14px", padding: "20px" }}>
                <div style={{ color: "var(--accent-gold)", fontWeight: 800, fontSize: "1.1rem" }}>Mosby Woods Market</div>
                <div style={{ color: "#94A3B8", fontSize: "0.82rem", marginTop: "4px" }}>ZIP 22030 • 5-Day Avg Absorption</div>
                <p style={{ color: "#E2E8F0", fontSize: "0.86rem", marginTop: "10px", lineHeight: 1.5 }}>
                  Classic tri-levels and split-levels 5 mins to Vienna Metro.
                </p>
              </div>
            </Link>

            <Link href="/franklin-farm-values" style={{ textDecoration: "none" }}>
              <div style={{ background: "rgba(255, 255, 255, 0.06)", border: "1px solid rgba(255, 255, 255, 0.12)", borderRadius: "14px", padding: "20px" }}>
                <div style={{ color: "var(--accent-gold)", fontWeight: 800, fontSize: "1.1rem" }}>Franklin Farm Values</div>
                <div style={{ color: "#94A3B8", fontSize: "0.82rem", marginTop: "4px" }}>ZIP 22033 • Chantilly HS Pyramid</div>
                <p style={{ color: "#E2E8F0", fontSize: "0.86rem", marginTop: "10px", lineHeight: 1.5 }}>
                  180+ acres of open trails, 6 fishing ponds, and 2 community pools.
                </p>
              </div>
            </Link>

            <Link href="/kings-park-west-real-estate" style={{ textDecoration: "none" }}>
              <div style={{ background: "rgba(255, 255, 255, 0.06)", border: "1px solid rgba(255, 255, 255, 0.12)", borderRadius: "14px", padding: "20px" }}>
                <div style={{ color: "var(--accent-gold)", fontWeight: 800, fontSize: "1.1rem" }}>Kings Park West</div>
                <div style={{ color: "#94A3B8", fontSize: "0.82rem", marginTop: "4px" }}>ZIP 22032 • Royal Lake Access</div>
                <p style={{ color: "#E2E8F0", fontSize: "0.86rem", marginTop: "10px", lineHeight: 1.5 }}>
                  Lakeside walking paths and top-tier Robinson Secondary prestige.
                </p>
              </div>
            </Link>
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
            Whether you are considering selling a residence, seeking an authoritative confidential equity valuation, or searching for a luxury home in Northern Virginia, Elena provides immediate, discrete guidance.
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
            <Link href="/sell" className="btn-card-ask" style={{ padding: "15px 30px", fontSize: "1rem" }}>
              Book In-Home Consultation
            </Link>
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
