"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ChevronRight, Sparkles } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32 lg:py-40">
          {/* Animated background */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-900/40 to-slate-950"></div>
            <ParticleBackground />
          </div>

          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto text-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-indigo-950/50 border border-indigo-500/30 text-indigo-300 text-sm backdrop-blur-sm"
              >
                <Sparkles className="h-4 w-4" />
                <span>Reimagining Community Connections</span>
              </motion.div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-cyan-300 to-indigo-400">
                Connecting People Across Faiths & Interests
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-10">
                Bringing communities together through meaningful events and support in a digital age where connections
                matter more than ever.
              </p>
              <motion.div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full px-8 bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 border border-indigo-500/50 shadow-[0_0_15px_rgba(79,70,229,0.5)] hover:shadow-[0_0_25px_rgba(79,70,229,0.7)] transition-all duration-300"
                >
                  <Link href="/events" className="flex items-center gap-2">
                    Explore Events
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 text-white border-indigo-500/50 hover:bg-indigo-950/50 hover:text-white transition-all duration-300"
                >
                  <Link href="/about">Learn More</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Decorative elements */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
        </section>

        {/* Community Engagement Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/10 via-transparent to-transparent"></div>

          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center mb-16">
              <div className="h-px w-12 bg-indigo-500/50 mr-4"></div>
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">
                Community Stories
              </h2>
              <div className="h-px w-12 bg-indigo-500/50 ml-4"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(79, 70, 229, 0.3)" }}
                  className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-indigo-500/20 transition-all duration-300"
                >
                  <div className="mb-4 text-indigo-300">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <Sparkles key={i} className="inline-block h-4 w-4 mr-1" />
                      ))}
                  </div>
                  <p className="text-slate-300 mb-6">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-indigo-600/30 border border-indigo-500/30 mr-3 overflow-hidden">
                      <img
                        src={`/placeholder.svg?height=40&width=40&text=${testimonial.name.charAt(0)}`}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-white">{testimonial.name}</p>
                      <p className="text-sm text-indigo-300">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-16">
              <Button
                variant="outline"
                asChild
                className="rounded-full px-8 text-white border-indigo-500/50 hover:bg-indigo-900/50 hover:border-indigo-400 transition-all duration-300"
              >
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Feature Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-cyan-900/10 via-transparent to-transparent"></div>

          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-300 text-sm"
              >
                <Sparkles className="h-4 w-4" />
                <span>Why Choose CommunionHub</span>
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-400">
                Reimagining Community in the Digital Age
              </h2>
              <p className="text-slate-300">
                Our platform combines cutting-edge technology with meaningful human connection, creating spaces where
                diverse communities can thrive together.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-indigo-500/20 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-indigo-900/50 border border-indigo-500/30 flex items-center justify-center mb-4 group-hover:bg-indigo-800/50 transition-colors duration-300">
                    <feature.icon className="h-6 w-6 text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-indigo-300 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-slate-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-900 to-indigo-950"></div>
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent"></div>

          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-slate-900/70 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-indigo-500/30 relative overflow-hidden">
              <div className="absolute inset-0 -z-10 bg-[conic-gradient(from_0deg_at_50%_50%,rgba(79,70,229,0.1)_0deg,transparent_60deg,transparent_300deg,rgba(79,70,229,0.1)_360deg)]"></div>

              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-cyan-300 to-indigo-400">
                  Ready to Join Our Community?
                </h2>
                <p className="text-slate-300 max-w-2xl mx-auto">
                  Sign up for our newsletter to stay updated on upcoming events and community initiatives.
                </p>
              </div>

              <form className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-grow px-4 py-3 rounded-full bg-slate-800 border border-indigo-500/30 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50"
                    required
                  />
                  <Button
                    type="submit"
                    className="rounded-full px-6 bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 border border-indigo-500/50 shadow-[0_0_15px_rgba(79,70,229,0.3)] hover:shadow-[0_0_25px_rgba(79,70,229,0.5)] transition-all duration-300"
                  >
                    Subscribe
                  </Button>
                </div>
                <p className="text-xs text-slate-400 mt-3 text-center">
                  By subscribing, you agree to our{" "}
                  <Link href="/terms" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2">
                    Terms & Conditions
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

// Particle Background Component
function ParticleBackground() {
  return (
    <div className="absolute inset-0">
      {Array(20)
        .fill(0)
        .map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-indigo-500 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.1,
            }}
            animate={{
              opacity: [0.1, 0.5, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: Math.random() * 5,
            }}
          />
        ))}
    </div>
  )
}

const testimonials = [
  {
    quote:
      "CommunionHub has transformed how our church connects with the community. The events are meaningful and bring people together in ways we never imagined possible.",
    name: "Sarah Johnson",
    role: "Community Leader",
  },
  {
    quote:
      "I've met incredible people from different faiths and backgrounds. These connections have enriched my life in ways I never expected and broadened my perspective.",
    name: "Michael Chen",
    role: "Regular Attendee",
  },
  {
    quote:
      "The charity events organized through this platform have made a real difference in our neighborhood. So grateful for this community and its commitment to service.",
    name: "Priya Patel",
    role: "Volunteer Coordinator",
  },
]

const features = [
  {
    icon: ({ className }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
    title: "Diverse Communities",
    description:
      "Connect with people from various faiths, backgrounds, and interests in a respectful, inclusive environment.",
  },
  {
    icon: ({ className }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
      </svg>
    ),
    title: "Meaningful Events",
    description: "Discover and participate in events that foster genuine connection, learning, and community service.",
  },
  {
    icon: ({ className }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
      </svg>
    ),
    title: "Local Impact",
    description:
      "Make a difference in your local community through organized charity events and volunteer opportunities.",
  },
]

