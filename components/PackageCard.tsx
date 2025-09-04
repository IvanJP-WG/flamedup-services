import CheckoutButton from "./CheckoutButton";

interface PackageCardProps {
  plan: string;
  price: string;
  features: string[];
  priceId: "price_creditlift_starter" | "price_creditlift_standard" | "price_creditlift_complete";
}

export default function PackageCard({ plan, price, features, priceId }: PackageCardProps) {
  return (
    <div className="border rounded-2xl shadow-md p-6 flex flex-col justify-between hover:shadow-xl transition">
      <div>
        <h3 className="text-xl font-bold mb-2">{plan}</h3>
        <p className="text-3xl font-extrabold mb-4">${price}</p>

        <ul className="space-y-2 mb-6">
          {features.map((f, i) => (
            <li key={i} className="text-gray-700">
              • {f}
            </li>
          ))}
        </ul>
      </div>

      <CheckoutButton
        priceId={priceId}
        plan={plan}
      />
    </div>
  );
}
