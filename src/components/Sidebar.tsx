import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-gray-800 text-white p-4 space-y-4">
      <h1 className="text-xl font-bold">GajiApp</h1>
      <nav className="flex flex-col space-y-2">
        <Link href="/">Home</Link>
        <Link href="/input-salary">Input Salary</Link>
        <Link href="/result-salary">Result Salary</Link>
        <Link href="/history">History</Link>
        <Link href="/news">News</Link>
      </nav>
    </aside>
  );
}
