'use client'

import { useEffect, useState } from "react"
import { CiSearch } from "react-icons/ci"
import { motion, AnimatePresence } from "framer-motion"
import { FaRunning, FaTshirt } from "react-icons/fa"
const slides = [
    {
        icon: <FaRunning className="text-xl" />,
        text: "ENCONTRE SEU TÊNIS IDEAL",
    },
    {
        icon: <FaTshirt className="text-xl" />,
        text: "COMPRE O MANTO DO SEU TIME DO CORAÇÃO",
    },
]
export const Navbar = () => {
    const [current, setCurrent] = useState(0)
    const [direction, setDirection] = useState(1)

    useEffect(() => {
        const interval = setInterval(() => {
            setDirection(1)
            setCurrent((prev) => (prev + 1) % slides.length)
        }, 3500)
        return () => clearInterval(interval)
    }, [])


    return (
        <div className="w-full flex flex-col">
            <div className="w-full h-8 text-black bg-gray-100 flex justify-between items-center p-8">
                <div className="flex items-center">
                    <div className="uppercase font-stretch-200%">
                        GoalPoint
                    </div>
                </div>
                <div className="flex items-center gap-4 text font-light">
                    <span className="hover:underline cursor-pointer text-xs">Acessibilidade</span>
                    <span className="text-gray-400">|</span>
                    <span className="hover:underline cursor-pointer text-xs">Guia de Produtos</span>
                    <span className="text-gray-400">|</span>
                    <span className="hover:underline cursor-pointer text-xs">Times</span>
                    <span className="text-gray-400">|</span>
                    <span className="hover:underline cursor-pointer text-xs">Ajuda</span>
                </div>
            </div>
            <div className="h-20 bg-white flex justify-between items-center px-8">
                <img className="w-16 h-16" src="/images/logo.png" />
                <div className="flex gap-12 text- font-thin text-black">
                    <span className="">Ofertas</span>
                    <span className="">Lançamentos</span>
                    <span className="">Masculino</span>
                    <span className="">Feminino</span>
                </div>
                <div>
                    <div className="w-fit rounded-2xl flex items-center justify-start bg-gray-100 px-8 text-gray-500  gap-2 py-0.5 font-thin">
                        <CiSearch />
                        Buscar
                    </div>
                </div>
            </div>
            <div className="relative w-full h-14 overflow-hidden bg-gray-100 flex justify-center items-center text-black">
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={current}
                        custom={direction}
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -100, opacity: 0 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="absolute flex items-center gap-2 text font-medium text-gray-700 uppercase tracking-wide"
                    >
                        {slides[current].icon}
                        <span>{slides[current].text}</span>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    )
}