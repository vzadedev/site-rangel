'use client'


import Image from "next/image";
import { motion } from "framer-motion";

const items = [
  {
    src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    title: "Produtos de Qualidade",
    description:
      "Trabalhamos apenas com materiais e tecnologias de alta durabilidade, garantindo excelência em cada entrega.",
  },
  {
    src: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    title: "Entrega Rápida",
    description:
      "Agilidade é nosso compromisso. Realizamos entregas com rapidez e precisão por todo o Brasil.",
  },
  {
    src: "https://images.unsplash.com/photo-1581090700227-1e37b190418e",
    title: "Suporte Especializado",
    description:
      "Nossa equipe está sempre pronta para ajudar, oferecendo atendimento humano e eficiente.",
  },
  {
    src: "https://images.unsplash.com/photo-1506765515384-028b60a970df",
    title: "Inovação Constante",
    description:
      "Buscamos sempre evoluir nossos processos e soluções para entregar o melhor aos nossos clientes.",
  },
  {
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    title: "Confiabilidade",
    description:
      "Uma empresa sólida que cumpre o que promete, com histórico de entregas consistentes.",
  },
  {
    src: "https://images.unsplash.com/photo-1521791136064-7986c2920216",
    title: "Parceria com o Cliente",
    description:
      "Construímos relações de longo prazo baseadas em confiança, transparência e resultados reais.",
  },
  {
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    title: "Tecnologia Avançada",
    description:
      "Utilizamos ferramentas modernas para otimizar serviços, processos e desempenho.",
  },
  {
    src: "https://images.unsplash.com/photo-1554224154-22dec7ec8818",
    title: "Excelente Custo-Benefício",
    description:
      "Oferecemos qualidade superior com preços competitivos para potencializar o seu negócio.",
  },
  {
    src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRlYW13b3JrfGVufDB8fDB8fHww",
    title: "Equipe Capacitada",
    description:
      "Profissionais experientes e treinados para garantir resultados impecáveis.",
  },
];

export const Us = () => {
  return (
    <div>

      <section className="w-full py-20 flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-3 text-center">Por que escolher a GoalPoint?</h2>
        <p className="text-gray-400 font-light text-center mb-12 max-w-2xl">
          Conheça os diferenciais que fazem da GoalPoint uma referência em qualidade, eficiência e inovação.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl px-6">
          {items.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer"
            >
              <div className="relative w-full h-56">
                <Image src={item.src} alt={item.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 font-light">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <div className="flex flex-col w-full items-center  justify-center py-2">

        <h2 className="text-4xl font-bold mb-3 text-center">PITBIS</h2>
        <img
          className="w-[700px] h-[500px] rounded-2xl" src="/images/pitibas.jpeg"
        />
      </div>
    </div>

  );
};
