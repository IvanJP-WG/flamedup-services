"use client";

import { X } from "lucide-react";

export default function NoticeBar({
  onClose,
}: {
  onClose: () => void;
}) {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#E63946] to-[#FF6B81] text-white text-sm py-2 px-4 flex items-center justify-between">
      <p className="mx-auto font-medium">
        🚀 Limited Offer: Get a FREE Credit Review today!
      </p>
      <button
        onClick={onClose}
        aria-label="Close Notice"
        className="ml-4"
      >
        <X className="h-4 w-4 text-white/90 hover:text-white transition" />
      </button>
    </div>
  );
}
