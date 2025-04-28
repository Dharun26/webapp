import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-white">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold tracking-tight text-black">GetXCloud</span>
            </Link>
            <p className="mt-4 text-gray-500">
              Your trusted partner in cloud services. We provide reliable, secure, and scalable cloud solutions for
              businesses of all sizes.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium">Services</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/services#hosting" className="text-gray-500 hover:text-black">
                  Cloud Hosting
                </Link>
              </li>
              <li>
                <Link href="/services#backup" className="text-gray-500 hover:text-black">
                  Backup & Storage
                </Link>
              </li>
              <li>
                <Link href="/services#email" className="text-gray-500 hover:text-black">
                  Email Services
                </Link>
              </li>
              <li>
                <Link href="/services#vps" className="text-gray-500 hover:text-black">
                  VPS Hosting
                </Link>
              </li>
              <li>
                <Link href="/services#security" className="text-gray-500 hover:text-black">
                  Security Solutions
                </Link>
              </li>
              <li>
                <Link href="/services#monitoring" className="text-gray-500 hover:text-black">
                  Monitoring
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/about" className="text-gray-500 hover:text-black">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/consulting" className="text-gray-500 hover:text-black">
                  Book a Consultation
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-500 hover:text-black">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-black">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-black">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium">Contact</h3>
            <ul className="mt-4 space-y-2">
           
              <li className="text-gray-500">contact@getxcloud.com</li>
              <li className="text-gray-500">+91 97866 44887</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-center text-gray-500">© {new Date().getFullYear()} GetXCloud. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
