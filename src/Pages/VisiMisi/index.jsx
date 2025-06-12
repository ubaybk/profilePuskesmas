import { useState, useEffect } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

const VisiMisi = () => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
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

  const misiItems = [
    "MENINGKATKAN KUALITAS SUMBER DAYA MANUSIA YANG KOMPETEN DAN PROFESIONAL",
    "MEMBERIKAN PELAYANAN PRIMA DENGAN SEPENUH HATI",
    "MENYEDIAKAN SARANA DAN PRASARANA YANG BERKUALITAS",
    "KOLABORASI LINTAS PROGRAM DAN LINTAS SEKTORAL",
    "MENINGKATKAN DERAJAT KESEHATAN DENGAN GERAKAN MASYARAKAT HIDUP SEHAT DAN PENDEKATAN KELUARGA"
  ];

  return (
    <>
      <Header />

      {/* Hero Section with Enhanced Design */}
      <section className="relative mt-[-32px] bg-gradient-to-br from-emerald-600 via-green-600 to-teal-700 text-white py-20 md:py-28 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-white rounded-full blur-2xl animate-pulse delay-700"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white rounded-full blur-lg animate-pulse delay-300"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-6 h-6 bg-white/20 rounded-full animate-bounce delay-1000"></div>
          <div className="absolute bottom-32 left-16 w-4 h-4 bg-white/30 rounded-full animate-bounce delay-500"></div>
          <div className="absolute top-40 left-1/3 w-8 h-8 bg-white/15 rounded-full animate-bounce delay-1500"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="transform transition-all duration-1000 ease-out translate-y-0 opacity-100">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="block bg-gradient-to-r from-white via-green-100 to-white bg-clip-text text-transparent animate-pulse">
                Visi Misi
              </span>
              <span className="block text-3xl md:text-4xl lg:text-5xl mt-2 font-semibold">
                Puskesmas Cilandak
              </span>
            </h1>
            <div className="w-24 h-1 bg-white mx-auto mb-8 rounded-full"></div>
            {/* <p className="text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed font-light">
              Membangun masyarakat Cilandak yang sehat dan mandiri melalui 
              <span className="font-semibold text-green-200"> pelayanan kesehatan berkualitas</span>
            </p> */}
          </div>
        </div>

        {/* Wave Bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20">
            <path d="M0,120 C150,80 350,40 600,60 C850,80 1050,40 1200,80 L1200,120 Z" fill="#f9fafb"/>
          </svg>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-gray-50 relative">
        <div className="max-w-6xl mx-auto px-6 space-y-20">

          {/* Visi Section */}
          <div 
            id="visi-section"
            data-animate
            className={`transform transition-all duration-1000 ease-out ${
              isVisible['visi-section'] 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-l-8 border-green-600 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-100 to-green-50 rounded-full transform translate-x-16 -translate-y-16"></div>
              
              <div className="relative">
                <div className="flex items-center mb-8">
                  <div className="bg-gradient-to-r from-green-600 to-green-500 p-4 rounded-2xl mr-6 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-green-800">Visi</h2>
                </div>
                
                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-2xl border-2 border-green-100">
                  <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-medium text-center">
                    "MENJADI PUSKESMAS TERPERCAYA MENUJU MASYARAKAT CILANDAK 
                    <span className="text-green-700 font-bold"> SEHAT DAN MANDIRI</span>"
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Misi Section */}
          <div 
            id="misi-section"
            data-animate
            className={`transform transition-all duration-1000 ease-out delay-300 ${
              isVisible['misi-section'] 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-l-8 border-blue-600 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-blue-100 to-blue-50 rounded-full transform -translate-x-20 translate-y-20"></div>
              
              <div className="relative">
                <div className="flex items-center mb-12">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-4 rounded-2xl mr-6 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-blue-800">Misi</h2>
                </div>
                
                <div className="space-y-6">
                  {misiItems.map((item, index) => (
                    <div 
                      key={index}
                      className={`transform transition-all duration-700 ease-out ${
                        isVisible['misi-section'] 
                          ? 'translate-x-0 opacity-100' 
                          : 'translate-x-10 opacity-0'
                      }`}
                      style={{ transitionDelay: `${(index + 1) * 200}ms` }}
                    >
                      <div className="group bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-2xl border-2 border-transparent hover:border-blue-200 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 mr-6">
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                              {index + 1}
                            </div>
                          </div>
                          <div className="flex-1">
                            <p className="text-gray-800 text-lg md:text-xl leading-relaxed font-medium">
                              {item}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div 
            id="cta-section"
            data-animate
            className={`transform transition-all duration-1000 ease-out delay-600 ${
              isVisible['cta-section'] 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="text-center bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-12 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative">
                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                  Bersama Membangun Cilandak Sehat
                </h3>
                <p className="text-xl mb-8 max-w-2xl mx-auto">
                  Mari bergabung dalam misi menciptakan masyarakat yang sehat dan mandiri
                </p>
                <button className="bg-white text-green-700 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg">
                  Pelajari Lebih Lanjut
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default VisiMisi;