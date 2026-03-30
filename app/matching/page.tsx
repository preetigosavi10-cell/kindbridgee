"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Brain, MapPin, Star, Users, Shield, Sparkles, RefreshCw } from "lucide-react"
import Link from "next/link"

const mockMatches = [
  {
    id: 1,
    name: "Food For All Foundation",
    cause: "Hunger & Food Security",
    location: "Mumbai, India",
    rating: 4.8,
    volunteers: 234,
    verified: true,
    matchScore: 95,
    matchReasons: ["Skills match: Event Planning", "Location: Within 10km", "Availability: Weekends"],
    description: "Working to eliminate hunger by rescuing surplus food and distributing to those in need.",
  },
  {
    id: 5,
    name: "Women Rise Together",
    cause: "Women Empowerment",
    location: "Pune, India",
    rating: 4.9,
    volunteers: 345,
    verified: true,
    matchScore: 88,
    matchReasons: ["Skills match: Counseling", "Interest alignment", "High impact opportunity"],
    description: "Empowering women through skill development, education, and economic independence.",
  },
  {
    id: 2,
    name: "EduLight Initiative",
    cause: "Education",
    location: "Delhi, India",
    rating: 4.9,
    volunteers: 567,
    verified: true,
    matchScore: 82,
    matchReasons: ["Skills match: Teaching", "High volunteer satisfaction", "Flexible schedule"],
    description: "Providing quality education to underprivileged children through innovative learning programs.",
  },
  {
    id: 3,
    name: "Green Earth Warriors",
    cause: "Environment",
    location: "Bangalore, India",
    rating: 4.7,
    volunteers: 189,
    verified: true,
    matchScore: 75,
    matchReasons: ["Interest alignment", "Weekend activities", "Growing organization"],
    description: "Environmental conservation through tree plantation drives and awareness campaigns.",
  },
]

function getMatchScoreColor(score: number) {
  if (score >= 90) return "text-primary"
  if (score >= 80) return "text-accent-foreground"
  if (score >= 70) return "text-muted-foreground"
  return "text-muted-foreground"
}

export default function MatchingPage() {
  const [isRefreshing, setIsRefreshing] = useState(false)

  const handleRefresh = () => {
    setIsRefreshing(true)
    setTimeout(() => setIsRefreshing(false), 1500)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-[73px]">
        <div className="mx-auto max-w-4xl px-6 py-12 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6">
              <Brain className="h-8 w-8" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              AI-Powered Matching
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Based on your skills, interests, and availability, we&apos;ve found the best NGOs for you to collaborate with.
            </p>
          </div>

          {/* User Profile Summary */}
          <Card className="mb-8 bg-muted/30">
            <CardContent className="pt-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-foreground">Your Profile</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="secondary">Teaching</Badge>
                    <Badge variant="secondary">Event Planning</Badge>
                    <Badge variant="secondary">Counseling</Badge>
                    <Badge variant="outline">Weekends Available</Badge>
                  </div>
                </div>
                <Button variant="outline" onClick={handleRefresh} disabled={isRefreshing}>
                  <RefreshCw className={`h-4 w-4 mr-2 ${isRefreshing ? "animate-spin" : ""}`} />
                  Refresh Matches
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Matches */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Sparkles className="h-4 w-4 text-primary" />
              <span>Found {mockMatches.length} recommended NGOs based on your profile</span>
            </div>

            {mockMatches.map((match, index) => (
              <Card key={match.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                          {index + 1}
                        </span>
                        <CardTitle className="text-lg">
                          {match.name}
                          {match.verified && (
                            <Shield className="inline-block h-4 w-4 ml-1 text-primary" />
                          )}
                        </CardTitle>
                      </div>
                      <CardDescription className="flex items-center gap-1 mt-1">
                        <MapPin className="h-3 w-3" />
                        {match.location}
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <div className={`text-2xl font-bold ${getMatchScoreColor(match.matchScore)}`}>
                        {match.matchScore}%
                      </div>
                      <div className="text-xs text-muted-foreground">Match Score</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Progress value={match.matchScore} className="h-2" />
                  </div>

                  <Badge variant="secondary">{match.cause}</Badge>

                  <p className="text-sm text-muted-foreground">{match.description}</p>

                  <div className="bg-muted/50 rounded-lg p-3">
                    <p className="text-xs font-medium text-muted-foreground mb-2">Why this match:</p>
                    <ul className="space-y-1">
                      {match.matchReasons.map((reason, i) => (
                        <li key={i} className="text-sm text-foreground flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {reason}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-accent" fill="currentColor" />
                        {match.rating}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {match.volunteers} volunteers
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/trust/${match.id}`}>View Profile</Link>
                      </Button>
                      <Button size="sm">Connect</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Want to see more options?
            </p>
            <Button variant="outline" asChild>
              <Link href="/discover">Browse All NGOs</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
