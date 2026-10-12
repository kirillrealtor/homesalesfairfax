"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#000000",
        color: "#FFFFFF",
        padding: "48px clamp(20px, 4vw, 56px) 20px",
        overflow: "hidden",
        width: "100%",
        boxSizing: "border-box"
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "28px"
        }}
      >
        {/* Top Section: Action & Social Channels */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "28px"
          }}
        >
          {/* Top Left: Headline & Capsule Action Buttons */}
          <div>
            <h2
              style={{
                fontFamily: "var(--font-main), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                fontSize: "clamp(2.4rem, 4.8vw, 4.2rem)",
                fontWeight: 500,
                lineHeight: 1.08,
                letterSpacing: "-0.035em",
                color: "#FFFFFF",
                margin: "0 0 20px 0"
              }}
            >
              Let&apos;s start<br />from here
            </h2>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                flexWrap: "wrap"
              }}
            >
              <a
                href="tel:7036257888"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "11px 24px",
                  borderRadius: "9999px",
                  border: "1px solid rgba(255, 255, 255, 0.45)",
                  backgroundColor: "transparent",
                  color: "#FFFFFF",
                  fontSize: "0.76rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  transition: "all 0.2s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#FFFFFF";
                  e.currentTarget.style.color = "#000000";
                  e.currentTarget.style.borderColor = "#FFFFFF";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "#FFFFFF";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.45)";
                }}
              >
                <span>Book a call</span>
                <span style={{ fontSize: "0.95rem", lineHeight: 1 }}>&rarr;</span>
              </a>

              <a
                href="mailto:ElenaYSC@gmail.com"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "11px 24px",
                  borderRadius: "9999px",
                  border: "1px solid rgba(255, 255, 255, 0.45)",
                  backgroundColor: "transparent",
                  color: "#FFFFFF",
                  fontSize: "0.76rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  transition: "all 0.2s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#FFFFFF";
                  e.currentTarget.style.color = "#000000";
                  e.currentTarget.style.borderColor = "#FFFFFF";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "#FFFFFF";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.45)";
                }}
              >
                <span>Drop us an email</span>
                <span style={{ fontSize: "0.95rem" }}>&#64;</span>
              </a>
            </div>
          </div>

          {/* Top Right: Clean Vertical Social Links */}
          <nav
            aria-label="Social Links"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              minWidth: "160px",
              paddingRight: "clamp(0px, 3vw, 60px)"
            }}
          >
            {[
              { label: "Linkedin", href: "https://www.linkedin.com/in/elenagorbounovaremax" },
              { label: "Instagram", href: "https://www.instagram.com/" },
              { label: "YouTube", href: "https://www.youtube.com/c/ElenaGorbounova" },
              { label: "Zillow", href: "https://www.zillow.com/profile/zuser20150407173742126/" },
              { label: "Facebook", href: "https://www.facebook.com/egorbounova" }
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#FFFFFF",
                  fontSize: "1.25rem",
                  fontWeight: 400,
                  letterSpacing: "-0.01em",
                  textDecoration: "none",
                  transition: "opacity 0.2s ease, transform 0.2s ease",
                  display: "inline-block"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "0.6";
                  e.currentTarget.style.transform = "translateX(4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "1";
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Middle Dominant Typography: Edge-to-Edge "HOMESALESFAIRFAX" */}
        <div
          style={{
            width: "100%",
            margin: "12px 0 0",
            userSelect: "none"
          }}
        >
          <Link
            href="/"
            aria-label="HomeSalesFairfax"
            style={{
              display: "block",
              width: "100%",
              textDecoration: "none",
              color: "#FFFFFF",
              transition: "opacity 0.2s ease"
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            <svg
              viewBox="0 0 1800 190"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                overflow: "hidden"
              }}
              preserveAspectRatio="xMidYMid meet"
            >
              <text
                x="50%"
                y="155"
                textAnchor="middle"
                fill="#FFFFFF"
                style={{
                  fontFamily: "var(--font-main), 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                  fontWeight: 900,
                  fontSize: "148px",
                  letterSpacing: "-0.04em",
                  textTransform: "uppercase"
                }}
              >
                HOMESALESFAIRFAX
              </text>
            </svg>
          </Link>
        </div>

        {/* Bottom Metadata & Credits Line */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
            fontSize: "0.82rem",
            color: "#A1A1AA",
            letterSpacing: "0.01em",
            paddingTop: "6px",
            paddingBottom: "4px"
          }}
        >
          <div>
            &copy;{new Date().getFullYear()} &mdash; Elena Gorbounova &bull; RE/MAX Allegiance
          </div>

          <div style={{ textAlign: "center" }}>
            Northern Virginia &bull; Fairfax County Real Estate Authority
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px"
            }}
          >
            <span>Equal Housing Opportunity</span>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "2px 7px",
                borderRadius: "4px",
                backgroundColor: "#FFFFFF",
                color: "#000000",
                fontSize: "0.72rem",
                fontWeight: 800,
                letterSpacing: "0.04em"
              }}
            >
              EN
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
