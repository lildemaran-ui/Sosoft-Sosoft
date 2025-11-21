import MissaoVisaoValores from "../Pages/Missao";
import SobreP from "../Pages/SobreP";
import Projectos from "../Pages/Projectos";

import ServicosESolucoes from "../Pages/ServiP";
export default function Portifolio() {
  return (
    <div className="overflow-y-auto">
      <main className="flex-grow">
        <SobreP></SobreP>
        <ServicosESolucoes></ServicosESolucoes>
        <Projectos></Projectos>
        <MissaoVisaoValores></MissaoVisaoValores>
      </main>
    </div>
  );
}
