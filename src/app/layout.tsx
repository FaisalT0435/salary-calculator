// import { SessionProvider } from "next-auth/react";
// import Sidebar from "@/src/components/Sidebar";
// import Topbar from "@/src/components/Topbar";

// export default function Layout({ children }: { children: React.ReactNode }) {
//   return (
//     <div className="flex">
//       <Sidebar />
//       <div className="flex-1">
//         <Topbar />
//         <div className="p-4">{children}</div>
//       </div>
//     </div>
//   );
// }

// src/app/layout.tsx

"use client";

import { SessionProvider } from "next-auth/react";
import Sidebar from "@/src/components/Sidebar";
import Topbar from "@/src/components/Topbar";
import "@/src/styles/global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <div className="flex">
            <Sidebar />
            <div className="flex-1">
              <Topbar />
              <div className="p-4">{children}</div>
            </div>
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
