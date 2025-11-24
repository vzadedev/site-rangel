'use client'

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Exemplo de imagens — substitua pelas suas
const images = [
  {
    src: "https://centraldotimao.com.br/wp-content/uploads/2025/08/agenciacorinthians-foto-237563-edited-scaled.jpg",
    title: "Corinthians na Veia",
    description: "Vista o manto do Timão e mostre sua força em qualquer ocasião.",
    cta: "APROVEITE AGORA!",
  },
  {
    src: "https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2025/09/corinthians-frimesa-e1757529213785.jpg?w=1200&h=1200&crop=1",
    title: "Lançamentos do Timão",
    description: "A nova linha do Corinthians chegou com tudo.",
    cta: "COMPRAR AGORA",
  },
];

export const CorinthiansCarousel = () => {
  return (
    <div className="w-full overflow-hidden p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {images.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative w-full h-[520px] rounded-2xl overflow-hidden shadow-xl"
          >
            <img
              src={item.src}
              alt={item.title}
              className="object-cover"
            />

            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-black/0 text-white">
              <h2 className="text-xl font-bold mb-2">{item.title}</h2>
              <p className="text-sm mb-4 max-w-[320px]">{item.description}</p>

              <button className="text-sm font-semibold border-b border-white hover:opacity-80 transition">
                {item.cta}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
