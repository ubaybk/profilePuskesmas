import { useState, useEffect } from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";

const Karir = () => {
    const [karirList, setKarirList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:8080/api/karir");
                if (!response.ok) throw new Error("Gagal memuat data karir.");
                const result = await response.json();
                setKarirList(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Fungsi untuk membuka file
    const handleFileClick = (job) => {
        const filePath = `http://localhost:8080/${job.dokumenPath.replace(/\\/g, "/")}`;
        if (filePath.endsWith(".pdf") || filePath.endsWith(".docx") || filePath.endsWith(".xlsx")) {
            // Buka file di tab baru
            window.open(filePath, "_blank");
        } else {
            // Untuk gambar, bisa juga ditampilkan dengan cara yang sama
            window.open(filePath, "_blank");
        }
    };

    return (
        <>
            <div className="bg-gray-50 min-h-screen">
                <Header />

                <main className="container mx-auto px-4 py-12">
                    <h1 className="text-4xl font-bold text-center mb-12 text-blue-700">Karir Terbuka</h1>

                    {loading && <p className="text-center text-gray-600">Memuat data...</p>}
                    {error && <p className="text-center text-red-600">Error: {error}</p>}

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {karirList.map((job) => (
                            <div
                                key={job.id}
                                onClick={() => handleFileClick(job)}
                                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                            >
                                {/* Gambar Preview */}
                                {job.dokumenPath && (
                                    <img
                                        src={`http://localhost:8080/${job.dokumenPath.replace(/\\/g, "/")}`}
                                        alt={job.posisi}
                                        className="w-full h-48 object-cover"
                                    />
                                )}

                                {/* Konten */}
                                <div className="p-6">
                                    <h2 className="text-2xl font-semibold text-gray-800">{job.posisi}</h2>
                                    <p className="text-gray-600 mt-2">{job.deskripsi}</p>
                                    <div className="mt-4 space-y-2">
                                        <p><span className="font-medium">Lokasi:</span> {job.lokasi}</p>
                                        <p><span className="font-medium">Tipe Kerja:</span> {job.tipeKerja}</p>
                                        <p className="text-sm text-gray-400 mt-3">
                                            Ditayangkan: {new Date(job.createdAt).toLocaleDateString()}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>

                <Footer />
            </div>
        </>
    );
};

export default Karir;