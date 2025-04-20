export default function TextScrollBanner() {
  // Estilo para mascarar o símbolo no canto superior direito
  const maskStyle = {
    maskImage: "radial-gradient(circle at 100% 0%, transparent 25%, black 25%)",
    WebkitMaskImage: "radial-gradient(circle at 100% 0%, transparent 25%, black 25%)",
  }

  return (
    <section className="relative bg-gradient-to-r from-pink-200 to-purple-800 py-6 md:py-8 overflow-hidden w-full">
      <div className="w-full h-16 flex items-center">
        <div className="relative overflow-hidden w-full">
          <div className="flex whitespace-nowrap banner-scroll">
            {/* Repetimos o conteúdo várias vezes para garantir que sempre haja palavras na tela */}
            {/* Primeiro conjunto */}
            <span className="text-4xl md:text-6xl font-extrabold text-white mx-2">ESPORTS</span>
            <img
              src="/images/controller-icon.png"
              alt="Game controller"
              className="h-10 w-10 md:h-14 md:w-14 mx-2 object-contain"
              style={maskStyle}
            />
            <span className="text-4xl md:text-6xl font-extrabold text-white mx-2">ANYONE</span>
            <img
              src="/images/controller-icon.png"
              alt="Game controller"
              className="h-10 w-10 md:h-14 md:w-14 mx-2 object-contain"
              style={maskStyle}
            />
            <span className="text-4xl md:text-6xl font-extrabold text-white mx-2">ANYWHERE</span>
            <img
              src="/images/controller-icon.png"
              alt="Game controller"
              className="h-10 w-10 md:h-14 md:w-14 mx-2 object-contain"
              style={maskStyle}
            />
            <span className="text-4xl md:text-6xl font-extrabold text-white mx-2">ANYTIME</span>
            <img
              src="/images/controller-icon.png"
              alt="Game controller"
              className="h-10 w-10 md:h-14 md:w-14 mx-2 object-contain"
              style={maskStyle}
            />

            {/* Segundo conjunto */}
            <span className="text-4xl md:text-6xl font-extrabold text-white mx-2">ESPORTS</span>
            <img
              src="/images/controller-icon.png"
              alt="Game controller"
              className="h-10 w-10 md:h-14 md:w-14 mx-2 object-contain"
              style={maskStyle}
            />
            <span className="text-4xl md:text-6xl font-extrabold text-white mx-2">ANYONE</span>
            <img
              src="/images/controller-icon.png"
              alt="Game controller"
              className="h-10 w-10 md:h-14 md:w-14 mx-2 object-contain"
              style={maskStyle}
            />
            <span className="text-4xl md:text-6xl font-extrabold text-white mx-2">ANYWHERE</span>
            <img
              src="/images/controller-icon.png"
              alt="Game controller"
              className="h-10 w-10 md:h-14 md:w-14 mx-2 object-contain"
              style={maskStyle}
            />
            <span className="text-4xl md:text-6xl font-extrabold text-white mx-2">ANYTIME</span>
            <img
              src="/images/controller-icon.png"
              alt="Game controller"
              className="h-10 w-10 md:h-14 md:w-14 mx-2 object-contain"
              style={maskStyle}
            />

            {/* Terceiro conjunto */}
            <span className="text-4xl md:text-6xl font-extrabold text-white mx-2">ESPORTS</span>
            <img
              src="/images/controller-icon.png"
              alt="Game controller"
              className="h-10 w-10 md:h-14 md:w-14 mx-2 object-contain"
              style={maskStyle}
            />
            <span className="text-4xl md:text-6xl font-extrabold text-white mx-2">ANYONE</span>
            <img
              src="/images/controller-icon.png"
              alt="Game controller"
              className="h-10 w-10 md:h-14 md:w-14 mx-2 object-contain"
              style={maskStyle}
            />
            <span className="text-4xl md:text-6xl font-extrabold text-white mx-2">ANYWHERE</span>
            <img
              src="/images/controller-icon.png"
              alt="Game controller"
              className="h-10 w-10 md:h-14 md:w-14 mx-2 object-contain"
              style={maskStyle}
            />
            <span className="text-4xl md:text-6xl font-extrabold text-white mx-2">ANYTIME</span>
            <img
              src="/images/controller-icon.png"
              alt="Game controller"
              className="h-10 w-10 md:h-14 md:w-14 mx-2 object-contain"
              style={maskStyle}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
