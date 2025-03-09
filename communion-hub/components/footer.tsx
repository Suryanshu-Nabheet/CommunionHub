import Link from "next/link"
import { Facebook, Instagram, Twitter, Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-indigo-500/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="font-bold text-xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              CommunionHub
            </h3>
            <p className="text-slate-300 mb-4 max-w-md">
              Bringing communities together through meaningful events and support. Connect with others who share your
              interests and values in a digital age where connections matter more than ever.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-slate-300 hover:text-indigo-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-slate-300 hover:text-indigo-300 transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-300 hover:text-indigo-300 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-indigo-300 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Contact Us</h4>
            <address className="not-italic text-slate-300 space-y-2">
              <p>123 Community Street</p>
              <p>Anytown, ST 12345</p>
              <p className="text-indigo-400 hover:text-indigo-300 transition-colors">
                <a href="mailto:info@communionhub.org">info@communionhub.org</a>
              </p>
              <p>(123) 456-7890</p>
            </address>
          </div>
        </div>

        <div className="border-t border-indigo-500/20 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-400">&copy; {new Date().getFullYear()} CommunionHub. All rights reserved.</p>
          <div className="flex items-center mt-4 md:mt-0 text-sm text-slate-400">
            <span>Made with</span>
            <Heart className="h-4 w-4 mx-1 text-red-500" />
            <span>
              by{" "}
              <a
                href="https://github.com/Suryanshu-Nabheet"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                Suryanshu Nabheet
              </a>
            </span>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm text-slate-400 hover:text-indigo-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-slate-400 hover:text-indigo-300 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

