import foto2 from "../assets/foto_sobre2.svg";
import foto3 from "../assets/foto_sobre3.svg";
import foto4 from "../assets/foto_sobre4.svg";
import sosoft_sobre from "../assets/sosoft_sobre.jpeg";

export default function Sobre() {
  return (
    <div className="">
      <section className="min-h-screen bg-white text-gray-800 mt-32 p-8">
        <h1 className="text-4xl font-bold flex justify-center text-[#F19209] mb-12">
          Sobre Nós
        </h1>
        <video
          className="flex mx-auto sm:w-[50%] sm:h-[50vh] mb-20 shadow-xl border-t-2 border-l-2 border-r-2"
          loop
          muted
          autoPlay
          controls
          poster={sosoft_sobre}
          src=""
        ></video>

        <div className="max-w-4xl justify-between text-start flex mb-20 mx-auto">
          <div>
            <p className="text-xs sm:text-lg font-medium">
              
              O principal objetivo da
              <span className="text-[#F19209] font-bold  ">SOSOFT</span> é
              impulsionar a transformação digital no sector da educação e da
              administração pública, criando soluções tecnológicas adaptadas à
              realidade nacional. A empresa busca simplificar processos,
              melhorar a gestão institucional e aumentar a produtividade através
              da tecnologia.
            </p>
            <div className="flex text-xs sm:text-lg flex-col text-start font-medium mt-12">
              <p>
                
                ✔️ Modernizar instituições através de plataformas digitais;
              </p>
              <p>
                ✔️ Promover a eficiência e a transparência nos serviços públicos
                e privados;
              </p>
              <p>
                ✔️ Contribuir para o desenvolvimento tecnológico de Angola,
                formando profissionais competentes e comprometidos com a
                inovação.
              </p>
            </div>
          </div>

          <div className="w-[100%] sm:h-auto sm:w-[200%]  bg-cover  bg-center">
            <img loading="lazy" src={foto2} alt="" className=" h-full " />
          </div>
        </div>
        <div className="max-w-4xl justify-between flex  mx-auto  ">
          <div className="w-[100%] h-auto sm:w-[200%]  bg-cover  bg-center">
            
            <img loading="lazy" src={foto3} alt="" />
          </div>
          <div className="w-[200%]  bg-cover  bg-center">
            <p className="text-xs sm:text-lg text-start font-medium">
              A <span className="text-[#F19209] font-bold  ">SOSOFT </span>
              nasceu da necessidade de tornar a gestão escolar e institucional
              mais moderna e eficiente. Durante anos, muitos processos
              administrativos e académicos em escolas e instituições públicas
              eram realizados de forma manual e trabalhosa, gerando atrasos,
              erros e desperdício de recursos.
            </p>
          </div>
        </div>
        <div className="max-w-4xl justify-between flex text-start mt-20 mx-auto  ">
          <div className="w-[200%]  bg-cover  bg-center">
            <p className="text-xs sm:text-lg font-medium">
              Os sistemas e plataformas da
              <span className="text-[#F19209] font-bold  ">SOSOFT </span>são
              destinados a instituições públicas e privadas que procuram inovar
              e otimizar a sua gestão, em especial:
            </p>
            <div className="flex text-xs sm:text-lg flex-col items-start mb-5 font-medium">
              <p>✔️ Instituições de Ensino</p>
              <p>✔️ Empresas e instituições públicas</p>
              <p>✔️ Órgãos de administração central e local</p>
              <p>✔️ Coordenadores, gestores e técnicos administrativos</p>
            </div>
            <p className="text-xs sm:text-lg font-medium">
              A <span className="text-[#F19209] font-bold  ">SOSOFT </span>é
              hoje uma referência em soluções de gestão institucional em Angola,
              promovendo um modelo de trabalho baseado na inovação,
              transparência e eficiência. Mais do que uma empresa de tecnologia,
              a <span className="text-[#F19209] font-bold  ">SOSOFT </span>é um
              agente de transformação digital, comprometido em construir um
              futuro mais moderno, automatizado e inteligente para as
              instituições angolanas.
            </p>
          </div>

          <div className="w-[100%] h-auto sm:w-[200%]  bg-cover  bg-center">
            
            <img loading="lazy" src={foto4} alt="" className="h-96" />
          </div>
        </div>
      </section>
    </div>
  );
}
