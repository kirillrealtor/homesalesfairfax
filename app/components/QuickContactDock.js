"use client";

export default function QuickContactDock() {
  const phoneNumber = "7036257888";
  const internationalPhone = "17036257888";
  const email = "ElenaYSC@gmail.com";
  
  const smsUrl = `sms:+${internationalPhone}?body=Hi%20Elena,%20I%20would%20like%20to%20hire%20you%20to%20list%20my%20property.%20Let's%20schedule%20an%20in-home%20consultation.`;
  const whatsappUrl = `https://wa.me/${internationalPhone}?text=Hi%20Elena,%20I%20would%20like%20to%20hire%20you%20to%20list%20my%20property.%20Let's%20schedule%20an%20in-home%20consultation.`;
  const mailUrl = `mailto:${email}?subject=In-Home%20Listing%20Consultation%20Request&body=Hi%20Elena,%0A%0AI%20would%20like%20to%20hire%20you%20to%20list%20my%20property%20in%20Northern%20Virginia.%20Please%20contact%20me%20to%20schedule%20an%20in-home%20consultation%20and%20net%20proceeds%20review.`;

  return (
    <aside className="quick-dock-container" aria-label="Direct Agent Contact">
      <div className="quick-dock-card">
        {/* Subtle Live Agent Pulse Indicator */}
        <div className="dock-pulse-wrap" title="Elena Direct Line Active" style={{ marginLeft: "4px", marginRight: "2px" }}>
          <span className="dock-pulse-ring"></span>
          <span className="dock-pulse-core"></span>
        </div>

        {/* 4 Unified Luxury Frosted Action Capsules */}
        <div className="dock-actions-row">
          {/* Call */}
          <a href={`tel:${phoneNumber}`} className="dock-action-btn dock-call" title="Direct Phone: (703) 625-7888">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <span>Call Us</span>
          </a>

          {/* Text / SMS */}
          <a href={smsUrl} className="dock-action-btn dock-sms" title="Text Us via SMS / iMessage">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            <span>Text Us</span>
          </a>

          {/* WhatsApp */}
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="dock-action-btn dock-whatsapp" title="Chat Directly on WhatsApp">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67Z"/>
            </svg>
            <span>WhatsApp</span>
          </a>

          {/* Email */}
          <a href={mailUrl} className="dock-action-btn dock-mail" title="Email Elena: ElenaYSC@gmail.com">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <span>Email</span>
          </a>
        </div>
      </div>
    </aside>
  );
}
