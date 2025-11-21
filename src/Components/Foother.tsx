import iconNav from "../assets/IconFooter.png";
import { Link } from "react-router-dom";
import ImageProtetor from "./ImageProtector";

export default function Foother() {
  return (
    <div>
      <footer className="bg-[#2B8CAE] text-white  w-full ">
        <div className="max-w-7xl mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="flex gap-3 items-center text-xl sm:text-3xl text-white font-semibold">
           <ImageProtetor
            src={iconNav}
            alt="Sosoft Logo"
            className="h-8 sm:h-12 object-contain"
          />
          <p>SOSOFT</p>
         </div>
            <p className="text-white font-roboto text-xs sm:text-sm mt-4 leading-relaxed cursor-default">
              Soluções inovadoras que facilitam e contribuem para o nosso
              cotidiano
            </p>
            <div></div>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-semibold text-white mb-4 cursor-default">
              Navegação
            </h3>
            <ol className="space-y-2 ">
             <Link to="/PaginaInicial">
              <li className="hover:text-[#F19209] text-xs sm:text-base transition-colors duration-700 cursor-pointer">
                Início
              </li>
             </Link>
              <a href="#Serviços">
              <li className="hover:text-[#F19209] text-xs sm:text-base transition-colors duration-700 cursor-pointer">
                Serviços
              </li>
              </a>
              <Link to="/Sobre">
              <li className="hover:text-[#F19209] text-xs sm:text-base transition-colors duration-700 cursor-pointer">
                Sobre
              </li> 
              </Link>
              <Link to="/Portifolio">
              <li className="hover:text-[#F19209] text-xs sm:text-base transition-colors duration-700 cursor-pointer">
                Portfólio
              </li>
              </Link>
             
              <li className="hover:text-[#F19209] text-xs sm:text-basetransition-colors duration-700 cursor-pointer">
                Contacto
              </li>
            
            </ol>
          </div>
          <div >
            <h3 className="text-base sm:text-lg font-semibold text-white mb-4 cursor-default">
              Serviços
            </h3>
            <ol className="space-y-2">
              <a href="#Serviços">
              <li className="hover:text-[#F19209] transition-colors text-xs sm:text-base  duraction-700 cursor-pointer">
                Desenvolvimento
              </li>
              </a>

              <a href="#Serviços">
              <li className="hover:text-[#F19209] transition-colors text-xs sm:text-base duraction-700 cursor-pointer">
                Criação de cartões de identificação{" "}
              </li>
              </a>
               <a href="#Serviços">
              <li className="hover:text-[#F19209] transition-colors text-xs sm:text-base duraction-700 cursor-pointer">
               Infraestrutura e Redes
              </li>
              </a>
               <a href="#Serviços">
              <li className="hover:text-[#F19209] transition-colors text-xs sm:text-base duraction-700 cursor-pointer">
                Serviços em Nuvem
              </li>
              </a>
              <a href="#Serviços">
              <li className="hover:text-[#F19209] transition-colors text-xs sm:text-base duraction-700 cursor-pointer">
                Consultoria e Suporte Técnico
              </li>
              </a>
              <a href="#Serviços">
              <li className="hover:text-[#F19209] transition-colors text-xs sm:text-base duraction-700 cursor-pointer">
                Design e Identidade Visual 
              </li>
              </a>
            </ol>
          </div>
          <div>
            <h3
              id="Contacto"
              className="text-base sm:text-lg font-semibold text-white mb-4 cursor-default"
            >
              Contacto
            </h3>
            <ol className="space-y-2">
              <li className="hover:text-[#F19209] transition-colors text-xs sm:text-base duraction-700 cursor-pointer">
                Tel.: +244 942 031 240
              </li>
              <a href="mailto:geral@sosoft.ao"
              className="hover:text-[#F19209] transition-colors text-xs sm:text-base duraction-700 cursor-pointer">
                Email: geral@sosoft.ao
              </a>
            </ol>
          </div>
        </div>

        <p className="text-xs sm:text-base items-center flex justify-center pb-10 cursor-default ">
          © 2025 Sosoft. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
