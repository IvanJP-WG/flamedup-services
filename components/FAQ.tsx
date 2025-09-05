"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How long does credit repair take?",
    a: "Most clients see improvements within 30–90 days, but timelines depend on your credit history and the items being disputed.",
  },
  {
    q: "Do you offer a money-back guarantee?",
    a: "Yes. If we don’t deliver any dispute results within the first 90 days, you’re eligible for a refund as outlined in our terms.",
  },
  {
    q: "Will credit repair hurt my score?",
    a: "No. Disputing inaccurate or unverifiable items generally improves your credit score by cleaning up your report.",
  },
  {
    q: "Is my information secure?",
    a: "Absolutely. We use encrypted document handling and never share your data without consent.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-[#FFF0F3] py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold text-center mb-12">
          Frequently Asked Questions
        </h2>

        <Accordion.Root
          type="single"
          collapsible
          className="space-y-4"
        >
          {faqs.map((item, i) => (
            <Accordion.Item
              key={i}
              value={`item-${i}`}
              className="bg-white rounded-xl shadow-md border border-[#FFD6DA] overflow-hidden"
            >
              <Accordion.Header>
                <Accordion.Trigger className="w-full flex justify-between items-center px-6 py-4 font-medium text-left text-gray-900 hover:bg-[#FFE6EA] transition">
                  {item.q}
                  <ChevronDown className="h-5 w-5 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="px-6 pb-4 text-gray-700">
                {item.a}
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
