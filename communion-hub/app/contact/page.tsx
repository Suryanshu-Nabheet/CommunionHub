"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Github, Linkedin, Mail, MapPin, Phone, Send, Sparkles } from "lucide-react"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

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
                <Mail className="h-4 w-4" />
                <span>Get in Touch</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-cyan-300 to-indigo-400"
              >
                Contact Us
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-slate-300 mb-6"
              >
                Have questions or want to get involved? We'd love to hear from you.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-slate-900/70 backdrop-blur-sm p-8 rounded-2xl border border-indigo-500/30 relative overflow-hidden h-full">
                  <div className="absolute inset-0 -z-10 bg-[conic-gradient(from_0deg_at_50%_50%,rgba(79,70,229,0.1)_0deg,transparent_60deg,transparent_300deg,rgba(79,70,229,0.1)_360deg)]"></div>

                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Send className="h-5 w-5 text-indigo-400" />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">
                      Send Us a Message
                    </span>
                  </h2>

                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-indigo-900/30 border border-indigo-500/30 rounded-xl p-6 text-center"
                    >
                      <Sparkles className="h-12 w-12 mx-auto mb-4 text-indigo-400" />
                      <h3 className="text-xl font-bold mb-2 text-white">Message Sent!</h3>
                      <p className="text-slate-300">Thank you for reaching out. We'll get back to you soon.</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-slate-300">
                            Your Name
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            value={formState.name}
                            onChange={handleInputChange}
                            required
                            className="bg-slate-800/50 border-indigo-500/30 text-white focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400"
                            placeholder="John Doe"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-slate-300">
                            Email Address
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formState.email}
                            onChange={handleInputChange}
                            required
                            className="bg-slate-800/50 border-indigo-500/30 text-white focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject" className="text-slate-300">
                          Subject
                        </Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formState.subject}
                          onChange={handleInputChange}
                          required
                          className="bg-slate-800/50 border-indigo-500/30 text-white focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400"
                          placeholder="How can we help?"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-slate-300">
                          Message
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formState.message}
                          onChange={handleInputChange}
                          required
                          rows={6}
                          className="bg-slate-800/50 border-indigo-500/30 text-white focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 min-h-[150px]"
                          placeholder="Your message here..."
                        />
                      </div>
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full rounded-full bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 border border-indigo-500/50 shadow-[0_0_15px_rgba(79,70,229,0.3)] hover:shadow-[0_0_25px_rgba(79,70,229,0.5)] transition-all duration-300"
                      >
                        {isSubmitting ? (
                          <>
                            <svg
                              className="animate-spin -ml-1 mr-3 h-4 w-4 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </div>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="bg-slate-900/70 backdrop-blur-sm p-8 rounded-2xl border border-indigo-500/30 relative overflow-hidden h-full">
                  <div className="absolute inset-0 -z-10 bg-[conic-gradient(from_0deg_at_50%_50%,rgba(79,70,229,0.1)_0deg,transparent_60deg,transparent_300deg,rgba(79,70,229,0.1)_360deg)]"></div>

                  <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-indigo-400" />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">
                      Contact Information
                    </span>
                  </h2>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-bold mb-6 text-white">Developer Contact</h3>
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <Mail className="h-5 w-5 text-indigo-400 mt-1 mr-3" />
                          <div>
                            <p className="font-medium text-white">Email</p>
                            <a
                              href="mailto:suryanshunab@gmail.com"
                              className="text-indigo-300 hover:text-indigo-200 transition-colors"
                            >
                              suryanshunab@gmail.com
                            </a>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <Github className="h-5 w-5 text-indigo-400 mt-1 mr-3" />
                          <div>
                            <p className="font-medium text-white">GitHub</p>
                            <a
                              href="https://github.com/Suryanshu-Nabheet"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-indigo-300 hover:text-indigo-200 transition-colors"
                            >
                              github.com/Suryanshu-Nabheet
                            </a>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <Linkedin className="h-5 w-5 text-indigo-400 mt-1 mr-3" />
                          <div>
                            <p className="font-medium text-white">LinkedIn</p>
                            <a
                              href="https://www.linkedin.com/in/suryanshu-nabheet/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-indigo-300 hover:text-indigo-200 transition-colors"
                            >
                              linkedin.com/in/suryanshu-nabheet
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="h-px w-full bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent my-8"></div>

                    <div>
                      <h3 className="text-xl font-bold mb-6 text-white">CommunionHub Office</h3>
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <MapPin className="h-5 w-5 text-indigo-400 mt-1 mr-3" />
                          <div>
                            <p className="font-medium text-white">Address</p>
                            <p className="text-slate-300">
                              123 Community Street
                              <br />
                              Anytown, ST 12345
                              <br />
                              United States
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <Phone className="h-5 w-5 text-indigo-400 mt-1 mr-3" />
                          <div>
                            <p className="font-medium text-white">Phone</p>
                            <p className="text-indigo-300">(123) 456-7890</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6">
                      <h3 className="text-lg font-semibold mb-4 text-white">Connect With Us</h3>
                      <div className="flex gap-3">
                        <Button
                          variant="outline"
                          size="icon"
                          className="rounded-full w-10 h-10 border-indigo-500/30 text-indigo-300 hover:bg-indigo-900/50 hover:text-white transition-all duration-300"
                          asChild
                        >
                          <Link href="#" aria-label="Twitter">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                            </svg>
                          </Link>
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          className="rounded-full w-10 h-10 border-indigo-500/30 text-indigo-300 hover:bg-indigo-900/50 hover:text-white transition-all duration-300"
                          asChild
                        >
                          <Link href="#" aria-label="Facebook">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                          </Link>
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          className="rounded-full w-10 h-10 border-indigo-500/30 text-indigo-300 hover:bg-indigo-900/50 hover:text-white transition-all duration-300"
                          asChild
                        >
                          <Link href="#" aria-label="Instagram">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto bg-slate-900/70 backdrop-blur-sm rounded-2xl border border-indigo-500/30 overflow-hidden">
              <div className="aspect-[16/9] w-full bg-slate-800 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 mx-auto mb-4 text-indigo-400 opacity-50" />
                    <p className="text-slate-300">Interactive map would be displayed here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

