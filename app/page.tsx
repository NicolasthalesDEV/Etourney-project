"use client"

import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import TextScrollBanner from "@/components/text-scroll-banner"
import YourPlaceSection from "@/components/your-place-section"
import DeveloperBenefitsSection from "@/components/developer-benefits-section"
import FeaturesSection from "@/components/features-section"
import FeaturesSectionDuplicate from "@/components/features-section-duplicate"
import FeaturesSectionDuplicate2 from "@/components/features-section-duplicate-2"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <TextScrollBanner />
        <YourPlaceSection />
        <DeveloperBenefitsSection />
        <FeaturesSection />
        <FeaturesSectionDuplicate />
        <FeaturesSectionDuplicate2 />
      </main>
      <Footer />
    </div>
  )
}
