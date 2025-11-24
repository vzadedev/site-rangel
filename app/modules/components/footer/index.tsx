export const Footer = () => {
    return (
      <footer className="w-full bg-black text-white px-10 py-14">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
  
          {/* Coluna 1 */}
          <div className="flex flex-col space-y-2 text-sm">
            <h3 className="text-base font-semibold mb-3">Encontre uma loja GoalPoint</h3>
            <p className="text-xs">Cadastre-se para receber novidades</p>
            <p className="text-xs">Black Friday GoalPoint</p>
            <p className="text-xs">Tênis Black Friday</p>
            <p className="text-xs">Camisetas Black Friday</p>
            <p className="text-xs">Chuteiras Black Friday</p>
            <p className="text-xs">Moletom Black Friday</p>
            <p className="text-xs">Shorts Black Friday</p>
            <p className="text-xs">Cartão presente</p>
            <p className="text-xs">Mapa do site</p>
            <p className="text-xs">Guia de produtos</p>
            <p className="text-xs">Corinthians</p>
            <p className="text-xs">Acompanhe seu pedido</p>
          </div>
  
          {/* Coluna 2 */}
          <div className="flex flex-col space-y-2 text-sm">
            <h3 className="text-base font-semibold mb-3">Ajuda</h3>
            <p className="text-xs">Dúvidas gerais</p>
            <p className="text-xs">Encontre seu tamanho</p>
            <p className="text-xs">Entregas</p>
            <p className="text-xs">Pedidos</p>
            <p className="text-xs">Devoluções</p>
            <p className="text-xs">Pagamentos</p>
            <p className="text-xs">Produtos</p>
            <p className="text-xs">Corporativo</p>
            <p className="text-xs">Fale conosco</p>
            <p className="text-xs">Relatar problema</p>
          </div>
  
          {/* Coluna 3 */}
          <div className="flex flex-col space-y-2 text-sm">
            <h3 className="text-base font-semibold mb-3">Sobre a GoalPoint</h3>
            <p className="text-xs">Propósito</p>
            <p className="text-xs">Sustentabilidade</p>
            <p className="text-xs">Sobre a GoalPoint, Inc.</p>
            <p className="text-xs">Sobre o Grupo SBF</p>
          </div>
  
          {/* Coluna 4 */}
          <div className="flex flex-col space-y-6">
  
            {/* Redes sociais */}
            <div>
              <h3 className="text-base font-semibold">Redes sociais</h3>
              <div className="flex space-x-4 text-xl mt-3">
                <i className="fab fa-facebook"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-youtube"></i>
              </div>
            </div>
  
            <div>
              <h3 className="text-base font-semibold">Em desenvolvimento</h3>
            </div>
  
          </div>
        </div>
      </footer>
    );
  };
  