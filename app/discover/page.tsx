"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, MapPin, Star, Users, AlertTriangle, Shield, Heart, Filter } from "lucide-react"
import Link from "next/link"

const mockNGOs = [
  {
    id: 1,
    name: "Food For All Foundation",
    cause: "Hunger & Food Security",
    location: "Mumbai, India",
    urgency: "high",
    rating: 4.8,
    volunteers: 234,
    verified: true,
    description: "Working to eliminate hunger by rescuing surplus food and distributing to those in need.",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 2,
    name: "EduLight Initiative",
    cause: "Education",
    location: "Delhi, India",
    urgency: "medium",
    rating: 4.9,
    volunteers: 567,
    verified: true,
    description: "Providing quality education to underprivileged children through innovative learning programs.",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 3,
    name: "Green Earth Warriors",
    cause: "Environment",
    location: "Bangalore, India",
    urgency: "low",
    rating: 4.7,
    volunteers: 189,
    verified: true,
    description: "Environmental conservation through tree plantation drives and awareness campaigns.",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 4,
    name: "Elder Care Connect",
    cause: "Elderly Care",
    location: "Chennai, India",
    urgency: "medium",
    rating: 4.6,
    volunteers: 112,
    verified: false,
    description: "Supporting senior citizens with healthcare, companionship, and daily assistance.",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 5,
    name: "Women Rise Together",
    cause: "Women Empowerment",
    location: "Pune, India",
    urgency: "high",
    rating: 4.9,
    volunteers: 345,
    verified: true,
    description: "Empowering women through skill development, education, and economic independence.",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 6,
    name: "Animal Rescue League",
    cause: "Animal Welfare",
    location: "Hyderabad, India",
    urgency: "critical",
    rating: 4.5,
    volunteers: 156,
    verified: true,
    description: "Rescuing and rehabilitating stray and injured animals, promoting adoption.",
    image: "/placeholder.svg?height=200&width=400",
  },
]

const causeFilters = [
  "All Causes",
  "Education",
  "Healthcare",
  "Hunger & Food Security",
  "Environment",
  "Animal Welfare",
  "Women Empowerment",
  "Elderly Care",
]

const locationFilters = [
  "All Locations",
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Chennai",
  "Pune",
  "Hyderabad",
]

const urgencyFilters = [
  { value: "all", label: "All Urgency" },
  { value: "critical", label: "Critical" },
  { value: "high", label: "High" },
  { value: "medium", label: "Medium" },
  { value: "low", label: "Low" },
]

function getUrgencyColor(urgency: string) {
  switch (urgency) {
    case "critical":
      return "bg-destructive text-destructive-foreground"
    case "high":
      return "bg-orange-500 text-white"
    case "medium":
      return "bg-accent text-accent-foreground"
    case "low":
      return "bg-primary/20 text-primary"
    default:
      return "bg-muted text-muted-foreground"
  }
}

export default function DiscoverPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [causeFilter, setCauseFilter] = useState("All Causes")
  const [locationFilter, setLocationFilter] = useState("All Locations")
  const [urgencyFilter, setUrgencyFilter] = useState("all")
  const [showFilters, setShowFilters] = useState(false)

  const filteredNGOs = mockNGOs.filter((ngo) => {
    const matchesSearch = ngo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ngo.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCause = causeFilter === "All Causes" || ngo.cause === causeFilter
    const matchesLocation = locationFilter === "All Locations" || ngo.location.includes(locationFilter)
    const matchesUrgency = urgencyFilter === "all" || ngo.urgency === urgencyFilter
    return matchesSearch && matchesCause && matchesLocation && matchesUrgency
  })

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-[73px]">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-foreground">Discover NGOs</h1>
              <p className="mt-2 text-muted-foreground">
                Find organizations making a difference and join their cause
              </p>
            </div>
            <Button asChild>
              <Link href="/matching">
                <Heart className="h-4 w-4 mr-2" />
                AI Matching
              </Link>
            </Button>
          </div>

          {/* Search and Filters */}
          <div className="mt-8 space-y-4">
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search NGOs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="sm:w-auto"
              >
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>

            {showFilters && (
              <div className="grid gap-4 sm:grid-cols-3 p-4 rounded-lg border border-border bg-card">
                <Select value={causeFilter} onValueChange={setCauseFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select cause" />
                  </SelectTrigger>
                  <SelectContent>
                    {causeFilters.map((cause) => (
                      <SelectItem key={cause} value={cause}>
                        {cause}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={locationFilter} onValueChange={setLocationFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    {locationFilters.map((location) => (
                      <SelectItem key={location} value={location}>
                        {location}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={urgencyFilter} onValueChange={setUrgencyFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select urgency" />
                  </SelectTrigger>
                  <SelectContent>
                    {urgencyFilters.map((urgency) => (
                      <SelectItem key={urgency.value} value={urgency.value}>
                        {urgency.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}
          </div>

          {/* Results */}
          <div className="mt-8">
            <p className="text-sm text-muted-foreground mb-4">
              Showing {filteredNGOs.length} organization{filteredNGOs.length !== 1 ? "s" : ""}
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredNGOs.map((ngo) => (
                <Card key={ngo.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-muted relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <Badge className={`absolute top-3 right-3 ${getUrgencyColor(ngo.urgency)}`}>
                      {ngo.urgency === "critical" && <AlertTriangle className="h-3 w-3 mr-1" />}
                      {ngo.urgency.charAt(0).toUpperCase() + ngo.urgency.slice(1)}
                    </Badge>
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between gap-2">
                      <CardTitle className="text-lg leading-tight">
                        {ngo.name}
                        {ngo.verified && (
                          <Shield className="inline-block h-4 w-4 ml-1 text-primary" />
                        )}
                      </CardTitle>
                    </div>
                    <CardDescription className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {ngo.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Badge variant="secondary">{ngo.cause}</Badge>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {ngo.description}
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-1 text-muted-foreground">
                        <Star className="h-4 w-4 text-accent" fill="currentColor" />
                        {ngo.rating}
                      </span>
                      <span className="flex items-center gap-1 text-muted-foreground">
                        <Users className="h-4 w-4" />
                        {ngo.volunteers} volunteers
                      </span>
                    </div>
                    <Button className="w-full" asChild>
                      <Link href={`/trust/${ngo.id}`}>View Profile</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredNGOs.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No NGOs found matching your criteria.</p>
                <Button variant="link" onClick={() => {
                  setSearchQuery("")
                  setCauseFilter("All Causes")
                  setLocationFilter("All Locations")
                  setUrgencyFilter("all")
                }}>
                  Clear filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
