import "./globals.css";
import type { Metadata } from "next";
import LayoutClient from "@/components/LayoutClient";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "FlamedUp Services — Credit Repair",
  description: "Repair mistakes. Rebuild confidence. Credit repair made easy.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased text-gray-800">
        {/* ✅ Client logic lives in LayoutClient */}
        <LayoutClient>
          {children}
        </LayoutClient>
        <Footer />
      </body>
    </html>
  );
}
