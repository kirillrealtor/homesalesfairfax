"use client";

export default function ShowingModal({ property, isOpen, onClose }) {
  if (!isOpen) return null;

  const internationalPhone = "17036257888";
  const displayPhone = "(703) 625-7888";
  const email = "ElenaYSC@gmail.com";

  const propText = property ? property.address : "a Fairfax County home";
  const smsUrl = `sms:+${internationalPhone}?body=Hi%20Elena,%20I%20would%20like%20to%20schedule%20a%20private%20showing%20for%20${encodeURIComponent(propText)}.`;
  const whatsappUrl = `https://wa.me/${internationalPhone}?text=Hi%20Elena,%20I%20would%20like%20to%20schedule%20a%20private%20showing%20for%20${encodeURIComponent(propText)}.`;
  const mailUrl = `mailto:${email}?subject=Private%20Showing%20Request%20-%20${encodeURIComponent(propText)}&body=Hi%20Elena,%0A%0AI%20would%20like%20to%20schedule%20a%20private%20showing%20for%20${encodeURIComponent(propText)}.`;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: "560px", padding: "40px" }}>
        <button className="modal-close" onClick={onClose}>&times;</button>

        <div style={{ marginBottom: "24px", textAlign: "center" }}>
          <span style={{ fontSize: "0.82rem", color: "var(--accent-gold)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>
            ✦ Direct Private Walkthrough
          </span>
          <h3 style={{ fontSize: "2rem", marginTop: "6px", color: "var(--ink-950)", fontWeight: 800, letterSpacing: "-0.02em" }}>
            Schedule a Private Tour
          </h3>
          <p style={{ color: "var(--ink-700)", fontSize: "1rem", lineHeight: "1.6", marginTop: "8px" }}>
            {property ? (
              <>Viewing: <strong>{property.address}</strong></>
            ) : (
              "Tour any active Fairfax County property on your schedule with zero sales pressure."
            )}
          </p>
        </div>

        {/* 4 Direct Real-Action Buttons (No Fake Forms) */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "24px" }}>
          <a 
            href={smsUrl}
            className="btn-capsule-black"
            style={{ padding: "16px 24px", fontSize: "1rem", fontWeight: 700, textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            Text Us on SMS &rarr;
          </a>

          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-card-ask"
            style={{ padding: "14px 24px", fontSize: "0.95rem", fontWeight: 700, textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", background: "#FFFFFF" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67Z"/>
            </svg>
            WhatsApp Us ({displayPhone})
          </a>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
            <a 
              href={`tel:${internationalPhone}`}
              className="btn-card-ask"
              style={{ textAlign: "center", padding: "12px", fontSize: "0.9rem", fontWeight: 700 }}
            >
              📞 Call Us
            </a>
            <a 
              href={mailUrl}
              className="btn-card-ask"
              style={{ textAlign: "center", padding: "12px", fontSize: "0.9rem", fontWeight: 700 }}
            >
              ✉️ Email Us
            </a>
          </div>
        </div>

        <div style={{ textAlign: "center", fontSize: "0.85rem", color: "var(--ink-600)", borderTop: "1px solid var(--ink-200)", paddingTop: "16px" }}>
          🔒 <strong>Zero sales pressure.</strong> You connect straight to Elena's personal cell phone to confirm showing time and lockbox access.
        </div>
      </div>
    </div>
  );
}
