import React, { useEffect, useState } from 'react';

const CreatePuskesmasPembantu = () => {
    const [pustus, setPustus] = useState([]);
    const [formData, setFormData] = useState({
        namaPuskesmas: '',
        desc: '',
        lokasi: '',
        jamPelayanan: '',
        telepon: '',
        whatsapp: '',
        images: []
    });
    const [editId, setEditId] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const fetchPustus = async () => {
        try {
            const res = await fetch('http://localhost:8080/api/pustu/');
            const data = await res.json();
            setPustus(data);
        } catch (err) {
            console.error('Error fetching data', err);
        }
    };

    useEffect(() => {
        fetchPustus();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        setFormData((prev) => ({ ...prev, images: files }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();

        Object.entries(formData).forEach(([key, value]) => {
            if (Array.isArray(value)) {
                value.forEach((file) => data.append(key, file));
            } else {
                data.append(key, value);
            }
        });

        try {
            if (editId) {
                // Update
                const res = await fetch(`http://localhost:8080/api/pustu/${editId}`, {
                    method: 'PUT',
                    body: data
                });
                if (!res.ok) throw new Error('Gagal mengubah data');
            } else {
                // Create
                const res = await fetch('http://localhost:8080/api/pustu/', {
                    method: 'POST',
                    body: data
                });
                if (!res.ok) throw new Error('Gagal menyimpan data');
            }

            fetchPustus();
            resetForm();
        } catch (err) {
            console.error('Error submitting data', err);
        }
    };

    const handleEdit = (item) => {
        setEditId(item.id);
        setFormData({
            namaPuskesmas: item.namaPuskesmas,
            desc: item.desc,
            lokasi: item.lokasi,
            jamPelayanan: item.jamPelayanan,
            telepon: item.telepon,
            whatsapp: item.whatsapp,
            images: [] // Kosongkan jika tidak ingin upload ulang gambar
        });
        setIsModalOpen(true);
    };

    const handleDelete = async (id) => {
        if (window.confirm("Hapus data ini?")) {
            try {
                const res = await fetch(`http://localhost:8080/api/pustu/${id}`, {
                    method: 'DELETE'
                });
                if (!res.ok) throw new Error('Gagal menghapus data');

                fetchPustus();
            } catch (err) {
                console.error('Error deleting data', err);
            }
        }
    };

    const resetForm = () => {
        setFormData({
            namaPuskesmas: '',
            desc: '',
            lokasi: '',
            jamPelayanan: '',
            telepon: '',
            whatsapp: '',
            images: []
        });
        setEditId(null);
        setIsModalOpen(false);
    };

    return (
        <div className="p-6 max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">CRUD Puskesmas Pembantu</h1>

            <button
                onClick={() => setIsModalOpen(true)}
                className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Tambah Data
            </button>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="py-2 px-4 border-b">Nama Puskesmas</th>
                            <th className="py-2 px-4 border-b">Lokasi</th>
                            <th className="py-2 px-4 border-b">Telepon</th>
                            <th className="py-2 px-4 border-b">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pustus.map((pustu) => (
                            <tr key={pustu.id} className="hover:bg-gray-50">
                                <td className="py-2 px-4 border-b">{pustu.namaPuskesmas}</td>
                                <td className="py-2 px-4 border-b">{pustu.lokasi}</td>
                                <td className="py-2 px-4 border-b">{pustu.telepon}</td>
                                <td className="py-2 px-4 border-b flex gap-2">
                                    <button
                                        onClick={() => handleEdit(pustu)}
                                        className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(pustu.id)}
                                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                                    >
                                        Hapus
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modal Form */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl max-h-screen overflow-y-auto">
                        <h2 className="text-xl font-semibold mb-4">
                            {editId ? 'Edit Data' : 'Tambah Data'}
                        </h2>
                        <form onSubmit={handleSubmit} encType="multipart/form-data">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label>Nama Puskesmas</label>
                                    <input
                                        type="text"
                                        name="namaPuskesmas"
                                        value={formData.namaPuskesmas}
                                        onChange={handleChange}
                                        required
                                        className="w-full border p-2 rounded"
                                    />
                                </div>
                                <div>
                                    <label>Telepon</label>
                                    <input
                                        type="text"
                                        name="telepon"
                                        value={formData.telepon}
                                        onChange={handleChange}
                                        className="w-full border p-2 rounded"
                                    />
                                </div>
                                <div>
                                    <label>WhatsApp</label>
                                    <input
                                        type="text"
                                        name="whatsapp"
                                        value={formData.whatsapp}
                                        onChange={handleChange}
                                        className="w-full border p-2 rounded"
                                    />
                                </div>
                                <div>
                                    <label>Lokasi</label>
                                    <textarea
                                        name="lokasi"
                                        value={formData.lokasi}
                                        onChange={handleChange}
                                        rows="2"
                                        className="w-full border p-2 rounded"
                                    ></textarea>
                                </div>
                                <div className="md:col-span-2">
                                    <label>Jam Pelayanan</label>
                                    <textarea
                                        name="jamPelayanan"
                                        value={formData.jamPelayanan}
                                        onChange={handleChange}
                                        rows="2"
                                        className="w-full border p-2 rounded"
                                    ></textarea>
                                </div>
                                <div className="md:col-span-2">
                                    <label>Deskripsi</label>
                                    <textarea
                                        name="desc"
                                        value={formData.desc}
                                        onChange={handleChange}
                                        rows="4"
                                        className="w-full border p-2 rounded"
                                    ></textarea>
                                </div>
                                <div className="md:col-span-2">
                                    <label>Foto (boleh lebih dari 1)</label>
                                    <input
                                        type="file"
                                        multiple
                                        onChange={handleFileChange}
                                        className="w-full border p-2 rounded"
                                    />
                                </div>
                            </div>
                            <div className="mt-4 flex justify-end gap-2">
                                <button
                                    type="button"
                                    onClick={resetForm}
                                    className="bg-gray-400 text-white px-4 py-2 rounded"
                                >
                                    Batal
                                </button>
                                <button
                                    type="submit"
                                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                                >
                                    Simpan
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CreatePuskesmasPembantu;