"use client"

import { useState, useEffect, useRef } from "react"
import { useForm } from "react-hook-form"
import { Gamepad2, ChevronDown, ArrowRight, CheckCircle, ChevronUp, TrendingUp, Users, Globe } from "lucide-react"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"
import Image from "next/image"
import { motion, useScroll, useTransform, useInView } from "framer-motion"

type FormData = {
  firstName: string
  lastName: string
  email: string
  phone: string
  investmentExperience: string
  message: string
}

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState("hero")
  const heroRef = useRef<HTMLElement>(null)
  const aboutRef = useRef<HTMLElement>(null)
  const statsRef = useRef<HTMLElement>(null)
  const ctaRef = useRef<HTMLElement>(null)
  const formRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.2])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9])

  const isHeroInView = useInView(heroRef, { once: false, amount: 0.5 })
  const isAboutInView = useInView(aboutRef, { once: false, amount: 0.5 })
  const isStatsInView = useInView(statsRef, { once: false, amount: 0.5 })
  const isCtaInView = useInView(ctaRef, { once: false, amount: 0.5 })
  const isFormInView = useInView(formRef, { once: false, amount: 0.5 })

  // Track scroll position for parallax effects and section detection
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)

      // Determine active section
      const sections = [
        { ref: heroRef, id: "hero" },
        { ref: aboutRef, id: "about" },
        { ref: statsRef, id: "stats" },
        { ref: ctaRef, id: "cta" },
        { ref: formRef, id: "form" },
      ]

      for (const section of sections) {
        if (!section.ref.current) continue

        const rect = section.ref.current.getBoundingClientRect()
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          setActiveSection(section.id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    try {
      const response = await fetch("/api/investor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error("Falha ao enviar o formulário")
      }

      setIsSuccess(true)
      toast({
        title: "Formulário enviado com sucesso!",
        description: "Nossa equipe de Relações com Investidores entrará em contato em breve.",
      })
      reset()
    } catch (error) {
      toast({
        title: "Erro ao enviar formulário",
        description: "Por favor, tente novamente mais tarde.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const slideIn = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  }

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  }

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Background Image Layer */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/Background.jpg.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
      </div>


      {/* Decorative Background Elements */}
      <div className="fixed inset-0 z-[1] pointer-events-none overflow-hidden">
        {/* Animated gradient orbs */}
        <div
          className="absolute top-[10%] left-[10%] w-[40vw] h-[40vw] bg-purple-600/15 rounded-full blur-[150px]"
          style={{ transform: `translateY(${scrollY * 0.02}px)` }}
        ></div>
        <div
          className="absolute top-[60%] right-[5%] w-[35vw] h-[35vw] bg-indigo-600/15 rounded-full blur-[130px]"
          style={{ transform: `translateY(${scrollY * -0.03}px)` }}
        ></div>
        <div
          className="absolute bottom-[5%] left-[20%] w-[50vw] h-[30vw] bg-fuchsia-600/10 rounded-full blur-[150px]"
          style={{ transform: `translateY(${scrollY * -0.01}px)` }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header
          className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-transparent"
        >
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-r from-purple-500 to-indigo-600 p-2 rounded-full">
                <Gamepad2 className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Etourney</span>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <a
                href="/"
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-purple-500/25 text-sm"
              >
                Back to Home
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </nav>
          </div>
        </header>


        {/* Hero Section */}
        <section
          id="hero"
          ref={heroRef}
          className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden pt-20"
        >
          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            animate={isHeroInView ? "visible" : "hidden"}
            variants={staggerChildren}
            style={{ opacity, scale }}
          >
            <motion.div className="flex items-center justify-center mb-8" variants={fadeIn}>
              <div className="bg-gradient-to-r from-purple-500 to-indigo-600 p-4 rounded-full shadow-lg shadow-purple-500/20">
                <Gamepad2 className="h-10 w-10 text-white" />
              </div>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-white tracking-tight"
              variants={fadeIn}
            >
              Help Accelerate{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                Etourney!
              </span>
            </motion.h1>

            <motion.p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto" variants={fadeIn}>
              Join us in revolutionizing the <span className="font-semibold text-purple-300">$65 Billion</span> esports
              market
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#form"
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
              >
                Become an Investor
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#about"
                className="group inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-medium px-8 py-4 rounded-full transition-all duration-300 border border-white/10"
              >
                Learn More
                <ChevronDown className="h-5 w-5 group-hover:translate-y-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>

          <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
            <a href="#about" className="text-white/50 hover:text-white transition-colors">
              <ChevronDown className="h-8 w-8" />
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" ref={aboutRef} className="py-24 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-purple-900/10 to-black/0"></div>

          <motion.div
            className="max-w-6xl mx-auto"
            initial="hidden"
            animate={isAboutInView ? "visible" : "hidden"}
            variants={staggerChildren}
          >
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div variants={slideIn}>
                <span className="inline-block text-purple-400 font-semibold mb-3 tracking-wider text-sm">
                  OUR MISSION
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white leading-tight">
                  The Future of <span className="text-purple-400">Esports</span> is Here
                </h2>
                <div className="space-y-6 text-gray-300">
                  <p className="text-lg">
                    Through self-funding we have made significant progress in the development of the Etourney Esports
                    Enablement Platform.
                  </p>
                  <p className="text-lg">
                    However, the cost of developing a technologically advanced, scalable, stable and feature-rich
                    Esports Enablement platform is very high.
                  </p>
                  <p className="text-lg">
                    As such, and in order to accelerate the development of our platform, we are seeking investments from
                    astute and savvy investors who share our vision.
                  </p>
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    <span className="text-gray-300">Scalable Platform</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                    <span className="text-gray-300">Global Reach</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                    <span className="text-gray-300">Advanced Technology</span>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={scaleIn} className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-2xl blur-lg opacity-75"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                  <Image
                    src="/esports-gaming.jpg"
                    alt="Esports Gaming"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center">
                        <TrendingUp className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-300">Market Growth</div>
                        <div className="text-xl font-bold text-white">46% YoY</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Stats Section */}
        <section id="stats" ref={statsRef} className="py-24 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-purple-900/10 to-black/0"></div>

          <motion.div
            className="max-w-6xl mx-auto relative"
            initial="hidden"
            animate={isStatsInView ? "visible" : "hidden"}
            variants={staggerChildren}
          >
            <motion.div variants={fadeIn} className="text-center mb-16">
              <span className="inline-block text-purple-400 font-semibold mb-3 tracking-wider text-sm">
                THE OPPORTUNITY
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white">
                Why Invest in <span className="text-purple-400">Etourney</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-6"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div variants={scaleIn} className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/30 to-indigo-600/30 rounded-2xl blur-md opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-black/50 backdrop-blur-xl p-8 rounded-2xl border border-white/10 h-full flex flex-col group-hover:translate-y-[-5px] transition-transform">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center mb-6 shadow-lg shadow-purple-500/20">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">$65B</div>
                  <h3 className="text-xl font-semibold text-white mb-3">Market Opportunity</h3>
                  <p className="text-gray-300 mt-auto">
                    The global esports market is projected to reach $65 billion by 2027.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={scaleIn} className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600/30 to-blue-600/30 rounded-2xl blur-md opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-black/50 backdrop-blur-xl p-8 rounded-2xl border border-white/10 h-full flex flex-col group-hover:translate-y-[-5px] transition-transform">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/20">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">3.2B</div>
                  <h3 className="text-xl font-semibold text-white mb-3">Global Gamers</h3>
                  <p className="text-gray-300 mt-auto">Over 3.2 billion people worldwide play video games regularly.</p>
                </div>
              </motion.div>

              <motion.div variants={scaleIn} className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/30 to-cyan-600/30 rounded-2xl blur-md opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-black/50 backdrop-blur-xl p-8 rounded-2xl border border-white/10 h-full flex flex-col group-hover:translate-y-[-5px] transition-transform">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">46%</div>
                  <h3 className="text-xl font-semibold text-white mb-3">Annual Growth</h3>
                  <p className="text-gray-300 mt-auto">The esports industry is growing at 46% year over year.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Call to Action Section */}
        <section id="cta" ref={ctaRef} className="py-32 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(120,50,255,0.15),transparent_70%)]"></div>

          <motion.div
            className="max-w-5xl mx-auto text-center relative z-10"
            initial="hidden"
            animate={isCtaInView ? "visible" : "hidden"}
            variants={staggerChildren}
          >
            <motion.div variants={fadeIn} className="mb-8">
              <span className="inline-block text-purple-400 font-semibold mb-3 tracking-wider text-sm">JOIN US</span>
            </motion.div>

            <motion.h2 className="text-4xl md:text-6xl font-bold mb-8 text-white leading-tight" variants={fadeIn}>
              Help us tap into this <span className="text-purple-400">$65 Billion</span> dollar market opportunity.
            </motion.h2>

            <motion.p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto" variants={fadeIn}>
              Join us to accelerate Etourney's future and be part of the next generation of esports enablement.
            </motion.p>

            <motion.div variants={fadeIn}>
              <a
                href="#invest-form"
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium px-10 py-5 rounded-full transition-all duration-300 shadow-lg hover:shadow-purple-500/25 text-lg"
              >
                Become an Investor Today
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            <motion.div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8" variants={fadeIn}>
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                <div className="text-2xl font-bold text-purple-400 mb-2">Phase 1</div>
                <h3 className="text-lg font-semibold text-white mb-3">Initial Investment</h3>
                <p className="text-gray-300">Secure seed funding to accelerate platform development</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                <div className="text-2xl font-bold text-purple-400 mb-2">Phase 2</div>
                <h3 className="text-lg font-semibold text-white mb-3">Market Expansion</h3>
                <p className="text-gray-300">Scale operations and enter key global markets</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                <div className="text-2xl font-bold text-purple-400 mb-2">Phase 3</div>
                <h3 className="text-lg font-semibold text-white mb-3">Industry Leadership</h3>
                <p className="text-gray-300">Establish Etourney as the leading esports platform</p>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Form Section */}
        <section id="form" ref={formRef} className="py-24 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-purple-900/10 to-black/0"></div>

          <motion.div
            className="max-w-4xl mx-auto relative"
            initial="hidden"
            animate={isFormInView ? "visible" : "hidden"}
            variants={staggerChildren}
          >
            {isSuccess ? (
              <motion.div
                variants={scaleIn}
                className="bg-gradient-to-br from-purple-900/40 to-indigo-900/40 backdrop-blur-xl rounded-3xl p-12 text-center border border-purple-500/30 shadow-2xl"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-8">
                  <CheckCircle className="h-10 w-10 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-6">Thank You For Your Interest!</h2>
                <p className="text-gray-300 text-lg mb-8 max-w-lg mx-auto">
                  Our Investor Relations team will contact you soon to discuss investment opportunities with Etourney.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium px-6 py-3 rounded-full transition-all duration-300"
                >
                  Submit Another Inquiry
                  <ArrowRight className="h-5 w-5" />
                </button>
              </motion.div>
            ) : (
              <motion.div variants={scaleIn} className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-3xl blur-lg"></div>
                <div className="relative bg-black/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
                  <div className="text-center mb-10">
                    <span className="inline-block text-purple-400 font-semibold mb-3 tracking-wider text-sm">
                      INVESTOR FORM
                    </span>
                    <h2 className="text-3xl font-bold text-white mb-4">Become an Investor</h2>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                      Fill out the form below and our Investor Relations team will get in touch with you shortly.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="block text-gray-200 font-medium">
                          First Name
                        </label>
                        <div className="relative">
                          <input
                            id="firstName"
                            type="text"
                            className={`w-full p-4 bg-white/10 text-white rounded-xl border focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 outline-none ${errors.firstName ? "border-red-500" : "border-purple-500/30"
                              }`}
                            placeholder="John"
                            {...register("firstName", { required: "First name is required" })}
                          />
                        </div>
                        {errors.firstName && <p className="text-red-400 text-sm">{errors.firstName.message}</p>}
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="lastName" className="block text-gray-200 font-medium">
                          Last Name
                        </label>
                        <input
                          id="lastName"
                          type="text"
                          className={`w-full p-4 bg-white/10 text-white rounded-xl border focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 outline-none ${errors.lastName ? "border-red-500" : "border-purple-500/30"
                            }`}
                          placeholder="Doe"
                          {...register("lastName", { required: "Last name is required" })}
                        />
                        {errors.lastName && <p className="text-red-400 text-sm">{errors.lastName.message}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-gray-200 font-medium">
                          E-mail
                        </label>
                        <input
                          id="email"
                          type="email"
                          className={`w-full p-4 bg-white/10 text-white rounded-xl border focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 outline-none ${errors.email ? "border-red-500" : "border-purple-500/30"
                            }`}
                          placeholder="john.doe@example.com"
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "Invalid email address",
                            },
                          })}
                        />
                        {errors.email && <p className="text-red-400 text-sm">{errors.email.message}</p>}
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="phone" className="block text-gray-200 font-medium">
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          className={`w-full p-4 bg-white/10 text-white rounded-xl border focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 outline-none ${errors.phone ? "border-red-500" : "border-purple-500/30"
                            }`}
                          placeholder="+1 (555) 123-4567"
                          {...register("phone", { required: "Phone number is required" })}
                        />
                        {errors.phone && <p className="text-red-400 text-sm">{errors.phone.message}</p>}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="investmentExperience" className="block text-gray-200 font-medium">
                        Investment Experience
                      </label>
                      <div className="relative group">
                        <select
                          id="investmentExperience"
                          className={`w-full p-4 bg-gradient-to-r from-purple-900/50 to-indigo-900/50 text-white rounded-xl border appearance-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 outline-none hover:from-purple-800/50 hover:to-indigo-800/50 ${errors.investmentExperience ? "border-red-500" : "border-purple-500/30"
                            }`}
                          {...register("investmentExperience", {
                            required: "Please select your investment experience",
                          })}
                        >
                          <option value="" className="bg-gray-900 text-white">
                            Select your investment experience
                          </option>
                          <option
                            value="New To Investing in Startups (Not Accredited)"
                            className="bg-gray-900 text-white"
                          >
                            New To Investing in Startups (Not Accredited)
                          </option>
                          <option value="Angel Investor (Accredited)" className="bg-gray-900 text-white">
                            Angel Investor (Accredited)
                          </option>
                          <option value="Startup Syndicate" className="bg-gray-900 text-white">
                            Startup Syndicate
                          </option>
                          <option value="Venture Capital Company" className="bg-gray-900 text-white">
                            Venture Capital Company
                          </option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none bg-purple-600 rounded-full p-1 group-hover:bg-purple-500 transition-colors">
                          <ChevronDown className="h-4 w-4 text-white" />
                        </div>
                      </div>
                      {errors.investmentExperience && (
                        <p className="text-red-400 text-sm">{errors.investmentExperience.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-gray-200 font-medium">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className={`w-full p-4 bg-white/10 text-white rounded-xl border focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 outline-none ${errors.message ? "border-red-500" : "border-purple-500/30"
                          }`}
                        placeholder="Tell us about your investment interests..."
                        {...register("message", { required: "Please enter a message" })}
                      ></textarea>
                      {errors.message && <p className="text-red-400 text-sm">{errors.message.message}</p>}
                    </div>

                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/25 flex items-center justify-center gap-2 disabled:opacity-70"
                      >
                        {isSubmitting ? "Sending..." : "Become an Investor"}
                        {!isSubmitting && <ArrowRight className="h-5 w-5" />}
                      </button>
                    </div>
                  </form>
                </div>
              </motion.div>
            )}
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-purple-900/30 relative">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <div className="bg-gradient-to-r from-purple-500 to-indigo-600 p-2 rounded-full">
                    <Gamepad2 className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-xl font-bold text-white">Etourney</span>
                </div>
                <p className="text-gray-400 mb-4">
                  Join us in revolutionizing the esports industry with our advanced platform for tournaments and
                  competitions.
                </p>
                <a
                  href="#form"
                  className="mt-auto inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                >
                  Contact us <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#hero"
                      className="text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-1"
                    >
                      <span className="w-1 h-1 bg-purple-400 rounded-full"></span>
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      className="text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-1"
                    >
                      <span className="w-1 h-1 bg-purple-400 rounded-full"></span>
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#stats"
                      className="text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-1"
                    >
                      <span className="w-1 h-1 bg-purple-400 rounded-full"></span>
                      Why Invest
                    </a>
                  </li>
                  <li>
                    <a
                      href="#cta"
                      className="text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-1"
                    >
                      <span className="w-1 h-1 bg-purple-400 rounded-full"></span>
                      Opportunity
                    </a>
                  </li>
                  <li>
                    <a
                      href="#form"
                      className="text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-1"
                    >
                      <span className="w-1 h-1 bg-purple-400 rounded-full"></span>
                      Invest Now
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                      Cookie Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} Etourney Esports Enablement. All rights reserved.
              </p>
              <div className="mt-4 md:mt-0">
                <a
                  href="#hero"
                  className="inline-flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Back to top
                  <ChevronUp className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <Toaster />
    </div>
  )
}
