export const metadata = {
  title: "Mortgage Calculator: 15 vs 30 Year, Bi-Weekly, Jumbo & DTI | Fairfax VA",
  description: "Calculate monthly and bi-weekly mortgage payments, compare 15 vs 30-year loans, calculate extra payments savings, jumbo loans, and debt-to-income (DTI) with Fairfax County property taxes (1.06%).",
  alternates: {
    canonical: "https://www.homesalesfairfax.com/mortgage-calculator",
  },
  openGraph: {
    title: "Mortgage Calculator: 15 vs 30 Year, Bi-Weekly, Jumbo & Extra Payments",
    description: "Compare 15-year vs 30-year fixed loans, bi-weekly payments, jumbo mortgages, points buydown, and Fairfax VA real estate property taxes.",
    url: "https://www.homesalesfairfax.com/mortgage-calculator",
    siteName: "homesalesfairfax.com",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fairfax VA Mortgage Calculator | 15 vs 30 Year, Bi-Weekly & Jumbo",
    description: "Free Northern Virginia mortgage calculator with bi-weekly payment options, 15 vs 30-year side-by-side comparison, and DTI estimator.",
  },
};

export default function MortgageCalculatorLayout({ children }) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "Fairfax VA Mortgage & Payment Calculator",
        "url": "https://www.homesalesfairfax.com/mortgage-calculator",
        "applicationCategory": "FinanceApplication",
        "operatingSystem": "All",
        "description": "Comprehensive mortgage calculator featuring 15 vs 30-year fixed comparisons, bi-weekly extra payment schedules, jumbo loan calculations, and Fairfax County property tax integration.",
        "provider": {
          "@type": "RealEstateAgent",
          "name": "Elena Gorbounova & Kirill",
          "telephone": "(703) 625-7888",
          "url": "https://www.homesalesfairfax.com"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the difference between a 15-year and 30-year mortgage?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A 30-year mortgage offers lower monthly payments by spreading principal repayment over 360 months, making it easier to qualify and afford higher purchase prices in Northern Virginia. A 15-year mortgage has higher monthly payments but typically comes with lower interest rates (0.5% to 0.75% lower) and cuts total interest paid over the life of the loan by more than 50%."
            }
          },
          {
            "@type": "Question",
            "name": "How does a bi-weekly mortgage payment save money?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "By making half of your monthly mortgage payment every two weeks (26 bi-weekly payments per year), you make the equivalent of 13 full monthly payments annually instead of 12. That extra monthly payment goes directly toward your principal balance, shaving 4 to 6 years off a standard 30-year mortgage and saving tens of thousands in interest."
            }
          },
          {
            "@type": "Question",
            "name": "What is considered a jumbo mortgage in Fairfax County and Northern Virginia?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Fairfax County and the greater Washington, D.C. metropolitan area are designated as high-cost conforming markets by the Federal Housing Finance Agency (FHFA). In 2024–2026, the conforming loan limit for a one-unit single-family home exceeds $1,149,825. Loan amounts higher than this threshold are classified as jumbo mortgages, which may require higher down payments, larger cash reserves, and lower debt-to-income (DTI) ratios."
            }
          },
          {
            "@type": "Question",
            "name": "What is the maximum debt-to-income (DTI) ratio for a mortgage?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Conventional conforming loans typically look for a back-end debt-to-income (DTI) ratio of 43% to 45%, though strong credit scores and substantial cash reserves can allow approvals up to 50% through automated underwriting systems. Jumbo loans generally enforce stricter DTI limits of 40% to 43%."
            }
          },
          {
            "@type": "Question",
            "name": "What are discount points and rate buydowns?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "One mortgage discount point costs 1% of your total loan amount and permanently reduces your interest rate by approximately 0.25%. Temporary rate buydowns (such as a 2-1 buydown) lower your interest rate by 2% in year one and 1% in year two, often paid for by the seller or builder as a closing credit."
            }
          },
          {
            "@type": "Question",
            "name": "What is a mortgage recast and when should I use it?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A mortgage recast allows you to make a lump-sum principal reduction (usually $10,000 or more) on your existing conventional mortgage, after which your lender recalculates your monthly payment based on the new, lower balance without changing your interest rate or loan term. Recasting costs only a nominal administrative fee ($250 to $500), avoiding costly refinance closing costs."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {children}
    </>
  );
}
