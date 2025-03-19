"use client";

import { Login } from "@/components/auth/Login";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [username, setUsername] = useState("");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8 text-center">Welcome to Enterprise App Integration Helper</h1>
        <div className="flex flex-col items-center mb-6">
          <label htmlFor="search" className="mb-2 text-sm font-medium">Enter your username (SamAccountName/Email)</label>
          <input 
            type="text" 
            id="search" 
            className="px-4 py-2 border border-gray-300 rounded-md w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your username..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="flex justify-center">
          {username ? (
            <Login username={username} />
          ) : (
            <Button disabled>Login</Button>
          )}
        </div>
      </div>
    </main>
  );
}
