"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Plus, 
  Users, 
  Utensils, 
  DollarSign, 
  Package, 
  Clock, 
  MapPin, 
  Shield,
  MessageSquare,
  Heart
} from "lucide-react"

type RequestType = "food" | "funds" | "manpower" | "materials"

const mockRequests = [
  {
    id: 1,
    ngoName: "Food For All Foundation",
    type: "food" as RequestType,
    title: "Urgent: 500 meal packets needed",
    description: "We are organizing a community feeding drive this weekend and need meal packets for 500 people in the slum area.",
    location: "Mumbai, India",
    urgency: "high",
    verified: true,
    postedAt: "2 hours ago",
    responses: 12,
  },
  {
    id: 2,
    ngoName: "EduLight Initiative",
    type: "manpower" as RequestType,
    title: "Volunteer teachers needed for weekend classes",
    description: "Looking for 10 volunteer teachers to help with weekend remedial classes for underprivileged children.",
    location: "Delhi, India",
    urgency: "medium",
    verified: true,
    postedAt: "5 hours ago",
    responses: 8,
  },
  {
    id: 3,
    ngoName: "Green Earth Warriors",
    type: "materials" as RequestType,
    title: "Saplings and gardening tools required",
    description: "We need 200 saplings and basic gardening tools for our upcoming tree plantation drive.",
    location: "Bangalore, India",
    urgency: "low",
    verified: true,
    postedAt: "1 day ago",
    responses: 5,
  },
  {
    id: 4,
    ngoName: "Women Rise Together",
    type: "funds" as RequestType,
    title: "Funding needed for skill development program",
    description: "Seeking funds to launch a 3-month skill development program for 50 women from marginalized communities.",
    location: "Pune, India",
    urgency: "medium",
    verified: true,
    postedAt: "2 days ago",
    responses: 23,
  },
  {
    id: 5,
    ngoName: "Animal Rescue League",
    type: "food" as RequestType,
    title: "Pet food and medical supplies needed",
    description: "Our shelter is running low on pet food and basic medical supplies for rescued animals.",
    location: "Hyderabad, India",
    urgency: "high",
    verified: true,
    postedAt: "3 hours ago",
    responses: 7,
  },
]

function getTypeIcon(type: RequestType) {
  switch (type) {
    case "food":
      return Utensils
    case "funds":
      return DollarSign
    case "manpower":
      return Users
    case "materials":
      return Package
  }
}

function getTypeColor(type: RequestType) {
  switch (type) {
    case "food":
      return "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400"
    case "funds":
      return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
    case "manpower":
      return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
    case "materials":
      return "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400"
  }
}

function getUrgencyBadge(urgency: string) {
  switch (urgency) {
    case "high":
      return <Badge variant="destructive">Urgent</Badge>
    case "medium":
      return <Badge className="bg-accent text-accent-foreground">Moderate</Badge>
    case "low":
      return <Badge variant="secondary">Low Priority</Badge>
    default:
      return null
  }
}

export default function CollaboratePage() {
  const [filter, setFilter] = useState<"all" | RequestType>("all")
  const [dialogOpen, setDialogOpen] = useState(false)

  const filteredRequests = filter === "all" 
    ? mockRequests 
    : mockRequests.filter(r => r.type === filter)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-[73px]">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          {/* Header */}
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-foreground">Collaboration Hub</h1>
              <p className="mt-2 text-muted-foreground">
                Post requests, share resources, and connect with organizations
              </p>
            </div>
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Post Request
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                  <DialogTitle>Post Collaboration Request</DialogTitle>
                  <DialogDescription>
                    Share what your organization needs with the community
                  </DialogDescription>
                </DialogHeader>
                <PostRequestForm onSuccess={() => setDialogOpen(false)} />
              </DialogContent>
            </Dialog>
          </div>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400">
                    <Utensils className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">24</p>
                    <p className="text-xs text-muted-foreground">Food Requests</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                    <DollarSign className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">18</p>
                    <p className="text-xs text-muted-foreground">Fund Requests</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">32</p>
                    <p className="text-xs text-muted-foreground">Manpower Needs</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400">
                    <Package className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">15</p>
                    <p className="text-xs text-muted-foreground">Material Needs</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Filters */}
          <Tabs defaultValue="all" className="mt-8" onValueChange={(v) => setFilter(v as typeof filter)}>
            <TabsList>
              <TabsTrigger value="all">All Requests</TabsTrigger>
              <TabsTrigger value="food">Food</TabsTrigger>
              <TabsTrigger value="funds">Funds</TabsTrigger>
              <TabsTrigger value="manpower">Manpower</TabsTrigger>
              <TabsTrigger value="materials">Materials</TabsTrigger>
            </TabsList>

            <TabsContent value={filter} className="mt-6">
              <div className="grid gap-4 md:grid-cols-2">
                {filteredRequests.map((request) => {
                  const TypeIcon = getTypeIcon(request.type)
                  return (
                    <Card key={request.id} className="hover:shadow-lg transition-shadow">
                      <CardHeader className="pb-2">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-center gap-2">
                            <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${getTypeColor(request.type)}`}>
                              <TypeIcon className="h-4 w-4" />
                            </div>
                            <div>
                              <CardTitle className="text-base">
                                {request.ngoName}
                                {request.verified && (
                                  <Shield className="inline-block h-3.5 w-3.5 ml-1 text-primary" />
                                )}
                              </CardTitle>
                              <CardDescription className="flex items-center gap-1 text-xs">
                                <MapPin className="h-3 w-3" />
                                {request.location}
                              </CardDescription>
                            </div>
                          </div>
                          {getUrgencyBadge(request.urgency)}
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <h3 className="font-medium text-foreground">{request.title}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {request.description}
                        </p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {request.postedAt}
                          </span>
                          <span className="flex items-center gap-1">
                            <MessageSquare className="h-3 w-3" />
                            {request.responses} responses
                          </span>
                        </div>
                        <div className="flex gap-2 pt-2">
                          <Button size="sm" className="flex-1">
                            <Heart className="h-4 w-4 mr-2" />
                            Offer Help
                          </Button>
                          <Button size="sm" variant="outline">
                            Details
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  )
}

function PostRequestForm({ onSuccess }: { onSuccess: () => void }) {
  return (
    <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onSuccess(); }}>
      <div className="space-y-2">
        <Label htmlFor="requestType">Request Type</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="food">Food Donation</SelectItem>
            <SelectItem value="funds">Funding</SelectItem>
            <SelectItem value="manpower">Volunteers / Manpower</SelectItem>
            <SelectItem value="materials">Materials / Equipment</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="title">Title</Label>
        <Input id="title" placeholder="Brief title for your request" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea 
          id="description" 
          placeholder="Describe what you need and how it will be used..."
          rows={4}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Input id="location" placeholder="City, Country" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="urgency">Urgency Level</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select urgency" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="low">Low Priority</SelectItem>
              <SelectItem value="medium">Moderate</SelectItem>
              <SelectItem value="high">Urgent</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex gap-2 pt-4">
        <Button type="submit" className="flex-1">Post Request</Button>
      </div>
    </form>
  )
}
