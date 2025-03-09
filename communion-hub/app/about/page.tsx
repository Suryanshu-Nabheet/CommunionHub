"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Github, Linkedin, Mail, Sparkles, Users, Heart, Lightbulb } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Header */}
        <section className="relative py-20">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-900/40 to-slate-950"></div>
          </div>
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>

          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-indigo-950/50 border border-indigo-500/30 text-indigo-300 text-sm"
              >
                <Users className="h-4 w-4" />
                <span>Our Mission</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-cyan-300 to-indigo-400"
              >
                About CommunionHub
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-slate-300 mb-6"
              >
                Bringing people together across faiths and interests through meaningful connections
              </motion.p>
            </div>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-slate-900/70 backdrop-blur-sm p-8 rounded-2xl border border-indigo-500/30 relative overflow-hidden">
              <div className="absolute inset-0 -z-10 bg-[conic-gradient(from_0deg_at_50%_50%,rgba(79,70,229,0.1)_0deg,transparent_60deg,transparent_300deg,rgba(79,70,229,0.1)_360deg)]"></div>

              <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">
                Who We Are
              </h2>

              <div className="space-y-4 text-slate-300">
                <p>
                  Welcome to CommunionHub, a platform dedicated to bringing people together across faiths and interests
                  through meaningful events and community support. Whether you're looking for religious gatherings,
                  social events, or charity initiatives, we help you connect with like-minded individuals in a safe and
                  engaging space.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
                  {values.map((value, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-slate-800/50 p-6 rounded-xl border border-indigo-500/20 flex flex-col items-center text-center"
                    >
                      <div className="w-12 h-12 rounded-full bg-indigo-900/50 border border-indigo-500/30 flex items-center justify-center mb-4">
                        <value.icon className="h-6 w-6 text-indigo-400" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2 text-white">{value.title}</h3>
                      <p className="text-sm text-slate-300">{value.description}</p>
                    </motion.div>
                  ))}
                </div>

                <p>
                  Our platform is designed to foster genuine connections and build bridges between different
                  communities. We believe that by coming together, sharing experiences, and supporting one another, we
                  can create a more understanding and compassionate world.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Developer Section */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/10 via-transparent to-transparent"></div>

          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-300 text-sm"
                >
                  <Sparkles className="h-4 w-4" />
                  <span>Meet the Creator</span>
                </motion.div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-400">
                  About the Developer
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex justify-center"
                >
                  <div className="relative w-48 h-48 rounded-full overflow-hidden border-2 border-indigo-500/50 p-1 bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 shadow-[0_0_30px_rgba(79,70,229,0.3)]">
                    <Image
                      src="/placeholder.svg?height=200&width=200&text=SN"
                      alt="Suryanshu Nabheet"
                      width={200}
                      height={200}
                      className="rounded-full object-cover"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="space-y-4 text-slate-300"
                >
                  <h3 className="text-xl font-bold text-white">👨‍💻 Meet the Developer: Suryanshu Nabheet</h3>
                  <p>
                    Hey there! I'm Suryanshu Nabheet, a passionate frontend developer & technology enthusiast with
                    experience in building modern, user-friendly web applications.
                  </p>
                  <h4 className="text-lg font-semibold text-white">📜 My Journey in Tech</h4>
                  <p>
                    I started coding at a young age and quickly developed a strong passion for web and software
                    development. My goal is to become an expert in all areas of development, including web, mobile, AI,
                    and game development.
                  </p>
                  <p>
                    I love creating intuitive and scalable web applications that enhance user experiences. This project
                    is an example of my commitment to clean code, smooth UI/UX, and functional designs.
                  </p>

                  <h4 className="text-lg font-semibold text-white">📩 Connect with Me</h4>
                  <div className="flex flex-wrap gap-3">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="rounded-full border-indigo-500/30 text-indigo-300 hover:bg-indigo-900/50 hover:text-white transition-all duration-300"
                    >
                      <Link href="https://github.com/Suryanshu-Nabheet" target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="rounded-full border-indigo-500/30 text-indigo-300 hover:bg-indigo-900/50 hover:text-white transition-all duration-300"
                    >
                      <Link
                        href="https://www.linkedin.com/in/suryanshu-nabheet/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="h-4 w-4 mr-2" />
                        LinkedIn
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="rounded-full border-indigo-500/30 text-indigo-300 hover:bg-indigo-900/50 hover:text-white transition-all duration-300"
                    >
                      <Link href="mailto:suryanshunab@gmail.com">
                        <Mail className="h-4 w-4 mr-2" />
                        Email
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-cyan-300 to-indigo-400">
                Join Our Community Today
              </h2>
              <p className="text-slate-300 mb-8">
                Be part of a growing community dedicated to meaningful connections and positive change.
              </p>
              <Button
                asChild
                size="lg"
                className="rounded-full px-8 bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 border border-indigo-500/50 shadow-[0_0_15px_rgba(79,70,229,0.5)] hover:shadow-[0_0_25px_rgba(79,70,229,0.7)] transition-all duration-300"
              >
                <Link href="/events">Explore Events</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

const values = [
  {
    icon: Users,
    title: "Community",
    description: "We believe in the power of community to create positive change and foster understanding.",
  },
  {
    icon: Heart,
    title: "Inclusivity",
    description: "We welcome people of all faiths, backgrounds, and interests in a spirit of respect and openness.",
  },
  {
    icon: Lightbulb,
    title: "Growth",
    description: "We encourage personal and collective growth through meaningful interactions and shared experiences.",
  },
]

