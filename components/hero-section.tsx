export default function HeroSection() {
  // Define the text outline style to be reused
  const textOutlineStyle = {
    textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
  }

  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-32 overflow-hidden min-h-screen flex items-center">
      {/* Background image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/images/etourney-tournament.png"
          alt="Etourney tournament interface"
          className="w-full h-full object-cover"
        />

        {/* Add a subtle overlay to help text stand out if needed */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Content overlay */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left side - Text */}
          <div className="w-full md:w-1/2 mb-12 md:mb-0 text-white" style={textOutlineStyle}>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-wider drop-shadow-lg mb-4 leading-none">
              ETOURNEY
            </h1>
            <div className="text-xl md:text-3xl font-bold drop-shadow-md space-y-1">
              <p>AI-POWERED ESPORTS</p>
              <p>ENABLEMENT PLATFORM</p>
            </div>
          </div>

          {/* Right side - Empty space to balance layout */}
          <div className="w-full md:w-1/2">
            {/* This space is intentionally left empty to match the original layout */}
            {/* The monitor and controller are part of the background image */}
          </div>
        </div>
      </div>
    </section>
  )
}
