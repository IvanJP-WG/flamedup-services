import { CheckCircle } from "lucide-react";

const steps = [
  {
    title: "Free Review",
    description:
      "Upload your report or connect via secure link. We outline errors and opportunities.",
    icon: <CheckCircle className="h-8 w-8 text-[#E63946]" />,
  },
  {
    title: "Dispute & Verify",
    description:
      "We prepare and send bureau and creditor letters on your behalf.",
    icon: <CheckCircle className="h-8 w-8 text-[#E63946]" />,
  },
  {
    title: "Track & Improve",
    description:
      "Get updates, next steps, and builder resources to improve your credit.",
    icon: <CheckCircle className="h-8 w-8 text-[#E63946]" />,
  },
];

export default function ProcessSteps() {
  return (
    <section className="bg-[#FFF0F3] py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold text-center mb-12">
          How FlamedUp Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
