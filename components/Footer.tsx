import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-[#FFF0F3] mt-16">
      <div className="mx-auto max-w-6xl px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h2
            className="text-2xl font-extrabold tracking-tight mb-3"
            style={{
              background: "linear-gradient(90deg, #E63946, #FF6B81)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            FlamedUp
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Repair mistakes. Rebuild confidence.  
            Credit repair services with transparency and speed.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-gray-900 font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/pricing" className="hover:text-[#E63946] transition">
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="/resources"
                className="hover:text-[#E63946] transition"
              >
                Resources
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#E63946] transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-gray-900 font-semibold mb-3">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/legal/privacy"
                className="hover:text-[#E63946] transition"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/legal/terms"
                className="hover:text-[#E63946] transition"
              >
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Compliance + copyright */}
      <div className="border-t py-6 text-center text-xs text-gray-500">
        <p>
          We are a credit repair service focused on accuracy and consumer
          education. We are not a law firm and do not provide legal advice.
          <br />
          You have the right to dispute inaccurate information in your credit
          report under the FCRA.
        </p>
        <p className="mt-3">© {new Date().getFullYear()} FlamedUp Services</p>
      </div>
    </footer>
  );
}
