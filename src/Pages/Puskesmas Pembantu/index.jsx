import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

const PuskesmasPembantu = () => {
  const data = [
    {
      title: "Puskesmas Pembantu Cilandak Barat",
      image: "/images/puskesmas_pembantu/cilandak_barat.jpeg",
      alt: "Cilbar"
    },
    {
      title: "Puskesmas Pembantu Cipete Selatan",
      image: "/images/puskesmas_pembantu/cipete_selatan.jpeg",
      alt: "Cipsel"
    },
    {
      title: "Puskesmas Pembantu Gandaria Selatan",
      image: "/images/puskesmas_pembantu/gandaria_selatan.jpg",
      alt: "Gansel"
    },
    {
      title: "Puskesmas Pembantu Lebak Bulus",
      image: "/images/puskesmas_pembantu/lebak_bulus.jpeg",
      alt: "LebakBulus"
    },
    {
      title: "Puskesmas Pembantu Pondok Labu",
      image: "/images/puskesmas_pembantu/pondok_labu.jpeg",
      alt: "PondokLabu"
    },
  ];

  return (
    <div>
     
      <Header />
      <h1 className="font-semibold text-3xl text-center mt-6 mb-4">
        Puskesmas Pembantu
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 pb-8">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 transform transition duration-300 hover:scale-105 hover:shadow-lg"
          >
            <img
              src={item.image}
              alt={item.alt}
              className="w-full h-48 object-cover"
            />
            <div className="p-3">
              <h2 className="text-sm font-medium text-center text-gray-800">
                {item.title}
              </h2>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default PuskesmasPembantu;
