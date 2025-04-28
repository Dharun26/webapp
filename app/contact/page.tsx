"use client"

import type React from "react"
import { useState } from "react"
import { CheckCircle, Mail, Phone, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { sendContactEmail } from "../actions/contact"

// Define TypeScript types for form data and errors
type FormData = {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

type FormErrors = {
  name?: string
  email?: string
  message?: string
  [key: string]: string | undefined
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitError, setSubmitError] = useState<string | null>(null)

  // Update contact information with the provided details
  const contactInfo = {
    email: "contact@getxcloud.com",
    phone: "+91 97866 44887",
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }))
    }

    // Clear submit error when user makes changes
    if (submitError) {
      setSubmitError(null)
    }
  }

  const validateForm = () => {
    const newErrors: FormErrors = {}
    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid"
    if (!formData.message.trim()) newErrors.message = "Message is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmitError(null)

    try {
      // Send email using server action
      const result = await sendContactEmail({
        name: formData.name,
        email: formData.email,
        phone: formData.phone || "Not provided",
        subject: formData.subject || "Contact Form Submission",
        message: formData.message,
      })

      if (result.success) {
        setIsSubmitted(true)
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        })

        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false)
        }, 5000)
      } else {
        setSubmitError(result.error || "Failed to send message. Please try again later.")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitError("Something went wrong. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">Contact Us</h1>
            <p className="max-w-[700px] text-gray-300 md:text-xl">
              Get in touch with our team to discuss your cloud service needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Get In Touch</h2>
              <p className="text-gray-500 md:text-lg">
                Fill out the form and our team will get back to you within 24 hours.
              </p>

              <div className="space-y-4 mt-8">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-black flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-gray-500 hover:text-black transition-colors"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-black flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold">Phone</h3>
                    <a
                      href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}
                      className="text-gray-500 hover:text-black transition-colors"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>
              </div>

              <Card className="mt-8 border-none shadow-sm">
                <CardContent className="p-6 bg-gray-50">
                  <h3 className="font-bold text-lg mb-2">Why Choose GetXCloud?</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-black" />
                      <span>24/7 customer support</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-black" />
                      <span>Transparent pricing</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-black" />
                      <span>Tailored cloud solutions</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-black" />
                      <span>Free consultation</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              {isSubmitted ? (
                <Card className="border-none shadow-sm">
                  <CardContent className="p-6 bg-gray-50 h-full flex flex-col items-center justify-center text-center">
                    <CheckCircle className="h-16 w-16 text-green-600 mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                    <p className="text-gray-500">
                      Your message has been sent successfully. We'll get back to you within 24 hours.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <Card className="border-none shadow-sm">
                  <CardContent className="p-6">
                    {submitError && (
                      <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-md">
                        {submitError}
                      </div>
                    )}
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                          Name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          className={`mt-1 ${errors.name ? "border-red-500 focus:ring-red-500" : ""}`}
                          placeholder="Your name"
                          aria-invalid={errors.name ? "true" : "false"}
                          aria-describedby={errors.name ? "name-error" : undefined}
                        />
                        {errors.name && (
                          <p id="name-error" className="mt-1 text-sm text-red-500">
                            {errors.name}
                          </p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                          Email <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`mt-1 ${errors.email ? "border-red-500 focus:ring-red-500" : ""}`}
                          placeholder="your.email@example.com"
                          aria-invalid={errors.email ? "true" : "false"}
                          aria-describedby={errors.email ? "email-error" : undefined}
                        />
                        {errors.email && (
                          <p id="email-error" className="mt-1 text-sm text-red-500">
                            {errors.email}
                          </p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                          Phone
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className="mt-1"
                          placeholder="Your phone number"
                        />
                      </div>
                      <div>
                        <Label htmlFor="subject" className="text-sm font-medium text-gray-700">
                          Subject
                        </Label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          value={formData.subject}
                          onChange={handleChange}
                          className="mt-1"
                          placeholder="What is this regarding?"
                        />
                      </div>
                      <div>
                        <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                          Message <span className="text-red-500">*</span>
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          className={`mt-1 ${errors.message ? "border-red-500 focus:ring-red-500" : ""}`}
                          placeholder="Tell us about your cloud service needs"
                          aria-invalid={errors.message ? "true" : "false"}
                          aria-describedby={errors.message ? "message-error" : undefined}
                        />
                        {errors.message && (
                          <p id="message-error" className="mt-1 text-sm text-red-500">
                            {errors.message}
                          </p>
                        )}
                      </div>
                      <Button type="submit" disabled={isSubmitting} className="w-full bg-black hover:bg-gray-900">
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          "Send Message"
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
