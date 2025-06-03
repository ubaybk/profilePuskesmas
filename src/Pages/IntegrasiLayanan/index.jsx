import Footer from "../../Components/Footer";
import Header from "../../Components/Header";


const IntegrasiLayanan = () => {
    return (
        <div>
           
            <Header />
            
            {/* Container dengan max-width dan margin otomatis untuk centering */}
            <div className="mx-auto max-w-4xl px-4 mt-6">
                {/* Grid dengan pemusatan */}
                <div className="grid grid-cols-2 gap-4 md:gap-6 justify-items-center">
                    {/* Kotak 1 */}
                    <div className="bg-[#03A791] border-2 border-teal-700 rounded-md w-full max-w-xs h-24 md:h-48 flex justify-center items-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden relative">
                        <div className="absolute top-0 left-0 w-full h-1 bg-white opacity-30"></div>
                        <div className="absolute bottom-0 right-0 w-10 h-10 bg-teal-600 rounded-full -mb-5 -mr-5 opacity-50"></div>
                        <h1 className="text-center text-white font-semibold text-sm md:text-xl">Klaster 1 <br/><span className="text-xs md:text-lg font-normal text-teal-100">(Manajemen)</span></h1>
                    </div>
                    
                    {/* Kotak 2 */}
                    <div className="bg-[#03A791] border-2 border-teal-700 rounded-md w-full max-w-xs h-24 md:h-48 flex justify-center items-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden relative">
                        <div className="absolute top-0 left-0 w-full h-1 bg-white opacity-30"></div>
                        <div className="absolute bottom-0 right-0 w-10 h-10 bg-teal-600 rounded-full -mb-5 -mr-5 opacity-50"></div>
                        <h1 className="text-center text-white font-semibold text-sm md:text-xl">Klaster 2 <br/><span className="text-xs md:text-lg font-normal text-teal-100">(Ibu dan Anak)</span></h1>
                    </div>
                    
                    {/* Kotak 3 */}
                    <div className="bg-[#03A791] border-2 border-teal-700 rounded-md w-full max-w-xs h-24 md:h-48 flex justify-center items-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden relative">
                        <div className="absolute top-0 left-0 w-full h-1 bg-white opacity-30"></div>
                        <div className="absolute bottom-0 right-0 w-10 h-10 bg-teal-600 rounded-full -mb-5 -mr-5 opacity-50"></div>
                        <h1 className="text-center text-white font-semibold text-sm md:text-xl">Klaster 3 <br/><span className="text-xs md:text-lg font-normal text-teal-100">(Dewasa dan Lansia)</span></h1>
                    </div>
                    
                    {/* Kotak 4 */}
                    <div className="bg-[#03A791] border-2 border-teal-700 rounded-md w-full max-w-xs h-24 md:h-48 flex justify-center items-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden relative">
                        <div className="absolute top-0 left-0 w-full h-1 bg-white opacity-30"></div>
                        <div className="absolute bottom-0 right-0 w-10 h-10 bg-teal-600 rounded-full -mb-5 -mr-5 opacity-50"></div>
                        <h1 className="text-center text-white font-semibold text-sm md:text-xl">Klaster 4 <br/><span className="text-xs md:text-lg font-normal text-teal-100">(Penanggulangan Penyakit Menular)</span></h1>
                    </div>
                    
                    {/* Kotak 5 - Di tengah pada desktop */}
                    <div className="bg-[#03A791] border-2 border-teal-700 rounded-md w-full max-w-xs h-24 md:h-48 flex justify-center items-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden relative col-span-2 md:col-span-1 md:col-start-1 md:mx-auto">
                        <div className="absolute top-0 left-0 w-full h-1 bg-white opacity-30"></div>
                        <div className="absolute bottom-0 right-0 w-10 h-10 bg-teal-600 rounded-full -mb-5 -mr-5 opacity-50"></div>
                        <h1 className="text-center text-white font-semibold text-sm md:text-xl">Klaster 5 <br/><span className="text-xs md:text-lg font-normal text-teal-100">(Lintas Klaster)</span></h1>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default IntegrasiLayanan;