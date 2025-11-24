export const Collections = () => {
    return (
        <div className="w-full flex flex-col bg-white gap-4">
            <div className="w-full flex h-[600px]">
                <div className="relative w-1/2 h-full overflow-hidden group">
                    <img
                        src="/images/camisas.jpg"
                        alt="Camisetas de time"
                        className="w-full h-full object-cover transition-all duration-500 group-hover:grayscale group-hover:scale-105"
                    />
                    <div className="absolute bottom-10 left-10 text-white">
                        <p className="text-sm uppercase tracking-wider">Coleção Oficial</p>
                        <h2 className="text-3xl font-bold mb-3">Camisetas de Time</h2>
                        <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-neutral-200 transition-all">
                            Ver Coleção
                        </button>
                    </div>
                </div>

                <div className="relative w-1/2 h-full overflow-hidden group">
                    <img
                        src="https://s2.glbimg.com/G1D1mLUT0VzUS3q2lFtpuhC_QKs=/fit-in/940x590/s.glbimg.com/es/ge/f/original/2014/06/19/chuteiras_equador_get_95.jpg"
                        alt="Chuteiras"
                        className="w-full h-full object-cover transition-all duration-500 group-hover:grayscale group-hover:scale-105"
                    />
                    <div className="absolute bottom-10 left-10 text-white">
                        <p className="text-sm uppercase tracking-wider">Desperte seu jogo</p>
                        <h2 className="text-3xl font-bold mb-3">Chuteiras Profissionais</h2>
                        <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-neutral-200 transition-all">
                            Ver Coleção
                        </button>
                    </div>
                </div>
            </div>
            <div className="p-4 flex justify-center items-center gap-4">
                <div className="relative w-1/3 h-[700px] overflow-hidden rounded-2xl group cursor-pointer">
                    <img
                        src="https://thmais.com.br/wp-content/uploads/2023/05/1-forasdeserie-marta-a-historia-de-marta-silva-no-futebol.jpg"
                        alt="Futebol"
                        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:grayscale"
                    />
                    <div className="absolute bottom-6 left-6">
                        <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-neutral-200 transition-all">
                            Futebol
                        </button>
                    </div>
                </div>

                <div className="relative w-1/3 h-[700px] overflow-hidden rounded-2xl group cursor-pointer">
                    <img
                        src="https://i.pinimg.com/736x/8c/6b/c5/8c6bc5ed112b34ddacd7825fabecfa0d.jpg"
                        alt="Basquete"
                        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:grayscale"
                    />
                    <div className="absolute bottom-6 left-6">
                        <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-neutral-200 transition-all">
                            Basquete
                        </button>
                    </div>
                </div>

                <div className="relative w-1/3 h-[700px] overflow-hidden rounded-2xl group cursor-pointer">
                    <img
                        src="https://wwd.com/wp-content/uploads/2021/07/hailey-baldwin-pants-sneakers-1.jpg?w=768"
                        alt="Casual"
                        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:grayscale"
                    />
                    <div className="absolute bottom-6 left-6">
                        <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-neutral-200 transition-all">
                            Casual
                        </button>
                    </div>
                </div>
                
            </div>

            <div className="w-full h-[300px] flex flex-col items-center justify-center bg-white gap-2">
                <span className="font-extrabold text-6xl text-black">SEU ESTILO, SUA ARMADURA</span>
                <span className="text-lg font-light text-[#242424]">Produtos feitos pra quem encara o mundo de frente.</span>
            </div>

            <div className="flex gap-2 px-4">
                <div className="w-1/4 h-[700px]  bg-gray-200">
                    <img
                        src="https://imgnike-a.akamaihd.net/768x768/031501IDA1.jpg"
                        alt="Chuteiras"
                        className="w-full h-full object-cover transition-all duration-500 group-hover:grayscale group-hover:scale-105"
                    />
                </div>
                <div className="w-1/4 h-[700px]  bg-gray-200">
                    <img
                        src="https://assets.adidas.com/images/w_600,f_auto,q_auto/2249e4245e0e4e8a9caa6dfe9f7b1ab8_9366/Moletom_Capuz_Baggy_Adicolor_Preto_JC6251_21_model.jpg"
                        alt="Chuteiras"
                        className="w-full h-full object-cover transition-all duration-500 group-hover:grayscale group-hover:scale-105"
                    />
                </div>
                <div className="w-1/4 h-[700px]  bg-gray-200">
                    <img
                        src="https://down-br.img.susercontent.com/file/cn-11134207-7qukw-lez5k6zrv7s9ba"
                        alt="Chuteiras"
                        className="w-full h-full object-cover transition-all duration-500 group-hover:grayscale group-hover:scale-105"
                    />
                </div>
                <div className="w-1/4 h-[700px]  bg-gray-200">
                    <img
                        src="https://imgnike-a.akamaihd.net/360x360/025166IEA2.jpg"
                        alt="Chuteiras"
                        className="w-full h-full object-cover transition-all duration-500 group-hover:grayscale group-hover:scale-105"
                    />
                </div>
                
            </div>
            {/* <div className="w-full h-[500px] flex  items-center justify-center">
                <div className="w-[70%]  flex flex-col items-start justify-start text-gray-900 gap-2">
                    <span className=" font-thin text-2xl">
                        Produtos mais buscados
                    </span>
                    <div>
                        <div className="flex items-center  gap-4">
                            <span className="font-bold">Calçados</span>
                            <span className="text-[#3b3a3a]">Camisetas</span>
                            <span className="text-[#3b3a3a]">Chuteiras</span>
                            <span className="text-[#3b3a3a]">Promoções</span>
                        </div>
                        <div className="flex items-center w-full pt-4 gap-12">
                            <div className="w-1/12">
                                <div className="flex flex-col text-[#4a4949] font-thin">
                                    <span>Lorem</span>
                                    <span>Lorem</span>
                                    <span>Lorem</span>
                                    <span>Lorem</span>
                                    <span>Lorem</span>
                                    <span>Lorem</span>
                                </div>
                            </div>
                            <div className="w-1/12">
                                <div className="flex flex-col text-[#4a4949] font-thin">
                                    <span>Lorem</span>
                                    <span>Lorem</span>
                                    <span>Lorem</span>
                                    <span>Lorem</span>
                                    <span>Lorem</span>
                                    <span>Lorem</span>
                                </div>
                            </div>
                            <div className="w-1/12">
                                <div className="flex flex-col text-[#4a4949] font-thin">
                                    <span>Lorem</span>
                                    <span>Lorem</span>
                                    <span>Lorem</span>
                                    <span>Lorem</span>
                                    <span>Lorem</span>
                                    <span>Lorem</span>
                                </div>
                            </div>
                            <div className="w-1/12">
                                <div className="flex flex-col text-[#4a4949] font-thin">
                                    <span>Lorem</span>
                                    <span>Lorem</span>
                                    <span>Lorem</span>
                                    <span>Lorem</span>
                                    <span>Lorem</span>
                                    <span>Lorem</span>
                                </div>
                            </div>
                            <div className="w-1/12">
                                <div className="flex flex-col text-[#4a4949] font-thin">
                                    <span>Lorem</span>
                                    <span>Lorem</span>
                                    <span>Lorem</span>
                                    <span>Lorem</span>
                                    <span>Lorem</span>
                                    <span>Lorem</span>
                                </div>
                            </div>
                            <div className="w-1/12">
                                <div className="flex flex-col text-[#4a4949] font-thin">
                                    <span>Lorem</span>
                                    <span>Lorem</span>
                                    <span>Lorem</span>
                                    <span>Lorem</span>
                                    <span>Lorem</span>
                                    <span>Lorem</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}
