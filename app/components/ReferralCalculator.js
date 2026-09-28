"use client";

import { useState } from "react";

export default function ReferralCalculator() {
  const [homePrice, setHomePrice] = useState(650000);
  const [referralPercent, setReferralPercent] = useState(25); // Standard 25% referral
  const [commissionRate, setCommissionRate] = useState(3.0); // 3% gross side
  const [submitted, setSubmitted] = useState(false);
  const [partnerName, setPartnerName] = useState("");
  const [partnerBrokerage, setPartnerBrokerage] = useState("");
  const [clientCity, setClientCity] = useState("Fairfax, VA");

  // Math
  const totalCommission = (homePrice * (commissionRate / 100));
  const referralPayout = totalCommission * (referralPercent / 100);

  const handleSubmitReferral = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="referrals" className="section section-dark">
      <div className="container">
        <div className="section-header">
          <span className="section-tag" style={{ color: "var(--gold)" }}>B2B Real Estate Partner Program</span>
          <h2 className="section-title" style={{ color: "#FFFFFF" }}>
            The 25% Agent Referral Network
          </h2>
          <p className="section-desc" style={{ color: "#94A3B8" }}>
            Have clients moving to or looking for property in Fairfax County, VA? 
            Refer your buyer or seller to our showing team and collect a guaranteed 25% referral check at closing.
          </p>
        </div>

        <div className="referral-calculator">
          <div className="calc-grid">
            <div>
              <div style={{ display: "inline-block", background: "rgba(197, 168, 128, 0.15)", color: "var(--gold)", padding: "4px 12px", borderRadius: "4px", fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", marginBottom: "14px" }}>
                Interactive Commission Estimator
              </div>

              <h3 style={{ color: "#FFFFFF", fontSize: "1.9rem", marginBottom: "14px" }}>
                Calculate Your Referral Payout
              </h3>
              <p style={{ color: "#94A3B8", fontSize: "0.95rem", marginBottom: "28px" }}>
                Adjust the expected Fairfax sales price below to see your estimated 25% broker-to-broker referral check.
              </p>

              <div className="calc-range-wrapper">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "10px" }}>
                  <span style={{ color: "#CBD5E1", fontSize: "0.9rem", fontWeight: 600 }}>Expected Home Price:</span>
                  <span style={{ color: "var(--gold)", fontFamily: "var(--font-heading)", fontSize: "1.6rem", fontWeight: 700 }}>
                    ${homePrice.toLocaleString()}
                  </span>
                </div>

                <input 
                  type="range" 
                  min="400000" 
                  max="2000000" 
                  step="25000"
                  value={homePrice}
                  onChange={(e) => setHomePrice(Number(e.target.value))}
                  className="calc-slider"
                />

                <div style={{ display: "flex", justifyContent: "space-between", color: "#64748B", fontSize: "0.8rem", marginTop: "8px" }}>
                  <span>$400,000 (Condo/Townhome)</span>
                  <span>$1,200,000 (Fairfax Single Family)</span>
                  <span>$2,000,000+ (Luxury)</span>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", background: "rgba(255,255,255,0.04)", padding: "18px", borderRadius: "8px", marginTop: "20px" }}>
                <div>
                  <span style={{ display: "block", color: "#64748B", fontSize: "0.75rem", textTransform: "uppercase" }}>Estimated Gross Commission (3%)</span>
                  <span style={{ color: "#FFFFFF", fontSize: "1.2rem", fontWeight: 700 }}>${Math.round(totalCommission).toLocaleString()}</span>
                </div>
                <div>
                  <span style={{ display: "block", color: "#64748B", fontSize: "0.75rem", textTransform: "uppercase" }}>Your Brokerage Referral Share</span>
                  <span style={{ color: "var(--gold)", fontSize: "1.2rem", fontWeight: 700 }}>25% Standard Agreement</span>
                </div>
              </div>
            </div>

            {/* Payout Display */}
            <div>
              <div className="payout-card">
                <span style={{ color: "#CBD5E1", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700 }}>
                  Your Estimated Referral Check
                </span>
                
                <div className="payout-amount">
                  ${Math.round(referralPayout).toLocaleString()}
                </div>

                <p style={{ color: "#E2E8F0", fontSize: "0.9rem", marginBottom: "24px" }}>
                  Zero property showings. Zero weekend open houses. 
                  Our local Fairfax showing network handles every detail from tour to title closing.
                </p>

                {!submitted ? (
                  <form onSubmit={handleSubmitReferral} style={{ textAlign: "left" }}>
                    <div style={{ marginBottom: "12px" }}>
                      <input 
                        type="text" 
                        placeholder="Your Agent Name & Brokerage" 
                        value={partnerName}
                        onChange={(e) => setPartnerName(e.target.value)}
                        required
                        className="form-control"
                        style={{ background: "#FFFFFF", color: "var(--ink-900)" }}
                      />
                    </div>
                    <div style={{ marginBottom: "12px" }}>
                      <input 
                        type="tel" 
                        placeholder="Your Agent Direct Phone" 
                        required
                        className="form-control"
                        style={{ background: "#FFFFFF", color: "var(--ink-900)" }}
                      />
                    </div>
                    <button type="submit" className="btn-primary" style={{ width: "100%", padding: "14px" }}>
                      Submit Client Referral Lead
                    </button>
                  </form>
                ) : (
                  <div style={{ background: "rgba(16, 185, 129, 0.15)", border: "1px solid #10B981", padding: "16px", borderRadius: "8px", color: "#A7F3D0" }}>
                    <strong>Referral Form Received!</strong>
                    <p style={{ fontSize: "0.85rem", marginTop: "4px" }}>
                      A formal Broker-to-Broker Referral Agreement will be sent to your office for signature today.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
