// src/app/profile/page.tsx
"use client"; // Menandakan bahwa ini adalah Client Component

import { useSession } from "next-auth/react";
import { useState } from "react";
import { updateUserProfile } from "@/src/lib/db"; // Fungsi untuk update data di DB
import { useRouter } from "next/navigation"; // Untuk redirect

export default function ProfilePage() {
  const { data: session } = useSession(); // Mengambil session
  const [name, setName] = useState(session?.user?.name || "");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Handler untuk mengupdate nama pengguna
  const handleUpdate = async () => {
    setLoading(true);

    try {
      // Update profile di database
      const updatedUser = await updateUserProfile(session?.user?.email ?? "", name);
      setLoading(false);
      router.push("/profile"); // Redirect setelah update
    } catch (error) {
      console.error("Error updating profile:", error);
      setLoading(false);
    }
  };

  if (!session) {
    return (
      <div className="p-4">
        <p>You need to be logged in to view this page.</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Profile</h1>
      <div className="my-4">
        <p>Email: {session.user?.email}</p>
        <p>Name: {session.user?.name}</p>
      </div>

      <div className="my-4">
        <h2 className="text-xl">Edit Profile</h2>
        <div className="mt-2">
          <label htmlFor="name" className="block">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 w-full mt-1"
            placeholder="Enter your name"
          />
        </div>

        <button
          onClick={handleUpdate}
          disabled={loading}
          className={`mt-4 p-2 w-full bg-blue-500 text-white ${loading ? 'bg-blue-300' : ''}`}
        >
          {loading ? "Updating..." : "Update Profile"}
        </button>
      </div>
    </div>
  );
}
