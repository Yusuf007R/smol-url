"use client";

import { type Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";

export default function Auth({ session }: { session: Session | null }) {
  return (
    <button
      className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
      onClick={() => {
        const provider = "github";
        if (!session) return signIn(provider);
        return signOut();
      }}
    >
      {!session ? "Sign in" : "Sign out"}
    </button>
  );
}
