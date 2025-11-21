import video from "../assets/video3.mp4";
import videogif from "../assets/codeGif.mp4";
import arrow from "../assets/right-arrow.png";
import Serviços from "./Serviços";
import Scrollinicial from "../Hooks/Scrollinicial"
export default function PaginaInicial() {
  const {PaginaInicial} = Scrollinicial();
  return (
    /**Cabeçalho */
    <div className="overflow-y-auto scroll-smooth " onLoad={PaginaInicial}>
     
      <div>
        <div className="relative w-full h-screen overflow-hidden">
          <video
            autoPlay
            muted
            preload="auto"
            loop
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          >
            <source src={video} type="video/mp4" />
          </video>

          <div className="relative z-10 flex flex-col  items-center justify-center h-full text-center text-white  px-4">
            <h1 className=" text-2xl  sm:text-4xl font-extrabold drop-shadow-lg text-container cursor-default font-roboto ">
              Tecnologia que Conecta Você ao{" "}
              <span className="text-[#F19209]">Futuro</span>
            </h1>
            <div className="drop-shadow-lg mb-10 font-roboto text-white font-semibold text-lg sm:text-xl mt-6 cursor-default">
              <p>
                Sua satisfação é o nosso padrão, então vamos juntos automatizar,
                crescer e evoluir
              </p>
            </div>
            <a href="#Serviços">
              <button className="bg-[#F19209] font-roboto hover:text-white text-base p-2 sm:text-xl   rounded-xl shadow-[0_4px_12px_rgba(241,146,9,0.5)] hover:shadow-[0_2px_16px_rgba(241,146,9,0.7)] text-white transition-transform duration-700 sm:p-4 ">
                Explore Nossos Serviços
                <img
                  src={arrow}
                  alt="Seta"
                  className="inline-block w-4 sm:w-auto ml-2 animate-moveArrow "
                />{" "}
              </button>
            </a>
          </div>
        </div>

        {/* /**Nossos Serviços */}

        <h1
          id="Serviços" onLoad={Scrollinicial}
          className="text-black font-bold font-roboto items-center justify-center flex mt-10 text-2xl sm:text-4xl "
        >
          Nossos Serviços
        </h1>
        <p className=" text-sm sm:text-lg font-roboto text-gray-500 text-center  mt-5 ">
          Soluções inovadoras que facilitam e contribuem para o nosso cotidiano
        </p>
        <div className="mb-10">
          <Serviços></Serviços>
        </div>
        <div className="justify-center ml-16 mr-16 space-y-4 sm:ml-0   flex items-center flex-col">
          <h1 className="font-bold text-xl sm:text-4xl font-roboto">
            Pronto para viver o resultado?
          </h1>
          <p className="text-gray-400 md:text-center text-xs sm:text-lg font-roboto ">
            Entre em contacto connosco e descubra como impulsionamos seu negócio
            com os nossos serviços.
          </p>
        </div>
        <div className="flex  items-center  px-20">
          <video
            autoPlay
            muted
            loop
            preload="auto"
            className="w-[100%] sm:w-[64%] h-96 mt-20 mb-20 bg-cover bg-center mx-auto object-cover rounded-xl"
          >
            <source src={videogif} type="video/mp4" />
          </video>

          {/* Texto */}
        </div>
        <h1 className="font-roboto font-bold items-center justify-center mb-12 flex text-2xl sm:text-4xl transition-colors duraction-700 cursor-default text-[#F19209] hover:text-[#04639b]">
          Contacte-nos!
        </h1>
        <div className="items-center justify-center flex  mb-10">
          <button className="bg-[#F19209] p-2 sm:p-3 shadow-lg rounded-xl  transition-shadow duraction-700 text-base sm:text-lg hover:shadow-[0_4px_10px_rgba(241,156,9,2)]  text-white ">
            Peça um orçamento
            <img
              src={arrow}
              alt="Seta"
              className="inline-block w-4 sm:w-auto  ml-2 animate-moveArrow "
            />
          </button>
        </div>
      </div>
      
    </div>
  );
}