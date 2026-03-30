"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Calendar, 
  MapPin, 
  Users, 
  Clock, 
  Target,
  ArrowRight,
  Search,
  Shield,
  Heart,
  TreePine,
  GraduationCap,
  Stethoscope
} from "lucide-react"
import Link from "next/link"

const mockCampaigns = [
  {
    id: 1,
    title: "Feed 1000 Families",
    organizer: "Food For All Foundation",
    type: "campaign",
    cause: "Hunger",
    description: "A month-long campaign to provide nutritious meals to 1000 families in underserved communities.",
    location: "Mumbai, India",
    startDate: "Apr 1, 2026",
    endDate: "Apr 30, 2026",
    goal: 1000,
    current: 756,
    volunteers: 89,
    verified: true,
    featured: true,
    icon: Heart,
  },
  {
    id: 2,
    title: "Plant 10000 Trees",
    organizer: "Green Earth Warriors",
    type: "campaign",
    cause: "Environment",
    description: "Join us in our mission to plant 10,000 trees across the city to combat climate change.",
    location: "Bangalore, India",
    startDate: "Apr 15, 2026",
    endDate: "May 15, 2026",
    goal: 10000,
    current: 4230,
    volunteers: 234,
    verified: true,
    featured: true,
    icon: TreePine,
  },
  {
    id: 3,
    title: "Education for All",
    organizer: "EduLight Initiative",
    type: "campaign",
    cause: "Education",
    description: "Providing school supplies and educational resources to 500 underprivileged children.",
    location: "Delhi, India",
    startDate: "Mar 1, 2026",
    endDate: "May 31, 2026",
    goal: 500,
    current: 312,
    volunteers: 45,
    verified: true,
    featured: false,
    icon: GraduationCap,
  },
]

const mockEvents = [
  {
    id: 1,
    title: "Community Health Camp",
    organizer: "HealthFirst NGO",
    type: "event",
    cause: "Healthcare",
    description: "Free health checkups, consultations, and medicine distribution for residents.",
    location: "Community Hall, Dharavi, Mumbai",
    date: "Apr 5, 2026",
    time: "9:00 AM - 5:00 PM",
    spotsTotal: 50,
    spotsFilled: 32,
    verified: true,
    icon: Stethoscope,
  },
  {
    id: 2,
    title: "Tree Plantation Drive",
    organizer: "Green Earth Warriors",
    type: "event",
    cause: "Environment",
    description: "Join us for a tree plantation drive at the city park. All materials provided.",
    location: "Cubbon Park, Bangalore",
    date: "Apr 10, 2026",
    time: "6:00 AM - 10:00 AM",
    spotsTotal: 100,
    spotsFilled: 78,
    verified: true,
    icon: TreePine,
  },
  {
    id: 3,
    title: "Teach a Child Day",
    organizer: "EduLight Initiative",
    type: "event",
    cause: "Education",
    description: "Spend a day teaching basic skills to children from underprivileged backgrounds.",
    location: "Community Center, Nehru Nagar, Delhi",
    date: "Apr 12, 2026",
    time: "10:00 AM - 4:00 PM",
    spotsTotal: 30,
    spotsFilled: 24,
    verified: true,
    icon: GraduationCap,
  },
  {
    id: 4,
    title: "Food Packaging Marathon",
    organizer: "Food For All Foundation",
    type: "event",
    cause: "Hunger",
    description: "Help us pack 5000 meal packets for distribution to homeless shelters.",
    location: "Warehouse, Andheri East, Mumbai",
    date: "Apr 8, 2026",
    time: "8:00 AM - 2:00 PM",
    spotsTotal: 80,
    spotsFilled: 65,
    verified: true,
    icon: Heart,
  },
]

export default function CampaignsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [tab, setTab] = useState("all")

  const filteredCampaigns = mockCampaigns.filter(c => 
    c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.organizer.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const filteredEvents = mockEvents.filter(e => 
    e.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    e.organizer.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-[73px]">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Campaigns & Events
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Join impactful campaigns and events to make a difference in your community
            </p>
          </div>

          {/* Search */}
          <div className="relative max-w-md mx-auto mb-8">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search campaigns and events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Tabs */}
          <Tabs defaultValue="all" className="mt-8" onValueChange={setTab}>
            <TabsList className="mx-auto w-fit">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
              <TabsTrigger value="events">Events</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-8 space-y-12">
              {/* Featured Campaigns */}
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-6">Featured Campaigns</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  {filteredCampaigns.filter(c => c.featured).map((campaign) => (
                    <CampaignCard key={campaign.id} campaign={campaign} />
                  ))}
                </div>
              </section>

              {/* Upcoming Events */}
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-6">Upcoming Events</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  {filteredEvents.slice(0, 4).map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))}
                </div>
              </section>
            </TabsContent>

            <TabsContent value="campaigns" className="mt-8">
              <div className="grid gap-6 md:grid-cols-2">
                {filteredCampaigns.map((campaign) => (
                  <CampaignCard key={campaign.id} campaign={campaign} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="events" className="mt-8">
              <div className="grid gap-4 md:grid-cols-2">
                {filteredEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  )
}

function CampaignCard({ campaign }: { campaign: typeof mockCampaigns[0] }) {
  const progress = Math.round((campaign.current / campaign.goal) * 100)
  const Icon = campaign.icon

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
            <Icon className="h-6 w-6" />
          </div>
          <div className="flex-1 min-w-0">
            <CardTitle className="text-lg leading-tight">
              {campaign.title}
              {campaign.verified && (
                <Shield className="inline-block h-4 w-4 ml-1 text-primary" />
              )}
            </CardTitle>
            <CardDescription className="mt-1">
              by {campaign.organizer}
            </CardDescription>
          </div>
          <Badge variant="secondary">{campaign.cause}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground line-clamp-2">
          {campaign.description}
        </p>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Progress</span>
            <span className="font-medium text-foreground">{campaign.current} / {campaign.goal}</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5" />
            {campaign.location}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" />
            {campaign.startDate} - {campaign.endDate}
          </span>
          <span className="flex items-center gap-1">
            <Users className="h-3.5 w-3.5" />
            {campaign.volunteers} volunteers
          </span>
        </div>

        <Button className="w-full gap-2">
          Join Campaign
          <ArrowRight className="h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  )
}

function EventCard({ event }: { event: typeof mockEvents[0] }) {
  const spotsLeft = event.spotsTotal - event.spotsFilled
  const Icon = event.icon

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="pt-6">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/50 text-accent-foreground shrink-0">
            <Icon className="h-6 w-6" />
          </div>
          <div className="flex-1 min-w-0 space-y-3">
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="font-semibold text-foreground">
                  {event.title}
                  {event.verified && (
                    <Shield className="inline-block h-3.5 w-3.5 ml-1 text-primary" />
                  )}
                </h3>
                <Badge variant="outline">{event.cause}</Badge>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                by {event.organizer}
              </p>
            </div>

            <p className="text-sm text-muted-foreground line-clamp-2">
              {event.description}
            </p>

            <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {event.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {event.time}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                {event.location}
              </span>
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-sm">
                <span className="font-medium text-foreground">{spotsLeft}</span>
                <span className="text-muted-foreground"> spots left</span>
              </span>
              <Button size="sm">Join Event</Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
