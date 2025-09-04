import PackageCard from "@/components/PackageCard";

export default function PricingPage() {
  const plans: {
  plan: string;
  price: string;
  features: string[];
  priceId: "price_creditlift_starter" | "price_creditlift_standard" | "price_creditlift_complete";
}[] = [
  {
    plan: "Starter Repair",
    price: "99",
    features: [
      "1 credit bureau dispute cycle (Equifax)",
      "Error identification report (PDF)",
      "Sample goodwill letter templates",
      "Email support 14 days",
      "Workflow kicks off immediately",
    ],
    priceId: "price_creditlift_starter", // exact literal
  },
  {
    plan: "Standard Repair",
    price: "199",
    features: [
      "2 bureau dispute cycles (Equifax, TransUnion)",
      "Customized dispute letters (up to 5 items)",
      "Creditor verification requests",
      "Progress tracker link",
      "Email support 30 days",
    ],
    priceId: "price_creditlift_standard", // exact literal
  },
  {
    plan: "Complete Repair",
    price: "349",
    features: [
      "3 bureau dispute cycles (Equifax, TransUnion, Experian)",
      "Customized dispute letters (up to 12 items)",
      "Creditor + collector validation letters",
      "Review call (20 minutes) via Calendly",
      "Email support 60 days",
    ],
    priceId: "price_creditlift_complete", // exact literal
  },
];


  return (
    <main className="pt-24 max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-12 text-center">Our Plans</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((p) => (
          <PackageCard key={p.plan} {...p} />
        ))}
      </div>
    </main>
  );
}
