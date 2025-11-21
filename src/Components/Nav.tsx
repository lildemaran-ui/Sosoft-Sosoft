import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import BotaoMenu from "../Hooks/Menu";
import ScrollToServiço from "../Hooks/ScrollToServiço";
import iconNav from "../assets/IconNav.png";
import ImageProtetor from "./ImageProtector";

export default function Nav() {
  const {irParaServicos} = ScrollToServiço();
  const { menuOpen, CloseMenu, OpenMenu } = BotaoMenu();

  return (
    <header className="fixed top-0  w-full scroll-smooth  transparent-bg z-[50]  ">
      {/* Menu desktop */}

      <nav className="flex h-14 sm:h-20 items-center justify-between px-6">
        <Link to="/">
      <div className="flex gap-3 items-center text-xl sm:text-3xl text-[#F19209] font-semibold">
        <ImageProtetor
          src={iconNav}
          alt="Sosoft Logo"
          className="h-8 sm:h-12 object-contain"
        />
        <p>SOSOFT</p>
      </div>
    </Link>
        <div className="hidden lg:items-center lg:flex gap-4 ">
          <Link
            to="/PaginaInicial"
            className="text-[#F19209] text-lg font-semibold hover:text-orange-400/75"
          >
            Início
          </Link>

          <a
            onClick={irParaServicos}
            className="text-[#F19209] text-lg font-semibold hover:text-orange-400/75 cursor-pointer"
          >
            Serviços
          </a>
          <Link
            to="/Sobre"
            className="text-[#F19209] text-lg font-semibold hover:text-orange-400/75"
          >
            Sobre Nós
          </Link>
          <Link
            to="/Portifolio"
            className="text-[#F19209] text-lg font-semibold hover:text-orange-400/75"
          >
            Portfólio
          </Link>
          <a
            href="#Contacto"
            className="text-[#F19209] text-lg font-semibold hover:text-orange-400/75"
          >
            Contacto
          </a>
          <div>
            <a href="#Contacto">
              <button className="  px-4 py-2 rounded-md bg-[#F19209] transition-colors duration-700 font-medium hover:bg-[#da8309] text-white">
                Fale connosco
              </button>
            </a>
          </div>
        </div>
        {/* Botão de menu */}

        <button className="lg:hidden " onClick={OpenMenu}>
          <Menu size={28} className="text-[#F19209]" />
        </button>
      </nav>
      {/* Menu  mobile */}

      {menuOpen && (
        <div
          className={`  fixed flex  flex-col items-start   px-6 bg-[#242e57] w-40 justify-start  right-0 top-0 h-screen shadow-lg z-50 ${
            menuOpen
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          } `}
        >
          <div className="flex absolute right-4  top-4 ">
            <X className="text-white " onClick={CloseMenu}></X>
          </div>

          <Link
            to="/PaginaInicial"
            onClick={CloseMenu}
            className="text-white text-lg   font-semibold mb-2 mt-20  hover:text-[#F19209]"
          >
            Início
          </Link>

          <a
            href="#Serviços"
            onClick={CloseMenu}
            className="text-white text-lg   font-semibold mb-2  hover:text-[#F19209]"
          >
            Serviços
          </a>
          <Link
            to="/Sobre"
            onClick={CloseMenu}
            className="text-white text-lg   font-semibold mb-2  hover:text-[#F19209]"
          >
            Sobre Nós
          </Link>
          <Link
            to="/Portifolio"
            onClick={CloseMenu}
            className="text-white text-lg   font-semibold mb-2  hover:text-[#F19209]"
          >
            Portfólio
          </Link>
          <a
            href="#Contacto"
            onClick={CloseMenu}
            className="text-white text-lg   font-semibold mb-2  hover:text-[#F19209]"
          >
            Contacto
          </a>
        </div>
      )}
    </header>
  );
}