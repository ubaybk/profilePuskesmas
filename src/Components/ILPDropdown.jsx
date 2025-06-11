// components/ILPDropdown.jsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ILPDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const handleItemClick = (path) => {
        if (path) {
            navigate(path);
        }
    };

    return (
        <div className="relative group">
            <button
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
                className="relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 flex items-center whitespace-nowrap text-green-100 hover:text-white hover:bg-white/10"
            >
                <span>ILP</span>
                <svg
                    className={`ml-1 w-3 h-3 text-green-200 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div
                    className="absolute left-0 top-full mt-1 z-[1000] min-w-[280px] bg-white rounded-xl shadow-xl border border-gray-200 overflow-visible"
                    onMouseEnter={() => setIsOpen(true)}
                    onMouseLeave={() => setIsOpen(false)}
                >
                    <div className="py-2">
                        {/* Klaster 1 */}
                        <div className="border-b border-gray-100 pb-2">
                            <button
                                onClick={() => handleItemClick("/Ketatausahaan")}
                                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-800 transition-colors"
                            >
                                Klaster 1 - Manajemen Puskesmas Ketatausahaan
                            </button>
                        </div>

                        {/* Klaster 2 */}
                        <div className="border-b border-gray-100 pb-2">
                            <div className="px-4 py-2 text-sm text-gray-500">Klaster 2 - Ibu dan Anak</div>
                            <button
                                onClick={() => handleItemClick("/KesehatanIbuDanAnak")}
                                className="w-full text-left px-6 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-800 transition-colors"
                            >
                                Kesehatan Ibu dan Anak (KIA)
                            </button>
                            <button
                                onClick={() => handleItemClick("/RuangBersalin")}
                                className="w-full text-left px-6 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-800 transition-colors"
                            >
                                Ruang Bersalin
                            </button>
                            <button
                                onClick={() => handleItemClick("/ManajemenTerpaduBalitaSakit")}
                                className="w-full text-left px-6 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-800 transition-colors"
                            >
                                Manajemen Terpadu Balita Sakit (MTBS)
                            </button>
                            <button
                                onClick={() => handleItemClick("/KesehatanPeduliRemaja")}
                                className="w-full text-left px-6 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-800 transition-colors"
                            >
                                Kesehatan Peduli Remaja (PKPR)
                            </button>
                        </div>

                        {/* Klaster 3 */}
                        <div className="border-b border-gray-100 pb-2">
                            <button
                                onClick={() => handleItemClick("/UsiaDewasa")}
                                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-800 transition-colors"
                            >
                                Klaster 3 - Usia Dewasa
                            </button>
                            <button
                                onClick={() => handleItemClick("/UsiaLansia")}
                                className="w-full text-left px-6 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-800 transition-colors"
                            >
                                Usia Lansia
                            </button>
                        </div>

                        {/* Klaster 4 */}
                        <div className="border-b border-gray-100 pb-2">
                            <button
                                onClick={() => handleItemClick("/KesehatanLingkungan")}
                                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-800 transition-colors"
                            >
                                Klaster 4 - Kesehatan Lingkungan
                            </button>
                            <button
                                onClick={() => handleItemClick("/Surveilans")}
                                className="w-full text-left px-6 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-800 transition-colors"
                            >
                                Surveilans
                            </button>
                        </div>

                        {/* Klaster 5 */}
                        <div>
                            <button
                                onClick={() => handleItemClick("/Laboratorium")}
                                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-800 transition-colors"
                            >
                                Klaster 5 - Laboratorium
                            </button>
                            <button
                                onClick={() => handleItemClick("/Kefarmasian")}
                                className="w-full text-left px-6 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-800 transition-colors"
                            >
                                Kefarmasian
                            </button>
                            <button
                                onClick={() => handleItemClick("/PelayananGawatDarurat")}
                                className="w-full text-left px-6 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-800 transition-colors"
                            >
                                Pelayanan Gawat Darurat
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ILPDropdown;