import { CiMail } from "react-icons/ci";
import { FaPhone } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className="bg-white bg-opacity-95 h-9 md:h-12 flex justify-between items-center text-black px-3 md:px-12 lg:px-20 shadow-lg border-b border-white/10 sticky top-0 z-50">
            <div className="flex items-center text-xs md:text-sm hover:text-green-200 transition-colors duration-300 group cursor-pointer">
                <CiMail className="mr-1 md:mr-2 text-base md:text-lg" />
                <p className="truncate max-w-[120px] md:max-w-none group-hover:underline">
                    pkmcilandak@yahoo.com
                </p>
            </div>
            
            <div className="h-5 md:h-6 w-px bg-white/30 hidden sm:block"></div>
            
            <div className="flex items-center text-xs md:text-sm hover:text-green-200 transition-colors duration-300 group cursor-pointer">
                <FaPhone className="mr-1 md:mr-2 text-xs md:text-sm" />
                <p className="group-hover:underline">
                    021-7694279
                </p>
            </div>
            
            <div className="h-5 md:h-6 w-px bg-white/30 hidden sm:block"></div>
            
            <div className="flex items-center text-xs md:text-sm hover:text-green-200 transition-colors duration-300 group cursor-pointer">
                <FaWhatsapp className="mr-1 md:mr-2 text-base md:text-lg text-green-300" />
                <p className="group-hover:underline">
                    +62 81386884328
                </p>
            </div>
        </div>
    )
}

export default Navbar