import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

const PuskesmasPembantu = () => {
  const { id } = useParams(); // Ambil ID dari URL
  const [puskesmas, setPuskesmas] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Fetch Data dari API
  useEffect(() => {
    const fetchPuskesmas = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/pustu/${id}`);

        if (!response.ok) {
          throw new Error("Gagal memuat data puskesmas");
        }

        const data = await response.json();
        setPuskesmas(data);
        setLoading(false);

        setTimeout(() => setIsVisible(true), 100); // Animasi muncul
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPuskesmas();
  }, [id]);

  // Auto Slide untuk Carousel
  useEffect(() => {
    if (!puskesmas || !puskesmas.images || puskesmas.images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === puskesmas.images.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [puskesmas]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-green-50 to-blue-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg animate-pulse">Memuat data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-red-50 to-pink-50">
        <div className="text-center p-8 bg-white rounded-xl shadow-lg border border-red-100">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <p className="text-red-600 text-lg font-medium">Error: {error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-300"
          >
            Coba Lagi
          </button>
        </div>
      </div>
    );
  }

  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === puskesmas.images.length - 1 ? 0 : currentSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? puskesmas.images.length - 1 : currentSlide - 1
    );
  };

  const InfoCard = ({ title, content, icon }) => (
    <div className="group bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-green-600 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-600 whitespace-pre-line leading-relaxed">
            {content}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <>
    <Header/>
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-indigo-50 py-8 px-4">
      
      <div
        className={`max-w-7xl mx-auto transition-all duration-1000 transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-t-2xl p-8 shadow-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/90 to-transparent"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
          <div className="relative z-10">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl animate-pulse">
                🏥
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{puskesmas.namaPuskesmas}</h1>
                <p className="text-green-200 text-lg">Puskesmas Pembantu</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-b-2xl shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Carousel Section */}
            <div className="p-8 bg-gradient-to-br from-gray-50 to-white">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center text-white mr-3">📸</span>
                Galeri Foto
              </h2>
              <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                {puskesmas.images && puskesmas.images.length > 0 ? (
                  <div className="relative">
                    <div className="w-full h-80 overflow-hidden">
                      <img
                        src={`http://localhost:8080${puskesmas.images[currentSlide]}`}
                        alt={`${puskesmas.namaPuskesmas} - ${currentSlide + 1}`}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        onError={(e) => {
                          e.currentTarget.src = "/fallback-image.jpg"; // Fallback image jika error
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                    {/* Navigation Arrows */}
                    <button
                      onClick={prevSlide}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100"
                    >
                      ←
                    </button>
                    <button
                      onClick={nextSlide}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100"
                    >
                      →
                    </button>
                    {/* Dots Indicator */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {puskesmas.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentSlide(index)}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentSlide ? "bg-white" : "bg-white/50"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-80 flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl">
                    <div className="text-6xl text-gray-400 mb-4">🖼️</div>
                    <span className="text-gray-500 text-lg">Tidak ada gambar tersedia</span>
                  </div>
                )}
              </div>
            </div>

            {/* Information Section */}
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white mr-3">ℹ️</span>
                Informasi Detail
              </h2>
              {/* Description */}
              <div className="mb-8 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                  <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm mr-2">📋</span>
                  Deskripsi
                </h3>
                <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                  {puskesmas.desc}
                </p>
              </div>
              {/* Information Cards */}
              <div className="space-y-4">
                <InfoCard title="Lokasi" content={puskesmas.lokasi} icon="📍" />
                <InfoCard title="Jam Pelayanan" content={puskesmas.jamPelayanan} icon="⏰" />
                <InfoCard title="Telepon" content={puskesmas.telepon} icon="📞" />
                <InfoCard title="WhatsApp" content={puskesmas.whatsapp} icon="💬" />
              </div>
              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <span className="mr-2">📞</span>
                  Hubungi Sekarang
                </button>
                <button className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <span className="mr-2">🗺️</span>
                  Lihat Lokasi
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    <Footer/>
    </>
  );
};

export default PuskesmasPembantu;