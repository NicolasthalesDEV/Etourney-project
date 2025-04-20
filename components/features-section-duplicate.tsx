export default function FeaturesSectionDuplicate() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-stretch gap-8 h-full">
          {/* Title and Description with Border */}
          <div className="w-full lg:w-1/2 flex">
            <div className="bg-purple-800/60 backdrop-blur-md p-8 rounded-xl border-2 border-purple-700/60 shadow-xl w-full flex flex-col justify-center h-full">
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 bg-purple-900/80 p-4 rounded-md">
                Our Mission:
              </h2>
              <p className="text-xl text-white font-medium leading-relaxed drop-shadow-md">
                Etourney will democratize esports competitive gaming. Through our AI powered platform we will insure
                fair and responsible gaming for all participants around the world. Game developers big and small will
                have access to our platform for free, allowing them to integrate their own games to bring the fun of
                real money competitive gaming to their users & the entire gaming community.
              </p>
              <p className="text-xl pt-5 text-white font-medium leading-relaxed drop-shadow-md">
                Allen MonJazeb, CEO & Founder
              </p>
            </div>
          </div>

          {/* Single Image with Border */}
          <div className="w-full lg:w-1/2 flex">
            <div className="border-2 border-purple-700/60 rounded-xl overflow-hidden shadow-xl h-full w-full">
              <img
                src="/images/etourney-mission.png"
                alt="Etourney connecting game developers and players through competitive gaming"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
