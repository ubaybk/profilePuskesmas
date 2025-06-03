import { useState } from "react";
import Header from "../../Components/Header";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const HakKewajiban = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const images = [
        "1.png", "2.png", "3.png", "4.png",
        "5.png", "6.png", "7.png", "8.png"
    ];

    return (
        <div>
            <Navbar />
            <Header />

            <div className="max-w-5xl mx-auto px-4 py-6 text-center">
                <h1 className="text-3xl md:text-4xl font-semibold">Hak dan Kewajiban Pasien</h1>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-4 pb-10">
                {images.map((img, i) => (
                    <div
                        key={i}
                        className="w-full aspect-[3/4] overflow-hidden bg-white shadow rounded-lg p-1 flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-105"
                        onClick={() => setSelectedImage(`/images/hk_pasien/${img}`)}
                    >
                        <img
                            src={`/images/hk_pasien/${img}`}
                            alt={`Hak dan Kewajiban ${i + 1}`}
                            className="object-contain h-full"
                        />
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
                    onClick={() => setSelectedImage(null)}
                >
                    <div
                        className="max-w-3xl w-[90%] bg-white p-4 rounded-lg shadow-xl relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-xl font-bold"
                        >
                            ×
                        </button>
                        <img
                            src={selectedImage}
                            alt="Zoomed"
                            className="w-full h-auto object-contain"
                        />
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
};

export default HakKewajiban;
