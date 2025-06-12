import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PuskesmasPembantuDropdown = ({ isMobile = false, onItemClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [puskesmasList, setPuskesmasList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  // Fetch data puskesmas dari API
  useEffect(() => {
    const fetchPuskesmas = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch("http://localhost:8080/api/pustu/");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setPuskesmasList(data || []);
      } catch (error) {
        console.error("Error fetching puskesmas:", error);
        setError("Gagal memuat data puskesmas");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPuskesmas();
  }, []);

  // Handle item click
  const handleItemClick = (item) => {
    if (item?.id) {
      navigate(`/PuskesmasPembantu/${item.id}`);
    }

    setIsOpen(false);
    if (onItemClick) onItemClick(); // Tutup menu mobile jika ada callback
  };

  // Toggle dropdown
  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  // Mouse handlers untuk desktop
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

  // Loading state
  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-4">
        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-green-500"></div>
        <span className="ml-2 text-sm text-gray-500">Memuat...</span>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="text-red-500 text-sm py-2">
        {error}
      </div>
    );
  }

  // Mobile Version
  if (isMobile) {
    return (
      <div className="mb-1">
        <button
          onClick={toggleDropdown}
          className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300 text-green-100 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          <div className="flex items-center flex-1">
            <div className="w-2 h-2 rounded-full mr-3 bg-green-400/50" />
            <span>Puskesmas Pembantu</span>
          </div>

          <svg
            className={`w-4 h-4 ml-2 transition-transform duration-300 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {/* Mobile Submenu */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pl-2 mt-1 space-y-1">
            {puskesmasList.length === 0 ? (
              <div className="px-4 py-3 text-sm text-green-200/70">
                Tidak ada data puskesmas
              </div>
            ) : (
              puskesmasList.map((puskesmas) => (
                <button
                  key={puskesmas.id}
                  onClick={() => handleItemClick(puskesmas)}
                  className="w-full flex items-center px-4 py-3 ml-3 text-sm font-medium rounded-xl transition-all duration-300 text-green-100 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
                >
                  <div className="w-2 h-2 rounded-full mr-3 bg-green-400/50" />
                  <span className="text-left">{puskesmas.namaPuskesmas}</span>
                </button>
              ))
            )}
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
      {/* Desktop Button */}
      <button
        onClick={toggleDropdown}
        className="relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 flex items-center whitespace-nowrap text-green-100 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <span>Puskesmas Pembantu</span>
        <svg
          className={`ml-2 w-4 h-4 text-green-200 transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
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
        className={`absolute right-0 top-full z-[1000] min-w-[280px] bg-white rounded-xl shadow-2xl border border-gray-100 transition-all duration-200 transform origin-top ${
          isOpen
            ? "opacity-100 visible scale-100 translate-y-0"
            : "opacity-0 invisible scale-95 -translate-y-2"
        }`}
        style={{
          boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        }}
      >
        <div className="py-2 max-h-80 overflow-y-auto">
          {puskesmasList.length === 0 ? (
            <div className="px-5 py-3 text-sm text-gray-500 text-center">
              Tidak ada data puskesmas
            </div>
          ) : (
            puskesmasList.map((puskesmas) => (
              <button
                key={puskesmas.id}
                onClick={() => handleItemClick(puskesmas)}
                className="w-full text-left px-5 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-800 transition-all duration-150 flex items-center group focus:outline-none focus:bg-green-50"
              >
                <svg
                  className="w-4 h-4 mr-3 text-gray-400 group-hover:text-green-600 transition-colors flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
                <span className="truncate">{puskesmas.namaPuskesmas}</span>
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default PuskesmasPembantuDropdown;