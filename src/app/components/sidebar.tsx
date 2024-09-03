import React from 'react';
import Link from 'next/link';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Sidebar() {
  return (
    <div className="text-white w-72 min-h-screen flex flex-col justify-between" style={{ background: '#181A1D' }}>
      <div>
        <div className="p-4">
          <a className="block text-center" href="/">
            <img src="/logo.svg" alt="logo" className="w-40 h-40 rounded-full mx-auto mb-4" />
            <h2 className="text-center font-semibold text-xl" style={{ color: '#48dbfb' }}>ElectrAI Minds</h2>
          </a>
        </div>
        <nav>
          <ul>
            <li className="px-4 py-2 hover:bg-gray-700 flex items-center py-5">
              <Link href="/direncdeger" className="flex items-center w-full">
                <img src="/resistor.svg" alt="" className="w-5 h-5 mr-3 fill-white" />
                Direnç Değeri
              </Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-700 flex items-center py-5">
              <Link href="/smdtespit" className="flex items-center w-full">
                <img src="/SMD.svg" alt="" className="w-5 h-5 mr-3 fill-white" />
                SMD Tespit
              </Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-700 flex items-center py-5">
              <Link href="/PCBHataAyiklama" className="flex items-center w-full">
                <i className="fa-solid fa-bug w-5 h-5 mr-3"></i> {/* Debug ikonu */}
                PCB Hata Ayıklama <span className="text-yellow-500 ml-1"><i className="fa-solid fa-crown mr-3" style={{ color: '#CC9236' }}></i></span>
              </Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-700 flex items-center py-5">
              <Link href="/BlesenBilgisi" className="flex items-center w-full">
                <i className="fa-solid fa-question-circle w-5 h-5 mr-3"></i> {/* Soru işareti ikonu */}
                Bileşen Bilgisi
              </Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-700 flex items-center py-5">
              <Link href="/BilgiBankasi" className="flex items-center w-full">
                <img src="/book.svg" alt="" className="w-5 h-5 mr-3 fill-white" />
                Bilgi Bankası
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="w-full mb-4">
        <ul className="flex flex-col items-center w-full">
          <li className="w-full px-4 text-gray-400 flex items-center justify-center py-5">
            <Link href="/Hakkimizda" className="flex items-center justify-center">
              Hakkımızda
            </Link>
          </li>
          <li className="w-full px-4 py-2 hover:bg-gray-700 flex items-center justify-center py-5">
            <Link href="/Premium" className="flex items-center justify-center">
              <i className="fa-solid fa-crown text-yellow-500 w-5 h-5 mr-3"></i>
              Get Premium
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
