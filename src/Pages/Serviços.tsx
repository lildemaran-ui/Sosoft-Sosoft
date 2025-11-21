import { Code, IdCard, Cpu, Cloud, Laptop, Wallpaper } from "lucide-react";
export default function Serviços() {
  return (
    <div className="overflow-y-auto sm:overflow-none">
      
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 mt-10 mb-20 justify-items-center animate-fade-in">
        
        {/*
          IMPORTANTE: TODOS os 6 cartões devem vir aqui, um após o outro.
          Remova os dois DIVs de linha separados que você tinha.
        */}

        {/* CARTÃO 1 */}
        <div className="group bg-white rounded-xl p-8 shadow-xl h-full w-full max-w-xs flex flex-col items-center justify-between transition-transform duration-300 hover:scale-105">
            {/* ... Conteúdo do Card 1 ... */}
            <h3 className=" flex items-center flex-col  font-bold pb-5 justify-center">
              <IdCard size={48}  className="inline-block mb-4 h-10 text-[#2B8CAE] transition-transform duration-300 group-hover:rotate-6"></IdCard>
               
              
              Criação de cartões
            </h3>
            <p className="text-sm text-gray-500  ">
              Criação de cartões de identificação altamente modernos com códigos
              QR que se auto identificam.
            </p>
        </div>
        
        {/* CARTÃO 2 */}
        <div className="group bg-white p-8 rounded-xl shadow-xl h-full w-full max-w-xs flex flex-col items-center justify-between transition-transform duration-300 hover:scale-105">
            {/* ... Conteúdo do Card 2 ... */}
            <h3 className=" flex flex-col font-bold items-center  justify-center pb-5">
                <Code size={48} className="inline-block mb-4 h-10 text-[#2B8CAE] transition-transform duration-300 group-hover:rotate-6"></Code>
                
              Desenvolvimento e Programação
            </h3>
            <p className="text-sm text-gray-500  ">
              Criação e manutenção de soluções digitais.
            </p>
        </div>
        
        {/* CARTÃO 3 */}
        <div className="group bg-white p-8 rounded-xl shadow-xl h-full w-full max-w-xs flex flex-col items-center justify-between transition-transform duration-300 hover:scale-105" > 
          <h3 className=" flex items-center flex-col font-bold pb-5 justify-center">
          <Cpu size={45} className="inline-block mb-4 h-10 text-[#2B8CAE] transition-transform duration-300 group-hover:rotate-6 "></Cpu>
                
            
              Infraestrutura e Redes
            </h3>
            <p className="text-sm text-gray-500   ">
              Parte técnica e física da tecnologia.
            </p>
        </div>
         {/* CARTÃO 4 */}
        <div className="group bg-white p-8 rounded-xl shadow-xl h-full w-full max-w-xs flex flex-col items-center justify-between transition-transform duration-300 hover:scale-105">
      <h3 className=" flex items-center flex-col font-bold pb-5 justify-center">
              <Cloud size={48} className="inline-block mb-4 h-10 text-[#2B8CAE] transition-transform group-hover:rotate-6 "></Cloud>
              Serviços em nuvem
            </h3>
            <p className="text-sm text-gray-500  ">
              Tecnologias modernas de armazenamento e gestão online.
            </p>
        </div>
         {/* CARTÃO 5 */}
        <div className="group bg-white p-8 rounded-xl shadow-xl h-full w-full max-w-xs flex flex-col items-center justify-between transition-transform duration-300 hover:scale-105">
          <h3 className=" flex flex-col font-bold items-center  justify-center pb-5">
             <Laptop size={48} className="inline-block mb-4 h-10 text-[#2B8CAE] transition-transform duration-300 group-hover:rotate-6"></Laptop>
              Consultoria e Suporte Técnico
            </h3>
            <p className="text-sm text-gray-500  ">
              Ajudar empresas e pessoas a resolver problemas de TI.
            </p>
        </div>
         {/* CARTÃO 6 */}
        <div className="group bg-white p-8 rounded-xl shadow-xl h-full w-full max-w-xs flex flex-col items-center justify-between transition-transform duration-300 hover:scale-105">
          <h3 className=" flex items-center flex-col  font-bold pb-5 justify-center">
             <Wallpaper size={48} className="inline-block mb-4 h-10 text-[#2B8CAE] transition-transform duration-300 group-hover:rotate-6"></Wallpaper>
              Design e Identidade Visual
            </h3>
            <p className="text-sm text-gray-500  ">
              Parte criativa e visual dos serviços.
            </p>
        </div>
      </div>
      
    </div>
  );
}