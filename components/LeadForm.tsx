"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const LeadSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(7, "Phone required"),
  consent: z.literal(true, { message: "Consent is required" }),
});

type LeadData = z.infer<typeof LeadSchema>;

export default function LeadForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LeadData>({
    resolver: zodResolver(LeadSchema),
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const onSubmit = async (data: LeadData) => {
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
        reset();
      } else {
        throw new Error("Failed to submit lead");
      }
    } catch (err) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#FFF0F3] py-16">
      <div className="max-w-xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-center mb-6">
          Start with a Free Review
        </h2>
        <p className="text-center text-gray-600 mb-8">
          No obligation — just see what’s possible for your credit.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5 bg-white p-6 rounded-2xl shadow-md border border-[#FFD6DA]"
        >
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              {...register("name")}
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#FF7A85] focus:outline-none"
            />
            {errors.name && (
              <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              {...register("email")}
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#FF7A85] focus:outline-none"
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium mb-1">Phone</label>
            <input
              type="tel"
              {...register("phone")}
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#FF7A85] focus:outline-none"
            />
            {errors.phone && (
              <p className="text-sm text-red-500 mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Consent */}
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              {...register("consent")}
              className="mt-1"
            />
            <span className="text-sm text-gray-700">
              I agree to be contacted about my credit review and understand this
              is not legal advice.
            </span>
          </div>
          {errors.consent && (
            <p className="text-sm text-red-500">{errors.consent.message}</p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#FF7A85] text-white py-2 rounded-lg font-semibold hover:bg-[#E85D70] transition"
          >
            {loading ? "Submitting..." : "Get Free Review"}
          </button>

          {/* Status Messages */}
          {status === "success" && (
            <p className="text-green-600 text-center mt-2">
              ✅ Your request has been submitted!
            </p>
          )}
          {status === "error" && (
            <p className="text-red-600 text-center mt-2">
              ❌ Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
