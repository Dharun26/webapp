import Head from "next/head";
import Link from "next/link"
import { ArrowRight, CheckCircle, Server, Shield, Database, Mail, Monitor } from "lucide-react"
 // import Head first

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
        <Head>
        <title>GetXCloud</title> {/* Page Title */}
        <link rel="icon" href="/placeholder-logo.ico" /> {/* Favicon Link */}
      </Head>
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Your Trusted Partner in Cloud Services
            </h1>
            <p className="max-w-[700px] text-gray-300 md:text-xl">
              Cloud Hosting, Backup, Email, Storage, and Management — With full transparency and client education.
            </p>
            <div className="space-x-4">
              <Link
                href="/consulting"
                className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-black shadow transition-colors hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
              >
                Book a Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose GetXCloud */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose GetXCloud?</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl">
              We provide reliable, secure, and scalable cloud solutions for businesses of all sizes.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-3">
            <div className="flex flex-col items-center space-y-2 border border-gray-200 p-6 rounded-lg">
              <CheckCircle className="h-12 w-12 text-black" />
              <h3 className="text-xl font-bold">Trusted</h3>
              <p className="text-gray-500 text-center">
                Reliable service with 99.9% uptime guarantee and 24/7 support.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border border-gray-200 p-6 rounded-lg">
              <CheckCircle className="h-12 w-12 text-black" />
              <h3 className="text-xl font-bold">Transparent</h3>
              <p className="text-gray-500 text-center">
                Clear pricing with no hidden fees and detailed service explanations.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border border-gray-200 p-6 rounded-lg">
              <CheckCircle className="h-12 w-12 text-black" />
              <h3 className="text-xl font-bold">Tailored Solutions</h3>
              <p className="text-gray-500 text-center">
                Customized cloud services designed to meet your specific business needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl">
              Comprehensive cloud solutions to power your business.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col p-6 bg-white shadow-sm rounded-lg border border-gray-200">
              <Server className="h-10 w-10 text-black mb-4" />
              <h3 className="text-xl font-bold mb-2">Cloud Hosting</h3>
              <p className="text-gray-500 flex-grow">
                Reliable and scalable hosting solutions for your applications and websites.
              </p>
              <Link href="/services#hosting" className="inline-flex items-center text-black mt-4 text-sm font-medium">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="flex flex-col p-6 bg-white shadow-sm rounded-lg border border-gray-200">
              <Database className="h-10 w-10 text-black mb-4" />
              <h3 className="text-xl font-bold mb-2">Backup & Storage</h3>
              <p className="text-gray-500 flex-grow">
                Secure data backup and storage solutions to protect your valuable information.
              </p>
              <Link href="/services#backup" className="inline-flex items-center text-black mt-4 text-sm font-medium">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="flex flex-col p-6 bg-white shadow-sm rounded-lg border border-gray-200">
              <Mail className="h-10 w-10 text-black mb-4" />
              <h3 className="text-xl font-bold mb-2">Email Services</h3>
              <p className="text-gray-500 flex-grow">
                Professional email hosting with advanced security and spam protection.
              </p>
              <Link href="/services#email" className="inline-flex items-center text-black mt-4 text-sm font-medium">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="flex flex-col p-6 bg-white shadow-sm rounded-lg border border-gray-200">
              <Server className="h-10 w-10 text-black mb-4" />
              <h3 className="text-xl font-bold mb-2">VPS Hosting</h3>
              <p className="text-gray-500 flex-grow">
                Virtual private servers with dedicated resources for enhanced performance.
              </p>
              <Link href="/services#vps" className="inline-flex items-center text-black mt-4 text-sm font-medium">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="flex flex-col p-6 bg-white shadow-sm rounded-lg border border-gray-200">
              <Shield className="h-10 w-10 text-black mb-4" />
              <h3 className="text-xl font-bold mb-2">Security Solutions</h3>
              <p className="text-gray-500 flex-grow">
                Comprehensive security measures to protect your cloud infrastructure.
              </p>
              <Link href="/services#security" className="inline-flex items-center text-black mt-4 text-sm font-medium">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="flex flex-col p-6 bg-white shadow-sm rounded-lg border border-gray-200">
              <Monitor className="h-10 w-10 text-black mb-4" />
              <h3 className="text-xl font-bold mb-2">Monitoring</h3>
              <p className="text-gray-500 flex-grow">24/7 monitoring and management of your cloud infrastructure.</p>
              <Link
                href="/services#monitoring"
                className="inline-flex items-center text-black mt-4 text-sm font-medium"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Book a Free Consulting Session
              </h2>
              <p className="text-gray-500 md:text-xl">
                Our experts will help you understand the cloud solutions that best fit your business needs. We explain
                everything in simple terms, ensuring you're fully informed about the services we set up for you.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-black" />
                  <span>Personalized cloud strategy</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-black" />
                  <span>Cost optimization recommendations</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-black" />
                  <span>Security assessment</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-black" />
                  <span>Clear explanation of technical concepts</span>
                </div>
              </div>
              <div>
                <Link
                  href="/consulting"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-black px-8 text-sm font-medium text-white shadow transition-colors hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                >
                  Book Your Free Session
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative h-[400px] w-full overflow-hidden rounded-lg bg-gray-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-6">
                    <h3 className="text-2xl font-bold mb-4">We Explain Cloud Services Simply</h3>
                    <p className="text-gray-500 mb-6">
                      No technical jargon. Just clear explanations of what we're setting up for you and how it benefits
                      your business.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-left">
                      <div className="bg-white p-4 rounded shadow-sm">
                        <h4 className="font-bold mb-2">IAM Basics</h4>
                        <p className="text-sm text-gray-500">User access management made simple</p>
                      </div>
                      <div className="bg-white p-4 rounded shadow-sm">
                        <h4 className="font-bold mb-2">Storage Solutions</h4>
                        <p className="text-sm text-gray-500">Understanding your data storage options</p>
                      </div>
                      <div className="bg-white p-4 rounded shadow-sm">
                        <h4 className="font-bold mb-2">Server Management</h4>
                        <p className="text-sm text-gray-500">How your applications are hosted</p>
                      </div>
                      <div className="bg-white p-4 rounded shadow-sm">
                        <h4 className="font-bold mb-2">Security Essentials</h4>
                        <p className="text-sm text-gray-500">Protecting your cloud infrastructure</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Get Started?</h2>
            <p className="max-w-[700px] text-gray-300 md:text-xl">
              Contact us today to discuss your cloud service needs and book your free consultation.
            </p>
            <div className="space-x-4">
              <Link
                href="/consulting"
                className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-black shadow transition-colors hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
              >
                Book a Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
