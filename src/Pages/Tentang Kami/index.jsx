import Header from "../../Components/Header";
import Footer from "../../Components/Footer";


const TentangKami = () => {
    return (
        <div>
           
            <Header />
            <div className="mt-4 flex items-center justify-center">
                <div className="grid grid-rows-2 gap-4">
                    <div className="flex gap-3">
                        <div className="border border-slate-950 rounded-full w-28 h-16 flex flex-col items-center justify-center gap-1">
                            <img src="./images/TentangKami/VisiMisi.png" alt="" className="w-7" />
                            <h1 className="text-center text-xs">Visi & Misi</h1>
                        </div>
                        <div className="border border-slate-950 rounded-full w-28 h-16 flex flex-col items-center justify-center gap-1">
                            <img src="./images/TentangKami/TataNilai.png" alt="" className="w-7" />
                            <h1 className="text-center text-xs">Tata Nilai</h1>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <div className="border border-slate-950 rounded-full w-28 h-16 flex flex-col items-center justify-center gap-1">
                            <img src="./images/TentangKami/Maklumat.png" alt="" className="w-7" />
                            <h1 className="text-center text-xs">Maklumat</h1>
                        </div>
                        <div className="border border-slate-950 rounded-full w-28 h-16 flex flex-col items-center justify-center gap-1 overflow-hidden">
                            <img src="./images/TentangKami/SKP.png" alt="" className="w-7" />
                            <h1 className="text-center text-xs">Survei Kepuasan Pelanggan</h1>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default TentangKami;