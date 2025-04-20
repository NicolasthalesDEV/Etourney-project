export default function YourPlaceSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-stretch gap-8">
          {/* Title and Description with Border */}
          <div className="w-full lg:w-1/2 flex">
            <div
              className="bg-purple-800/60 backdrop-blur-md p-8 rounded-xl border-2 border-purple-700/60 shadow-xl w-full flex flex-col justify-center"
              style={{ minHeight: "400px" }}
            >
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 bg-purple-900/80 p-4 rounded-md">
                Etourney is an Esports enablement platform built by Game Developer for Game Developers
              </h2>
              <p className="text-xl text-white font-medium leading-relaxed drop-shadow-md">
                With the Etourney Platform Video Game Developers enable their games to run real money competitive
                Esports Tournaments ONLINE.
              </p>
            </div>
          </div>

          {/* Single Image with Border */}
          <div className="w-full lg:w-1/2">
            <div
              className="border-2 border-purple-700/60 rounded-xl overflow-hidden shadow-xl"
              style={{ minHeight: "400px" }}
            >
              <img
                src="/images/built-by-developers.png"
                alt="Etourney platform built by game developers for game developers"
                className="w-full h-full object-cover"
                style={{ minHeight: "400px", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
