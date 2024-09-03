"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function SMDtespit() {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const router = useRouter();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => { 
    const file = event.target.files ? event.target.files[0] : null;
    setSelectedFile(file ? file.name : null);
  };

  const handleUploadClick = () => {
    const fileInput = document.getElementById('fileInput');
    if (fileInput) {
      fileInput.click();
    }
  };
  return (
    <div className="flex flex-col justify-center items-center w-full text-white p-8">

      {/* Back button - only visible on mobile */}
      <div className="w-full max-w-3xl mb-4">
        <button
          className="sm:hidden flex items-center text-gray-300 text-lg mb-4"
          onClick={() => router.push('/')}
        >
          <i className="fa-solid fa-chevron-left mr-2"></i> {/* Back icon */}
          Geri
        </button>
      </div>

      <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center">SMD Değer Hesaplama</h1> {/* Başlık responsive */}
      <p className="text-base sm:text-lg mb-8 text-center">
        Fotoğrafını yüklediğiniz SMD komponentin hangi değeri ifade ettiğini açıklar.
      </p>
      <div
        className="flex flex-col items-center rounded-3xl p-10 sm:p-20 border-2 sm:border-4 border-dashed border-gray-600 w-full max-w-3xl cursor-pointer"
        onClick={handleUploadClick}
      >
        <input
          type="file"
          id="fileInput"
          className="hidden"
          onChange={handleFileChange}
        />
        <div className="flex flex-col justify-center items-center w-full h-40 sm:h-60 mb-6">
          <i className="fa-solid fa-cloud-arrow-up text-4xl sm:text-6xl text-gray-100"></i>
          <p className="text-gray-100 mt-2 text-center text-sm sm:text-base">
            Yüklemek için tıklayın veya sürükleyin
          </p>
          <p className="text-xs sm:text-sm text-gray-300 mt-1 text-center">
            SVG, PNG, JPG or GIF (MAX. 800x400)
          </p>
        </div>
        {selectedFile && (
          <p className="text-gray-100 mt-4 text-center text-sm sm:text-base">
            Yüklenen Dosya: <span className="font-semibold">{selectedFile}</span>
          </p>
        )}
      </div>
      <br />
      <button className="bg-blue-500 text-white px-6 py-2 rounded-xl font-semibold">
        Gönder
      </button>
    </div>
  );
}
