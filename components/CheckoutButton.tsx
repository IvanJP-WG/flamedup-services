"use client";

import { useState } from "react";

type CheckoutButtonProps = {
  priceId: string;
  label: string;
};

export default function CheckoutButton({ priceId, label }: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId }),
      });

      if (!res.ok) throw new Error("Checkout session failed");

      const { url } = await res.json();
      window.location.href = url;
    } catch (err) {
      console.error(err);
      alert("❌ Something went wrong starting checkout.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleCheckout}
      disabled={loading}
      className="w-full bg-[#FF7A85] text-white py-2 rounded-lg font-semibold hover:bg-[#E85D70] transition disabled:opacity-50"
    >
      {loading ? "Processing..." : label}
    </button>
  );
}
