import Home from "../Pages/Home"
import StandarPelayanan from "../Pages/StandarPelayanan"
import HakKewajiban from "../Pages/Hak Kewajiban Pasien"
import JenisLayanan from "../Pages/Jenis Layanan"
import TarifLayanan from "../Pages/Tarif Layanan"
import PuskesmasPembantu from "../Pages/Puskesmas Pembantu"
import TentangKami from "../Pages/Tentang Kami"
import IntegrasiLayanan from "../Pages/IntegrasiLayanan"
import Karir from "../Pages/Karir"
import Login from "../Pages/Login"
import CreateKarir from "../Pages/CreateKarir"
import KegiatanEsensial from "../Pages/Jenis Layanan/UKM/KegiatanEsensial"
import VisiMisi from "../Pages/VisiMisi"
import TataNilai from "../Pages/TataNilai"




export const routes = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/StandarPelayanan",
        element: <StandarPelayanan />
    },
    {
        path: "/HakdanKewajiban",
        element: <HakKewajiban />
    },
    {
        path: "/JenisLayanan",
        element: <JenisLayanan />
    },
    {
        path: "/TarifLayanan",
        element: <TarifLayanan />
    },
    {
        path: "/PuskesmasPembantu/:id",
        element: <PuskesmasPembantu />
    },
    {
        path: "/TentangKami",
        element: <TentangKami />
    },
    {
        path: "/IntegrasiLayanan",
        element: <IntegrasiLayanan/>
    },
    {
        path: "/Karir",
        element: <Karir/>
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/createKarir",
        element: <CreateKarir/>
    },
    {
        path: "/kegiatanEsensial",
        element: <KegiatanEsensial/>
    },
    {
        path: "/visiMisi",
        element: <VisiMisi/>
    },
    {
        path: "/tataNilai",
        element: <TataNilai/>
    }
    
    
    
]