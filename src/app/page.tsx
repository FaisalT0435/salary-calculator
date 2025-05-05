"use client";

import { useState, useEffect } from "react";
import { fetchSalaryData } from "@/src/lib/db";

export default function Home() {
  const [lastSalary, setLastSalary] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadSalaryData() {
      try {
        const data = await fetchSalaryData();
        setLastSalary(data);
      } catch (error) {
        console.error("Failed to fetch salary data:", error);
      } finally {
        setIsLoading(false);
      }
    }
    loadSalaryData();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : lastSalary ? (
        <div>
          <h2>Last Salary Take Home Pay: Rp. {lastSalary.thp}</h2>
          <h3>Last Deduction: Rp. {lastSalary.deductions}</h3>
          <h3>Last Allowance: Rp. {lastSalary.allowance}</h3>
        </div>
      ) : (
        <p>No salary data available.</p>
      )}
    </div>
  );
}
