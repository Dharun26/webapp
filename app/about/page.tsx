import { CheckCircle } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="inline-block rounded-lg bg-white/10 px-3 py-1 text-sm text-white mb-4">Our Story</div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              We Are GetXCloud
            </h1>
            <p className="max-w-[700px] text-gray-300 md:text-xl">
              A startup with a mission to simplify cloud services for businesses
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm text-gray-900">Our Journey</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">A Fresh Approach to Cloud Services</h2>
              <p className="text-gray-500 md:text-lg">
                GetXCloud was founded with a simple yet powerful vision: to make cloud services accessible,
                understandable, and valuable for businesses of all sizes. As a startup, we bring fresh perspectives and
                innovative solutions to the cloud industry.
              </p>
              <p className="text-gray-500 md:text-lg">
                Our founder, DHARUN, recognized that many businesses struggle to navigate the complex world of cloud
                services. That's why we've built GetXCloud on the principle of transparency and education – ensuring our
                clients not only receive top-tier cloud solutions but also understand what they're getting.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative h-[400px] w-full overflow-hidden rounded-lg bg-gray-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-6">
                    <h3 className="text-2xl font-bold mb-4">Creative. Innovative. Reliable.</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                      {/* <div className="bg-black text-white p-6 rounded-lg">
                        <h4 className="font-bold mb-2">2025</h4>
                        <p className="text-sm">Founded by DHARUN</p>
                      </div> */}
{/*                     
                      <div className="bg-black text-white p-6 rounded-lg">
                        <h4 className="font-bold mb-2">24/7</h4>
                        <p className="text-sm">Support & monitoring</p>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Mission & Values</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-2 border border-gray-200 p-6 rounded-lg bg-white">
              <div className="p-2 bg-black rounded-full">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">Transparency</h3>
              <p className="text-gray-500 text-center">
                We believe in clear communication and no hidden fees or technical jargon.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border border-gray-200 p-6 rounded-lg bg-white">
              <div className="p-2 bg-black rounded-full">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">Education</h3>
              <p className="text-gray-500 text-center">
                We empower our clients by helping them understand the cloud services they use.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border border-gray-200 p-6 rounded-lg bg-white">
              <div className="p-2 bg-black rounded-full">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">Innovation</h3>
              <p className="text-gray-500 text-center">
                We constantly explore new technologies to provide cutting-edge solutions.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border border-gray-200 p-6 rounded-lg bg-white">
              <div className="p-2 bg-black rounded-full">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">Reliability</h3>
              <p className="text-gray-500 text-center">
                We deliver dependable services with consistent uptime and performance.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border border-gray-200 p-6 rounded-lg bg-white">
              <div className="p-2 bg-black rounded-full">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">Security</h3>
              <p className="text-gray-500 text-center">We prioritize the protection of your data and infrastructure.</p>
            </div>
            <div className="flex flex-col items-center space-y-2 border border-gray-200 p-6 rounded-lg bg-white">
              <div className="p-2 bg-black rounded-full">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">Client-Focused</h3>
              <p className="text-gray-500 text-center">
                We tailor our solutions to meet the specific needs of each client.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative h-[400px] w-full overflow-hidden rounded-lg bg-gray-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="inline-block h-24 w-24 rounded-full bg-black text-white flex items-center justify-center text-2xl font-bold mb-4">
                      D
                    </div>
                    <h3 className="text-2xl font-bold">DHARUN</h3>
                    <p className="text-gray-500 mb-4">Founder & CEO</p>
                    <div className="border-t border-gray-200 pt-4 mt-4">
                      <p className="italic text-gray-500">
                        "Our mission is to demystify cloud technology and make it accessible to businesses of all
                        sizes."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Meet Our Founder</h2>
              <p className="text-gray-500 md:text-lg">
                With a passion for technology and a vision for simplifying cloud services, DHARUN founded GetXCloud to
                bridge the gap between complex cloud technologies and businesses that need them.
              </p>
              <p className="text-gray-500 md:text-lg">
                DHARUN brings years of experience in cloud infrastructure and a deep understanding of business needs.
                His approach combines technical expertise with clear communication, ensuring that clients not only get
                the best cloud solutions but also understand how these solutions benefit their business.
              </p>
              <p className="text-gray-500 md:text-lg">
                Under his leadership, GetXCloud has grown from a startup idea to a trusted cloud services provider,
                helping businesses of all sizes harness the power of the cloud without the complexity.
              </p>
              <div>
                <Link
                  href="/contact"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-black px-8 text-sm font-medium text-white shadow transition-colors hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                >
                  Book a Free Consultation
                </Link>
              </div>
            </div>
          </div>
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
