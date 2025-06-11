// components/TentangKamiDropdown.js

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PuskesmasPembantuDropdown = ({ isMobile = false, onItemClick }) => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    // Menu items configuration
    const menuItems = [
        {
            id: "LB",
            label: "PUSTU Lebak Bulus",
            path: "/tentang-kami#profil",
            icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        },
        {
            id: "CS",
            label: "PUSTU Cipete Selatan",
            path: "/tentang-kami#visi-misi",
            icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        },
        {
            id: "CB",
            label: "PUSTU Cilandak Barat",
            path: "/tentang-kami#tata-nilai",
            icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        },
        {
            id: "PL",
            label: "PUSTU Pondok Labu",
            path: "/tentang-kami#maklumat",
            icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        },
        {
            id: "GS",
            label: "PUSTU Gandaria Selatan",
            path: "/survei-kepuasan",
            icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        }
    ];

    const handleItemClick = (item) => {
        if (item.path) {
            navigate(item.path);
        }
        setIsOpen(false);
        if (onItemClick) {
            onItemClick();
        }
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleMouseEnter = () => {
        if (!isMobile) {
            setIsOpen(true);
        }
    };

    const handleMouseLeave = () => {
        if (!isMobile) {
            setIsOpen(false);
        }
    };

    // Mobile Version
    if (isMobile) {
        return (
            <div className="mb-1">
                <button
                    onClick={toggleDropdown}
                    className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300 text-green-100 hover:text-white hover:bg-white/10"
                >
                    <div className="flex items-center flex-1">
                        <div className="w-2 h-2 rounded-full mr-3 bg-green-400/50"></div>
                        <div className="text-left">
                            <div>Puskesmas Pembantu</div>
                        </div>
                    </div>
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
                </button>

                {/* Mobile Submenu */}
                <div className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                }`}>
                    <div className="pl-2 mt-1 space-y-1">
                        {menuItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => handleItemClick(item)}
                                className="w-full flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300 text-green-100 hover:text-white hover:bg-white/10"
                                style={{ marginLeft: '12px' }}
                            >
                                <div className="flex items-center flex-1">
                                    <div className="w-2 h-2 rounded-full mr-3 bg-green-400/50"></div>
                                    <div className="text-left">
                                        <div>{item.label}</div>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    // Desktop Version
    return (
        <div 
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Button */}
            <button className="relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 flex items-center whitespace-nowrap text-green-100 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20">
                <span>Puskesmas Pembantu</span>
                <svg
                    className={`ml-2 w-4 h-4 text-green-200 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M19 9l-7 7-7-7" 
                    />
                </svg>
            </button>

            {/* Desktop Dropdown Menu */}
            <div
  className={`absolute right-0 top-full z-[1000] min-w-[260px] bg-white rounded-xl shadow-2xl border border-gray-100 transition-all duration-200 transform origin-top ${
    isOpen 
      ? 'opacity-100 visible scale-100 translate-y-0' 
      : 'opacity-0 invisible scale-95 -translate-y-2'
  }`}
  style={{
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
  }}
>

                <div className="py-2">
                    {menuItems.map((item, index) => (
                        <div key={item.id}>
                            {/* {index === 3 && <div className="border-t border-gray-100 my-2"></div>} */}
                            <button
                                onClick={() => handleItemClick(item)}
                                className="w-full text-left px-5 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-800 transition-all duration-150 flex items-center group"
                            >
                                <svg 
                                    className="w-4 h-4 mr-3 text-gray-400 group-hover:text-green-600 transition-colors" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                                </svg>
                                <span>{item.label}</span>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PuskesmasPembantuDropdown;