"use client";

import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useRouter } from 'next/navigation';

function MainContent() {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center text-center w-full h-screen text-white">
      <h1 className="text-4xl font-bold mb-2">electrAI minds</h1>
      <p className="text-lg mb-4">Devre Elemanı Sınıflandırma ve Hata Tespit Arayüzü</p>
      <p className="mb-8">Hemen Kullanımaya Başla!</p>
      <div>
        <button 
          className="bg-white text-gray-900 px-6 py-2 rounded-full font-semibold mr-4" 
          onClick={() => router.push('/login')}> {/* '/login' sayfasına yönlendirir */}
          Giriş Yap
        </button>
        <button 
          className="bg-blue-500 text-white px-6 py-2 rounded-full font-semibold" 
          onClick={() => router.push('/register')}> {/* '/register' sayfasına yönlendirir */}
          Kayıt Ol
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="flex h-screen">
      <MainContent />
    </div>
  );
}

export default App;
