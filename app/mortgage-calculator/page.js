"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export default function MortgageCalculatorPage() {
  const [homePrice, setHomePrice] = useState(850000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [hoaFee, setHoaFee] = useState(120);

  // Calculations
  const downPaymentAmount = (homePrice * downPaymentPercent) / 100;
  const loanAmount = homePrice - downPaymentAmount;
  const monthlyRate = interestRate / 100 / 12;
  const totalPayments = loanTerm * 12;

  const monthlyPrincipalInterest =
    monthlyRate > 0
      ? (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, totalPayments))) /
        (Math.pow(1 + monthlyRate, totalPayments) - 1)
      : loanAmount / totalPayments;

  // Fairfax County tax is ~1.06% of assessed value
  const monthlyPropertyTax = (homePrice * 0.0106) / 12;
  const monthlyInsurance = (homePrice * 0.0035) / 12;
  const totalMonthlyPayment = Math.round(monthlyPrincipalInterest + monthlyPropertyTax + monthlyInsurance + Number(hoaFee));

  return (
    <main>
      <div className="page-wrapper" style={{ paddingBottom: 0 }}>
        <Navbar />
      </div>

      <section className="container" style={{ padding: "40px 20px 80px" }}>
        <div className="section-head-clean">
          <span className="section-pretitle">Financial Planning Tools</span>
          <h1 className="section-title-bold">Fairfax County Mortgage Calculator</h1>
          <p className="section-lead-text">
            Estimate your monthly housing payment including Fairfax County property taxes (1.06%), insurance, and HOA dues.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "40px", maxWidth: "1050px", margin: "0 auto", background: "#FFFFFF", padding: "40px", borderRadius: "var(--radius-card)", border: "1px solid var(--ink-200)", boxShadow: "var(--shadow-card)" }}>
          {/* Controls */}
          <div>
            <h3 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: "20px", color: "var(--ink-950)" }}>
              Payment Variables
            </h3>

            <div className="val-field-group">
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                <label className="val-field-label">Home Price</label>
                <strong style={{ color: "var(--ink-950)", fontSize: "1.05rem" }}>${homePrice.toLocaleString()}</strong>
              </div>
              <input 
                type="range" 
                min="300000" 
                max="2500000" 
                step="25000" 
                value={homePrice} 
                onChange={(e) => setHomePrice(Number(e.target.value))}
                style={{ width: "100%", accentColor: "var(--ink-950)", marginBottom: "8px" }}
              />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "16px" }}>
              <div>
                <label className="val-field-label">Down Payment (%)</label>
                <input 
                  type="number" 
                  value={downPaymentPercent} 
                  onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                  className="val-input-clean"
                />
              </div>
              <div>
                <label className="val-field-label">Interest Rate (%)</label>
                <input 
                  type="number" 
                  step="0.1"
                  value={interestRate} 
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="val-input-clean"
                />
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "20px" }}>
              <div>
                <label className="val-field-label">Loan Term</label>
                <select 
                  value={loanTerm} 
                  onChange={(e) => setLoanTerm(Number(e.target.value))}
                  className="val-input-clean"
                >
                  <option value={30}>30-Year Fixed</option>
                  <option value={15}>15-Year Fixed</option>
                </select>
              </div>
              <div>
                <label className="val-field-label">Monthly HOA / Condo Fee ($)</label>
                <input 
                  type="number" 
                  value={hoaFee} 
                  onChange={(e) => setHoaFee(Number(e.target.value))}
                  className="val-input-clean"
                />
              </div>
            </div>

            <div style={{ background: "var(--bg-subtle)", padding: "16px", borderRadius: "var(--radius-sm)", fontSize: "0.85rem", color: "var(--ink-600)" }}>
              💡 Fairfax County standard real estate tax rate is approximately 1.06% of assessed value.
            </div>
          </div>

          {/* Results Output */}
          <div style={{ background: "var(--ink-950)", color: "#FFFFFF", padding: "36px", borderRadius: "var(--radius-md)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <span style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--ink-400)", fontWeight: 700 }}>
                Total Estimated Monthly Payment
              </span>
              <div style={{ fontSize: "3.2rem", fontWeight: 800, color: "#FFFFFF", margin: "10px 0 24px", letterSpacing: "-0.02em" }}>
                ${totalMonthlyPayment.toLocaleString()}
                <span style={{ fontSize: "1rem", fontWeight: 400, color: "var(--ink-400)" }}>/mo</span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.9rem", borderTop: "1px solid rgba(255,255,255,0.12)", paddingTop: "16px" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "#9CA3AF" }}>Principal & Interest:</span>
                  <strong>${Math.round(monthlyPrincipalInterest).toLocaleString()}</strong>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "#9CA3AF" }}>Fairfax Property Tax (1.06%):</span>
                  <strong>${Math.round(monthlyPropertyTax).toLocaleString()}</strong>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "#9CA3AF" }}>Homeowners Insurance:</span>
                  <strong>${Math.round(monthlyInsurance).toLocaleString()}</strong>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "#9CA3AF" }}>HOA / Condo Dues:</span>
                  <strong>${Math.round(hoaFee).toLocaleString()}</strong>
                </div>
              </div>
            </div>

            <div style={{ marginTop: "28px" }}>
              <Link href="/#listings" className="btn-capsule-black" style={{ width: "100%", background: "#FFFFFF", color: "var(--ink-950)", textAlign: "center", marginBottom: "12px" }}>
                Search Fairfax Homes in this Budget &rarr;
              </Link>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                <a 
                  href="tel:7036257888" 
                  className="btn-card-ask" 
                  style={{ textAlign: "center", padding: "10px", fontSize: "0.85rem", background: "rgba(255,255,255,0.08)", color: "#FFFFFF", borderColor: "rgba(255,255,255,0.2)" }}
                >
                  Call Us
                </a>
                <a 
                  href="sms:+17036257888?body=Hi%20Elena,%20I%20have%20a%20question%20about%20mortgage%20rates%20and%20Fairfax%20homes." 
                  className="btn-card-ask" 
                  style={{ textAlign: "center", padding: "10px", fontSize: "0.85rem", background: "rgba(255,255,255,0.08)", color: "#FFFFFF", borderColor: "rgba(255,255,255,0.2)" }}
                >
                  Text Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
