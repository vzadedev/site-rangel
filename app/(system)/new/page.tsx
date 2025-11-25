"use client"

import { useState } from "react"
import { Footer } from "@/app/modules/components/footer"
import { Navbar } from "@/app/modules/components/navbar"
import { MdIosShare } from "react-icons/md"
import { IoFilterOutline } from "react-icons/io5"

export default function Page() {
    const products = [
        {
            id: 1,
            name: "Moletom Nike Sportswear",
            price: "229,90",
            image: "https://cdnv2.moovin.com.br/atitudeesportes/imagens/produtos/det/moletom-nike-sportswear-club-masculino-637a129c11889afd433467e5d9c5db11.jpeg"
        },
        {
            id: 2,
            name: "Boné New Era NY",
            price: "139,90",
            image: "https://neweracap.hk/cdn/shop/products/12847817_9FORTY_CTO21_MBSILVERNEYYAN_BLK_3QL_AP.png?v=1675652675"
        },
        {
            id: 3,
            name: "Tênis Adidas Ultraboost",
            price: "799,90",
            image: "https://cdn.awsli.com.br/600x700/1621/1621592/produto/217261369/image---2023-07-14t153040-215-e3v0j7iujz.png"
        },
        {
            id: 4,
            name: "Tênis Balenciaga XL",
            price: "549,90",
            image: "https://uk.static.designerexchange.com/product_images/uk/Shoes/Trainers/STRABAL762309_3_XL.PNG"
        },
        {
            id: 6,
            name: "Relógio Casio Vintage",
            price: "89,90",
            image: "https://www.casio.com/content/dam/casio/product-info/locales/br/pt-br/timepiece/product/watch/A/A1/A16/a168wa-8ay/assets/A168WA-8AY.png"
        },
        {
            id: 7,
            name: "Óculos Ray-Ban Classic",
            price: "499,90",
            image: "https://assets2.sunglasshut.com/cdn-record-files-pi/cffd73dc-8021-4268-80e3-a35800041c9c/38beb367-52eb-4550-8acc-acfd008aeae6/0RB2140__901_58__STD__shad__qt.png?impolicy=SGH_bgtransparent&width=1024"
        },
        {
            id: 8,
            name: "Carteira de Couro Minimalista",
            price: "79,90",
            image: "https://img.irroba.com.br/fit-in/900x700/filters:fill(transparent):quality(80)/bspokebr/catalog/acessorios/bp81-preta-fechada.png"
        },
        {
            id: 9,
            name: "Camiseta Adidas Essentials",
            price: "99,90",
            image: "https://17889.cdn.simplo7.net/static/17889/sku/roupas-camiseta-adidas-ib8153-essentials-3-listras-azul-1691848016745.png"
        }
    ]

    const [selected, setSelected] = useState(products[0])

    return (
        <div className="w-full">
            <Navbar />

            <div className="h-dvh px-48 py-16">
                <div className="flex w-full items-center justify-between mb-10">
                    <span className="text-2xl font-light">
                        Produtos e coleções exclusivas ({products.length})
                    </span>

                    <div className="flex text-lg items-center gap-4">
                        <button className="flex items-center gap-2">Compartilhar
                            <MdIosShare />
                        </button>
                        <button className="flex items-center gap-2">Filtrar
                            <IoFilterOutline />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-12 gap-10 h-[800px]">
                    <div className="col-span-3">
                        <div className="bg-white rounded-2xl shadow p-4 flex flex-col gap-4 border border-gray-100">
                            <img
                                src={selected.image}
                                className="w-full h-[350px] rounded-2xl object-cover"
                            />

                            <div className="flex items-center justify-center flex-col gap-4">
                                <span className="text-2xl font-light">{selected.name}</span>

                                <div className="text-purple-800 font-bold text-sm border border-purple-800 rounded-xl px-6 py-1 w-fit ">
                                    R$ {selected.price}
                                </div>
                                <button className="cursor-pointer bg-purple-700 w-full h-[50px] rounded-xl text-white hover:bg-purple-400 transition-all duration-500">
                                    Adicionar ao carrinho
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-9 grid grid-cols-3 gap-8 max-h-[700px] overflow-scroll overflow-x-hidden p-8">
                        {products.map((p) => (
                            <div
                                key={p.id}
                                onClick={() => setSelected(p)}
                                className="cursor-pointer bg-[#EFF1F5] rounded-2xl hover:scale-105 transition-all duration-300 shadow h-fit"
                            >
                                <div className="w-full h-[260px] rounded-2xl ">
                                    <img
                                        src={p.image}
                                        alt={p.name}
                                        className="w-full h-full rounded-2xl object-cover"
                                    />
                                </div>

                                <div className="w-full h-[120px] shadow bg-white rounded-2xl flex items-center justify-center flex-col gap-2">
                                    <span className="font-thin text-xl text-black">{p.name}</span>
                                    <div className="rounded-2xl border w-fit px-8 border-purple-800 text-purple-800 font-bold">
                                        R$ {p.price}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}