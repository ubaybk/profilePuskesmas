import { useState, useEffect } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

const TataNilai = () => {
  const [isVisible, setIsVisible] = useState({});
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Animation for BerAKHLAK letters
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLetterIndex((prev) => (prev + 1) % 9);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  const nilaiItems = [
    {
      title: "Amanah",
      description: "Dapat dipercaya, bertindak jujur, objektif, dan bertanggung jawab dalam menjalankan tugas pelayanan kesehatan.",
      color: "amber",
      gradient: "from-amber-400 to-orange-500",
      letter: "A",
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      title: "Kompeten",
      description: "Menguasai kompetensi bidang tugas kesehatan, terus belajar, serta berkembang untuk memberikan pelayanan terbaik.",
      color: "blue",
      gradient: "from-blue-500 to-indigo-600",
      letter: "K",
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
        </svg>
      ),
    },
    {
      title: "Harmonis",
      description: "Menjaga hubungan kerja yang selaras, inklusif, dan saling mendukung untuk menciptakan lingkungan kerja yang kondusif.",
      color: "emerald",
      gradient: "from-emerald-500 to-teal-600",
      letter: "H",
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3.75 2A1.75 1.75 0 002 3.75v.443c0 .572.2 1.126.566 1.566L5 8.5v6.25c0 .414.336.75.75.75h8.5c.414 0 .75-.336.75-.75V8.5l2.434-2.741A2.25 2.25 0 0018 4.193V3.75A1.75 1.75 0 0016.25 2H3.75zM10 6a2 2 0 100 4 2 2 0 000-4z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      title: "Loyal",
      description: "Setia pada organisasi, bangsa, negara, dan menjunjung tinggi kode etik profesi kesehatan dengan penuh dedikasi.",
      color: "red",
      gradient: "from-red-500 to-rose-600",
      letter: "L",
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      title: "Adaptif",
      description: "Terbuka pada perubahan, inovatif, dan tangguh menghadapi tantangan dalam pelayanan kesehatan masyarakat.",
      color: "purple",
      gradient: "from-purple-500 to-violet-600",
      letter: "A",
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      title: "Kolaboratif",
      description: "Bekerja sama dalam keberagaman untuk mencapai tujuan bersama dalam memberikan pelayanan kesehatan prima.",
      color: "teal",
      gradient: "from-teal-500 to-cyan-600",
      letter: "K",
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
        </svg>
      ),
    },
  ];

  const berAkhlakLetters = ['B', 'e', 'r', 'A', 'K', 'H', 'L', 'A', 'K'];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header className="mb-0" />

      {/* Hero Section */}
      <section className="relative mt-[-32px] bg-gradient-to-br from-emerald-800 via-green-700 to-lime-600 text-white py-16 md:py-24 lg:py-32 overflow-hidden">

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-white/10 to-white/5 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-2xl animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-lg animate-float-slow"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            {/* BerAKHLAK Animation */}
            <div className="mb-12">
              <div className="flex justify-center items-center space-x-1 sm:space-x-2 mb-4">
                {berAkhlakLetters.map((letter, index) => (
                  <span
                    key={index}
                    className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black transition-all duration-500 ${
                      currentLetterIndex === index
                        ? 'text-yellow-400 scale-125 rotate-12 animate-bounce'
                        : 'text-white/80 scale-100 rotate-0'
                    }`}
                    style={{
                      textShadow: '0 0 20px rgba(255, 255, 255, 0.5)',
                      transitionDelay: `${index * 100}ms`
                    }}
                  >
                    {letter}
                  </span>
                ))}
              </div>
              <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full animate-pulse"></div>
            </div>

            {/* Main Title */}
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                  Tata Nilai
                </span>
                <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2 font-semibold text-blue-200">
                  Puskesmas Cilandak
                </span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed font-light text-blue-100">
                Menjalankan nilai-nilai dasar ASN sesuai{" "}
                <span className="font-semibold text-yellow-300 bg-white/10 px-2 py-1 rounded-lg">
                  SE Menteri PANRB No. 20 Tahun 2021
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24">
            <path d="M0,120 C150,80 350,40 600,60 C850,80 1050,40 1200,80 L1200,120 Z" fill="#f9fafb" />
          </svg>
        </div>
      </section>

      {/* AKHLAK Values Section */}
      <section className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div 
            id="section-header" 
            data-animate 
            className={`text-center mb-16 transform transition-all duration-1000 ease-out ${
              isVisible['section-header'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Nilai-Nilai <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">AKHLAK</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-6"></div>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Enam nilai dasar yang menjadi pedoman dalam memberikan pelayanan kesehatan yang berkualitas
            </p>
          </div>

          {/* Values Grid */}
          <div 
            id="values-grid" 
            data-animate 
            className={`transform transition-all duration-1000 ease-out ${
              isVisible['values-grid'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {nilaiItems.map((item, index) => (
                <div
                  key={index}
                  className={`group transform transition-all duration-700 ease-out hover:scale-105 hover:-translate-y-2 ${
                    isVisible['values-grid'] ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${(index + 1) * 150}ms` }}
                >
                  <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full">
                    {/* Gradient Border */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient}`}></div>
                    
                    {/* Card Content */}
                    <div className="p-6 sm:p-8">
                      {/* Icon and Letter */}
                      <div className="flex items-center justify-between mb-6">
                        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          {item.icon}
                        </div>
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} text-white flex items-center justify-center font-black text-xl shadow-md`}>
                          {item.letter}
                        </div>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors">
                        {item.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                        {item.description}
                      </p>
                    </div>

                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div 
            id="cta-section" 
            data-animate 
            className={`mt-20 transform transition-all duration-1000 ease-out ${
              isVisible['cta-section'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="relative bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 rounded-3xl p-8 sm:p-12 lg:p-16 text-white overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
                {[...Array(15)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 2}s`
                    }}
                  />
                ))}
              </div>

              <div className="relative text-center">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 leading-tight">
                  Budaya Kerja Berlandaskan{" "}
                  <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                    BerAKHLAK
                  </span>
                </h3>
                <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto leading-relaxed text-blue-100">
                  Meneguhkan komitmen sebagai aparatur sipil negara yang profesional, berintegritas, 
                  dan berdedikasi dalam memberikan pelayanan kesehatan terbaik bagi masyarakat.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button className="bg-white text-indigo-700 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg min-w-[200px]">
                    Pelajari Lebih Lanjut
                  </button>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-indigo-700 transition-all duration-300 hover:scale-105 min-w-[200px]">
                    Panduan Implementasi
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-180deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(90deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
          animation-delay: 2s;
        }
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default TataNilai;