"use client";

import { useState } from "react";
import { calculateSalary } from "@/src/lib/calculator";

export default function SalaryForm() {
  const [formData, setFormData] = useState({
    gajiPokok: 0,
    tunjanganTetap: 0,
    tunjanganTidakTetap: 0,
    bonusPersen: 0,
    thr: 0,
    statusPTKP: "",
    iuranPensiun: 0,
    npwp: false,
    potonganLain: [],
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = calculateSalary(formData);
    // Simpan hasil ke database
    // Add saving logic
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form Fields */}
      <button type="submit">Submit</button>
    </form>
  );
}
