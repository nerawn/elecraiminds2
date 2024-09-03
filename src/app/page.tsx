"use client";

import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

function MainContent() {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center text-center w-full min-h-screen text-white px-4">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 mt-4 sm:mt-6 lg:mt-8">electrAI minds</h1>
      <p className="text-base sm:text-lg lg:text-xl mb-4 sm:mb-6 lg:mb-8">
        Devre Elemanı Sınıflandırma ve Hata Tespit Arayüzü
      </p>

      {/* Kartlar sadece mobilde görünecek */}
      <div className="grid grid-cols-2 gap-6 w-full max-w-sm mb-8 sm:hidden">
        <button
          className="bg-transparent border border-white text-white py-8 rounded-lg flex flex-col items-center justify-center hover:bg-white hover:text-gray-900 transition"
          onClick={() => router.push('/direncdeger')}>
          <img src="/resistor.svg" alt="" className="w-8 h-8 mb-2" />
          Direnç Değeri
        </button>
        <button
          className="bg-transparent border border-white text-white py-8 rounded-lg flex flex-col items-center justify-center hover:bg-white hover:text-gray-900 transition"
          onClick={() => router.push('/smdtespit')}>
          <img src="/SMD.svg" alt="" className="w-8 h-8 mb-2" />
          SMD Tespit
        </button>
        <button
          className="bg-transparent border border-white text-white py-8 rounded-lg flex flex-col items-center justify-center hover:bg-white hover:text-gray-900 transition"
          onClick={() => router.push('/PCBHataAyiklama')}>
          <i className="fa-solid fa-bug text-4xl mb-2"></i> {/* Debug ikonu */}
          PCB Hata Ayıklama
        </button>
        <button
          className="bg-transparent border border-white text-white py-8 rounded-lg flex flex-col items-center justify-center hover:bg-white hover:text-gray-900 transition"
          onClick={() => router.push('/bilesen-bilgisi')}>
          <i className="fa-solid fa-question-circle text-4xl mb-2"></i> {/* Soru işareti ikonu */}
          Bileşen Bilgisi
        </button>
        <button
          className="bg-transparent border border-white text-white py-8 col-span-2 rounded-lg flex flex-col items-center justify-center hover:bg-white hover:text-gray-900 transition"
          onClick={() => router.push('/bilgi-bankasi')}>
          <img src="/book.svg" alt="" className="w-8 h-8 mb-2" />
          Bilgi Bankası
        </button>
      </div>

      {/* Butonlar mobilde alt alta, büyük ekranda yan yana */}
      <div className="flex flex-col sm:flex-row sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-8 w-full max-w-xs sm:max-w-none">
        <button
          className="bg-white text-gray-900 px-6 py-2 rounded-full font-semibold"
          onClick={() => router.push('/login')}>
          Giriş Yap
        </button>
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded-full font-semibold"
          onClick={() => router.push('/register')}>
          Kayıt Ol
        </button>
      </div>

      {/* Bu bölüm sadece mobilde görünecek */}
      <div className="mt-8 flex flex-col items-center sm:hidden">
        <Link href="/Hakkimizda">
          <p className="text-sm text-gray-400 mb-2 cursor-pointer hover:text-gray-300 transition">
            Hakkımızda
          </p>
        </Link>
        <button
          className="bg-yellow-500 text-gray-900 px-6 py-2 rounded-full font-semibold flex items-center hover:bg-yellow-600 transition"
          onClick={() => router.push('/Premium')}>
          <i className="fa-solid fa-crown mr-2"></i> Get Premium
        </button>
      </div>
    </div>
  );
}

export default MainContent;
