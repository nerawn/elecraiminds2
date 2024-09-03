import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function PremiumPage() {
  return (
    <div className="flex flex-col items-center justify-center text-white p-8">
      <h1 className="text-6xl font-bold mb-12 text-center">Premium</h1>

      <div className="flex flex-col sm:flex-row justify-center gap-8">
        {/* Discovery Pack */}
        <div className="flex flex-col items-center bg-gray-800 rounded-xl p-8 max-w-sm sm:max-w-xs">
          <div className="text-yellow-500 text-3xl mb-4"> {/* Discovery Pack taç ikonu büyüklüğü */}
            <i className="fa-solid fa-crown"></i>
          </div>
          <h2 className="text-2xl font-bold mb-4">Discovery Pack</h2>
          <p className="text-sm text-gray-400 mb-4 text-center">
            Yeni başlayanlar için temel özellikler.
          </p>
          <p className="text-sm text-gray-300 mb-8 text-center flex-grow">
            Bu paket, yeni başlayanlar için temel düzeyde hata tespiti ve sınıflandırma özelliklerini içerir. Kullanıcıların sistemle tanışmasını ve ilk adımlarını atmasını sağlar.
          </p>
          <ul className="text-sm text-gray-300 mb-8 text-left">
            <li>• Temel hata tespiti.</li>
            <li>• Sınırlı raporlama ve görüntü işleme.</li>
          </ul>
          <div className="flex flex-col items-center">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-xl font-semibold mb-4">
              Hemen Başla
            </button>
            <p className="text-lg font-semibold">19,90/Ay</p>
          </div>
        </div>

        {/* Progress Pack */}
        <div className="flex flex-col items-center bg-gray-800 rounded-xl p-8 max-w-sm sm:max-w-xs">
          <div className="text-yellow-500 text-4xl mb-4"> {/* Progress Pack taç ikonu büyüklüğü */}
            <i className="fa-solid fa-crown"></i>
          </div>
          <h2 className="text-2xl font-bold mb-4">Progress Pack</h2>
          <p className="text-sm text-gray-400 mb-4 text-center">
            Orta düzey kullanıcılar için gelişmiş araçlar.
          </p>
          <p className="text-sm text-gray-300 mb-8 text-center flex-grow">
            Orta düzey kullanıcılar için daha gelişmiş hata tespiti ve profesyonel raporlama seçenekleri sunar. Bu paket, kullanıcıların daha derin analizler yapmasına ve projelerinde daha fazla kontrol sahibi olmasına imkan tanır.
          </p>
          <ul className="text-sm text-gray-300 mb-8 text-left">
            <li>• Gelişmiş hata tespiti.</li>
            <li>• Özelleştirilebilir raporlama.</li>
            <li>• Yüksek çözünürlüklü görüntü işleme.</li>
          </ul>
          <div className="flex flex-col items-center">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-xl font-semibold mb-4">
              Hemen Başla
            </button>
            <p className="text-lg font-semibold">39,90/Ay</p>
          </div>
        </div>

        {/* Mastery Pack */}
        <div className="flex flex-col items-center bg-gray-800 rounded-xl p-8 max-w-sm sm:max-w-xs">
          <div className="text-yellow-500 text-5xl mb-4"> {/* Mastery Pack taç ikonu büyüklüğü */}
            <i className="fa-solid fa-crown"></i>
          </div>
          <h2 className="text-2xl font-bold mb-4">Mastery Pack</h2>
          <p className="text-sm text-gray-400 mb-4 text-center">
            Profesyoneller için tam özellikli çözüm.
          </p>
          <p className="text-sm text-gray-300 mb-8 text-center flex-grow">
            Profesyonel kullanıcılar ve ileri düzeyde eğitim materyalleri isteyenler için ideal bir pakettir. Tam özellikli, eksiksiz bir çözüm sunar ve kullanıcıların tüm projelerinde maksimum verimlilik sağlamalarını hedefler.
          </p>
          <ul className="text-sm text-gray-300 mb-8 text-left">
            <li>• Tüm gelişmiş hata tespiti ve sınıflandırma özellikleri.</li>
            <li>• Kapsamlı raporlama ve analiz seçenekleri.</li>
            <li>• Kendi veri setlerini ekleyerek modeli eğitme imkanı.</li>
            <li>• Reklamsız kullanım ve öncelikli destek.</li>
          </ul>
          <div className="flex flex-col items-center">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-xl font-semibold mb-4">
              Hemen Başla
            </button>
            <p className="text-lg font-semibold">59,90/Ay</p>
          </div>
        </div>
      </div>
    </div>
  );
}
