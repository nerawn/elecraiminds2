import React from 'react';
import Sidebar from './components/sidebar';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './globals.css'; // Global CSS dosyasını burada kullanıyoruz

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex" style={{ background: '#151719'}} >
        <div className="flex h-screen w-full">
          <Sidebar  />
          <div className="flex-1 text-white p-8" style={{ background: '#151719'}}> 
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
