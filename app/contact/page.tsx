import Header from "@/components/header"
import Footer from "@/components/footer"
import ContactForm from "@/components/contact-form"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="pt-24 pb-20 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 bg-gradient-to-r from-fuchsia-500 to-purple-700 p-4 rounded-md inline-block">
                  Contact Us
                </h1>
                <p className="text-xl text-white bg-purple-800/60 backdrop-blur-md p-4 rounded-lg max-w-2xl mx-auto border border-purple-700/60">
                  Have questions about Etourney? We're here to help! Fill out the form below and our team will get back
                  to you as soon as possible.
                </p>
              </div>

              <ContactForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
