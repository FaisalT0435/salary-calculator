export function calculateSalary(formData: any) {
    const { gajiPokok, tunjanganTetap, tunjanganTidakTetap, bonusPersen, thr, statusPTKP, iuranPensiun, npwp, potonganLain } = formData;
    
    // Implement salary calculation logic here...
    const thp = gajiPokok + tunjanganTetap + tunjanganTidakTetap + (gajiPokok * bonusPersen) / 100 - iuranPensiun; // Example calculation
    const deductions = 0; // Example deductions
    const allowance = 0; // Example allowance
  
    return { thp, deductions, allowance };
  }
  