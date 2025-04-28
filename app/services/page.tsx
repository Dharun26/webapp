import Link from "next/link"
import { ArrowRight, CheckCircle, Server, Shield, Database, Mail, Monitor } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">Our Services</h1>
            <p className="max-w-[700px] text-gray-300 md:text-xl">
              Comprehensive cloud solutions tailored to your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Cloud Hosting */}
      <section id="hosting" className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block p-2 bg-black rounded-full">
                <Server className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Cloud Hosting</h2>
              <p className="text-gray-500 md:text-lg">
                Reliable and scalable hosting solutions for your applications and websites. Our cloud hosting services
                provide high performance, security, and uptime for businesses of all sizes.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-black" />
                  <span>99.9% uptime guarantee</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-black" />
                  <span>Scalable resources</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-black" />
                  <span>Managed services available</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-black" />
                  <span>24/7 technical support</span>
                </div>
              </div>
              <div>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-black px-6 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                >
                  Book a Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative h-[400px] w-full overflow-hidden rounded-lg bg-gray-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-6">
                    <h3 className="text-2xl font-bold mb-4">Cloud Hosting Solutions</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                      <div className="bg-black text-white p-6 rounded-lg">
                        <h4 className="font-bold mb-2">Web Hosting</h4>
                        <p className="text-sm">For websites and web applications</p>
                      </div>
                      <div className="bg-black text-white p-6 rounded-lg">
                        <h4 className="font-bold mb-2">Application Hosting</h4>
                        <p className="text-sm">For business applications</p>
                      </div>
                      <div className="bg-black text-white p-6 rounded-lg">
                        <h4 className="font-bold mb-2">E-commerce Hosting</h4>
                        <p className="text-sm">Optimized for online stores</p>
                      </div>
                      <div className="bg-black text-white p-6 rounded-lg">
                        <h4 className="font-bold mb-2">WordPress Hosting</h4>
                        <p className="text-sm">Specialized for WordPress sites</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Backup & Storage */}
      <section id="backup" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex justify-center order-last lg:order-first">
              <div className="relative h-[400px] w-full overflow-hidden rounded-lg bg-gray-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-6">
                    <h3 className="text-2xl font-bold mb-4">Secure Storage Solutions</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                      <div className="bg-black text-white p-6 rounded-lg">
                        <h4 className="font-bold mb-2">Cloud Backup</h4>
                        <p className="text-sm">Automated data backup</p>
                      </div>
                      <div className="bg-black text-white p-6 rounded-lg">
                        <h4 className="font-bold mb-2">Object Storage</h4>
                        <p className="text-sm">Scalable file storage</p>
                      </div>
                      <div className="bg-black text-white p-6 rounded-lg">
                        <h4 className="font-bold mb-2">Disaster Recovery</h4>
                        <p className="text-sm">Business continuity solutions</p>
                      </div>
                      <div className="bg-black text-white p-6 rounded-lg">
                        <h4 className="font-bold mb-2">Archival Storage</h4>
                        <p className="text-sm">Long-term data retention</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="inline-block p-2 bg-black rounded-full">
                <Database className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Backup & Storage</h2>
              <p className="text-gray-500 md:text-lg">
                Secure data backup and storage solutions to protect your valuable information. Our backup services
                ensure your data is safe, accessible, and recoverable in case of any disaster.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-black" />
                  <span>Automated backup schedules</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-black" />
                  <span>End-to-end encryption</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-black" />
                  <span>Rapid recovery options</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-black" />
                  <span>Scalable storage solutions</span>
                </div>
              </div>
              <div>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-black px-6 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                >
                  Book a Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Email Services */}
      <section id="email" className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block p-2 bg-black rounded-full">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Email Services</h2>
              <p className="text-gray-500 md:text-lg">
                Professional email hosting with advanced security and spam protection. Our email services provide
                reliable, secure, and professional communication solutions for your business.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-black" />
                  <span>Custom domain emails</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-black" />
                  <span>Advanced spam filtering</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-black" />
                  <span>Email encryption</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-black" />
                  <span>Mobile access</span>
                </div>
              </div>
              <div>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-black px-6 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                >
                  Book a Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative h-[400px] w-full overflow-hidden rounded-lg bg-gray-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-6">
                    <h3 className="text-2xl font-bold mb-4">Email Solutions</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                      <div className="bg-black text-white p-6 rounded-lg">
                        <h4 className="font-bold mb-2">Business Email</h4>
                        <p className="text-sm">Professional email hosting</p>
                      </div>
                      <div className="bg-black text-white p-6 rounded-lg">
                        <h4 className="font-bold mb-2">Email Security</h4>
                        <p className="text-sm">Advanced protection</p>
                      </div>
                      <div className="bg-black text-white p-6 rounded-lg">
                        <h4 className="font-bold mb-2">Email Archiving</h4>
                        <p className="text-sm">Compliance solutions</p>
                      </div>
                      <div className="bg-black text-white p-6 rounded-lg">
                        <h4 className="font-bold mb-2">Email Migration</h4>
                        <p className="text-sm">Seamless transition</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Additional Services</h2>
            <p className="max-w-[700px] text-gray-500 md:text-lg">
              Explore our other cloud solutions to enhance your business infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* VPS Hosting */}
            <div id="vps" className="flex flex-col p-6 bg-white rounded-lg shadow-sm">
              <div className="inline-block p-2 bg-black rounded-full w-fit mb-4">
                <Server className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">VPS Hosting</h3>
              <p className="text-gray-500 flex-grow mb-4">
                Virtual private servers with dedicated resources for enhanced performance and control.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-black" />
                  <span>Dedicated resources</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-black" />
                  <span>Root access</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-black" />
                  <span>Scalable performance</span>
                </div>
              </div>
              <Link href="/contact" className="inline-flex items-center text-black text-sm font-medium mt-auto">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Security Solutions */}
            <div id="security" className="flex flex-col p-6 bg-white rounded-lg shadow-sm">
              <div className="inline-block p-2 bg-black rounded-full w-fit mb-4">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Security Solutions</h3>
              <p className="text-gray-500 flex-grow mb-4">
                Comprehensive security measures to protect your cloud infrastructure from threats.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-black" />
                  <span>Firewall protection</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-black" />
                  <span>DDoS mitigation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-black" />
                  <span>Vulnerability scanning</span>
                </div>
              </div>
              <Link href="/contact" className="inline-flex items-center text-black text-sm font-medium mt-auto">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Monitoring */}
            <div id="monitoring" className="flex flex-col p-6 bg-white rounded-lg shadow-sm">
              <div className="inline-block p-2 bg-black rounded-full w-fit mb-4">
                <Monitor className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Monitoring</h3>
              <p className="text-gray-500 flex-grow mb-4">
                24/7 monitoring and management of your cloud infrastructure for optimal performance.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-black" />
                  <span>Real-time alerts</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-black" />
                  <span>Performance tracking</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-black" />
                  <span>Proactive maintenance</span>
                </div>
              </div>
              <Link href="/contact" className="inline-flex items-center text-black text-sm font-medium mt-auto">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
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
                href="/contact"
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
