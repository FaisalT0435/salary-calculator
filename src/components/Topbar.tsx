"use client";

import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Topbar() {
    const { data: session } = useSession();

    return (
        <header className="bg-gray-100 p-4 flex justify-between items-center">
            {/* Logo Section */}
            <Logo />

            {/* User Actions Section */}
            <UserActions session={session} />
        </header>
    );
}

/* Component for Logo or Brand Name */
function Logo() {
    return (
        <div className="text-xl font-bold">
            <Link href="/">Salary Calculator</Link>
        </div>
    );
}

/* Component for User Actions */
function UserActions({ session }: { session: any }) {
    return (
        <div>
            {session ? (
                <LoggedInActions session={session} />
            ) : (
                <LoggedOutActions />
            )}
        </div>
    );
}

/* Component for Logged-In User Actions */
function LoggedInActions({ session }: { session: any }) {
    return (
        <div className="flex items-center gap-4">
            <span className="text-gray-700 font-medium">
                Welcome, {session.user?.name || "User"}
            </span>
            <Link
                href="/app/profile"
                className="text-blue-600 hover:underline"
            >
                Profile
            </Link>
            <button
                onClick={() => signOut()}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
                Logout
            </button>
        </div>
    );
}

/* Component for Logged-Out User Actions */
function LoggedOutActions() {
    return (
        <div className="space-x-4">
            <button
                onClick={() => signIn()}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                Login
            </button>
            <button
                onClick={() => signIn()}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
                Signup
            </button>
        </div>
    );
}