"use client";

import React from "react";

interface CheckoutButtonProps {
  priceId: string;
  plan: string;
}

export default function CheckoutButton({ priceId, plan }: CheckoutButtonProps) {
  const handleClick = async () => {
    if (process.env.NODE_ENV === "development") {
      console.log(`[DEV] Checkout triggered for plan: ${plan}, priceId: ${priceId}`);
      alert(`DEV MODE: Checkout for "${plan}" would happen here.`);
      return;
    }

    // TODO: Replace with real Stripe checkout call in production
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId, metadata: { plan, source: "site" } }),
      });

      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        console.error("Stripe checkout error", data);
      }
    } catch (err) {
      console.error("Checkout failed", err);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="w-full py-3 mt-4 rounded-2xl font-semibold text-white shadow-lg transition transform hover:-translate-y-0.5"
      style={{
        background: "linear-gradient(90deg, #E63946, #FF6B81)",
      }}
    >
      Buy Now
    </button>
  );
}
