// src/lib/db.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Fungsi untuk mengupdate profil pengguna
export async function updateUserProfile(email: string, name: string) {
  try {
    const user = await prisma.user.update({
      where: { email },
      data: { name },
    });
    return user;
  } catch (error) {
    console.error("Error updating user profile:", error);
    throw new Error("Could not update user profile");
  }
}

// Fungsi untuk menambahkan gaji
export async function addSalaryToDatabase(salaryData: any) {
  try {
    const newSalary = await prisma.salary.create({
      data: salaryData,
    });
    return newSalary;
  } catch (error) {
    console.error("Error adding salary:", error);
    throw new Error("Could not add salary data");
  }
}
