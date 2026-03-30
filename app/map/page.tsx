"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { 
  MapPin, 
  Search, 
  Navigation, 
  Star, 
  Users, 
  Shield,
  Filter,
  List,
  Grid3X3,
  Heart,
  Utensils,
  Building
} from "lucide-react"
import Link from "next/link"

const mockLocations = [
  {
    id: 1,
    name: "Food For All Foundation",
    type: "ngo",
    cause: "Hunger & Food Security",
    address: "123 Social Impact Hub, Andheri West, Mumbai",
    distance: "1.2 km",
    rating: 4.8,
    volunteers: 234,
    verified: true,
    lat: 19.1234,
    lng: 72.8456,
  },
  {
    id: 2,
    name: "City Food Bank",
    type: "donation-center",
    cause: "Food Distribution",
    address: "45 Charity Lane, Bandra, Mumbai",
    distance: "2.5 km",
    rating: 4.6,
    volunteers: 89,
    verified: true,
    lat: 19.0654,
    lng: 72.8321,
  },
  {
    id: 3,
    name: "Women Rise Together",
    type: "ngo",
    cause: "Women Empowerment",
    address: "78 Hope Street, Dadar, Mumbai",
    distance: "3.1 km",
    rating: 4.9,
    volunteers: 156,
    verified: true,
    lat: 19.0178,
    lng: 72.8478,
  },
  {
    id: 4,
    name: "Green Earth Warriors",
    type: "ngo",
    cause: "Environment",
    address: "22 Nature Park Road, Powai, Mumbai",
    distance: "4.8 km",
    rating: 4.7,
    volunteers: 178,
    verified: true,
    lat: 19.1176,
    lng: 72.9060,
  },
  {
    id: 5,
    name: "Community Kitchen Hub",
    type: "donation-center",
    cause: "Food Distribution",
    address: "99 Service Road, Kurla, Mumbai",
    distance: "5.2 km",
    rating: 4.5,
    volunteers: 67,
    verified: false,
    lat: 19.0728,
    lng: 72.8826,
  },
  {
    id: 6,
    name: "EduLight Initiative",
    type: "ngo",
    cause: "Education",
    address: "56 Knowledge Park, Thane, Mumbai",
    distance: "8.3 km",
    rating: 4.9,
    volunteers: 567,
    verified: true,
    lat: 19.2183,
    lng: 72.9781,
  },
]

function getTypeIcon(type: string) {
  switch (type) {
    case "ngo":
      return Heart
    case "donation-center":
      return Utensils
    default:
      return Building
  }
}

function getTypeColor(type: string) {
  switch (type) {
    case "ngo":
      return "bg-primary text-primary-foreground"
    case "donation-center":
      return "bg-accent text-accent-foreground"
    default:
      return "bg-muted text-muted-foreground"
  }
}

export default function MapPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [typeFilter, setTypeFilter] = useState("all")
  const [viewMode, setViewMode] = useState<"map" | "list">("map")

  const filteredLocations = mockLocations.filter((location) => {
    const matchesSearch = location.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      location.cause.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesType = typeFilter === "all" || location.type === typeFilter
    return matchesSearch && matchesType
  })

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-[73px]">
        <div className="h-[calc(100vh-73px)] flex flex-col lg:flex-row">
          {/* Sidebar */}
          <div className="w-full lg:w-96 border-r border-border flex flex-col bg-background z-10">
            {/* Search and Filters */}
            <div className="p-4 border-b border-border space-y-4">
              <div className="flex items-center gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Search locations..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button variant="outline" size="icon">
                  <Navigation className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex items-center gap-2">
                <Select value={typeFilter} onValueChange={setTypeFilter}>
                  <SelectTrigger className="flex-1">
                    <SelectValue placeholder="Filter by type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="ngo">NGOs</SelectItem>
                    <SelectItem value="donation-center">Donation Centers</SelectItem>
                  </SelectContent>
                </Select>

                <div className="flex rounded-lg border border-border">
                  <Button
                    variant={viewMode === "map" ? "secondary" : "ghost"}
                    size="sm"
                    className="rounded-r-none"
                    onClick={() => setViewMode("map")}
                  >
                    <Grid3X3 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "secondary" : "ghost"}
                    size="sm"
                    className="rounded-l-none"
                    onClick={() => setViewMode("list")}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Results Count */}
            <div className="px-4 py-2 text-sm text-muted-foreground border-b border-border">
              {filteredLocations.length} location{filteredLocations.length !== 1 ? "s" : ""} found
            </div>

            {/* Location List */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-4 space-y-3">
                {filteredLocations.map((location) => {
                  const TypeIcon = getTypeIcon(location.type)
                  return (
                    <Card key={location.id} className="cursor-pointer hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className={`flex h-10 w-10 items-center justify-center rounded-lg shrink-0 ${getTypeColor(location.type)}`}>
                            <TypeIcon className="h-5 w-5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <h3 className="font-medium text-foreground text-sm truncate">
                                {location.name}
                              </h3>
                              {location.verified && (
                                <Shield className="h-3.5 w-3.5 text-primary shrink-0" />
                              )}
                            </div>
                            <Badge variant="outline" className="mt-1 text-xs">
                              {location.cause}
                            </Badge>
                            <p className="text-xs text-muted-foreground mt-2 line-clamp-1">
                              {location.address}
                            </p>
                            <div className="flex items-center justify-between mt-2">
                              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                <span className="flex items-center gap-1">
                                  <Star className="h-3 w-3 text-accent" fill="currentColor" />
                                  {location.rating}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Users className="h-3 w-3" />
                                  {location.volunteers}
                                </span>
                              </div>
                              <span className="text-xs font-medium text-primary">
                                {location.distance}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2 mt-3">
                          <Button size="sm" variant="outline" className="flex-1 text-xs" asChild>
                            <Link href={`/trust/${location.id}`}>View</Link>
                          </Button>
                          <Button size="sm" className="flex-1 text-xs">
                            Directions
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Map Area */}
          <div className="flex-1 relative bg-muted hidden lg:block">
            {/* Placeholder Map */}
            <div className="absolute inset-0 bg-gradient-to-br from-muted to-muted/50">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-primary/30 mx-auto mb-4" />
                  <p className="text-muted-foreground">Interactive Map</p>
                  <p className="text-sm text-muted-foreground/70 mt-1">
                    Shows NGOs and donation centers near you
                  </p>
                </div>
              </div>

              {/* Mock Map Markers */}
              {filteredLocations.slice(0, 4).map((location, index) => {
                const positions = [
                  { top: "30%", left: "40%" },
                  { top: "45%", left: "60%" },
                  { top: "55%", left: "35%" },
                  { top: "40%", left: "55%" },
                ]
                const TypeIcon = getTypeIcon(location.type)
                return (
                  <div
                    key={location.id}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                    style={positions[index]}
                  >
                    <div className={`flex h-10 w-10 items-center justify-center rounded-full ${getTypeColor(location.type)} shadow-lg transition-transform group-hover:scale-110`}>
                      <TypeIcon className="h-5 w-5" />
                    </div>
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-background border border-border rounded-lg shadow-lg p-2 whitespace-nowrap">
                        <p className="text-xs font-medium text-foreground">{location.name}</p>
                        <p className="text-xs text-muted-foreground">{location.distance}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Map Controls */}
            <div className="absolute bottom-4 right-4 flex flex-col gap-2">
              <Button size="icon" variant="secondary">
                <span className="text-lg font-bold">+</span>
              </Button>
              <Button size="icon" variant="secondary">
                <span className="text-lg font-bold">-</span>
              </Button>
            </div>

            {/* Legend */}
            <div className="absolute top-4 right-4 bg-background border border-border rounded-lg p-3 shadow-lg">
              <p className="text-xs font-medium text-foreground mb-2">Legend</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full bg-primary" />
                  <span className="text-xs text-muted-foreground">NGOs</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full bg-accent" />
                  <span className="text-xs text-muted-foreground">Donation Centers</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Map Placeholder */}
          <div className="lg:hidden flex-1 bg-muted flex items-center justify-center">
            <div className="text-center p-6">
              <MapPin className="h-12 w-12 text-primary/30 mx-auto mb-4" />
              <p className="text-muted-foreground">Map view available on larger screens</p>
              <Button variant="outline" className="mt-4" onClick={() => setViewMode("list")}>
                View as List
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
