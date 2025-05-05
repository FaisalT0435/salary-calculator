"use client";

import { useState } from "react";
import Link from "next/link";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside
      className={`${
        isOpen ? "w-64" : "w-20"
      } h-screen bg-gray-800 text-white p-4 flex flex-col justify-between transition-all duration-300`}
    >
      {/* Logo Section */}
      <div
        className="flex flex-col items-center cursor-pointer mb-8"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          src="/logo.png"
          alt="Logo"
          className="w-16 h-16 mb-4"
        />
        {isOpen && (
          <h1 className="text-2xl font-extrabold text-center tracking-wide">
            Salary Calculator
          </h1>
        )}
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col items-center space-y-6 w-full">
        <SidebarLink
          href="/"
          label="Home"
          icon="🏠"
          isOpen={isOpen}
        />
        <SidebarLink
          href="/input-salary"
          label="Input Salary"
          icon="💰"
          isOpen={isOpen}
        />
        <SidebarLink
          href="/result-salary"
          label="Result Salary"
          icon="📊"
          isOpen={isOpen}
        />
        <SidebarLink
          href="/history"
          label="History"
          icon="📜"
          isOpen={isOpen}
        />
        <SidebarLink
          href="/news"
          label="News"
          icon="📰"
          isOpen={isOpen}
        />
        <SidebarLink
          href="/../app/profile"
          label="Profile"
          icon="👤"
          isOpen={isOpen}
        />
      </nav>

      {/* Footer Section */}
      <div className="flex items-center justify-center mt-auto">
        <span className="text-sm text-gray-400">
          {isOpen ? "© 2025 SalaryApp" : "©"}
        </span>
      </div>
    </aside>
  );
}

function SidebarLink({
  href,
  label,
  icon,
  isOpen,
}: {
  href: string;
  label: string;
  icon: string;
  isOpen: boolean;
}) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-4 w-full px-4 py-3 rounded-lg hover:bg-gray-700 transition ${
        isOpen ? "justify-start" : "justify-center"
      }`}
    >
      <span className="text-2xl">{icon}</span>
      {isOpen && (
        <span className="text-lg font-semibold tracking-wide">{label}</span>
      )}
    </Link>
  );
}