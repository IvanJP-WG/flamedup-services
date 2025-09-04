// app/resources/[slug]/page.tsx
"use client"; // optional if you need client features

import React from "react";

interface Props {
  params: any; // DEV-SAFE: bypass TypeScript issues for now
}

export default function ResourcePage({ params }: Props) {
  const slug = params?.slug ?? "unknown";

  return <p>Resource: {slug}</p>;
}
