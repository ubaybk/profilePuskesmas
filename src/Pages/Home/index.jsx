import { useEffect, useState } from 'react';
import { MdMedicalInformation } from "react-icons/md";
import { RiInformation2Fill } from "react-icons/ri";
import { ChevronDown, MapPin, Users, Heart, Award } from 'lucide-react';
import Header from '../../Components/Header';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { UserRound, Hospital } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Home = () => {
    const [visitCount, setVisitCount] = useState("...");
    const [scrollY, setScrollY] = useState(0);
    const [isVisible, setIsVisible] = useState({});

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setIsVisible(prev => ({
                        ...prev,
                        [entry.target.id]: entry.isIntersecting
                    }));
                });
            },
            { threshold: 0.1 }
        );

        const elements = document.querySelectorAll('[data-animate]');
        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
  const increaseVisit = async () => {
    try {
      await fetch('http://localhost:8080/api/increase-visit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ totalVisit: 1 }),
      });
      // Setelah menambahkan kunjungan, ambil jumlah terbaru
      await fetchTotalVisit();
    } catch (error) {
      console.error('Gagal menambahkan kunjungan:', error);
    }
  };

  const fetchTotalVisit = async () => {
    try {
      const res = await fetch('http://localhost:8080/api/total-visit');
      const data = await res.json();
      setVisitCount(`${data.totalVisit}`);
    } catch (error) {
      console.error('Gagal mengambil jumlah kunjungan:', error);
      setVisitCount('0');
    }
  };

  // Jalankan saat komponen dimount
  increaseVisit();

  // Animasi scroll untuk stats
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        setIsVisible((prev) => ({
          ...prev,
          [entry.target.id]: entry.isIntersecting,
        }));
      });
    },
    { threshold: 0.1 }
  );

  const elements = document.querySelectorAll('[data-animate]');
  elements.forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}, []);

    const [currentBgIndex, setCurrentBgIndex] = useState(0);
const bgImages = [
  '/bg.png',
  '/cilandak_barat.jpeg'
  
];

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentBgIndex((prev) => (prev + 1) % bgImages.length);
  }, 5000);
  return () => clearInterval(interval);
}, [bgImages.length]);

    return (
        <div className="">
            <Header/>
           
            {/* Hero Section */}
<div className="relative h-screen overflow-hidden">
  {/* Background with Parallax & Carousel */}
  <div 
    className="absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-1000 ease-in-out"
    style={{
      backgroundImage: `url(${bgImages[currentBgIndex]})`,
      transform: `translateY(${scrollY * 0.3}px)`,
      opacity: 0.8,
      zIndex: -2,
    }}
  />

  {/* Overlay Gelap */}
  {/* <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div> */}

  {/* Particles / Animated Dots */}
  {/* <div className="absolute inset-0 z-0">
    {[...Array(20)].map((_, i) => (
      <div
        key={i}
        className="absolute w-2 h-2 bg-white rounded-full opacity-30 animate-pulse"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 3}s`,
          animationDuration: `${2 + Math.random() * 3}s`,
        }}
      />
    ))}
  </div> */}

  {/* Hero Content */}
  <div className="relative z-10 h-[80vh] flex items-center justify-center text-center px-4">
    <Swiper
      modules={[Pagination, Navigation, Autoplay]}
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{ delay: 5000 }}
      pagination={{ clickable: true }}
      navigation
      loop
      className="mySwiper w-full"
    >
      {/* Slide 1 */}
      <SwiperSlide>
        <div className="animate-fade-in-up">
          <Heart className="w-16 h-16 text-red-400 mx-auto mb-6 animate-pulse" />
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Puskesmas
            </span>
            <br />
            <span className="text-white">Cilandak</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Melayani dengan sepenuh hati untuk kesehatan masyarakat Cilandak yang lebih baik
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Layanan Kami
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Tentang Kami
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white opacity-70" />
        </div>
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide>
        <div className="animate-fade-in-up">
          <Hospital className="w-16 h-16 text-blue-400 mx-auto mb-6 animate-pulse" />
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Layanan Kesehatan
            </span>
            <br />
            <span className="text-white">Terlengkap</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Fasilitas lengkap untuk pemeriksaan umum, gigi, kebidanan, dan layanan lainnya
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Lihat Layanan
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Jadwal Dokter
            </button>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 3 */}
      <SwiperSlide>
        <div className="animate-fade-in-up">
          <UserRound className="w-16 h-16 text-yellow-400 mx-auto mb-6 animate-pulse" />
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Tim Medis
            </span>
            <br />
            <span className="text-white">Profesional</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Didukung oleh dokter dan perawat terbaik yang siap melayani Anda setiap hari
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Profil Tim
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-yellow-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Kontak Kami
            </button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</div>

            {/* Stats Section */}
            {/* Stats Section */}
<div className="py-16 bg-white shadow-lg">
  <div className="max-w-6xl mx-auto px-4">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {[
        { icon: Users, number: visitCount, label: "Jumlah Pengunjung" },
        { icon: Heart, number: "24/7", label: "Layanan Darurat" },
        { icon: Award, number: "15+", label: "Tahun Pengalaman" },
        { icon: MapPin, number: "5", label: "Kelurahan" }
      ].map((stat, index) => (
        <div 
          key={index}
          className="text-center transform hover:scale-105 transition-all duration-300"
          data-animate
          id={`stat-${index}`}
        >
          <div className={`transition-all duration-1000 ${isVisible[`stat-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <stat.icon className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
            <div className="text-gray-600">{stat.label}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

            {/* About Section */}
            <div className="py-20 bg-gradient-to-r from-green-50 to-blue-50">
                <div className="max-w-6xl mx-auto px-4">
                    <div 
                        className="text-center mb-16"
                        data-animate
                        id="about-title"
                    >
                        <div className={`transition-all duration-1000 ${isVisible['about-title'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Tentang Kami</h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-8"></div>
                        </div>
                    </div>
                    
                    <div 
                        className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 backdrop-blur-sm bg-opacity-90"
                        data-animate
                        id="about-content"
                    >
                        <div className={`transition-all duration-1000 delay-300 ${isVisible['about-content'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                            <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
                                Salam sehat dari kami Puskesmas Kecamatan Cilandak. Puskesmas Cilandak
                                hadir untuk memberikan pelayanan kesehatan kepada masyarakat untuk menuju masyarakat Cilandak yang sehat dan mandiri.
                                Puskesmas Cilandak mempunyai Standar Pelayanan dan Jenis-jenis Layanan yang senantiasa berupaya memberikan pelayanan terbaik kepada masyarakat.
                                Melalui website ini, kami berharap informasi kesehatan dapat lebih mudah tersampaikan dengan baik.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Video Section */}
            <div className="py-20 bg-gray-900">
                <div className="max-w-6xl mx-auto px-4">
                    <div 
                        className="text-center mb-12"
                        data-animate
                        id="video-title"
                    >
                        <div className={`transition-all duration-1000 ${isVisible['video-title'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                            <h2 className="text-4xl font-bold text-white mb-4">Mars Puskesmas Cilandak</h2>
                            <p className="text-gray-300 text-lg">Semangat dan dedikasi kami untuk melayani</p>
                        </div>
                    </div>
                    
                    <div 
                        className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500"
                        data-animate
                        id="video-container"
                    >
                        <div className={`transition-all duration-1000 delay-300 ${isVisible['video-container'] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                            <div className="aspect-video">
                                <iframe
                                    className="w-full h-full"
                                    src="https://www.youtube.com/embed/-TiOo0Ls7bA"
                                    title="Mars Puskesmas Cilandak"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Map Section */}
            <div className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
                <div className="max-w-6xl mx-auto px-4">
                    <div 
                        className="text-center mb-16"
                        data-animate
                        id="map-title"
                    >
                        <div className={`transition-all duration-1000 ${isVisible['map-title'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                            <h2 className="text-4xl font-bold text-gray-800 mb-6">Wilayah Layanan Kami</h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto"></div>
                        </div>
                    </div>
                    
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div 
                            className="relative group"
                            data-animate
                            id="map-image"
                        >
                            <div className={`transition-all duration-1000 ${isVisible['map-image'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                                <div className="bg-white rounded-3xl shadow-2xl p-6 transform group-hover:scale-105 transition-all duration-500">
                                    <img 
                                        src="/images/petaa.png" 
                                        alt="Peta Wilayah Kecamatan Cilandak" 
                                        className="w-full h-auto rounded-2xl"
                                    />
                                </div>
                            </div>
                        </div>
                        
                        <div 
                            className="space-y-6"
                            data-animate
                            id="map-info"
                        >
                            <div className={`transition-all duration-1000 delay-300 ${isVisible['map-info'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                                <h3 className="text-3xl font-bold text-gray-800 mb-6">Peta Wilayah Kecamatan Cilandak</h3>
                                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                    Kecamatan Cilandak terletak pada 106°45'00,9" Bujur Timur (BT) dan 06°15'40,8" Lintang Selatan (LS).
                                    Luas wilayah sesuai dengan keputusan Gubernur KDKI Jakarta Nomor 1815 tahun 1989, adalah 1.820.280 Km².
                                    Terbagi dalam 5 wilayah kelurahan (Kelurahan Gandaria Selatan, Cilandak Barat, Cipete Selatan, Pondok Labu, dan Lebak Bulus)
                                    terdiri atas 46 RW dan 475 RT.
                                </p>
                                
                                <div className="space-y-4">
                                    {[
                                        { direction: "Utara", boundary: "Jl. H. Nawi/Kecamatan Kebayoran Baru" },
                                        { direction: "Timur", boundary: "Jl. H. Nawi/Kecamatan Kebayoran Baru" },
                                        { direction: "Selatan", boundary: "Desa Pangkalan Jati/Kecamatan Limo Kab. Bogor" },
                                        { direction: "Barat", boundary: "Kali Pesanggrahan/Kecamatan Kebayoran Lama" }
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-start space-x-3 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                                            <MapPin className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                            <div>
                                                <span className="font-bold text-gray-800">Sebelah {item.direction}: </span>
                                                <span className="text-gray-600">{item.boundary}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <div className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
                <div className="max-w-6xl mx-auto px-4">
                    <div 
                        className="text-center mb-16"
                        data-animate
                        id="services-title"
                    >
                        <div className={`transition-all duration-1000 ${isVisible['services-title'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                            <h2 className="text-4xl font-bold text-white mb-6">Layanan Kami</h2>
                            <p className="text-green-100 text-lg">Akses mudah ke informasi layanan kesehatan</p>
                        </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {[
                            {
                                icon: MdMedicalInformation,
                                title: "Standar Pelayanan",
                                description: "Informasi lengkap tentang standar pelayanan kesehatan kami",
                                link: "/StandarPelayanan",
                                gradient: "from-cyan-400 to-blue-500"
                            },
                            {
                                icon: RiInformation2Fill,
                                title: "Hak & Kewajiban Pasien",
                                description: "Ketahui hak dan kewajiban Anda sebagai pasien",
                                link: "/HakdanKewajiban",
                                gradient: "from-purple-400 to-pink-500"
                            }
                        ].map((service, index) => (
                            <div 
                                key={index}
                                className="group"
                                data-animate
                                id={`service-${index}`}
                            >
                                <div className={`transition-all duration-1000 ${isVisible[`service-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${index * 200}ms` }}>
                                    <a href={service.link} className="block">
                                        <div className={`bg-gradient-to-br ${service.gradient} rounded-3xl p-8 text-center transform group-hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl`}>
                                            <div className="relative">
                                                <div className="absolute inset-0 bg-white rounded-full opacity-20 transform group-hover:scale-110 transition-transform duration-500"></div>
                                                <service.icon className="w-20 h-20 text-white mx-auto mb-6 relative z-10 group-hover:animate-pulse" />
                                            </div>
                                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-200 transition-colors duration-300">
                                                {service.title}
                                            </h3>
                                            <p className="text-white opacity-90 leading-relaxed">
                                                {service.description}
                                            </p>
                                            <div className="mt-6 inline-flex items-center text-white font-semibold group-hover:text-yellow-200 transition-colors duration-300">
                                                Selengkapnya
                                                <ChevronDown className="w-5 h-5 ml-2 transform rotate-[-90deg] group-hover:translate-x-2 transition-transform duration-300" />
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer CTA */}
            <div className="py-16 bg-gray-900">
                <div className="max-w-4xl mx-auto text-center px-4">
                    <div 
                        data-animate
                        id="footer-cta"
                    >
                        <div className={`transition-all duration-1000 ${isVisible['footer-cta'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                            <h2 className="text-3xl font-bold text-white mb-6">
                                Siap Melayani Kesehatan Anda
                            </h2>
                            <p className="text-gray-300 text-lg mb-8">
                                Tim medis profesional kami siap memberikan pelayanan kesehatan terbaik untuk Anda dan keluarga
                            </p>
                            <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-12 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                                Hubungi Kami
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-fade-in-up {
                    animation: fade-in-up 1s ease-out;
                }
            `}</style>
        </div>
    );
};

export default Home;