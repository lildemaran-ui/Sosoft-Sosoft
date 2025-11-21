import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollPaginicial() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo === "Serviços") {
      const alvo = document.getElementById("Serviços");
      setTimeout(() => {
        alvo?.scrollIntoView({ behavior: "smooth" });
      }, 200); // dá tempo da página carregar
    }
  }, [location]);
  return null
}