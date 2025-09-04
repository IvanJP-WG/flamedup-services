"use client";

import { useState } from "react";

export default function AdminPage() {
  const [passcode, setPasscode] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  function handleLogin() {
    if (passcode === process.env.NEXT_PUBLIC_ADMIN_PASSCODE) {
      setAuthenticated(true);
    } else {
      alert("Invalid passcode");
    }
  }

  return (
    <main className="p-8">
      {!authenticated ? (
        <div>
          <h1 className="text-2xl font-bold">Admin Access</h1>
          <input
            type="password"
            placeholder="Enter passcode"
            className="border p-2 mt-4"
            value={passcode}
            onChange={(e) => setPasscode(e.target.value)}
          />
          <button
            onClick={handleLogin}
            className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            Login
          </button>
        </div>
      ) : (
        <div>
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <p className="mt-2 text-gray-600">
            Leads and orders will be displayed here (read-only).
          </p>
        </div>
      )}
    </main>
  );
}
