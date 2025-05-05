type SalaryResult = {
    gajiPokok: number;
    tunjanganTetap: number;
    tunjanganTidakTetap: number;
    bonus: number;
    thr: number;
    potongan: number;
    pph21: number;
    thp: number;
  };
  
  type Props = {
    result: SalaryResult;
  };
  
  export default function ResultTable({ result }: Props) {
    return (
      <table className="w-full border text-sm">
        <tbody>
          <tr><td>Gaji Pokok</td><td className="text-right">Rp{result.gajiPokok.toLocaleString()}</td></tr>
          <tr><td>Tunjangan Tetap</td><td className="text-right">Rp{result.tunjanganTetap.toLocaleString()}</td></tr>
          <tr><td>Tunjangan Tidak Tetap</td><td className="text-right">Rp{result.tunjanganTidakTetap.toLocaleString()}</td></tr>
          <tr><td>Bonus</td><td className="text-right">Rp{result.bonus.toLocaleString()}</td></tr>
          <tr><td>THR</td><td className="text-right">Rp{result.thr.toLocaleString()}</td></tr>
          <tr><td>Total Potongan</td><td className="text-right">Rp{result.potongan.toLocaleString()}</td></tr>
          <tr><td>PPh 21</td><td className="text-right">Rp{result.pph21.toLocaleString()}</td></tr>
          <tr className="font-bold border-t-2">
            <td>Take Home Pay (THP)</td>
            <td className="text-right text-green-600">Rp{result.thp.toLocaleString()}</td>
          </tr>
        </tbody>
      </table>
    );
  }
  