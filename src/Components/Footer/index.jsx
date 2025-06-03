import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-[#355F2E] text-white py-6 px-4 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Info Puskesmas */}
        <div>
          <h1 className="text-lg font-bold mb-2">Puskesmas Cilandak</h1>
          <p className="text-sm text-slate-200">Jl. Komplek BNI 46 No.57</p>
          <p className="text-sm text-slate-200">Cilandak, DKI Jakarta 12430</p>
        </div>

        {/* Jam Operasional */}
        <div>
          <h1 className="text-lg font-bold mb-2">Jam Operasional</h1>
          <p className="text-sm text-slate-200">Buka 24 Jam</p>
        </div>

        {/* Media Sosial */}
        <div>
          <h1 className="text-lg font-bold mb-2">Media Sosial</h1>
          <div className="flex gap-4 mt-2 text-xl">
            <a href="#" aria-label="Instagram" className="hover:text-pink-400 transition">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-blue-500 transition">
              <FaFacebook />
            </a>
            <a href="#" aria-label="TikTok" className="hover:text-gray-200 transition">
              <AiFillTikTok />
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-red-500 transition">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
