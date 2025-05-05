type Props = {
    label: string;
    value: number;
    currency?: boolean;
  };
  
  export default function ResultCard({ label, value, currency = true }: Props) {
    return (
      <div className="border p-4 rounded shadow bg-white">
        <h3 className="text-sm font-medium text-gray-500">{label}</h3>
        <p className="text-lg font-bold text-gray-900">
          {currency ? `Rp${value.toLocaleString()}` : value}
        </p>
      </div>
    );
  }
  