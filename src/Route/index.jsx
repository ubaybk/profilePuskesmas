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
Login



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
        path: "/PuskesmasPembantu",
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
    }
    
    
    
]