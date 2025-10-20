import React, { useState } from "react";

function CardSiswa({ nama, kelas }) {
  const [status, setStatus] = useState("Belum Absen");

  return (
    <div
      className="border p-4 rounded-2xl shadow-md flex flex-col items-center justify-between w-64 bg-white"
    >
      <h2 className="text-xl font-semibold">{nama}</h2>
      <p className="text-gray-600 mb-2">Kelas {kelas}</p>
      <p
        className={`mb-3 font-bold ${
          status === "Hadir"
            ? "text-green-600"
            : status === "Izin"
            ? "text-yellow-500"
            : "text-gray-400"
        }`}
      >
        Status: {status}
      </p>
      <div className="flex gap-2">
        <button
          onClick={() => setStatus("Hadir")}
          className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600 transition"
        >
          Hadir
        </button>
        <button
          onClick={() => setStatus("Izin")}
          className="bg-yellow-500 text-white px-3 py-1 rounded-lg hover:bg-yellow-600 transition"
        >
          Izin
        </button>
      </div>
    </div>
  );
}

export default function App() {
  const siswaList = [
    { nama: "Alya Putri", kelas: "XII IPA 1" },
    { nama: "Budi Santoso", kelas: "XII IPA 1" },
    { nama: "Citra Dewi", kelas: "XII IPS 2" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 p-6">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">📋 Absensi Siswa</h1>

      {/* Flexbox Container di Tengah */}
      <div className="flex flex-wrap justify-center gap-6">
        {siswaList.map((siswa, index) => (
          <CardSiswa key={index} nama={siswa.nama} kelas={siswa.kelas} />
        ))}
      </div>
    </div>
  );
}
