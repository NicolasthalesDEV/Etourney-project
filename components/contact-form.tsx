"use client"

import type React from "react"

import { useState, useTransition } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Send } from "lucide-react"
import { sendContactEmail } from "@/app/actions"

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isPending, startTransition] = useTransition()
  const [submitStatus, setSubmitStatus] = useState<null | { success: boolean; message: string }>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Create FormData object from the form state
    const formData = new FormData()
    Object.entries(formState).forEach(([key, value]) => {
      formData.append(key, value)
    })

    // Use React useTransition to handle the server action
    startTransition(async () => {
      try {
        const result = await sendContactEmail(formData)

        setSubmitStatus({
          success: result.success,
          message: result.message,
        })

        if (result.success) {
          // Reset form after successful submission
          setFormState({
            name: "",
            email: "",
            subject: "",
            message: "",
          })

          // Clear status after 5 seconds
          setTimeout(() => setSubmitStatus(null), 5000)
        }
      } catch (error) {
        console.error("Error submitting form:", error)
        setSubmitStatus({
          success: false,
          message: "An unexpected error occurred. Please try again.",
        })
      }
    })
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="md:col-span-2">
        <form
          onSubmit={handleSubmit}
          className="bg-purple-800/60 backdrop-blur-md p-6 rounded-xl border-2 border-purple-700/60 shadow-xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-white font-medium mb-2">
                Name
              </label>
              <Input
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="bg-purple-900/70 border-purple-700/60 text-white placeholder:text-purple-300"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-white font-medium mb-2">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
                className="bg-purple-900/70 border-purple-700/60 text-white placeholder:text-purple-300"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="subject" className="block text-white font-medium mb-2">
              Subject
            </label>
            <Input
              id="subject"
              name="subject"
              value={formState.subject}
              onChange={handleChange}
              required
              placeholder="How can we help you?"
              className="bg-purple-900/70 border-purple-700/60 text-white placeholder:text-purple-300"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-white font-medium mb-2">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={handleChange}
              required
              placeholder="Tell us more about your inquiry..."
              className="bg-purple-900/70 border-purple-700/60 text-white placeholder:text-purple-300 min-h-[150px]"
            />
          </div>

          <div className="flex justify-center">
            <Button
              type="submit"
              disabled={isPending}
              className="bg-gradient-to-r from-fuchsia-500 to-purple-700 hover:from-fuchsia-600 hover:to-purple-800 text-white font-bold py-3 px-8 rounded-lg text-lg shadow-lg transform transition-transform hover:scale-105 flex items-center"
            >
              {isPending ? (
                <>
                  <span className="mr-2">Sending...</span>
                  <div className="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin"></div>
                </>
              ) : (
                <>
                  Send Message <Send className="ml-2 h-5 w-5" />
                </>
              )}
            </Button>
          </div>

          {submitStatus && (
            <div
              className={`mt-4 p-3 ${submitStatus.success ? "bg-green-500/70" : "bg-red-500/70"} text-white rounded-lg`}
            >
              {submitStatus.message}
            </div>
          )}
        </form>
      </div>

      <div className="md:col-span-1">
        <div className="bg-purple-800/60 backdrop-blur-md p-6 rounded-xl border-2 border-purple-700/60 shadow-xl h-full">
          <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>

          <div className="space-y-6">
            <div className="flex items-start">
              <MapPin className="h-6 w-6 text-pink-400 mr-3 mt-1" />
              <div>
                <h4 className="text-white font-medium">Address</h4>
                <p className="text-white/80">4014 148th Ave NE, Redmond, WA 98052</p>
              </div>
            </div>

            <div className="flex items-start">
              <Phone className="h-6 w-6 text-pink-400 mr-3 mt-1" />
              <div>
                <h4 className="text-white font-medium">Phone</h4>
                <p className="text-white/80">+1 (425) 371-2373</p>
              </div>
            </div>

            <div className="flex items-start">
              <Mail className="h-6 w-6 text-pink-400 mr-3 mt-1" />
              <div>
                <h4 className="text-white font-medium">Email</h4>
                <p className="text-white/80">info@etourney.com</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="text-white font-medium mb-3">Business Hours</h4>
            <p className="text-white/80">Monday - Friday: 9:00 AM - 5:00 PM PST</p>
            <p className="text-white/80">Saturday - Sunday: Closed</p>
          </div>
        </div>
      </div>
    </div>
  )
}
