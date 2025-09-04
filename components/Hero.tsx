import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:py-32 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Text Block */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight mb-6">
            <span
              style={{
                background: "linear-gradient(90deg, #E63946, #FF6B81)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Repair mistakes.
            </span>{" "}
            <br />
            Rebuild confidence.
          </h1>

          <p className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 mb-8">
            Professional credit repair focused on accuracy, transparency, and
            fast dispute handling.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              href="#lead-form"
              className="px-6 py-3 rounded-2xl font-semibold text-white shadow-lg transition transform hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(90deg, #E63946, #FF6B81)",
              }}
            >
              Get a Free Credit Review
            </Link>

            <Link
              href="/pricing"
              className="px-6 py-3 rounded-2xl font-semibold border border-[#E63946] text-[#E63946] hover:bg-[#FFF0F3] transition"
            >
              View Plans
            </Link>
          </div>
        </div>

        {/* Right Visual / Placeholder */}
        <div className="flex-1 hidden lg:flex justify-center">
          <div className="w-80 h-80 rounded-2xl bg-gradient-to-tr from-[#E63946]/10 to-[#FF6B81]/20 flex items-center justify-center shadow-inner">
            <span className="text-6xl">🔥</span>
          </div>
        </div>
      </div>
    </section>
  );
}
