import Header from "../../Components/Header";

import { BiHealth } from "react-icons/bi";
import { GiHealthNormal } from "react-icons/gi";
import { FaHospitalAlt } from "react-icons/fa";
import Footer from "../../Components/Footer";



const JenisLayanan = () => {
    return (
        <div>
            
            <Header />
            <div>
                <h1 className="font-semibold text-3xl text-center mt-1">Jenis Pelayanan</h1>
                <p className="text-center">Jenis pelayanan yang diberikan oleh Puskesmas Cilandak meliputi Pelayanan Upaya Kesehatan Masyarakat dan Upaya Kesehatan Perseorangan
                    yang mencangkup upaya promotif, preventif, dan kuratif.</p>
            </div>
            <div className="grid justify-center gap-5 mt-2">
                <div className="border border-slate-950 rounded w-64 h-20 flex flex-col items-center justify-center">
                    <BiHealth className="text-2xl" />
                    <h1>UKM</h1>
                    <p>Upaya Kesehatan Masyarakat</p>
                </div>
                <div className="border border-slate-950 rounded w-64 h-20 flex flex-col items-center justify-center">
                    <GiHealthNormal className="text-2xl" />
                    <h1>UKP</h1>
                    <p>Upaya Kesehatan Perorangan</p>
                </div>
                <div className="border border-slate-950 rounded w-64 h-20 flex flex-col items-center justify-center">
                    <FaHospitalAlt className="text-2xl" />
                    <h1>Perkesmas</h1>
                    <p>Perawatan Kesehatan Masyarakat</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default JenisLayanan;