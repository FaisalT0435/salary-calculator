export interface Potongan {
    nama: string;
    jumlah: number;
  }
  
  export interface SalaryInput {
    gajiPokok: number;
    tunjanganTetap: number;
    tunjanganTidakTetap: number;
    bonusPersen: number;
    thr: number;
    statusPTKP: string;
    iuranPensiun: number;
    npwp: boolean;
    potonganLain: Potongan[];
  }
  