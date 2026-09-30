export const metadata = {
  title: "Fairfax Mortgage Calculator | Monthly Payments & Rates",
  description: "Calculate estimated monthly mortgage payments for Fairfax VA real estate, including Fairfax County 1.06% real estate tax, homeowners insurance, and HOA dues.",
  alternates: {
    canonical: "https://www.homesalesfairfax.com/mortgage-calculator",
  },
  openGraph: {
    title: "Fairfax Mortgage Calculator | Monthly Payments & Rates",
    description: "Estimate monthly mortgage payments, Fairfax County real estate tax (1.06%), homeowners insurance, and HOA dues.",
    url: "https://www.homesalesfairfax.com/mortgage-calculator",
    siteName: "homesalesfairfax.com",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fairfax Mortgage Calculator | Monthly Payments & Rates",
    description: "Calculate estimated monthly mortgage payments for Fairfax VA real estate with local tax & HOA estimators.",
  },
};

export default function MortgageCalculatorLayout({ children }) {
  return children;
}
