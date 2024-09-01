"use client";

import React, { useState } from 'react';

export default function SmdTespitPage() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file ? file.name : null);
  };

  const handleUploadClick = () => {
    document.getElementById('fileInput').click();
  };

  return (
    <div className="flex flex-col justify-center items-center w-full text-white p-8">
      <h1 className="text-4xl font-bold mb-4">SMD Değer Hesaplama</h1>
      <p className="text-lg mb-8">
        Fotoğrafını yüklediğiniz SMD komponentin hangi değeri ifade ettiğini açıklar.
      </p>
      <div
        className="flex flex-col items-center rounded-3xl p-20 border-2 border-dashed border-gray-600 w-full max-w-3xl cursor-pointer"
        onClick={handleUploadClick}
      >
        <input
          type="file"
          id="fileInput"
          className="hidden"
          onChange={handleFileChange}
        />
        <div className="flex flex-col justify-center items-center w-full h-60 mb-6">
          <i className="fa-solid fa-cloud-arrow-up text-6xl text-gray-100"></i>
          <p className="text-gray-100 mt-2">
            Yüklemek için tıklayın veya sürükleyin
          </p>
          <p className="text-xs text-gray-300 mt-1">
            SVG, PNG, JPG or GIF (MAX. 800x400)
          </p>
        </div>
        {selectedFile && (
          <p className="text-gray-100 mt-4">
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
