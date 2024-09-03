import React from 'react';
import Sidebar from './components/sidebar';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 min-h-screen flex">
        {/* Sidebar'ı tam ekran boyutunda tutan container */}
        <div className="flex w-full">
          <div className="hidden sm:flex w-1/4 min-h-screen h-auto">
            <Sidebar />
          </div>
          {/* Ana içeriği kapsayan bölüm */}
          <div className="flex-1 w-full sm:w-3/4 min-h-screen h-auto">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
