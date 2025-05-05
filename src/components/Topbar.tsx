"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function Topbar() {
  const { data: session } = useSession();

  return (
    <header className="bg-white p-4 flex justify-end shadow-md">
      {session ? (
        <div className="flex items-center gap-4">
          <span>{session.user?.name}</span>
          <Link href="/profile" className="text-blue-500 hover:underline">Profile</Link>
          <button onClick={() => signOut()} className="text-blue-500 hover:underline">Logout</button>
        </div>
      ) : (
        <div className="space-x-4">
          <button onClick={() => signIn()} className="text-blue-500 hover:underline">Login</button>
        </div>
      )}
    </header>
  );
}
