import { CiSearch } from "react-icons/ci"

export const Navbar = () => {


    return (
        <div className="w-full flex flex-col">
            <div className="w-full h-8 text-black bg-gray-100 flex justify-between items-center p-8">
                <div className="flex items-center">
                    <img className="w-12 h-12" src="/images/logo.png" />
                    <div className="uppercase font-bold">
                        GoalPoint
                    </div>
                </div>
                <div className="flex items-center gap-2 text-xs font-light">
                    <span className="hover:underline cursor-pointer">Acessibilidade</span>
                    <span className="text-gray-400">|</span>
                    <span className="hover:underline cursor-pointer">Guia de Produtos</span>
                    <span className="text-gray-400">|</span>
                    <span className="hover:underline cursor-pointer">Times</span>
                    <span className="text-gray-400">|</span>
                    <span className="hover:underline cursor-pointer">Ajuda</span>
                </div>
            </div>
            <div className="h-20 bg-white flex justify-between items-center px-8">
                <img className="w-16 h-16" src="/images/logo.png" />
                <div className="flex gap-12 font-thin text-black">
                    <span>Ofertas</span>
                    <span>Lançamentos</span>
                    <span>Masculino</span>
                    <span>Feminino</span>
                </div>
                <div>
                    <div className="w-fit rounded-2xl flex items-center justify-start bg-gray-100 px-8 text-gray-500  gap-2 py-0.5 font-thin">
                        <CiSearch />
                        Buscar
                    </div>
                </div>
            </div>
            <img className="w-full h-[1000px] grayscale-50 opacity-55" src="/images/ney.jpg" />
        </div>
    )
}