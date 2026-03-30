"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { 
  Shield, 
  MapPin, 
  Star, 
  Users, 
  Calendar,
  ExternalLink,
  Mail,
  Phone,
  Globe,
  Heart,
  CheckCircle,
  Award,
  MessageSquare,
  Share2
} from "lucide-react"
import Link from "next/link"

// Mock data for a single NGO
const ngoData = {
  id: 1,
  name: "Food For All Foundation",
  tagline: "Eliminating hunger, one meal at a time",
  cause: "Hunger & Food Security",
  location: "Mumbai, India",
  founded: "2018",
  rating: 4.8,
  reviewCount: 156,
  volunteers: 234,
  verified: true,
  verificationBadges: ["Registered NGO", "Financial Transparency", "Impact Verified"],
  description: "Food For All Foundation is a non-profit organization dedicated to eliminating hunger in urban and rural India. We rescue surplus food from restaurants, hotels, and events, and distribute it to those in need. Our network of volunteers works tirelessly to ensure no edible food goes to waste while millions go hungry.",
  mission: "To create a hunger-free India by building a sustainable food rescue and distribution network that connects surplus food with those who need it most.",
  impact: {
    mealsServed: 150000,
    familiesHelped: 12500,
    volunteersEngaged: 2340,
    citiesCovered: 8,
  },
  contact: {
    email: "contact@foodforall.org",
    phone: "+91 98765 43210",
    website: "https://foodforall.org",
    address: "123 Social Impact Hub, Andheri West, Mumbai 400058",
  },
  gallery: [
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
  ],
  reviews: [
    {
      id: 1,
      author: "Priya Sharma",
      rating: 5,
      date: "2 weeks ago",
      text: "Amazing organization! The team is incredibly dedicated and the impact they create is visible. I've been volunteering for 6 months and it's been a life-changing experience.",
    },
    {
      id: 2,
      author: "Rahul Verma",
      rating: 5,
      date: "1 month ago",
      text: "Very well organized food distribution drives. They ensure dignity and respect for all beneficiaries. Highly recommend volunteering with them.",
    },
    {
      id: 3,
      author: "Anjali Patel",
      rating: 4,
      date: "2 months ago",
      text: "Great cause and passionate team. Could improve on communication sometimes, but overall a wonderful organization to support.",
    },
  ],
  campaigns: [
    {
      id: 1,
      title: "Feed 1000 Families",
      progress: 76,
      goal: 1000,
      current: 756,
    },
    {
      id: 2,
      title: "Diwali Meal Drive",
      progress: 45,
      goal: 5000,
      current: 2250,
    },
  ],
}

export default function TrustPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-[73px]">
        {/* Hero Section */}
        <div className="bg-muted/30 border-b border-border">
          <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-primary text-primary-foreground shrink-0 text-4xl font-bold">
                {ngoData.name.charAt(0)}
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <h1 className="text-3xl font-bold tracking-tight text-foreground">
                    {ngoData.name}
                  </h1>
                  {ngoData.verified && (
                    <Badge className="gap-1 bg-primary/20 text-primary">
                      <Shield className="h-3 w-3" />
                      Verified
                    </Badge>
                  )}
                </div>
                <p className="mt-2 text-lg text-muted-foreground">{ngoData.tagline}</p>
                
                <div className="flex flex-wrap gap-4 mt-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {ngoData.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    Founded {ngoData.founded}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-accent" fill="currentColor" />
                    {ngoData.rating} ({ngoData.reviewCount} reviews)
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {ngoData.volunteers} volunteers
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {ngoData.verificationBadges.map((badge) => (
                    <Badge key={badge} variant="outline" className="gap-1">
                      <CheckCircle className="h-3 w-3 text-primary" />
                      {badge}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 mt-6">
                  <Button>
                    <Heart className="h-4 w-4 mr-2" />
                    Volunteer
                  </Button>
                  <Button variant="outline">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Contact
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <Tabs defaultValue="about">
                <TabsList>
                  <TabsTrigger value="about">About</TabsTrigger>
                  <TabsTrigger value="impact">Impact</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                  <TabsTrigger value="gallery">Gallery</TabsTrigger>
                </TabsList>

                <TabsContent value="about" className="mt-6 space-y-6">
                  <div>
                    <h2 className="text-xl font-semibold text-foreground mb-3">About Us</h2>
                    <p className="text-muted-foreground leading-relaxed">{ngoData.description}</p>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-foreground mb-3">Our Mission</h2>
                    <p className="text-muted-foreground leading-relaxed">{ngoData.mission}</p>
                  </div>
                  <Badge variant="secondary" className="text-base">{ngoData.cause}</Badge>
                </TabsContent>

                <TabsContent value="impact" className="mt-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Card>
                      <CardContent className="pt-6">
                        <div className="text-center">
                          <p className="text-4xl font-bold text-primary">{(ngoData.impact.mealsServed / 1000).toFixed(0)}K+</p>
                          <p className="text-sm text-muted-foreground mt-1">Meals Served</p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <div className="text-center">
                          <p className="text-4xl font-bold text-primary">{(ngoData.impact.familiesHelped / 1000).toFixed(1)}K+</p>
                          <p className="text-sm text-muted-foreground mt-1">Families Helped</p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <div className="text-center">
                          <p className="text-4xl font-bold text-primary">{(ngoData.impact.volunteersEngaged / 1000).toFixed(1)}K+</p>
                          <p className="text-sm text-muted-foreground mt-1">Volunteers Engaged</p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <div className="text-center">
                          <p className="text-4xl font-bold text-primary">{ngoData.impact.citiesCovered}</p>
                          <p className="text-sm text-muted-foreground mt-1">Cities Covered</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="reviews" className="mt-6 space-y-4">
                  {ngoData.reviews.map((review) => (
                    <Card key={review.id}>
                      <CardContent className="pt-6">
                        <div className="flex items-start gap-4">
                          <Avatar>
                            <AvatarFallback>{review.author.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h4 className="font-medium text-foreground">{review.author}</h4>
                              <span className="text-xs text-muted-foreground">{review.date}</span>
                            </div>
                            <div className="flex items-center gap-0.5 mt-1">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  className={`h-4 w-4 ${i < review.rating ? "text-accent fill-current" : "text-muted"}`} 
                                />
                              ))}
                            </div>
                            <p className="text-sm text-muted-foreground mt-2">{review.text}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="gallery" className="mt-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    {ngoData.gallery.map((image, i) => (
                      <div key={i} className="aspect-video rounded-lg bg-muted overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20" />
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <a href={`mailto:${ngoData.contact.email}`} className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                    <Mail className="h-4 w-4" />
                    {ngoData.contact.email}
                  </a>
                  <a href={`tel:${ngoData.contact.phone}`} className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                    <Phone className="h-4 w-4" />
                    {ngoData.contact.phone}
                  </a>
                  <a href={ngoData.contact.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                    <Globe className="h-4 w-4" />
                    {ngoData.contact.website.replace("https://", "")}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                  <div className="flex items-start gap-3 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                    {ngoData.contact.address}
                  </div>
                </CardContent>
              </Card>

              {/* Active Campaigns */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Active Campaigns</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {ngoData.campaigns.map((campaign) => (
                    <div key={campaign.id} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium text-foreground">{campaign.title}</span>
                        <span className="text-muted-foreground">{campaign.progress}%</span>
                      </div>
                      <Progress value={campaign.progress} className="h-2" />
                      <p className="text-xs text-muted-foreground">
                        {campaign.current} / {campaign.goal} goal
                      </p>
                    </div>
                  ))}
                  <Button className="w-full" variant="outline" asChild>
                    <Link href="/campaigns">View All Campaigns</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Trust Badges */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    Trust & Verification
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {ngoData.verificationBadges.map((badge) => (
                    <div key={badge} className="flex items-center gap-3 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-foreground">{badge}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
