import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "../Navbar";
import TentangKamiDropdown from "../TentangKamiDropdown";
import PuskesmasPembantuDropdown from "../PuskesmasPembantuDropDown";

const Header = () => {
    // State management
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeItem, setActiveItem] = useState("Beranda");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [userName, setUserName] = useState(null);
    const [openDropdowns, setOpenDropdowns] = useState({});
    
    // Refs for dropdown management
    const dropdownRef = useRef(null);
    const userDropdownRef = useRef(null);
    
    // Hooks
    const navigate = useNavigate();
    const location = useLocation();

    // Menu items configuration
    const menuItems = [
        { id: "beranda", label: "Beranda", path: "/" },
        {
            id: "ilp",
            label: "ILP",
            path: "/IntegrasiLayanan",
            submenu: [
                {
                    id: "klaster1",
                    label: "Klaster 1",
                    // path: "/Klaster1",
                    description: "(Manajemen)",
                    submenu: [
                        {
                            id: "ketatausahaan",
                            label: "Manajemen Puskesmas Ketatausahaan",
                            path: "/Ketatausahaan",
                            description: "(Administrasi & Tata Kelola)"
                        }
                    ]
                },
                {
                    id: "klaster2",
                    label: "Klaster 2",
                    // path: "/Klaster2",
                    description: "(Ibu dan Anak)",
                    submenu: [
                        {
                            id: "ibuHamilBersalinDanNifas",
                            label: "Ibu Hamil, Bersalin, dan Nifas",
                             path: "#",
                            submenu: [
                                {
                                    id:  "kesehatanIbuDanAnak",
                                    label: "Kesehatan Ibu dan Anak (KIA)",
                                    path: "/KesehatanIbuDanAnak",
                                },
                                {
                                    id:  "ruangBersalin",
                                    label: "Ruang Bersalin",
                                    path: "/RuangBersalin",
                                }
                            ]
                        },
                        {
                            id: "balitaAnakDanPraSekolah",
                            label: "Balita, Anak, dan Pra Sekolah",
                            submenu: [
                                {
                                    id:  "manajemenTerpaduBalitaSakit",
                                    label: "Manajemen Terpadu Balita Sakit (MTBS)",
                                    path: "/ManajemenTerpaduBalitaSakit",
                                }
                            ]
                        },
                        {
                            id: "anakUsiaSekolahDanRemaja",
                            label: "Anak Usia Sekolah dan Remaja",
                            submenu: [
                                {
                                    id:  "kesehatanPeduliRemaja",
                                    label: "Kesehatan Peduli Remaja (PKPR)",
                                    path: "/KesehatanPeduliRemaja",
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "klaster3",
                    label: "Klaster 3",
                    // path: "/Klaster3",
                    description: "(Usia Dewasa dan Lansia)",
                    submenu:[
                        {
                            id: "usiaDewasa",
                            label: "Usia Dewasa",
                            path: "/UsiaDewasa",
                        },
                        {
                            id: "usiaLansia",
                            label: "Usia Lansia",
                            path: "/UsiaLansia",
                        }
                    ]
                },
                {
                    id: "klaster4",
                    label: "Klaster 4",
                    // path: "/Klaster4",
                    description: "(Penanggulangan Penyakit Menular)",
                    submenu: [
                        {
                            id: "kesehatanLingkungan",
                            label: "Kesehatan Lingkungan",
                            path: "/KesehatanLingkungan",
                        },
                        {
                            id: "surveilans",
                            label: "Surveilans",
                            path: "/Surveilans",
                        }
                    ]
                },
                {
                    id: "klaster5",
                    label: "Klaster 5",
                    // path: "/Klaster5",
                    description: "(Lintas Klaster)",
                    submenu: [
                        {
                            id: "laboratorium",
                            label: "Laboratorium",
                            path: "/Laboratorium",
                        },
                        {
                            id: "kefarmasian",
                            label: "Kefarmasian",
                            path: "/Kefarmasian",
                        },
                        {
                            id: "pelayananGawatDarurat",
                            label: "Pelayanan Gawat Darurat",
                            path: "/PelayananGawatDarurat",
                        }
                    ]
                }
            ]
        },
        { id: "jenis", label: "Jenis Layanan", path: "/JenisLayanan" },
        { id: "tarif", label: "Tarif Layanan", path: "/TarifLayanan" },
        // { id: "pembantu", label: "Puskesmas Pembantu", path: "/PuskesmasPembantu" },
        // { id: "tentang", label: "Tentang Kami", path: "/TentangKami" },
        { id: "karir", label: "Karir", path: "/Karir" },
        { id: "aduan", label: "Aduan", path: "/Aduan" },
        { id: "jaksehat", label: "Jaksehat", path: "/Jaksehat" },
        { id: "artikel", label: "Artikel", path: "/Artikel" }
    ];

    // Effects
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const currentItem = menuItems.find(item => item.path === location.pathname);
        if (currentItem) {
            setActiveItem(currentItem.label);
        }
    }, [location.pathname]);

    useEffect(() => {
        const token = localStorage.getItem("token");
        const name = localStorage.getItem("name");
        if (token) {
            setUserName(name || "Pengguna");
        }
    }, []);

    // Handle click outside dropdown
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (userDropdownRef.current && !userDropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Handlers
    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("name");
        setUserName(null);
        setIsDropdownOpen(false);
        navigate("/");
        window.location.reload();
    };

    const handleMenuClick = (item) => {
        // Jika item memiliki submenu tapi tidak ada path, jangan navigate
        if (item.submenu && item.submenu.length > 0 && !item.path) {
            return;
        }

        setActiveItem(item.label);
        setMenuOpen(false);
        setOpenDropdowns({});

        if (item.path) {
            if (item.path === location.pathname) {
                const element = document.getElementById(item.id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                navigate(item.path);
            }
        }
    };

    const toggleDropdown = (itemId) => {
        setOpenDropdowns(prev => ({
            ...prev,
            [itemId]: !prev[itemId]
        }));
    };

    // Component: Desktop Menu Item
 const DesktopMenuItem = ({ item, depth = 0 }) => {
    const [isHovered, setIsHovered] = useState(false);
    const hasSubmenu = item.submenu && item.submenu.length > 0;

    return (
        <div
            className="relative group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <button
                onClick={() => handleMenuClick(item)}
                className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 flex items-center whitespace-nowrap ${
                    activeItem === item.label
                        ? 'text-white bg-white/20 shadow-lg'
                        : 'text-green-100 hover:text-white hover:bg-white/10'
                }`}
            >
                <span className="truncate max-w-[200px]">{item.label}</span>
                {item.description && (
                    <span className="text-xs text-green-200 ml-1 hidden xl:inline">
                        {item.description}
                    </span>
                )}
                {hasSubmenu && (
                    <svg
                        className={`ml-1 w-3 h-3 text-green-200 transition-transform duration-200 ${
                            isHovered ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                )}
            </button>
            {/* Dropdown Menu */}
            {hasSubmenu && isHovered && (
                <div
                    className="absolute left-full top-0 mt-1 z-[1000] min-w-[280px] max-w-[320px] bg-white rounded-xl shadow-xl border border-gray-200 overflow-visible"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div className="py-2">
                        {item.submenu.map((sub, index) => (
                            <div key={sub.id} className={`${index > 0 ? 'border-t border-gray-100' : ''}`}>
                                <DesktopSubmenuItem item={sub} depth={depth + 1} />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

    // Component: Desktop Submenu Item
const DesktopSubmenuItem = ({ item, depth = 0 }) => {
    const [isHovered, setIsHovered] = useState(false);
    const hasSubmenu = item.submenu && item.submenu.length > 0;

    return (
        <div
            className="relative group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <button
                onClick={() => handleMenuClick(item)}
                className={`w-full text-left px-4 py-3 text-sm hover:bg-green-50 transition-colors duration-200 flex items-center justify-between group ${
                    activeItem === item.label ? 'bg-green-100 text-green-800 font-medium' : 'text-gray-700'
                }`}
            >
                <div className="flex-1">
                    <div className="font-medium">{item.label}</div>
                    {item.description && (
                        <div className="text-xs text-gray-500 mt-1">{item.description}</div>
                    )}
                </div>
                {hasSubmenu && (
                    <svg
                        className="w-4 h-4 text-gray-400 group-hover:text-green-600 transition-colors"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                )}
            </button>
            {/* Dropdown Submenu */}
            {hasSubmenu && isHovered && (
                <div
                    className="absolute left-full top-0 mt-1 z-[1001] min-w-[280px] max-w-[320px] bg-white rounded-xl shadow-xl border border-gray-200 overflow-visible"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div className="py-2">
                        {item.submenu.map((sub, index) => (
                            <div key={sub.id} className={`${index > 0 ? 'border-t border-gray-100' : ''}`}>
                                <DesktopSubmenuItem item={sub} depth={depth + 1} />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

    // Component: Mobile Menu Item
    const MobileMenuItem = ({ item, depth = 0 }) => {
        const isOpen = openDropdowns[item.id] || false;
        const hasSubmenu = item.submenu && item.submenu.length > 0;

        return (
            <div className="mb-1">
                <button
                    onClick={() => {
                        if (hasSubmenu) {
                            toggleDropdown(item.id);
                        } else {
                            handleMenuClick(item);
                        }
                    }}
                    className={`w-full flex items-center justify-between px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300 ${
                        activeItem === item.label
                            ? 'text-white bg-gradient-to-r from-green-600 to-emerald-600 shadow-lg'
                            : 'text-green-100 hover:text-white hover:bg-white/10'
                    }`}
                    style={{ marginLeft: `${depth * 12}px` }}
                >
                    <div className="flex items-center flex-1">
                        <div className={`w-2 h-2 rounded-full mr-3 transition-all duration-300 ${
                            activeItem === item.label ? 'bg-white' : 'bg-green-400/50'
                        }`}></div>
                        <div className="text-left">
                            <div>{item.label}</div>
                            {item.description && (
                                <div className="text-xs text-green-200 mt-1">{item.description}</div>
                            )}
                        </div>
                    </div>
                    {hasSubmenu && (
                        <svg
                            className={`w-4 h-4 ml-2 transition-transform duration-300 ${
                                isOpen ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    )}
                </button>

                {/* Mobile Submenu */}
                {hasSubmenu && (
                    <div className={`overflow-hidden transition-all duration-300 ${
                        isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                        <div className="pl-2 mt-1 space-y-1">
                            {item.submenu.map(sub => (
                                <MobileMenuItem
                                    key={sub.id}
                                    item={sub}
                                    depth={depth + 1}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        );
    };

    return (
        <>
            <Navbar />

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
                                <DesktopMenuItem key={item.id} item={item} />
                            ))}

                            <PuskesmasPembantuDropdown/>
                            <TentangKamiDropdown />

                            {/* User Dropdown */}
                            {userName && (
                                <div className="relative ml-4" ref={userDropdownRef}>
                                    <button 
                                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                        className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                                            isDropdownOpen 
                                                ? 'bg-green-800 text-white shadow-lg' 
                                                : 'bg-green-700 hover:bg-green-800 text-white'
                                        }`}
                                        aria-expanded={isDropdownOpen}
                                    >
                                        <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className="text-sm font-medium">{userName}</span>
                                        <svg
                                            className={`w-4 h-4 transition-transform duration-200 ${
                                                isDropdownOpen ? 'rotate-180' : ''
                                            }`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    
                                    {/* User Dropdown Menu */}
                                    {isDropdownOpen && (
                                        <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden z-50 animate-in fade-in-0 zoom-in-95 duration-200">
                                            <div className="py-2">
                                                <div className="px-4 py-3 border-b border-gray-100">
                                                    <div className="text-sm font-medium text-gray-900">Selamat datang!</div>
                                                    <div className="text-sm text-gray-500 truncate">{userName}</div>
                                                </div>
                                                <button
                                                    onClick={() => {
                                                        navigate("/createKarir");
                                                        setIsDropdownOpen(false);
                                                    }}
                                                    className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-800 transition-colors flex items-center"
                                                >
                                                    <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                    </svg>
                                                    Karir
                                                </button>
                                                <div className="border-t border-gray-100">
                                                    <button
                                                        onClick={handleLogout}
                                                        className="w-full text-left px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors flex items-center"
                                                    >
                                                        <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                                        </svg>
                                                        Logout
                                                    </button>
                                                </div>
                                            </div>
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
            <div className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${
                menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`} style={{ top: '80px' }}>
                <div
                    className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
                        menuOpen ? 'opacity-100' : 'opacity-0'
                    }`}
                    onClick={() => {
                        setMenuOpen(false);
                        setOpenDropdowns({});
                    }}
                ></div>
                <nav className={`absolute top-4 left-4 right-4 bg-[#355F2E] rounded-2xl shadow-2xl border border-white/10 overflow-hidden transform transition-all duration-300 max-h-[calc(100vh-120px)] ${
                    menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
                }`}>
                    <div className="p-4 overflow-y-auto max-h-[calc(100vh-160px)]">
                        {menuItems.map((item) => (
                            <MobileMenuItem key={item.id} item={item} />
                        ))}

                         <TentangKamiDropdown 
    isMobile={true} 
    onItemClick={() => {
        setMenuOpen(false);
        setOpenDropdowns({});
    }} 
/>

                        {/* Mobile User Menu */}
                        {userName && (
                            <div className="border-t border-white/10 pt-4 mt-4">
                                <div className="px-4 py-2 text-sm text-green-200 font-medium border-b border-white/10 pb-3 mb-3">
                                    Selamat datang, {userName}!
                                </div>
                                <button
                                    onClick={() => {
                                        navigate("/createKarir");
                                        setMenuOpen(false);
                                    }}
                                    className="w-full flex items-center px-4 py-3 text-sm font-medium text-green-100 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 mb-2"
                                >
                                    <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    Karir
                                </button>
                                <button
                                    onClick={handleLogout}
                                    className="w-full flex items-center px-4 py-3 text-sm font-medium text-red-400 hover:bg-white/10 rounded-xl transition-all duration-300"
                                >
                                    <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                    </svg>
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                </nav>
            </div>

            {/* Spacer */}
            <div className="h-24 md:h-28"></div>
        </>
    );
};

export default Header;