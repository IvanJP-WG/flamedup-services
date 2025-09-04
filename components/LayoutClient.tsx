"use client";

import { useState } from "react";
import Header from "@/components/Header";
import NoticeBar from "@/components/NoticeBar";

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const [showNotice, setShowNotice] = useState(true);

  return (
    <>
      {showNotice && <NoticeBar onClose={() => setShowNotice(false)} />}
      <Header offsetTop={showNotice} />
      <main className={`transition-all duration-300 ${showNotice ? "pt-32" : "pt-24"}`}>
        {children}
      </main>
    </>
  );
}
