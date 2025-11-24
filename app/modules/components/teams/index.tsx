'use client'

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Teams = () => {
  const [category, setCategory] = useState("selecoes");

  const data = {
    selecoes: [
      { name: "Brasil", img: "https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg" },
      { name: "Argentina", img: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg" },
      { name: "França", img: "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg" },
      { name: "Alemanha", img: "https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg" },
      { name: "Portugal", img: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg" },
    ],

    brasileiros: [
      { name: "Flamengo", img: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Flamengo_braz_logo.svg" },
      { name: "Corinthians", img: "https://upload.wikimedia.org/wikipedia/pt/b/b4/Corinthians_simbolo.png" },
      { name: "Palmeiras", img: "https://upload.wikimedia.org/wikipedia/commons/1/10/Palmeiras_logo.svg" },
      { name: "São Paulo", img: "https://images.seeklogo.com/logo-png/12/2/sao-paulo-fc-logo-png_seeklogo-122582.png" },
      { name: "Vasco", img: "https://upload.wikimedia.org/wikipedia/pt/a/ac/CRVascodaGama.png" },
    ],

    internacionais: [
      { name: "Barcelona", img: "https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg" },
      { name: "Real Madrid", img: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg" },
      { name: "PSG", img: "https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg" },
      { name: "Liverpool", img: "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg" },
      { name: "Manchester City", img: "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg" },
    ],
  };

  const teams = data[category];

  return (
    <div className="w-full flex items-center px-8 py-14">
      <div className="w-full flex flex-col gap-6 items-center justify-center">
        
        {/* Título */}
        <span className="font-extrabold text-6xl text-black">
          Encontre o seu time
        </span>

        {/* Botões */}
        <div className="flex items-center gap-4">
          {[
            { id: "selecoes", label: "Seleções" },
            { id: "brasileiros", label: "Clubes Brasileiros" },
            { id: "internacionais", label: "Clubes Internacionais" },
          ].map(btn => (
            <button
              key={btn.id}
              onClick={() => setCategory(btn.id)}
              className={`px-4 py-2 rounded cursor-pointer text-xs uppercase
                ${category === btn.id ? "bg-black text-white" : "bg-gray-200"}
              `}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Lista de Times */}
        <div className="w-full flex items-center justify-center gap-4">
          <AnimatePresence mode="wait">
            {teams.map((team: any) => (
              <motion.div
                key={team.name}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.7 }}
                transition={{ duration: 0.3 }}
                className="h-[200px] w-[200px]  rounded-xl shadow flex items-center justify-center"
              >
                <motion.img
                  src={team.img}
                  alt={team.name}
                  className="h-16"
                  whileHover={{ scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 200 }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
