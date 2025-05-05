import prisma from "@/src/lib/db";
import { getServerSession } from "next-auth";

export default async function HistoryPage() {
  const session = await getServerSession();
  const data = await prisma.salary.findMany({
    where: { user: { email: session?.user?.email ?? "" } },
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      createdAt: true,
      gajiPokok: true,
      thr: true,
    },
  });

  return (
    <div>
      <h1>History</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.createdAt.toLocaleDateString()} - Gaji Pokok: Rp{item.gajiPokok} - THR: Rp{item.thr}
          </li>
        ))}
      </ul>
    </div>
  );
}
