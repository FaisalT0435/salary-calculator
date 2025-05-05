import { useState, useEffect } from "react";
import { fetchSalaryData } from "@/src/lib/db";

export default function Home() {
  const [lastSalary, setLastSalary] = useState(null);

  useEffect(() => {
    async function loadSalaryData() {
      const data = await fetchSalaryData();
      setLastSalary(data);
    }
    loadSalaryData();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      {lastSalary && (
        <div>
          <h2>Last Salary Take Home Pay: Rp. {lastSalary.thp}</h2>
          <h3>Last Deduction: Rp. {lastSalary.deductions}</h3>
          <h3>Last Allowance: Rp. {lastSalary.allowance}</h3>
        </div>
      )}
    </div>
  );
}
