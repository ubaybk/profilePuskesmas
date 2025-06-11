import { useState, useEffect } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { BiHealth } from "react-icons/bi";
import { GiHealthNormal } from "react-icons/gi";
import { FaHospitalAlt, FaUserMd, FaHeartbeat, FaShieldAlt } from "react-icons/fa";
import { MdHealthAndSafety, MdFamilyRestroom, MdSupportAgent } from "react-icons/md";
import { Link } from "react-router-dom"; // Import Link

const JenisLayanan = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeCard, setActiveCard] = useState(null);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const layananData = [
        {
            id: "ukm",
            icon: BiHealth,
            title: "UKM",
            subtitle: "Upaya Kesehatan Masyarakat",
            description: "Program kesehatan yang berfokus pada pencegahan penyakit dan peningkatan kesehatan masyarakat secara menyeluruh.",
            features: [
                "Kegiatan Esensial",
                "Kegiatan Pengembangan",
                "Jadwal Kegiatan UKM"
            ],
            gradient: "from-blue-500 to-cyan-500",
            bgGradient: "from-blue-50 to-cyan-50",
            iconColor: "text-blue-600",
            shadowColor: "shadow-blue-200"
        },
        {
            id: "ukp",
            icon: GiHealthNormal,
            title: "UKP",
            subtitle: "Upaya Kesehatan Perorangan",
            description: "Pelayanan kesehatan yang ditujukan untuk individu dengan pendekatan personal dan komprehensif.",
            features: [
                "Pelayanan Rawat Jalan",
                "Pelayanan Gawat Darurat",
                "Pelayanan Persalinan",
                "Pelayanan Home Care",
                "Daftar RS Rujukan",
                "Alur Pelayanan"
            ],
            gradient: "from-emerald-500 to-teal-500",
            bgGradient: "from-emerald-50 to-teal-50",
            iconColor: "text-emerald-600",
            shadowColor: "shadow-emerald-200"
        },
        {
            id: "perkesmas",
            icon: FaHospitalAlt,
            title: "Perkesmas",
            subtitle: "Perawatan Kesehatan Masyarakat",
            description: "Layanan perawatan kesehatan berbasis komunitas yang terintegrasi dan berkelanjutan.",
            features: [
                "Perawatan Rumah",
                "Edukasi Kesehatan",
                "Monitoring Kesehatan",
                "Koordinasi Layanan"
            ],
            gradient: "from-purple-500 to-pink-500",
            bgGradient: "from-purple-50 to-pink-50",
            iconColor: "text-purple-600",
            shadowColor: "shadow-purple-200"
        }
    ];

    const additionalServices = [
        {
            icon: FaUserMd,
            title: "Pelayanan Dokter",
            description: "Konsultasi dan pemeriksaan oleh dokter berpengalaman"
        },
        {
            icon: FaHeartbeat,
            title: "Pemeriksaan Vital",
            description: "Monitoring kesehatan dan tanda vital tubuh"
        },
        {
            icon: MdHealthAndSafety,
            title: "Keselamatan Kerja",
            description: "Program kesehatan dan keselamatan kerja"
        },
        {
            icon: MdFamilyRestroom,
            title: "Kesehatan Keluarga",
            description: "Program kesehatan untuk seluruh anggota keluarga"
        },
        {
            icon: FaShieldAlt,
            title: "Imunisasi",
            description: "Program vaksinasi dan imunisasi lengkap"
        },
        {
            icon: MdSupportAgent,
            title: "Konseling Kesehatan",
            description: "Layanan konseling dan edukasi kesehatan"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
            <Header />
            {/* Hero Section */}
            <section className="relative overflow-hidden pt-8 pb-16">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}></div>
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className={`text-center transform transition-all duration-1000 ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                                Jenis Pelayanan
                            </span>
                        </h1>
                        <div className="max-w-4xl mx-auto">
                            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
                                Jenis pelayanan yang diberikan oleh{' '}
                                <span className="font-semibold text-green-600">Puskesmas Cilandak</span>{' '}
                                meliputi Pelayanan Upaya Kesehatan Masyarakat dan Upaya Kesehatan Perseorangan
                                yang mencakup upaya{' '}
                                <span className="font-semibold text-emerald-600">promotif</span>,{' '}
                                <span className="font-semibold text-teal-600">preventif</span>, dan{' '}
                                <span className="font-semibold text-blue-600">kuratif</span>.
                            </p>
                        </div>
                        <div className="flex justify-center mt-8 space-x-2">
                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                            <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse delay-150"></div>
                            <div className="w-3 h-3 bg-teal-500 rounded-full animate-pulse delay-300"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Services Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                        {layananData.map((layanan, index) => {
                            const IconComponent = layanan.icon;
                            const isActive = activeCard === layanan.id;
                            
                            return (
                                <Link
                                    to={`/${layanan.id}`}
                                    key={layanan.id}
                                    className="group block"
                                >
                                    <div
                                        className={`relative transform transition-all duration-500 ease-in-out ${
                                            isVisible 
                                                ? 'translate-y-0 opacity-100' 
                                                : 'translate-y-20 opacity-0'
                                        } ${
                                            isActive 
                                                ? 'scale-105 -translate-y-2' 
                                                : 'hover:scale-102 hover:-translate-y-1'
                                        }`}
                                        style={{ transitionDelay: `${index * 200}ms` }}
                                        onMouseEnter={() => setActiveCard(layanan.id)}
                                        onMouseLeave={() => setActiveCard(null)}
                                    >
                                        {/* Card Content */}
                                        <div className={`relative overflow-hidden rounded-3xl bg-white transition-all duration-500 ease-in-out ${
                                            isActive 
                                                ? `shadow-2xl ${layanan.shadowColor}` 
                                                : 'shadow-lg hover:shadow-xl'
                                        }`}>
                                            {/* Gradient Background Overlay */}
                                            <div className={`absolute inset-0 bg-gradient-to-br ${layanan.bgGradient} transition-opacity duration-500 ${
                                                isActive ? 'opacity-20' : 'opacity-10'
                                            }`}></div>
                                            
                                            {/* Content Container */}
                                            <div className="relative z-10 p-8 h-full">
                                                {/* Icon Section */}
                                                <div className="relative mb-6 flex justify-center">
                                                    {/* Icon Glow Effect */}
                                                    <div className={`absolute inset-0 bg-gradient-to-r ${layanan.gradient} rounded-2xl blur-md transition-all duration-500 ${
                                                        isActive ? 'opacity-30 scale-110' : 'opacity-0 scale-100'
                                                    }`}></div>
                                                    
                                                    {/* Icon Container */}
                                                    <div className={`relative w-16 h-16 bg-gradient-to-r ${layanan.gradient} rounded-2xl flex items-center justify-center shadow-lg transition-all duration-500 ${
                                                        isActive 
                                                            ? 'shadow-xl scale-110 rotate-3' 
                                                            : 'group-hover:shadow-xl group-hover:scale-105'
                                                    }`}>
                                                        <IconComponent className={`text-3xl text-white transition-all duration-300 ${
                                                            isActive ? 'scale-110' : ''
                                                        }`} />
                                                    </div>
                                                </div>
                                                
                                                {/* Text Content */}
                                                <div className="text-center">
                                                    <h2 className={`text-2xl font-bold mb-2 transition-all duration-300 ${
                                                        isActive 
                                                            ? `${layanan.iconColor} scale-105` 
                                                            : 'text-gray-800 group-hover:text-gray-900'
                                                    }`}>
                                                        {layanan.title}
                                                    </h2>
                                                    <h3 className={`text-lg font-semibold mb-4 transition-all duration-300 ${
                                                        isActive 
                                                            ? `${layanan.iconColor} opacity-90` 
                                                            : `${layanan.iconColor} opacity-80`
                                                    }`}>
                                                        {layanan.subtitle}
                                                    </h3>
                                                    <p className={`text-gray-600 leading-relaxed text-sm transition-all duration-300 ${
                                                        isActive ? 'text-gray-700' : ''
                                                    }`}>
                                                        {layanan.description}
                                                    </p>
                                                </div>
                                                
                                                {/* Features List - Hidden by default, shown on hover */}
                                                <div className={`mt-6 transition-all duration-500 overflow-hidden ${
                                                    isActive 
                                                        ? 'max-h-32 opacity-100' 
                                                        : 'max-h-0 opacity-0'
                                                }`}>
                                                    {/* <div className="space-y-2">
                                                        {layanan.features.map((feature, featureIndex) => (
                                                            <div 
                                                                key={featureIndex}
                                                                className={`flex items-center text-sm text-gray-600 transition-all duration-300 ${
                                                                    isActive 
                                                                        ? 'translate-x-0 opacity-100' 
                                                                        : 'translate-x-4 opacity-0'
                                                                }`}
                                                                style={{ 
                                                                    transitionDelay: isActive ? `${featureIndex * 100}ms` : '0ms' 
                                                                }}
                                                            >
                                                                <div className={`w-2 h-2 rounded-full mr-3 bg-gradient-to-r ${layanan.gradient}`}></div>
                                                                {feature}
                                                            </div>
                                                        ))}
                                                    </div> */}
                                                </div>
                                            </div>
                                            
                                            {/* Subtle border effect */}
                                            <div className={`absolute inset-0 rounded-3xl transition-all duration-500 ${
                                                isActive 
                                                    ? `ring-2 ring-offset-2 ring-opacity-30 bg-gradient-to-r ${layanan.gradient}` 
                                                    : 'ring-0'
                                            }`} style={{
                                                background: isActive ? `linear-gradient(135deg, ${layanan.gradient.replace('from-', '').replace('to-', '').split(' ')[0]}20, ${layanan.gradient.replace('from-', '').replace('to-', '').split(' ')[1]}20)` : 'transparent'
                                            }}></div>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Additional Services Section */}
            <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                                Layanan Tambahan
                            </span>
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Berbagai layanan kesehatan komprehensif untuk memenuhi kebutuhan masyarakat
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {additionalServices.map((service, index) => {
                            const IconComponent = service.icon;
                            return (
                                <div
                                    key={index}
                                    className={`group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
                                        isVisible 
                                            ? 'translate-y-0 opacity-100' 
                                            : 'translate-y-10 opacity-0'
                                    }`}
                                    style={{ transitionDelay: `${(index + 3) * 150}ms` }}
                                >
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                            <IconComponent className="text-xl text-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-green-600 transition-colors duration-300">
                                                {service.title}
                                            </h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute inset-0" style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20s-20-8.954-20-20 8.954-20 20-20 20 8.954 20 20zm0-20c11.046 0 20 8.954 20 20s-8.954 20-20 20-20-8.954-20-20 8.954-20 20-20z'/%3E%3C/g%3E%3C/svg%3E")`,
                            }}></div>
                        </div>
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Butuh Konsultasi Kesehatan?
                            </h2>
                            <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
                                Tim medis profesional kami siap melayani Anda dengan pelayanan kesehatan terbaik
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="bg-white text-green-600 px-8 py-3 rounded-2xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                                    Buat Janji Temu
                                </button>
                                <button className="border-2 border-white text-white px-8 py-3 rounded-2xl font-semibold hover:bg-white hover:text-green-600 transition-all duration-300 transform hover:scale-105">
                                    Hubungi Kami
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default JenisLayanan;