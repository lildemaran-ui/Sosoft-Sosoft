import { Link, useLocation } from "react-router-dom";

export default function RotaNavegaçãoFooter() {
  const location = useLocation();

  const VerifyInit = location.pathname === "/";

  const ScrollInit = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  if (VerifyInit) {
    return <span onClick={ScrollInit}></span>;
  }

  return (
  <Link to="/" className="hover:text-[#F19209] text-xs sm:text-base transition-colors duration-700 cursor-pointer"> Inicio
  </Link>
  

  )
}
