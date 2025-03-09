"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { format } from "date-fns"
import { Calendar, MapPin, Filter, Plus, Search, Sparkles } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Define the Event type
type Event = {
  id: string
  title: string
  date: string
  location: string
  description: string
  category: "Religious" | "Social" | "Charity"
  image?: string
}

// Sample initial events
const initialEvents: Event[] = [
  {
    id: "1",
    title: "Interfaith Prayer Gathering",
    date: "2025-04-15",
    location: "Community Center, Downtown",
    description:
      "Join us for a peaceful gathering of prayer and reflection with leaders from various faith traditions.",
    category: "Religious",
    image: "/placeholder.svg?height=400&width=600&text=Interfaith+Prayer",
  },
  {
    id: "2",
    title: "Community Picnic",
    date: "2025-04-22",
    location: "Riverside Park",
    description: "Bring your family and friends for a day of food, games, and connection with neighbors.",
    category: "Social",
    image: "/placeholder.svg?height=400&width=600&text=Community+Picnic",
  },
  {
    id: "3",
    title: "Food Drive for Local Shelter",
    date: "2025-05-01",
    location: "Main Street Church",
    description: "Help us collect non-perishable food items for those in need in our community.",
    category: "Charity",
    image: "/placeholder.svg?height=400&width=600&text=Food+Drive",
  },
  {
    id: "4",
    title: "Meditation Workshop",
    date: "2025-05-10",
    location: "Wellness Center",
    description: "Learn meditation techniques from different spiritual traditions to enhance your daily practice.",
    category: "Religious",
    image: "/placeholder.svg?height=400&width=600&text=Meditation+Workshop",
  },
  {
    id: "5",
    title: "Community Cleanup Day",
    date: "2025-05-15",
    location: "City Park",
    description: "Join us in beautifying our shared spaces and protecting our environment.",
    category: "Charity",
    image: "/placeholder.svg?height=400&width=600&text=Community+Cleanup",
  },
]

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>(initialEvents)
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [newEvent, setNewEvent] = useState<Omit<Event, "id">>({
    title: "",
    date: "",
    location: "",
    description: "",
    category: "Social",
  })
  const [isFormVisible, setIsFormVisible] = useState(false)

  // Filter events based on selected category and search query
  const filteredEvents = events.filter((event) => {
    const matchesCategory = selectedCategory === "all" || event.category === selectedCategory
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setNewEvent((prev) => ({ ...prev, [name]: value }))
  }

  // Handle select changes
  const handleSelectChange = (value: string) => {
    setNewEvent((prev) => ({
      ...prev,
      category: value as "Religious" | "Social" | "Charity",
    }))
  }

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Create new event with unique ID
    const eventToAdd: Event = {
      ...newEvent,
      id: Date.now().toString(),
      image: `/placeholder.svg?height=400&width=600&text=${newEvent.title.replace(/\s+/g, "+")}`,
    }

    // Add new event to the list
    setEvents((prev) => [eventToAdd, ...prev])

    // Reset form
    setNewEvent({
      title: "",
      date: "",
      location: "",
      description: "",
      category: "Social",
    })

    // Hide form after submission
    setIsFormVisible(false)
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <Navbar />
      <main className="flex-grow pt-16">
        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <div className="relative mb-12">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
            <div className="max-w-3xl mx-auto text-center pt-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-indigo-950/50 border border-indigo-500/30 text-indigo-300 text-sm"
              >
                <Calendar className="h-4 w-4" />
                <span>Discover & Connect</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-cyan-300 to-indigo-400"
              >
                Upcoming Events
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-slate-300"
              >
                Discover and join events that bring our community together
              </motion.p>
            </div>
          </div>

          {/* Search and Filter Controls */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div className="relative w-full md:w-auto md:flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                type="text"
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-slate-900/50 border-indigo-500/30 text-white rounded-full focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400"
              />
            </div>
            <Button
              onClick={() => setIsFormVisible(!isFormVisible)}
              className="w-full md:w-auto rounded-full bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 border border-indigo-500/50 shadow-[0_0_10px_rgba(79,70,229,0.3)] hover:shadow-[0_0_15px_rgba(79,70,229,0.5)] transition-all duration-300"
            >
              <Plus className="h-4 w-4 mr-2" />
              {isFormVisible ? "Cancel" : "Add New Event"}
            </Button>
          </div>

          {/* Add Event Form */}
          <AnimatePresence>
            {isFormVisible && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden mb-8"
              >
                <Card className="border border-indigo-500/30 bg-slate-900/70 backdrop-blur-sm text-white shadow-[0_0_30px_rgba(79,70,229,0.15)]">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="h-5 w-5 text-indigo-400" />
                      <CardTitle>Add New Event</CardTitle>
                    </div>
                    <CardDescription className="text-slate-400">
                      Fill out the form to create a new community event
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="title" className="text-slate-300">
                            Event Title
                          </Label>
                          <Input
                            id="title"
                            name="title"
                            value={newEvent.title}
                            onChange={handleInputChange}
                            required
                            className="bg-slate-800/50 border-indigo-500/30 text-white focus:border-indigo-400"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="date" className="text-slate-300">
                            Date
                          </Label>
                          <Input
                            id="date"
                            name="date"
                            type="date"
                            value={newEvent.date}
                            onChange={handleInputChange}
                            required
                            className="bg-slate-800/50 border-indigo-500/30 text-white focus:border-indigo-400"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="location" className="text-slate-300">
                            Location
                          </Label>
                          <Input
                            id="location"
                            name="location"
                            value={newEvent.location}
                            onChange={handleInputChange}
                            required
                            className="bg-slate-800/50 border-indigo-500/30 text-white focus:border-indigo-400"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="category" className="text-slate-300">
                            Category
                          </Label>
                          <Select value={newEvent.category} onValueChange={handleSelectChange}>
                            <SelectTrigger className="bg-slate-800/50 border-indigo-500/30 text-white focus:ring-indigo-400">
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent className="bg-slate-800 border-indigo-500/30 text-white">
                              <SelectItem value="Religious">Religious</SelectItem>
                              <SelectItem value="Social">Social</SelectItem>
                              <SelectItem value="Charity">Charity</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="description" className="text-slate-300">
                          Description
                        </Label>
                        <Textarea
                          id="description"
                          name="description"
                          value={newEvent.description}
                          onChange={handleInputChange}
                          rows={3}
                          required
                          className="bg-slate-800/50 border-indigo-500/30 text-white focus:border-indigo-400 min-h-[100px]"
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full md:w-auto rounded-full bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 border border-indigo-500/50 shadow-[0_0_10px_rgba(79,70,229,0.3)] hover:shadow-[0_0_15px_rgba(79,70,229,0.5)] transition-all duration-300"
                      >
                        Create Event
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Event Filters */}
          <div className="mb-8">
            <Tabs defaultValue="all" value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
              <div className="flex items-center mb-4">
                <Filter className="mr-2 h-4 w-4 text-indigo-400" />
                <span className="text-sm font-medium text-slate-300">Filter by:</span>
              </div>
              <TabsList className="grid grid-cols-4 w-full md:w-auto bg-slate-800/50 p-1 rounded-full border border-indigo-500/30">
                <TabsTrigger
                  value="all"
                  className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-600 data-[state=active]:to-cyan-600 data-[state=active]:text-white"
                >
                  All
                </TabsTrigger>
                <TabsTrigger
                  value="Religious"
                  className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-600 data-[state=active]:to-cyan-600 data-[state=active]:text-white"
                >
                  Religious
                </TabsTrigger>
                <TabsTrigger
                  value="Social"
                  className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-600 data-[state=active]:to-cyan-600 data-[state=active]:text-white"
                >
                  Social
                </TabsTrigger>
                <TabsTrigger
                  value="Charity"
                  className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-600 data-[state=active]:to-cyan-600 data-[state=active]:text-white"
                >
                  Charity
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* Events List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredEvents.map((event) => (
                <motion.div
                  key={event.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group"
                >
                  <Card className="h-full flex flex-col overflow-hidden border border-indigo-500/30 bg-slate-900/70 backdrop-blur-sm text-white shadow-[0_4px_20px_-12px_rgba(79,70,229,0.3)] group-hover:shadow-[0_8px_30px_-8px_rgba(79,70,229,0.5)] transition-all duration-300">
                    <div className="relative overflow-hidden h-48">
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10"></div>
                      <img
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4 z-20">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                            event.category === "Religious"
                              ? "bg-blue-900/70 text-blue-200 border border-blue-500/30"
                              : event.category === "Social"
                                ? "bg-green-900/70 text-green-200 border border-green-500/30"
                                : "bg-amber-900/70 text-amber-200 border border-amber-500/30"
                          } backdrop-blur-sm`}
                        >
                          {event.category}
                        </span>
                      </div>
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl group-hover:text-indigo-300 transition-colors duration-300">
                        {event.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pb-2 flex-grow">
                      <p className="text-slate-300 text-sm mb-4">{event.description}</p>
                      <div className="flex items-center text-sm text-indigo-300 mb-2">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{format(new Date(event.date), "MMMM d, yyyy")}</span>
                      </div>
                      <div className="flex items-center text-sm text-indigo-300">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{event.location}</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full border-indigo-500/30 text-indigo-300 hover:bg-indigo-900/50 hover:text-white transition-all duration-300"
                      >
                        Learn More
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-12 bg-slate-900/50 rounded-xl border border-indigo-500/20 backdrop-blur-sm">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                <Calendar className="h-12 w-12 mx-auto mb-4 text-indigo-400 opacity-50" />
                <p className="text-slate-300 mb-4">No events found in this category.</p>
                <Button
                  onClick={() => setIsFormVisible(true)}
                  className="rounded-full bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 border border-indigo-500/50"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Create an Event
                </Button>
              </motion.div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}

