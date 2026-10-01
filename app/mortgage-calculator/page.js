"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

const JUMBO_THRESHOLD = 1149825; // 2024-2026 FHFA High-Cost Conforming Limit for Northern Virginia

const COUNTY_TAX_RATES = [
  { name: "Fairfax County (1.06%)", rate: 0.0106 },
  { name: "Arlington County (1.03%)", rate: 0.0103 },
  { name: "City of Alexandria (1.11%)", rate: 0.0111 },
  { name: "Loudoun County (0.87%)", rate: 0.0087 },
  { name: "Prince William County (1.03%)", rate: 0.0103 },
  { name: "City of Fairfax (1.075%)", rate: 0.01075 }
];

export default function MortgageCalculatorPage() {
  const [homePrice, setHomePrice] = useState(850000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [interestRate, setInterestRate] = useState(6.5);
  const [discountPoints, setDiscountPoints] = useState(0); // 0, 1, 2, 3 points (0.25% reduction each)
  const [loanTerm, setLoanTerm] = useState(30); // 30, 20, 15, or 5 (5/1 ARM)
  const [paymentFrequency, setPaymentFrequency] = useState("monthly"); // "monthly" or "biweekly"
  const [extraPayment, setExtraPayment] = useState(0); // extra principal per payment
  const [selectedTaxRate, setSelectedTaxRate] = useState(0.0106);
  const [hoaFee, setHoaFee] = useState(120);
  const [homeInsuranceAnnual, setHomeInsuranceAnnual] = useState(1800);

  // DTI Calculator state
  const [showDtiCalculator, setShowDtiCalculator] = useState(false);
  const [grossMonthlyIncome, setGrossMonthlyIncome] = useState(15000);
  const [otherMonthlyDebts, setOtherMonthlyDebts] = useState(900); // auto, student, cards

  // Calculations
  const downPaymentAmount = (homePrice * downPaymentPercent) / 100;
  const loanAmount = Math.max(0, homePrice - downPaymentAmount);
  const isJumbo = loanAmount > JUMBO_THRESHOLD;

  // Effective rate with points buydown
  const effectiveRate = Math.max(0.1, interestRate - discountPoints * 0.25);
  const pointsCost = (loanAmount * discountPoints * 0.01);

  // Monthly Standard Loan Calculations (for current selected term)
  const monthlyRate = effectiveRate / 100 / 12;
  const totalMonths = loanTerm * 12;

  const baseMonthlyPI =
    monthlyRate > 0 && totalMonths > 0
      ? (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, totalMonths))) /
        (Math.pow(1 + monthlyRate, totalMonths) - 1)
      : loanAmount / (totalMonths || 1);

  const monthlyPropertyTax = (homePrice * selectedTaxRate) / 12;
  const monthlyInsurance = homeInsuranceAnnual / 12;
  const monthlyTotalHousing = Math.round(baseMonthlyPI + monthlyPropertyTax + monthlyInsurance + Number(hoaFee) + Number(extraPayment));

  // Bi-Weekly calculation
  // Bi-weekly payment = half of standard monthly PI
  const biweeklyPI = baseMonthlyPI / 2;
  const biweeklyPropertyTax = monthlyPropertyTax / 2;
  const biweeklyInsurance = monthlyInsurance / 2;
  const biweeklyHoa = Number(hoaFee) / 2;
  const totalBiweeklyPayment = Math.round(biweeklyPI + biweeklyPropertyTax + biweeklyInsurance + biweeklyHoa + Number(extraPayment));

  // Side-by-side 15 vs 30 Comparison calculations
  // Standard 30-Year
  const rate30 = effectiveRate / 100 / 12;
  const pi30 = (loanAmount * (rate30 * Math.pow(1 + rate30, 360))) / (Math.pow(1 + rate30, 360) - 1);
  const totalPaid30 = pi30 * 360;
  const totalInterest30 = totalPaid30 - loanAmount;

  // Standard 15-Year (typically 0.6% lower interest rate)
  const rate15Val = Math.max(0.1, effectiveRate - 0.6);
  const rate15 = rate15Val / 100 / 12;
  const pi15 = (loanAmount * (rate15 * Math.pow(1 + rate15, 180))) / (Math.pow(1 + rate15, 180) - 1);
  const totalPaid15 = pi15 * 180;
  const totalInterest15 = totalPaid15 - loanAmount;
  const lifetimeSavings15 = Math.max(0, totalInterest30 - totalInterest15);

  // Bi-Weekly Savings Estimate
  // 26 bi-weekly payments = 13 monthly payments -> approx 4.5 years shaved off 30yr loan
  const annualBiweeklyExtraPrincipal = baseMonthlyPI; // 1 extra payment/year
  const estimatedYearsSavedBiweekly = paymentFrequency === "biweekly" ? 4.5 : 0;
  const estimatedInterestSavedBiweekly = paymentFrequency === "biweekly" ? Math.round(totalInterest30 * 0.18) : 0;

  // Extra Payments Savings Estimate
  const annualExtra = Number(extraPayment) * (paymentFrequency === "biweekly" ? 26 : 12);
  const extraPayYearsSaved = annualExtra > 0 ? Math.min(loanTerm - 5, Math.round((annualExtra * 15) / (baseMonthlyPI * 12) * 10) / 10) : 0;

  // DTI Ratios
  const frontEndDti = grossMonthlyIncome > 0 ? ((monthlyTotalHousing / grossMonthlyIncome) * 100).toFixed(1) : 0;
  const backEndDti = grossMonthlyIncome > 0 ? (((monthlyTotalHousing + Number(otherMonthlyDebts)) / grossMonthlyIncome) * 100).toFixed(1) : 0;

  return (
    <main>
      <div className="page-wrapper" style={{ paddingBottom: 0 }}>
        <Navbar />
      </div>

      <section className="container" style={{ padding: "40px 20px 80px" }}>
        <div className="section-head-clean">
          <span className="section-pretitle">Northern Virginia Home Financing Tool</span>
          <h1 className="section-title-bold">
            Mortgage Calculator: 15 vs 30 Year, Bi-Weekly, Jumbo &amp; DTI
          </h1>
          <p className="section-lead-text">
            Compare 15-year vs 30-year fixed loans, bi-weekly extra payment schedules, jumbo financing, discount points, and debt-to-income (DTI) with accurate Fairfax &amp; Northern Virginia county property tax rates.
          </p>
        </div>

        {/* Main Calculator Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr",
          gap: "40px",
          maxWidth: "1150px",
          margin: "0 auto",
          background: "#FFFFFF",
          padding: "40px",
          borderRadius: "var(--radius-card)",
          border: "1px solid var(--ink-200)",
          boxShadow: "var(--shadow-card)"
        }}>
          {/* Left Column: Interactive Inputs */}
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
              <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--ink-950)", margin: 0 }}>
                Loan Parameters
              </h2>
              {/* Jumbo vs Conforming Status Badge */}
              <span style={{
                fontSize: "0.78rem",
                fontWeight: 700,
                padding: "6px 12px",
                borderRadius: "20px",
                background: isJumbo ? "rgba(180, 83, 9, 0.12)" : "rgba(16, 185, 129, 0.12)",
                color: isJumbo ? "#B45309" : "#047857",
                border: `1px solid ${isJumbo ? "#FDE68A" : "#A7F3D0"}`
              }}>
                {isJumbo ? "✦ Jumbo Mortgage ($1.15M+ Loan)" : "✓ Conforming Loan"}
              </span>
            </div>

            {/* Home Price */}
            <div className="val-field-group">
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                <label className="val-field-label">Home Purchase Price</label>
                <strong style={{ color: "var(--ink-950)", fontSize: "1.1rem" }}>${homePrice.toLocaleString()}</strong>
              </div>
              <input 
                type="range" 
                min="250000" 
                max="3000000" 
                step="25000" 
                value={homePrice} 
                onChange={(e) => setHomePrice(Number(e.target.value))}
                style={{ width: "100%", accentColor: "var(--ink-950)", marginBottom: "8px" }}
              />
            </div>

            {/* Down Payment & Interest Rate */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
              <div>
                <label className="val-field-label">Down Payment (%)</label>
                <div style={{ display: "flex", gap: "8px" }}>
                  <input 
                    type="number" 
                    min="0"
                    max="90"
                    value={downPaymentPercent} 
                    onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                    className="val-input-clean"
                  />
                  <span style={{ alignSelf: "center", fontSize: "0.85rem", color: "var(--ink-500)", whiteSpace: "nowrap" }}>
                    (${Math.round(downPaymentAmount).toLocaleString()})
                  </span>
                </div>
              </div>
              <div>
                <label className="val-field-label">Base Interest Rate (%)</label>
                <input 
                  type="number" 
                  step="0.125"
                  value={interestRate} 
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="val-input-clean"
                />
              </div>
            </div>

            {/* Loan Term & Discount Points */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
              <div>
                <label className="val-field-label">Loan Term</label>
                <select 
                  value={loanTerm} 
                  onChange={(e) => setLoanTerm(Number(e.target.value))}
                  className="val-input-clean"
                >
                  <option value={30}>30-Year Fixed</option>
                  <option value={20}>20-Year Fixed</option>
                  <option value={15}>15-Year Fixed</option>
                  <option value={5}>5/1 Adjustable Rate (ARM)</option>
                </select>
              </div>
              <div>
                <label className="val-field-label">Discount Points / Buydown</label>
                <select 
                  value={discountPoints} 
                  onChange={(e) => setDiscountPoints(Number(e.target.value))}
                  className="val-input-clean"
                >
                  <option value={0}>0 Points (Effective: {interestRate}%)</option>
                  <option value={1}>1 Point (-0.25% | Cost: ${Math.round(loanAmount * 0.01).toLocaleString()})</option>
                  <option value={2}>2 Points (-0.50% | Cost: ${Math.round(loanAmount * 0.02).toLocaleString()})</option>
                  <option value={3}>3 Points (-0.75% | Cost: ${Math.round(loanAmount * 0.03).toLocaleString()})</option>
                </select>
              </div>
            </div>

            {/* Payment Frequency Toggle: Monthly vs Bi-Weekly */}
            <div style={{ marginBottom: "18px", background: "var(--bg-subtle)", padding: "14px 16px", borderRadius: "var(--radius-sm)" }}>
              <label className="val-field-label" style={{ marginBottom: "8px", display: "block" }}>
                Payment Frequency (Monthly vs. Bi-Weekly)
              </label>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                <button
                  type="button"
                  onClick={() => setPaymentFrequency("monthly")}
                  style={{
                    padding: "10px",
                    borderRadius: "6px",
                    border: paymentFrequency === "monthly" ? "2px solid var(--ink-950)" : "1px solid var(--ink-200)",
                    background: paymentFrequency === "monthly" ? "#FFFFFF" : "transparent",
                    fontWeight: paymentFrequency === "monthly" ? 700 : 500,
                    cursor: "pointer",
                    fontSize: "0.88rem"
                  }}
                >
                  Monthly (12/yr)
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentFrequency("biweekly")}
                  style={{
                    padding: "10px",
                    borderRadius: "6px",
                    border: paymentFrequency === "biweekly" ? "2px solid var(--ink-950)" : "1px solid var(--ink-200)",
                    background: paymentFrequency === "biweekly" ? "#FFFFFF" : "transparent",
                    fontWeight: paymentFrequency === "biweekly" ? 700 : 500,
                    cursor: "pointer",
                    fontSize: "0.88rem"
                  }}
                >
                  Bi-Weekly (26/yr)
                </button>
              </div>
            </div>

            {/* Extra Principal Payment Field */}
            <div style={{ marginBottom: "18px" }}>
              <label className="val-field-label">
                Extra Principal Payment ({paymentFrequency === "biweekly" ? "$/every 2 weeks" : "$/month"})
              </label>
              <input 
                type="number" 
                min="0"
                step="50"
                value={extraPayment} 
                onChange={(e) => setExtraPayment(Number(e.target.value))}
                placeholder="e.g. 100"
                className="val-input-clean"
              />
              <span style={{ fontSize: "0.78rem", color: "var(--ink-500)", display: "block", marginTop: "4px" }}>
                Accelerates amortization by paying down loan principal balance directly.
              </span>
            </div>

            {/* Northern Virginia Jurisdiction & Taxes */}
            <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "16px", marginBottom: "16px" }}>
              <div>
                <label className="val-field-label">County Real Estate Tax</label>
                <select 
                  value={selectedTaxRate} 
                  onChange={(e) => setSelectedTaxRate(Number(e.target.value))}
                  className="val-input-clean"
                >
                  {COUNTY_TAX_RATES.map((c) => (
                    <option key={c.name} value={c.rate}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="val-field-label">Monthly HOA / Condo ($)</label>
                <input 
                  type="number" 
                  value={hoaFee} 
                  onChange={(e) => setHoaFee(Number(e.target.value))}
                  className="val-input-clean"
                />
              </div>
            </div>

            {/* DTI Calculator Toggle */}
            <div style={{ marginTop: "24px", borderTop: "1px solid var(--ink-200)", paddingTop: "18px" }}>
              <button
                type="button"
                onClick={() => setShowDtiCalculator(!showDtiCalculator)}
                style={{
                  background: "none",
                  border: "none",
                  color: "var(--accent-gold)",
                  fontWeight: 700,
                  fontSize: "0.92rem",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: 0
                }}
              >
                <span>{showDtiCalculator ? "▲ Hide Debt-to-Income (DTI) Ratio Estimator" : "▼ Calculate Debt-to-Income (DTI) Ratio"}</span>
              </button>

              {showDtiCalculator && (
                <div style={{ marginTop: "16px", background: "var(--bg-subtle)", padding: "18px", borderRadius: "var(--radius-sm)" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "12px" }}>
                    <div>
                      <label className="val-field-label">Gross Monthly Income ($)</label>
                      <input 
                        type="number" 
                        value={grossMonthlyIncome} 
                        onChange={(e) => setGrossMonthlyIncome(Number(e.target.value))}
                        className="val-input-clean"
                      />
                    </div>
                    <div>
                      <label className="val-field-label">Other Monthly Debts ($)</label>
                      <input 
                        type="number" 
                        value={otherMonthlyDebts} 
                        onChange={(e) => setOtherMonthlyDebts(Number(e.target.value))}
                        className="val-input-clean"
                      />
                      <span style={{ fontSize: "0.72rem", color: "var(--ink-500)" }}>Car loans, student loans, cards</span>
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginTop: "12px", borderTop: "1px solid var(--ink-200)", paddingTop: "12px" }}>
                    <div>
                      <span style={{ fontSize: "0.78rem", color: "var(--ink-600)" }}>Front-End DTI (Housing Only):</span>
                      <div style={{ fontSize: "1.15rem", fontWeight: 800, color: Number(frontEndDti) <= 28 ? "#047857" : "#B45309" }}>
                        {frontEndDti}% <span style={{ fontSize: "0.75rem", fontWeight: 400 }}>({Number(frontEndDti) <= 28 ? "Ideal" : "Acceptable"})</span>
                      </div>
                    </div>
                    <div>
                      <span style={{ fontSize: "0.78rem", color: "var(--ink-600)" }}>Back-End DTI (All Debts):</span>
                      <div style={{ fontSize: "1.15rem", fontWeight: 800, color: Number(backEndDti) <= 43 ? "#047857" : "#DC2626" }}>
                        {backEndDti}% <span style={{ fontSize: "0.75rem", fontWeight: 400 }}>({Number(backEndDti) <= 43 ? "Qualifies Conventional" : "High Risk"})</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Dynamic Results Display */}
          <div style={{
            background: "var(--ink-950)",
            color: "#FFFFFF",
            padding: "36px",
            borderRadius: "var(--radius-md)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
          }}>
            <div>
              <span style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--ink-400)", fontWeight: 700 }}>
                Total Estimated {paymentFrequency === "biweekly" ? "Bi-Weekly" : "Monthly"} Payment
              </span>
              <div style={{ fontSize: "3.2rem", fontWeight: 800, color: "#FFFFFF", margin: "10px 0 20px", letterSpacing: "-0.02em" }}>
                ${(paymentFrequency === "biweekly" ? totalBiweeklyPayment : monthlyTotalHousing).toLocaleString()}
                <span style={{ fontSize: "1rem", fontWeight: 400, color: "var(--ink-400)" }}>
                  /{paymentFrequency === "biweekly" ? "2 wks" : "mo"}
                </span>
              </div>

              {/* Breakdown */}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.9rem", borderTop: "1px solid rgba(255,255,255,0.12)", paddingTop: "16px" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "#9CA3AF" }}>Principal &amp; Interest ({effectiveRate.toFixed(2)}%):</span>
                  <strong>${Math.round(paymentFrequency === "biweekly" ? biweeklyPI : baseMonthlyPI).toLocaleString()}</strong>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "#9CA3AF" }}>County Property Tax:</span>
                  <strong>${Math.round(paymentFrequency === "biweekly" ? biweeklyPropertyTax : monthlyPropertyTax).toLocaleString()}</strong>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "#9CA3AF" }}>Homeowners Insurance:</span>
                  <strong>${Math.round(paymentFrequency === "biweekly" ? biweeklyInsurance : monthlyInsurance).toLocaleString()}</strong>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "#9CA3AF" }}>HOA / Condo Dues:</span>
                  <strong>${Math.round(paymentFrequency === "biweekly" ? biweeklyHoa : Number(hoaFee)).toLocaleString()}</strong>
                </div>
                {Number(extraPayment) > 0 && (
                  <div style={{ display: "flex", justifyContent: "space-between", color: "#FBBF24" }}>
                    <span>Extra Principal Added:</span>
                    <strong>+${Number(extraPayment).toLocaleString()}</strong>
                  </div>
                )}
              </div>

              {/* Extra Payment & Bi-Weekly Savings Highlights */}
              {(paymentFrequency === "biweekly" || Number(extraPayment) > 0) && (
                <div style={{ marginTop: "20px", background: "rgba(255,255,255,0.06)", padding: "14px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <span style={{ fontSize: "0.78rem", color: "var(--accent-gold)", fontWeight: 700, textTransform: "uppercase", display: "block", marginBottom: "4px" }}>
                    Amortization Acceleration Impact:
                  </span>
                  <p style={{ margin: 0, fontSize: "0.85rem", color: "#E2E8F0", lineHeight: 1.5 }}>
                    {paymentFrequency === "biweekly" && `• Bi-weekly payments shave ~4.5 years off your mortgage and save an estimated $${estimatedInterestSavedBiweekly.toLocaleString()} in interest.`}
                    {Number(extraPayment) > 0 && ` • Extra payments shorten payoff by an estimated ${extraPayYearsSaved} years.`}
                  </p>
                </div>
              )}
            </div>

            <div style={{ marginTop: "28px" }}>
              <Link href="/#listings" className="btn-capsule-black" style={{ width: "100%", background: "#FFFFFF", color: "var(--ink-950)", textAlign: "center", marginBottom: "12px", display: "block" }}>
                Search Northern VA Homes in this Budget &rarr;
              </Link>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                <a 
                  href="tel:7036257888" 
                  className="btn-card-ask" 
                  style={{ textAlign: "center", padding: "10px", fontSize: "0.85rem", background: "rgba(255,255,255,0.08)", color: "#FFFFFF", borderColor: "rgba(255,255,255,0.2)" }}
                >
                  Call Us Direct
                </a>
                <a 
                  href="sms:+17036257888?body=Hi%20Elena,%20I'm%20using%20the%20Fairfax%20mortgage%20calculator%20and%20have%20questions%20about%20rates." 
                  className="btn-card-ask" 
                  style={{ textAlign: "center", padding: "10px", fontSize: "0.85rem", background: "rgba(255,255,255,0.08)", color: "#FFFFFF", borderColor: "rgba(255,255,255,0.2)" }}
                >
                  Text Us
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 15-Year vs 30-Year Mortgage Comparison Panel */}
        <div style={{ maxWidth: "1150px", margin: "60px auto 0", background: "#FFFFFF", padding: "36px", borderRadius: "var(--radius-card)", border: "1px solid var(--ink-200)", boxShadow: "var(--shadow-card)" }}>
          <div style={{ textAlign: "center", marginBottom: "30px" }}>
            <span className="section-pretitle">Loan Term Analysis</span>
            <h2 className="section-title-bold" style={{ fontSize: "1.85rem", margin: "6px auto" }}>
              15 vs 30 Year Mortgage Calculator Comparison
            </h2>
            <p style={{ color: "var(--ink-600)", maxWidth: "700px", margin: "0 auto", fontSize: "0.95rem" }}>
              Comparing a 15-year fixed loan with a 30-year fixed loan based on your current loan amount of <strong>${loanAmount.toLocaleString()}</strong>.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
            {/* 30-Year Card */}
            <div style={{ border: "1px solid var(--ink-200)", borderRadius: "12px", padding: "24px", background: "var(--bg-subtle)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 800, margin: 0, color: "var(--ink-950)" }}>
                  30-Year Fixed Mortgage
                </h3>
                <span style={{ fontSize: "0.8rem", background: "#E2E8F0", padding: "4px 8px", borderRadius: "4px", fontWeight: 700 }}>
                  Lower Monthly Cost
                </span>
              </div>
              <div style={{ fontSize: "2rem", fontWeight: 800, color: "var(--ink-950)", marginBottom: "16px" }}>
                ${Math.round(pi30).toLocaleString()}
                <span style={{ fontSize: "0.85rem", fontWeight: 400, color: "var(--ink-500)" }}>/mo (P&amp;I)</span>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.9rem", color: "var(--ink-700)" }}>
                <li style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid var(--ink-200)", paddingBottom: "6px" }}>
                  <span>Interest Rate:</span>
                  <strong>{effectiveRate.toFixed(2)}%</strong>
                </li>
                <li style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid var(--ink-200)", paddingBottom: "6px" }}>
                  <span>Total Payments (360 mos):</span>
                  <strong>${Math.round(totalPaid30).toLocaleString()}</strong>
                </li>
                <li style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid var(--ink-200)", paddingBottom: "6px" }}>
                  <span>Total Lifetime Interest:</span>
                  <strong style={{ color: "#DC2626" }}>${Math.round(totalInterest30).toLocaleString()}</strong>
                </li>
                <li style={{ display: "flex", justifyContent: "space-between", paddingTop: "4px" }}>
                  <span>Key Advantage:</span>
                  <span style={{ fontWeight: 600, color: "var(--ink-900)" }}>Maximum purchasing power</span>
                </li>
              </ul>
            </div>

            {/* 15-Year Card */}
            <div style={{ border: "2px solid var(--accent-gold)", borderRadius: "12px", padding: "24px", background: "#FFFFFF", position: "relative" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 800, margin: 0, color: "var(--ink-950)" }}>
                  15-Year Fixed Mortgage
                </h3>
                <span style={{ fontSize: "0.8rem", background: "var(--accent-gold)", color: "#0F172A", padding: "4px 8px", borderRadius: "4px", fontWeight: 800 }}>
                  Massive Interest Savings
                </span>
              </div>
              <div style={{ fontSize: "2rem", fontWeight: 800, color: "var(--ink-950)", marginBottom: "16px" }}>
                ${Math.round(pi15).toLocaleString()}
                <span style={{ fontSize: "0.85rem", fontWeight: 400, color: "var(--ink-500)" }}>/mo (P&amp;I)</span>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.9rem", color: "var(--ink-700)" }}>
                <li style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid var(--ink-200)", paddingBottom: "6px" }}>
                  <span>Interest Rate (~0.6% lower):</span>
                  <strong>{rate15Val.toFixed(2)}%</strong>
                </li>
                <li style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid var(--ink-200)", paddingBottom: "6px" }}>
                  <span>Total Payments (180 mos):</span>
                  <strong>${Math.round(totalPaid15).toLocaleString()}</strong>
                </li>
                <li style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid var(--ink-200)", paddingBottom: "6px" }}>
                  <span>Total Lifetime Interest:</span>
                  <strong style={{ color: "#047857" }}>${Math.round(totalInterest15).toLocaleString()}</strong>
                </li>
                <li style={{ display: "flex", justifyContent: "space-between", paddingTop: "4px" }}>
                  <span>Lifetime Interest Saved:</span>
                  <strong style={{ color: "#047857", fontSize: "1.05rem" }}>${Math.round(lifetimeSavings15).toLocaleString()}</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Detailed On-Page SEO Editorial & Guides */}
        <section style={{ maxWidth: "1050px", margin: "60px auto 0" }}>
          <div style={{ background: "#FFFFFF", padding: "44px", borderRadius: "var(--radius-card)", border: "1px solid var(--ink-200)" }}>
            <h2 className="section-title-bold" style={{ fontSize: "1.9rem", marginBottom: "18px" }}>
              Key Mortgage Strategies for Northern Virginia Homebuyers
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "28px", color: "var(--ink-700)", lineHeight: 1.75 }}>
              <div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--ink-950)", marginBottom: "8px" }}>
                  1. The 15 vs 30 Year Mortgage Calculator Decision
                </h3>
                <p>
                  When shopping for homes in high-equity Northern Virginia markets like McLean, Great Falls, Vienna, or Fairfax City, choosing between a <strong>15 vs 30 year mortgage calculator</strong> framework is crucial. While a 30-year fixed loan lowers your mandatory monthly debt obligations—leaving cushion for retirement investments or home renovations—a 15-year fixed loan locks in lower interest rates and saves hundreds of thousands of dollars in lifetime interest. Many Northern Virginia homeowners take a 30-year mortgage and make discretionary extra principal payments to enjoy 15-year payoff speed without the strict mandatory payment.
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--ink-950)", marginBottom: "8px" }}>
                  2. Bi-Weekly Mortgage Calculator with Extra Payments
                </h3>
                <p>
                  A <strong>bi weekly mortgage calculator with extra payments</strong> demonstrates the power of accelerated amortization. In a bi-weekly schedule, you make 26 half-payments each year. Because there are 52 weeks in a calendar year, 26 bi-weekly payments equal 13 full monthly payments rather than 12. That single additional annual payment goes 100% toward principal, effectively cutting 4 to 6 years off a standard 30-year loan without feeling like a major budget sacrifice.
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--ink-950)", marginBottom: "8px" }}>
                  3. Northern Virginia Conforming vs. Jumbo Mortgage Calculator
                </h3>
                <p>
                  Due to high regional real estate valuations, Fairfax County, Arlington, Alexandria, and Loudoun County are classified as high-cost housing markets. The FHFA conforming loan limit exceeds $1,149,825 for a single-family home. If your borrowing amount exceeds this ceiling, our <strong>jumbo mortgage calculator</strong> helps you model payments. Jumbo financing usually requires a minimum of 10% to 20% down, 6 to 12 months of post-closing liquid reserves, and excellent credit (720+).
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--ink-950)", marginBottom: "8px" }}>
                  4. Debt-to-Income Ratio Mortgage Calculator (DTI Guidelines)
                </h3>
                <p>
                  Underwriters utilize our <strong>debt to income ratio mortgage calculator</strong> formula to determine approval limits. Your <em>front-end DTI</em> (total housing payment including P&amp;I, taxes, insurance, and HOA divided by gross monthly income) should ideally remain below 28% to 31%. Your <em>back-end DTI</em> (housing plus auto loans, student loans, and credit card minimums) should stay below 43% to 45% for conventional loans, although automated underwriting systems may approve up to 50% for applicants with strong credit and substantial assets.
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--ink-950)", marginBottom: "8px" }}>
                  5. Mortgage Calculator with Points &amp; Rate Buydown
                </h3>
                <p>
                  Using a <strong>mortgage calculator with points</strong> allows you to calculate the break-even timeline for buying discount points. Paying 1 discount point (1% of the loan amount upfront) typically lowers your note rate by 0.25%. If paying $8,000 for points lowers your monthly payment by $140, your break-even period is approximately 57 months. In competitive seller markets, buyers also negotiate temporary 2-1 or 1-0 seller-paid buydowns to ease initial monthly payments.
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--ink-950)", marginBottom: "8px" }}>
                  6. Mortgage Calculator Recast vs. Refinance
                </h3>
                <p>
                  If you expect substantial liquidity down the road—such as selling a previous home or receiving an annual bonus—ask your lender about a <strong>mortgage recast</strong>. Unlike refinancing, which incurs thousands of dollars in closing fees and changes your interest rate, a recast allows you to apply a lump sum (e.g., $50,000+) directly to principal while your lender re-amortizes your remaining balance over the existing term for a modest administrative fee ($250–$500).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Structured FAQ Section */}
        <section style={{ maxWidth: "1050px", margin: "50px auto 0" }}>
          <div style={{ background: "#FFFFFF", padding: "40px", borderRadius: "var(--radius-card)", border: "1px solid var(--ink-200)" }}>
            <h2 className="section-title-bold" style={{ fontSize: "1.75rem", marginBottom: "24px" }}>
              Frequently Asked Questions About Mortgages &amp; Financing
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--ink-950)", marginBottom: "6px" }}>
                  What is the difference between a 15-year and 30-year mortgage?
                </h3>
                <p style={{ color: "var(--ink-700)", lineHeight: 1.6, fontSize: "0.95rem" }}>
                  A 30-year mortgage spreads repayment across 360 monthly installments, keeping mandatory payments lower and maximizing borrowing power. A 15-year mortgage has higher monthly payments but lower interest rates (typically 0.5% to 0.75% lower) and reduces total lifetime interest by over 55%.
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--ink-950)", marginBottom: "6px" }}>
                  How does bi-weekly mortgage payment compare to monthly payments?
                </h3>
                <p style={{ color: "var(--ink-700)", lineHeight: 1.6, fontSize: "0.95rem" }}>
                  In a bi-weekly schedule, you pay half of your monthly payment every 2 weeks (26 times a year), resulting in 13 full payments annually. That 13th payment directly reduces principal, shaving approximately 4 to 6 years off a 30-year mortgage.
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--ink-950)", marginBottom: "6px" }}>
                  What is considered a jumbo loan in Fairfax County, VA?
                </h3>
                <p style={{ color: "var(--ink-700)", lineHeight: 1.6, fontSize: "0.95rem" }}>
                  Fairfax County and Northern Virginia are high-cost conforming areas where conforming loan limits exceed $1,149,825. Any loan amount above this threshold is classified as a jumbo mortgage, requiring stricter credit, asset reserve requirements, and debt-to-income scrutiny.
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--ink-950)", marginBottom: "6px" }}>
                  What is an acceptable debt-to-income (DTI) ratio for mortgage approval?
                </h3>
                <p style={{ color: "var(--ink-700)", lineHeight: 1.6, fontSize: "0.95rem" }}>
                  Most conventional conforming mortgage programs prefer a front-end DTI below 28% and a back-end DTI below 43% to 45%. However, strong compensating factors (such as 740+ credit scores and 6+ months of reserves) can allow automated approvals up to 50%.
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--ink-950)", marginBottom: "6px" }}>
                  What is a 5/1 adjustable-rate mortgage (ARM)?
                </h3>
                <p style={{ color: "var(--ink-700)", lineHeight: 1.6, fontSize: "0.95rem" }}>
                  A 5/1 ARM features a fixed interest rate for the first 5 years of the loan, after which the rate adjusts annually based on market index benchmarks (such as SOFR). It is popular for buyers who plan to relocate or refinance within 5 to 7 years.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <div style={{
          background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
          color: "#FFFFFF",
          borderRadius: "16px",
          padding: "36px",
          maxWidth: "1050px",
          margin: "50px auto 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "24px"
        }}>
          <div style={{ maxWidth: "680px" }}>
            <span style={{ fontSize: "0.8rem", color: "var(--accent-gold)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginBottom: "6px" }}>
              ✦ Trusted Northern Virginia Real Estate Advisory • Elena
            </span>
            <h3 style={{ fontSize: "1.65rem", fontWeight: 800, color: "#FFFFFF", margin: "0 0 8px" }}>
              Ready to Tour Homes in Your Target Budget?
            </h3>
            <p style={{ fontSize: "0.95rem", color: "#CBD5E1", margin: 0, lineHeight: 1.6 }}>
              We partner with top local lenders in Northern Virginia to secure pre-approvals, competitive rates, and seamless settlement coordination.
            </p>
          </div>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Link 
              href="/#listings" 
              className="btn btn-outline"
              style={{ color: "#FFFFFF", borderColor: "rgba(255,255,255,0.3)", padding: "12px 22px", fontWeight: 600, fontSize: "0.9rem" }}
            >
              Browse Active Listings &rarr;
            </Link>
            <a 
              href="tel:7036257888" 
              className="btn btn-primary"
              style={{ background: "var(--accent-gold)", borderColor: "var(--accent-gold)", color: "#0F172A", fontWeight: 800, padding: "12px 22px", fontSize: "0.9rem", textDecoration: "none" }}
            >
              Call Elena: (703) 625-7888
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
