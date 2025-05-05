import Sidebar from "@/src/components/Sidebar";
import Topbar from "@/src/components/Topbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Topbar />
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}
