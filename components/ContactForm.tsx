"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const ContactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  subject: z.string().min(3, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactData = z.infer<typeof ContactSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactData>({
    resolver: zodResolver(ContactSchema),
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const onSubmit = async (data: ContactData) => {
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
        reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (err) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
        <p className="text-center text-gray-600 mb-10">
          Have questions? Send us a message and we’ll get back to you quickly.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5 bg-[#FFF0F3] p-6 rounded-2xl shadow-md border border-[#FFD6DA]"
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

          {/* Subject */}
          <div>
            <label className="block text-sm font-medium mb-1">Subject</label>
            <input
              type="text"
              {...register("subject")}
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#FF7A85] focus:outline-none"
            />
            {errors.subject && (
              <p className="text-sm text-red-500 mt-1">
                {errors.subject.message}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              rows={5}
              {...register("message")}
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#FF7A85] focus:outline-none"
            ></textarea>
            {errors.message && (
              <p className="text-sm text-red-500 mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#FF7A85] text-white py-2 rounded-lg font-semibold hover:bg-[#E85D70] transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {/* Status */}
          {status === "success" && (
            <p className="text-green-600 text-center mt-2">
              ✅ Message sent successfully!
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
