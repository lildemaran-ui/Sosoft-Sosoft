import React from "react";
import{ Target, Eye, Gem } from "lucide-react";

export default function MissaoVisaoValores() {
  return (
    <section className="py-20 px-6 bg-gray-50" id="institucional">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 text-[#181817] animate-fade-in-up">
          Missão, Visão e Valores
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Missão */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-500 transform hover:-translate-y-1 hover:scale-105 text-center animate-fade-in-up">
            <Target size={48} className="text-5xl text-[#04639b] mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Missão</h3>
            <p className="text-gray-600">
              Desenvolver soluções tecnológicas que conectam instituições ao futuro, promovendo inovação, eficiência e impacto social.
            </p>
          </div>

          {/* Visão */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-500 transform hover:-translate-y-1 hover:scale-105 text-center animate-fade-in-up delay-200">
            <Eye size={48} className="text-5xl text-[#04639b] mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Visão</h3>
            <p className="text-gray-600">
              Ser referência em soluções digitais para educação e gestão institucional em Angola e além.
            </p>
          </div>

          {/* Valores */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-500 transform hover:-translate-y-1 hover:scale-105 text-center animate-fade-in-up delay-400">
            <Gem size={48} className="text-5xl text-[#04639b] mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Valores</h3>
            <p className="text-gray-600">
              Ética, inovação, compromisso, excelência e colaboração são os pilares que sustentam nossa atuação.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}