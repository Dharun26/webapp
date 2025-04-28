"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Calendar, CheckCircle, Clock, Users } from "lucide-react"
import { submitBookingForm, type BookingFormData } from "../actions/email"

export default function ConsultingPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<BookingFormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    employees: "",
    interests: [],
    date: "",
    time: "",
    message: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target

    if (type === "checkbox") {
      const checkbox = e.target as HTMLInputElement
      const { checked } = checkbox

      setFormData((prev) => ({
        ...prev,
        interests: checked ? [...prev.interests, value] : prev.interests.filter((interest) => interest !== value),
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }))
    }
  }

  const validateStep = (currentStep: number) => {
    const newErrors: Record<string, string> = {}

    if (currentStep === 1) {
      if (!formData.name.trim()) newErrors.name = "Name is required"
      if (!formData.email.trim()) newErrors.email = "Email is required"
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid"
      if (!formData.company.trim()) newErrors.company = "Company name is required"
    }

    if (currentStep === 2) {
      if (formData.interests.length === 0) newErrors.interests = "Please select at least one service"
    }

    if (currentStep === 3) {
      if (!formData.date) newErrors.date = "Please select a date"
      if (!formData.time) newErrors.time = "Please select a time"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const nextStep = () => {
    if (validateStep(step)) {
      setStep((prev) => prev + 1)
    }
  }

  const prevStep = () => {
    setStep((prev) => prev - 1)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateStep(step)) return

    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const result = await submitBookingForm(formData)

      if (result.success) {
        setIsSubmitted(true)
      } else {
        setSubmitError(result.error || "Something went wrong. Please try again.")
      }
    } catch (error) {
      setSubmitError("Failed to submit the form. Please try again later.")
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
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Book a Free Consultation
            </h1>
            <p className="max-w-[700px] text-gray-300 md:text-xl">
              Get expert advice on cloud services tailored to your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Consulting Benefits */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Why Book a Consultation?</h2>
            <p className="max-w-[700px] text-gray-500 md:text-lg">
              Our free consultation sessions are designed to help you understand the cloud services that best fit your
              business needs.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="flex flex-col p-6 bg-gray-50 rounded-lg">
              <div className="p-2 bg-black rounded-full w-fit mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Personalized Advice</h3>
              <p className="text-gray-500 flex-grow">
                Get tailored recommendations based on your specific business requirements and goals.
              </p>
            </div>
            <div className="flex flex-col p-6 bg-gray-50 rounded-lg">
              <div className="p-2 bg-black rounded-full w-fit mb-4">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Clear Explanations</h3>
              <p className="text-gray-500 flex-grow">
                We explain complex cloud concepts in simple terms, ensuring you understand what you're investing in.
              </p>
            </div>
            <div className="flex flex-col p-6 bg-gray-50 rounded-lg">
              <div className="p-2 bg-black rounded-full w-fit mb-4">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Flexible Scheduling</h3>
              <p className="text-gray-500 flex-grow">
                Choose a date and time that works best for you. We accommodate your schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Book Your Free Consultation</h2>
            <p className="max-w-[700px] text-gray-500 md:text-lg">
              Fill out the form below to schedule your consultation with our cloud experts.
            </p>
          </div>

          {isSubmitted ? (
            <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-sm border border-gray-200 text-center">
              <CheckCircle className="h-16 w-16 text-black mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Consultation Booked!</h3>
              <p className="text-gray-500 mb-6">
                Thank you for booking a consultation with GetXCloud. We've sent a confirmation email with all the
                details. Our team will contact you shortly to confirm your appointment.
              </p>
              <Link
                href="/"
                className="inline-flex h-10 items-center justify-center rounded-md bg-black px-8 text-sm font-medium text-white shadow transition-colors hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
              >
                Return to Home
              </Link>
            </div>
          ) : (
            <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="flex justify-between items-center mb-8">
                {[1, 2, 3, 4].map((stepNumber) => (
                  <div key={stepNumber} className="flex flex-col items-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        step >= stepNumber ? "bg-black text-white" : "bg-gray-200 text-gray-500"
                      }`}
                    >
                      {stepNumber}
                    </div>
                    <span className="text-xs mt-1 text-gray-500">
                      {stepNumber === 1 && "Info"}
                      {stepNumber === 2 && "Services"}
                      {stepNumber === 3 && "Schedule"}
                      {stepNumber === 4 && "Confirm"}
                    </span>
                  </div>
                ))}
              </div>

              {submitError && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-md">{submitError}</div>
              )}

              <form onSubmit={handleSubmit}>
                {step === 1 && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold mb-4">Your Information</h3>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full rounded-md border ${errors.name ? "border-red-500" : "border-gray-300"} px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-black focus:outline-none focus:ring-1 focus:ring-black`}
                        placeholder="Your name"
                      />
                      {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full rounded-md border ${errors.email ? "border-red-500" : "border-gray-300"} px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-black focus:outline-none focus:ring-1 focus:ring-black`}
                        placeholder="your.email@example.com"
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
                        placeholder="Your phone number"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                        Company Name *
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        className={`w-full rounded-md border ${errors.company ? "border-red-500" : "border-gray-300"} px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-black focus:outline-none focus:ring-1 focus:ring-black`}
                        placeholder="Your company"
                      />
                      {errors.company && <p className="mt-1 text-sm text-red-500">{errors.company}</p>}
                    </div>
                    <div>
                      <label htmlFor="employees" className="block text-sm font-medium text-gray-700 mb-1">
                        Number of Employees
                      </label>
                      <select
                        id="employees"
                        name="employees"
                        value={formData.employees}
                        onChange={handleChange}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
                      >
                        <option value="">Select</option>
                        <option value="1-10">1-10</option>
                        <option value="11-50">11-50</option>
                        <option value="51-200">51-200</option>
                        <option value="201-500">201-500</option>
                        <option value="500+">500+</option>
                      </select>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold mb-4">Services You're Interested In</h3>
                    <p className="text-gray-500 mb-4">Select all that apply:</p>

                    {errors.interests && <p className="mb-2 text-sm text-red-500">{errors.interests}</p>}

                    <div className="space-y-2">
                      <div className="flex items-start">
                        <input
                          id="hosting"
                          name="interests"
                          type="checkbox"
                          value="Cloud Hosting"
                          checked={formData.interests.includes("Cloud Hosting")}
                          onChange={handleChange}
                          className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black mt-1"
                        />
                        <label htmlFor="hosting" className="ml-2 block">
                          <span className="font-medium text-gray-900">Cloud Hosting</span>
                          <span className="block text-sm text-gray-500">
                            Web hosting, application hosting, and managed services
                          </span>
                        </label>
                      </div>
                      <div className="flex items-start">
                        <input
                          id="storage"
                          name="interests"
                          type="checkbox"
                          value="Storage & Backup"
                          checked={formData.interests.includes("Storage & Backup")}
                          onChange={handleChange}
                          className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black mt-1"
                        />
                        <label htmlFor="storage" className="ml-2 block">
                          <span className="font-medium text-gray-900">Storage & Backup</span>
                          <span className="block text-sm text-gray-500">Secure data storage and backup solutions</span>
                        </label>
                      </div>
                      <div className="flex items-start">
                        <input
                          id="email-services"
                          name="interests"
                          type="checkbox"
                          value="Email Services"
                          checked={formData.interests.includes("Email Services")}
                          onChange={handleChange}
                          className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black mt-1"
                        />
                        <label htmlFor="email-services" className="ml-2 block">
                          <span className="font-medium text-gray-900">Email Services</span>
                          <span className="block text-sm text-gray-500">Professional email hosting and management</span>
                        </label>
                      </div>
                      <div className="flex items-start">
                        <input
                          id="vps"
                          name="interests"
                          type="checkbox"
                          value="VPS Hosting"
                          checked={formData.interests.includes("VPS Hosting")}
                          onChange={handleChange}
                          className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black mt-1"
                        />
                        <label htmlFor="vps" className="ml-2 block">
                          <span className="font-medium text-gray-900">VPS Hosting</span>
                          <span className="block text-sm text-gray-500">
                            Virtual private servers with dedicated resources
                          </span>
                        </label>
                      </div>
                      <div className="flex items-start">
                        <input
                          id="security"
                          name="interests"
                          type="checkbox"
                          value="Security Solutions"
                          checked={formData.interests.includes("Security Solutions")}
                          onChange={handleChange}
                          className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black mt-1"
                        />
                        <label htmlFor="security" className="ml-2 block">
                          <span className="font-medium text-gray-900">Security Solutions</span>
                          <span className="block text-sm text-gray-500">
                            Comprehensive security for your cloud infrastructure
                          </span>
                        </label>
                      </div>
                      <div className="flex items-start">
                        <input
                          id="monitoring"
                          name="interests"
                          type="checkbox"
                          value="Monitoring"
                          checked={formData.interests.includes("Monitoring")}
                          onChange={handleChange}
                          className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black mt-1"
                        />
                        <label htmlFor="monitoring" className="ml-2 block">
                          <span className="font-medium text-gray-900">Monitoring</span>
                          <span className="block text-sm text-gray-500">
                            24/7 monitoring and management of your cloud infrastructure
                          </span>
                        </label>
                      </div>
                    </div>

                    <div className="mt-4">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Additional Information
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
                        placeholder="Tell us more about your specific needs or questions"
                      />
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold mb-4">Schedule Your Consultation</h3>
                    <p className="text-gray-500 mb-4">Choose a date and time that works for you:</p>

                    <div>
                      <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                        Preferred Date *
                      </label>
                      <input
                        id="date"
                        name="date"
                        type="date"
                        value={formData.date}
                        onChange={handleChange}
                        min={new Date().toISOString().split("T")[0]}
                        className={`w-full rounded-md border ${errors.date ? "border-red-500" : "border-gray-300"} px-3 py-2 text-gray-900 focus:border-black focus:outline-none focus:ring-1 focus:ring-black`}
                      />
                      {errors.date && <p className="mt-1 text-sm text-red-500">{errors.date}</p>}
                    </div>

                    <div>
                      <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                        Preferred Time *
                      </label>
                      <select
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className={`w-full rounded-md border ${errors.time ? "border-red-500" : "border-gray-300"} px-3 py-2 text-gray-900 focus:border-black focus:outline-none focus:ring-1 focus:ring-black`}
                      >
                        <option value="">Select a time</option>
                        <option value="9:00 AM">9:00 AM</option>
                        <option value="10:00 AM">10:00 AM</option>
                        <option value="11:00 AM">11:00 AM</option>
                        <option value="1:00 PM">1:00 PM</option>
                        <option value="2:00 PM">2:00 PM</option>
                        <option value="3:00 PM">3:00 PM</option>
                        <option value="4:00 PM">4:00 PM</option>
                      </select>
                      {errors.time && <p className="mt-1 text-sm text-red-500">{errors.time}</p>}
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg mt-4">
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 text-black mr-2" />
                        <span className="text-sm font-medium">Consultation Duration: 30 minutes</span>
                      </div>
                      <p className="text-sm text-gray-500 mt-2">
                        Our consultation sessions typically last 30 minutes. If you need more time, we can arrange for
                        an extended session.
                      </p>
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold mb-4">Confirm Your Details</h3>
                    <p className="text-gray-500 mb-4">Please review your information before submitting:</p>

                    <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                      <div>
                        <span className="font-medium">Name:</span> {formData.name}
                      </div>
                      <div>
                        <span className="font-medium">Email:</span> {formData.email}
                      </div>
                      <div>
                        <span className="font-medium">Phone:</span> {formData.phone || "Not provided"}
                      </div>
                      <div>
                        <span className="font-medium">Company:</span> {formData.company}
                      </div>
                      <div>
                        <span className="font-medium">Company Size:</span> {formData.employees || "Not specified"}
                      </div>
                      <div>
                        <span className="font-medium">Interested Services:</span> {formData.interests.join(", ")}
                      </div>
                      <div>
                        <span className="font-medium">Consultation Date:</span> {formData.date}
                      </div>
                      <div>
                        <span className="font-medium">Consultation Time:</span> {formData.time}
                      </div>
                      {formData.message && (
                        <div>
                          <span className="font-medium">Additional Information:</span>
                          <p className="text-gray-500 mt-1">{formData.message}</p>
                        </div>
                      )}
                    </div>

                    <p className="text-sm text-gray-500 mt-4">
                      By submitting this form, you agree to our terms and conditions. We'll send a confirmation email
                      with the details of your consultation.
                    </p>
                  </div>
                )}

                <div className="flex justify-between mt-8">
                  {step > 1 && (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                    >
                      Back
                    </button>
                  )}

                  {step < 4 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="inline-flex items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white shadow hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 ml-auto"
                    >
                      Next Step <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white shadow hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 ml-auto"
                    >
                      {isSubmitting ? "Submitting..." : "Book Consultation"}
                    </button>
                  )}
                </div>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Transform Your Cloud Experience?
            </h2>
            <p className="max-w-[700px] text-gray-300 md:text-xl">
              Book your free consultation today and take the first step towards optimized cloud services.
            </p>
            <div className="space-x-4">
              <a
                href="#top"
                className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-black shadow transition-colors hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
              >
                Book a Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
