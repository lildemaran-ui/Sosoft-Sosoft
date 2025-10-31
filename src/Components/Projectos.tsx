import PortalIPILIcon from "../imagens/Ipil.jpg"; 
import AcessoETPIcon from "../imagens/acessoetp.png";   

export default function Projectos() {
  return (
    <section className="py-20 px-6 bg-gray-60" id="projectos">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10 text-black">Projetos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Portal IPIL */}
          <div className="flex flex-col items-center p-6 border rounded-lg shadow hover:shadow-xl transition duration-500 transform hover:-translate-y-1 hover:scale-105">
            <img
              src={PortalIPILIcon}
              alt="Ícone do Portal IPIL"
              className="w-20 h-20 mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Portal IPIL</h3>
            <p className="text-gray-700">
              Plataforma institucional do Instituto Politécnico Industrial de Luanda, com acesso a informações acadêmicas, administrativas e técnicas.
            </p>
            
          </div>

          {/* Acesso ETP */}
          <div className="flex flex-col items-center p-6 border rounded-lg shadow hover:shadow-xl transition duration-500 transform hover:-translate-y-1 hover:scale-105 ">
            <img
              src={AcessoETPIcon}
              alt="Ícone do Acesso ETP"
              className="w-20 h-20 mb-4 "
            />
            <h3 className="text-xl font-semibold mb-2">Acesso ETP</h3>
            <p className="text-gray-700">
              Sistema de autenticação e gestão para instituições de ensino técnico-profissional, promovendo integração digital, segurança e eficiência.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}