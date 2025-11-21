import { Link } from "react-router-dom";
import RotaNavegaçãoFooter from "../Hooks/RotaNavegaçãoFooter";
import RotaLogo from "../Hooks/RotaLogoFt";
import RouteService from "../Hooks/ScrollToServiço"
export default function Foother() {
  const {irParaServicos} = RouteService ()
  return (
    <div>
      <footer className="bg-[#2B8CAE] text-white  w-full ">
        <div className="max-w-7xl mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <RotaLogo/>
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
              <RotaNavegaçãoFooter/>
              <a onClick={irParaServicos}>
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
          <div>
            <h3  className="text-base sm:text-lg font-semibold text-white mb-4 cursor-default">
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
              <a href="tel:942031240" className="hover:text-[#F19209] transition-colors text-xs sm:text-base duraction-700 cursor-pointer">
                Tel.: +244 942 031 240
              </a><br />
              <a
                href="mailto:geral@sosoft.ao"
                className="hover:text-[#F19209] transition-colors text-xs sm:text-base duraction-700 cursor-pointer"
              >
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
