import { useState } from "react";
import Header from "../../Components/Header";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const StandarPelayanan = () => {
    const images = [
        "02.png", "03.png", "04.png", "05.png", "06.png",
        "07.png", "08.png", "09.png", "10.png", "11.png"
    ];

    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div>
            <Navbar />
            <Header />

            <div className="max-w-5xl mx-auto px-4 py-6 text-center">
                <h1 className="font-semibold text-3xl md:text-4xl">Standar Pelayanan</h1>
                <p className="mt-3 text-sm md:text-base">
                    Dalam rangka penyelenggaraan pemerintahan yang baik dan guna mewujudkan kepastian hak dan kewajiban berbagai
                    pihak yang terkait dengan penyelenggaraan pelayanan, kami menyusun, menetapkan dan menerapkan Standar Pelayanan Puskesmas Cilandak.
                </p>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-4 pb-10">
                {images.map((img, i) => (
                    <div
                        key={i}
                        className="w-full aspect-[3/4] overflow-hidden bg-white shadow rounded-lg p-1 flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-105"
                        onClick={() => setSelectedImage(`/images/standarpelayanan/Standar Pelayanan (2)/Standar Pelayanan (2)-${img}`)}
                    >
                        <img
                            src={`/images/standarpelayanan/Standar Pelayanan (2)/Standar Pelayanan (2)-${img}`}
                            alt={`Standar Pelayanan ${i + 1}`}
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
                    <div className="max-w-3xl w-[90%] bg-white p-4 rounded-lg shadow-xl relative" onClick={(e) => e.stopPropagation()}>
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

export default StandarPelayanan;
