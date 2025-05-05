"use client";
import { useState } from "react";

type Potongan = {
  nama: string;
  jumlah: number;
};

type Props = {
  potonganLain: Potongan[];
  setPotonganLain: (value: Potongan[]) => void;
};

export default function PotonganInputList({ potonganLain, setPotonganLain }: Props) {
  const [newPotongan, setNewPotongan] = useState({ nama: "", jumlah: 0 });

  const handleAdd = () => {
    if (!newPotongan.nama || newPotongan.jumlah <= 0) return;
    setPotonganLain([...potonganLain, newPotongan]);
    setNewPotongan({ nama: "", jumlah: 0 });
  };

  const handleRemove = (index: number) => {
    const updated = [...potonganLain];
    updated.splice(index, 1);
    setPotonganLain(updated);
  };

  return (
    <div className="space-y-2">
      <h4 className="font-semibold">Potongan Lain</h4>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Nama Potongan"
          value={newPotongan.nama}
          onChange={(e) => setNewPotongan({ ...newPotongan, nama: e.target.value })}
          className="border px-2 py-1"
        />
        <input
          type="number"
          placeholder="Jumlah"
          value={newPotongan.jumlah}
          onChange={(e) => setNewPotongan({ ...newPotongan, jumlah: Number(e.target.value) })}
          className="border px-2 py-1"
        />
        <button type="button" onClick={handleAdd} className="bg-blue-500 text-white px-3 py-1 rounded">
          Tambah
        </button>
      </div>
      <ul className="list-disc ml-5">
        {potonganLain.map((potongan, index) => (
          <li key={index}>
            {potongan.nama} - Rp{potongan.jumlah.toLocaleString()}
            <button
              onClick={() => handleRemove(index)}
              className="ml-2 text-red-600 hover:underline"
            >
              Hapus
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
