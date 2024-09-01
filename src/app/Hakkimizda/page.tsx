import React from 'react';

export default function AboutUsPage() {
  const teamMembers = [
    {
      name: "Mustafa DURSUN",
      role: "Yazılım Geliştirici",
      image: "/images/ali-yilmaz.jpg",
      description: "Direnç Elemanı Görüntü veri kümesi oluşturmak, derin öğrenme sınıflandırılması, arayüz ile entegrasyonu",
      phone: "tel:+905555555555",
      email: "mailto:ali.yilmaz@example.com"
    },
    {
      name: "İrem Nur KARCI",
      role: "Takım Kaptanı",
      image: "/images/ayse-demir.jpg",
      description: "PCB devre üzerinde SMD bileşenleri ve hata tespiti için veri kümesi oluşturma derin öğrenme sınıflandırılması",
      phone: "tel:+905555555556",
      email: "mailto:ayse.demir@example.com"
    },
    {
      name: "Engin ŞENAYDIN",
      role: "Elektrik Elektronik Mühendisi",
      image: "/images/mehmet-kaya.jpg",
      description: "Matlab Uygulama Geliştirme",
      phone: "tel:+905555555557",
      email: "mailto:mehmet.kaya@example.com"
    },
    {
      name: "Emirhan IRMAK",
      role: "Ön Yüz Geliştirici",
      image: "/images/fatma-oz.jpg",
      description: "Web Uygulaması Front End Geliştirme",
      phone: "tel:+905555555558",
      email: "mailto:fatma.oz@example.com"
    },
    {
      name: "Hakan Çelik",
      role: "Arka Plan Geliştirici",
      image: "/images/ahmet-celik.jpg",
      description: "Web Uygulaması Back end Geliştirme",
      phone: "tel:+905555555559",
      email: "mailto:ahmet.celik@example.com"
    },
    {
      name: "Tarık Can Öztürk",
      role: "Arayüz Entegrasyonu ",
      image: "/images/zeynep-sahin.jpg",
      description: "SMD Bileşenlerin sınıflandırılması",
      phone: "tel:+905555555560",
      email: "mailto:zeynep.sahin@example.com"
    }
  ];

  const leader = {
    name: "Ögr.Gör. Özge Taylan Moral",
    role: "Danışman",
    image: "/images/ozge-taylan-moral.jpg",
    description: "",
    phone: "tel:+905555555561",
    email: "mailto:ozge.taylan@example.com"
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-8 text-center text-white">Hakkımızda</h1>
      <p className="mb-12 text-center max-w-8xl text-gray-300">
      electrAI minds takımı 2024 yılı başında elektronik ve otomasyon
bölümü öğrencilerinin eğitim teknolojileri alanında uygulama
geliştirmesi amacıyla kurulmuştur. Önlisans öğrencilerinin bir araya
gelerek oluşturduğu bu takım temel elektronik bilgisi ve elektronik
devreler ile yapay zeka teknolojilerini birleştirerek öğrencilerin
yenilikçi eğitim araçları ile interaktif öğrenmesini desteklemeyi ve
eğitim teknolojilerine katkıda bulunmayı amaçlamaktadır. Bu proje
ile devre elemanlarının tanımlanması, baskı devre elemanlarının
sınıflandırılması ve baskı devre üzerindeki hataların otomatik olarak
tespit edilmesi hedeflenmektedir. Elektronik devre tasarımı ve
yazılım alanlarında ilgili bu takım, hedeflerini Türkçe ve İngilizce dil
destekli bir masaüstü arayüzü ile birleştirerek öğrencilerin ders
içeriklerini interaktif olarak takip etmesini sağlayacak, yer ve zaman
engeli olmadan öğrendiklerini pekiştirmelerine olanak verecektir.
      </p>
     
      <h2 className="text-3xl font-bold mb-8 text-center text-white">Ekip Üyeleri</h2>
      
      {/* Lider Kartı */}
      <div className="bg-gray-700 p-4 rounded-lg shadow-lg flex flex-col items-center w-96 mb-10">
        <div className="w-24 h-24 bg-gray-500 rounded-full mb-4">
          <img src={leader.image}  className="w-full h-full rounded-full object-cover" />
        </div>
        <h3 className="text-lg font-semibold mb-2 text-white">{leader.name}</h3>
        <p className="text-sm text-gray-400 mb-1">{leader.role}</p>
        <p className="text-gray-300 text-center text-sm mb-4">{leader.description}</p>
        <div className="flex space-x-4">
          <a href={leader.phone} className="text-white hover:text-gray-400">
            <i className="fas fa-phone"></i>
          </a>
          <a href={leader.email} className="text-white hover:text-gray-400">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>

      {/* Ekip Üyeleri Kartları */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => (
          <div 
            key={index} 
            className="bg-gray-700 p-4 rounded-lg shadow-lg flex flex-col items-center w-96"
          >
            <div className="w-24 h-24 bg-gray-500 rounded-full mb-4">
              <img src={member.image} className="w-full h-full rounded-full object-cover" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-white">{member.name}</h3>
            <p className="text-sm text-gray-400 mb-1">{member.role}</p>
            <p className="text-gray-300 text-center text-sm mb-4">{member.description}</p>
            <div className="flex space-x-4">
              <a href={member.phone} className="text-white hover:text-gray-400">
                <i className="fas fa-phone"></i>
              </a>
              <a href={member.email} className="text-white hover:text-gray-400">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
