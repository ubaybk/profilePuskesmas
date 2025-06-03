import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "../Navbar"; // Pastikan path benar

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeItem, setActiveItem] = useState("Beranda");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [userName, setUserName] = useState(null);

    const navigate = useNavigate();
    const location = useLocation();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Update active item berdasarkan path
    useEffect(() => {
        const currentItem = menuItems.find(item => item.path === location.pathname);
        if (currentItem) {
            setActiveItem(currentItem.label);
        }
    }, [location.pathname]);

    // Cek token dan ambil nama dari localStorage
    useEffect(() => {
        const token = localStorage.getItem("token");
        const name = localStorage.getItem("name");

        if (token) {
            setUserName(name || "Pengguna");
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("name");
        setUserName(null);
        navigate("/");
        window.location.reload(); // Refresh agar header langsung berubah
    };

    const menuItems = [
        { id: "beranda", label: "Beranda", path: "/" },
        { id: "ilp", label: "ILP", path: "/IntegrasiLayanan" },
        { id: "jenis", label: "Jenis Layanan", path: "/JenisLayanan" },
        { id: "tarif", label: "Tarif Layanan", path: "/TarifLayanan" },
        { id: "pembantu", label: "Puskesmas Pembantu", path: "/PuskesmasPembantu" },
        { id: "tentang", label: "Tentang Kami", path: "/TentangKami" },
        { id: "karir", label: "Karir", path: "/Karir" },
        { id: "aduan", label: "Aduan", path: "/Aduan" },
        { id: "jaksehat", label: "Jaksehat", path: "/Jaksehat" },
        { id: "artikel", label: "Artikel", path: "/Artikel" }
    ];

    const handleMenuClick = (item) => {
        setActiveItem(item.label);
        setMenuOpen(false);

        if (item.path === location.pathname) {
            const element = document.getElementById(item.id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            navigate(item.path);
        }
    };

    return (
        <>
            {/* Navbar */}
            <Navbar />

            {/* Header */}
            <header className={`fixed top-9 md:top-12 left-0 right-0 z-40 transition-all duration-300 ${
                scrolled 
                    ? 'bg-[#355F2E]/95 backdrop-blur-md shadow-xl border-b border-white/10' 
                    : 'bg-[#355F2E] shadow-lg'
            }`}>
                <div className="container mx-auto px-4 lg:px-6">
                    <div className="flex items-center justify-between h-16 lg:h-20">
                        {/* Logo Section */}
                        <div className="flex items-center space-x-3 lg:space-x-4">
                            <div className="relative">
                                <img
                                    src="/images/logoPuskesmas.png"
                                    alt="Logo Puskesmas"
                                    className="h-10 w-10 lg:h-12 lg:w-12 object-contain rounded-lg bg-white/10 p-1 shadow-lg"
                                />
                                <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-lg blur opacity-20"></div>
                            </div>
                            <div>
                                <h1 className="text-lg lg:text-xl font-bold text-white tracking-wide">
                                    Puskesmas
                                    <span className="block text-sm lg:text-base font-medium text-green-200">
                                        Cilandak
                                    </span>
                                </h1>
                            </div>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center space-x-1">
                            {menuItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => handleMenuClick(item)}
                                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 group ${
                                        activeItem === item.label
                                            ? 'text-white bg-white/20 shadow-lg'
                                            : 'text-green-100 hover:text-white hover:bg-white/10'
                                    }`}
                                >
                                    {item.label}
                                    <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-green-400 to-emerald-400 transition-all duration-300 ${
                                        activeItem === item.label ? 'w-3/4' : 'group-hover:w-3/4'
                                    }`}></span>
                                </button>
                            ))}

                            {/* Jika user login, tampilkan profil */}
                           {/* Profile Button - Desktop */}
{userName && (
    <div className="hidden lg:flex items-center relative">
        <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center space-x-2 text-white bg-green-700 hover:bg-green-800 px-4 py-2 rounded-full transition-all duration-300"
            aria-expanded={isDropdownOpen}
        >
            <span className="text-sm font-medium">{userName}</span>
        </button>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
            <div className="absolute top-12 right-0 mt-2 w-48 bg-white rounded-xl shadow-lg z-50 overflow-hidden">
                <ul className="py-2 text-gray-800">
                    <li>
                        <button
                            onClick={() => navigate("/createKarir")}
                            className="block w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors"
                        >
                            Karir
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={handleLogout}
                            className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100 transition-colors"
                        >
                            Logout
                        </button>
                    </li>
                </ul>
            </div>
        )}
    </div>
)}
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="lg:hidden relative w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                            aria-label="Toggle menu"
                        >
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-6 h-6 relative">
                                    <span className={`absolute top-2 left-0 w-6 h-0.5 bg-white transform transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                                    <span className={`absolute top-1/2 left-0 w-6 h-0.5 bg-white transform -translate-y-0.5 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
                                    <span className={`absolute bottom-2 left-0 w-6 h-0.5 bg-white transform transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div className={`lg:hidden fixed inset-0 z-40 top-16 ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <div
                    className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${menuOpen ? 'opacity-100' : 'opacity-0'}`}
                    onClick={() => setMenuOpen(false)}
                ></div>

                <nav className={`absolute top-16 left-4 right-4 bg-[#355F2E] rounded-2xl shadow-2xl border border-white/10 overflow-hidden transform transition-all duration-300 ${menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
                    <div className="p-2">
                        {menuItems.map((item, index) => (
                            <button
                                key={item.id}
                                onClick={() => handleMenuClick(item)}
                                className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300 ${
                                    activeItem === item.label
                                        ? 'text-white bg-gradient-to-r from-green-600 to-emerald-600 shadow-lg transform scale-[0.98]'
                                        : 'text-green-100 hover:text-white hover:bg-white/10 hover:transform hover:scale-[0.98]'
                                } ${index !== menuItems.length - 1 ? 'mb-1' : ''}`}
                                style={{
                                    animationDelay: `${index * 50}ms`,
                                }}
                            >
                                <div className={`w-2 h-2 rounded-full mr-3 transition-all duration-300 ${activeItem === item.label ? 'bg-white shadow-lg' : 'bg-green-400/50'}`}></div>
                                {item.label}
                            </button>
                        ))}

                        {/* Tambahkan Karir & Logout di Mobile Menu jika login */}
                        {userName && (
                            <div className="border-t border-white/10 pt-2">
                                <button
                                    onClick={() => {
                                        navigate("/Karir");
                                        setMenuOpen(false);
                                    }}
                                    className="w-full flex items-center px-4 py-3 text-sm font-medium text-green-100 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300"
                                >
                                    Karir
                                </button>
                                <button
                                    onClick={handleLogout}
                                    className="w-full flex items-center px-4 py-3 text-sm font-medium text-red-400 hover:bg-white/10 rounded-xl transition-all duration-300"
                                >
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                </nav>
            </div>

            {/* Spacer untuk fixed header + navbar */}
            <div className="h-24 md:h-28"></div>
        </>
    );
};

export default Header;