"use server"

import { z } from "zod"

// Define a schema for form validation
const ContactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
})

type ContactFormData = z.infer<typeof ContactFormSchema>

export async function sendContactEmail(formData: FormData) {
  try {
    // Extract form data
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    }

    // Validate form data
    const validatedData = ContactFormSchema.parse(data)

    // In a real application, you would use an email service like SendGrid, Nodemailer, etc.
    // For demonstration purposes, we'll log the data and simulate a successful email send
    console.log("Sending email with data:", validatedData)

    // Simulate API call to email service
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // In a real application, you would check the response from the email service
    // and handle any errors appropriately

    return { success: true, message: "Your message has been sent successfully!" }
  } catch (error) {
    console.error("Error sending email:", error)
    if (error instanceof z.ZodError) {
      // Return validation errors
      return {
        success: false,
        message: "Validation failed",
        errors: error.errors.map((e) => ({ field: e.path[0], message: e.message })),
      }
    }

    return { success: false, message: "Failed to send your message. Please try again later." }
  }
}
