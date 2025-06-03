import { useState, useEffect } from 'react';

const CreateKarir = () => {
    // State untuk form
    const [formData, setFormData] = useState({
        posisi: '',
        deskripsi: '',
        lokasi: '',
        tipeKerja: '',
        dokumen: null,
    });

    // State tambahan
    const [karirs, setKarirs] = useState([]);
    const [message, setMessage] = useState('');
    const [preview, setPreview] = useState(null);
    const [editId, setEditId] = useState(null);

    // Fungsi untuk mengubah nilai input
    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'dokumen') {
            setFormData({ ...formData, dokumen: files[0] });
            setPreview(URL.createObjectURL(files[0]));
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    // Submit form (tambah atau edit)
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (
            !formData.posisi ||
            !formData.deskripsi ||
            !formData.lokasi ||
            !formData.tipeKerja ||
            !formData.dokumen
        ) {
            setMessage('Mohon isi semua field dan unggah dokumen.');
            return;
        }

        try {
            const formDataToSend = new FormData();
            formDataToSend.append('posisi', formData.posisi);
            formDataToSend.append('deskripsi', formData.deskripsi);
            formDataToSend.append('lokasi', formData.lokasi);
            formDataToSend.append('tipeKerja', formData.tipeKerja);
            formDataToSend.append('dokumen', formData.dokumen);

            let url = 'http://localhost:8080/api/karir';
            let method = 'POST';

            if (editId) {
                url += `/${editId}`;
                method = 'PUT';
            }

            const response = await fetch(url, {
                method,
                body: formDataToSend,
            });

            if (!response.ok) throw new Error(editId ? 'Gagal update' : 'Gagal simpan');

            setFormData({
                posisi: '',
                deskripsi: '',
                lokasi: '',
                tipeKerja: '',
                dokumen: null,
            });
            setPreview(null);
            setEditId(null);
            setMessage(editId ? 'Data berhasil diupdate!' : 'Data berhasil ditambahkan!');
            fetchKarirs();
        } catch (error) {
            setMessage(`Gagal menyimpan data. ${error.message}`);
        }
    };

    // Ambil data dari API GET
    const fetchKarirs = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/karir');
            if (!response.ok) throw new Error('Gagal memuat data');
            const data = await response.json();
            setKarirs(data);
        } catch (error) {
            console.error('Error fetching:', error);
        }
    };

    // Hapus data
    const handleDelete = async (id) => {
        if (!window.confirm('Yakin ingin menghapus data ini?')) return;

        try {
            const response = await fetch(`http://localhost:8080/api/karir/${id}`, {
                method: 'DELETE',
            });

            if (!response.ok) throw new Error('Gagal menghapus');

            setMessage('Data berhasil dihapus!');
            fetchKarirs();
        } catch (error) {
            setMessage('Gagal menghapus data.');
        }
    };

    // Edit data
    const handleEdit = (karir) => {
        setFormData({
            posisi: karir.posisi,
            deskripsi: karir.deskripsi,
            lokasi: karir.lokasi,
            tipeKerja: karir.tipeKerja,
            dokumen: null,
        });
        setPreview(karir.dokumen); // URL file lama
        setEditId(karir.id);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Muat data saat pertama kali komponen mount
    useEffect(() => {
        fetchKarirs();
    }, []);

    return (
        <div className="container mx-auto px-4 py-10">
            {/* Form Tambah/Edit Karir */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-10 max-w-3xl mx-auto">
                <h1 className="text-2xl font-bold mb-6 text-gray-800">{editId ? 'Edit Karir' : 'Tambah Karir'}</h1>
                {message && (
                    <p className={`mb-4 p-3 rounded-md text-sm ${
                        message.includes('sukses') || message.includes('berhasil')
                            ? 'bg-green-100 text-green-700'
                            : 'bg-red-100 text-red-700'
                    }`}>
                        {message}
                    </p>
                )}
                <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-6">
                    {/* Posisi */}
                    <div>
                        <label htmlFor="posisi" className="block text-gray-700 font-medium mb-2">Posisi</label>
                        <input
                            type="text"
                            id="posisi"
                            name="posisi"
                            value={formData.posisi}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                            placeholder="Contoh: Perawat, Dokter Umum"
                        />
                    </div>

                    {/* Deskripsi */}
                    <div>
                        <label htmlFor="deskripsi" className="block text-gray-700 font-medium mb-2">Deskripsi</label>
                        <textarea
                            id="deskripsi"
                            name="deskripsi"
                            value={formData.deskripsi}
                            onChange={handleChange}
                            rows="4"
                            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                            placeholder="Tuliskan deskripsi pekerjaan..."
                        ></textarea>
                    </div>

                    {/* Lokasi */}
                    <div>
                        <label htmlFor="lokasi" className="block text-gray-700 font-medium mb-2">Lokasi</label>
                        <input
                            type="text"
                            id="lokasi"
                            name="lokasi"
                            value={formData.lokasi}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                            placeholder="Contoh: Jakarta Selatan"
                        />
                    </div>

                    {/* Tipe Kerja */}
                    <div>
                        <label htmlFor="tipeKerja" className="block text-gray-700 font-medium mb-2">Tipe Kerja</label>
                        <select
                            id="tipeKerja"
                            name="tipeKerja"
                            value={formData.tipeKerja}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                        >
                            <option value="">Pilih Tipe Kerja</option>
                            <option value="REMOTE">Remote</option>
                            <option value="OFFICE">Office</option>
                            <option value="HYBRID">Hybrid</option>
                        </select>
                    </div>

                    {/* Dokumen */}
                    <div>
                        <label htmlFor="dokumen" className="block text-gray-700 font-medium mb-2">Dokumen</label>
                        <input
                            type="file"
                            id="dokumen"
                            name="dokumen"
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>

                    {/* Preview Dokumen */}
                    {preview && (
                        <div className="mt-4">
                            <label className="block text-gray-700 font-medium mb-2">Pratinjau Dokumen:</label>
                            {preview.endsWith('.pdf') ? (
                                <iframe src={preview} className="w-full h-64 border border-gray-300 rounded" title="Preview PDF" />
                            ) : (
                                <img src={preview} alt="Pratinjau dokumen" className="max-h-64 rounded border border-gray-300" />
                            )}
                        </div>
                    )}

                    {/* Tombol Submit */}
                    <button
                        type="submit"
                        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-md transition-colors duration-300"
                    >
                        {editId ? 'Update' : 'Simpan'}
                    </button>
                </form>
            </div>

            {/* Daftar Karir */}
            <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Daftar Karir</h2>
                {karirs.length > 0 ? (
                    <ul className="space-y-6">
                        {karirs.map((karir, index) => (
                            <li key={index} className="border-b pb-4">
                                <h3 className="text-xl font-semibold text-gray-800">{karir.posisi}</h3>
                                <p className="text-gray-600 mt-1">{karir.deskripsi}</p>
                                <div className="mt-2 space-x-4 text-sm text-gray-500">
                                    <span>Lokasi: {karir.lokasi}</span> •{' '}
                                    <span>Tipe Kerja: {karir.tipeKerja}</span>
                                </div>
                                {karir.dokumen && (
                                    <a href={karir.dokumen} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-green-600 hover:text-green-800 underline">
                                        Lihat Dokumen
                                    </a>
                                )}
                                <div className="mt-3 flex gap-2">
                                    <button
                                        onClick={() => handleEdit(karir)}
                                        className="text-blue-600 hover:text-blue-800"
                                    >
                                        Edit
                                    </button>
                                    |
                                    <button
                                        onClick={() => {
        console.log(karir); // Debug
        handleDelete(karir.id);
    }}
    className="text-red-600 hover:text-red-800 ml-2"
>
    Hapus
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-500 italic">Belum ada data karir.</p>
                )}
            </div>
        </div>
    );
};

export default CreateKarir;