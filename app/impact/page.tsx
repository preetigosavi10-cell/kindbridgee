"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Heart, 
  Calendar,
  Award,
  Share2,
  Download,
  Utensils,
  Building2,
  Clock
} from "lucide-react"
import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts"

const monthlyData = [
  { month: "Oct", meals: 120, hours: 15, ngos: 2 },
  { month: "Nov", meals: 180, hours: 22, ngos: 3 },
  { month: "Dec", meals: 350, hours: 40, ngos: 4 },
  { month: "Jan", meals: 280, hours: 35, ngos: 3 },
  { month: "Feb", meals: 420, hours: 48, ngos: 5 },
  { month: "Mar", meals: 520, hours: 56, ngos: 6 },
]

const causeDistribution = [
  { name: "Hunger", value: 45, color: "hsl(var(--primary))" },
  { name: "Education", value: 25, color: "hsl(var(--accent))" },
  { name: "Environment", value: 20, color: "hsl(145, 60%, 45%)" },
  { name: "Healthcare", value: 10, color: "hsl(200, 60%, 50%)" },
]

const achievements = [
  {
    id: 1,
    title: "First 100 Meals",
    description: "Contributed to providing 100 meals",
    earned: true,
    date: "Nov 15, 2025",
  },
  {
    id: 2,
    title: "Week Warrior",
    description: "Volunteered for 7 consecutive days",
    earned: true,
    date: "Dec 20, 2025",
  },
  {
    id: 3,
    title: "Community Builder",
    description: "Connected with 5+ NGOs",
    earned: true,
    date: "Jan 10, 2026",
  },
  {
    id: 4,
    title: "Impact Champion",
    description: "Reached 500 total contributions",
    earned: false,
    progress: 72,
  },
]

const recentActivity = [
  {
    id: 1,
    action: "Volunteered at Food Distribution Drive",
    ngo: "Food For All Foundation",
    date: "Mar 28, 2026",
    impact: "50 meals served",
  },
  {
    id: 2,
    action: "Participated in Tree Plantation",
    ngo: "Green Earth Warriors",
    date: "Mar 25, 2026",
    impact: "10 trees planted",
  },
  {
    id: 3,
    action: "Taught weekend classes",
    ngo: "EduLight Initiative",
    date: "Mar 22, 2026",
    impact: "15 students taught",
  },
  {
    id: 4,
    action: "Donated surplus food",
    ngo: "Food For All Foundation",
    date: "Mar 18, 2026",
    impact: "75 meals donated",
  },
]

export default function ImpactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-[73px]">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          {/* Header */}
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-foreground">Impact Dashboard</h1>
              <p className="mt-2 text-muted-foreground">
                Track your contributions and see the difference you&apos;re making
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline">
                <Share2 className="h-4 w-4 mr-2" />
                Share Impact
              </Button>
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Download Report
              </Button>
            </div>
          </div>

          {/* Key Stats */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Utensils className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-foreground">1,870</p>
                    <p className="text-sm text-muted-foreground">Meals Donated</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 mt-4 text-sm text-primary">
                  <TrendingUp className="h-4 w-4" />
                  <span>+24% from last month</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/50 text-accent-foreground">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-foreground">216</p>
                    <p className="text-sm text-muted-foreground">Hours Volunteered</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 mt-4 text-sm text-primary">
                  <TrendingUp className="h-4 w-4" />
                  <span>+17% from last month</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-foreground">12</p>
                    <p className="text-sm text-muted-foreground">NGOs Connected</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 mt-4 text-sm text-primary">
                  <TrendingUp className="h-4 w-4" />
                  <span>+2 new this month</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-foreground">8</p>
                    <p className="text-sm text-muted-foreground">Achievements</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 mt-4 text-sm text-muted-foreground">
                  <span>3 badges this month</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Charts */}
            <div className="lg:col-span-2 space-y-8">
              {/* Monthly Impact Chart */}
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Impact</CardTitle>
                  <CardDescription>Your contribution trends over the past 6 months</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={monthlyData}>
                        <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                        <XAxis dataKey="month" className="text-xs" />
                        <YAxis className="text-xs" />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: "hsl(var(--card))", 
                            border: "1px solid hsl(var(--border))",
                            borderRadius: "8px"
                          }} 
                        />
                        <Line 
                          type="monotone" 
                          dataKey="meals" 
                          stroke="hsl(var(--primary))" 
                          strokeWidth={2}
                          dot={{ fill: "hsl(var(--primary))" }}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="hours" 
                          stroke="hsl(var(--accent))" 
                          strokeWidth={2}
                          dot={{ fill: "hsl(var(--accent))" }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="flex items-center justify-center gap-6 mt-4">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-primary" />
                      <span className="text-sm text-muted-foreground">Meals</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-accent" />
                      <span className="text-sm text-muted-foreground">Hours</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Cause Distribution */}
              <Card>
                <CardHeader>
                  <CardTitle>Contribution by Cause</CardTitle>
                  <CardDescription>How your impact is distributed across different causes</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="h-64 w-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={causeDistribution}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={5}
                            dataKey="value"
                          >
                            {causeDistribution.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="flex-1 space-y-4">
                      {causeDistribution.map((cause) => (
                        <div key={cause.name} className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2">
                              <div 
                                className="h-3 w-3 rounded-full" 
                                style={{ backgroundColor: cause.color }}
                              />
                              <span className="text-foreground">{cause.name}</span>
                            </div>
                            <span className="text-muted-foreground">{cause.value}%</span>
                          </div>
                          <Progress value={cause.value} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Achievements */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {achievements.map((achievement) => (
                    <div 
                      key={achievement.id} 
                      className={`p-3 rounded-lg border ${achievement.earned ? "bg-primary/5 border-primary/20" : "bg-muted/50 border-border"}`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h4 className="font-medium text-foreground text-sm">{achievement.title}</h4>
                          <p className="text-xs text-muted-foreground mt-0.5">{achievement.description}</p>
                        </div>
                        {achievement.earned ? (
                          <Badge variant="secondary" className="shrink-0">Earned</Badge>
                        ) : (
                          <span className="text-xs text-muted-foreground">{achievement.progress}%</span>
                        )}
                      </div>
                      {achievement.earned && achievement.date && (
                        <p className="text-xs text-muted-foreground mt-2">{achievement.date}</p>
                      )}
                      {!achievement.earned && achievement.progress && (
                        <Progress value={achievement.progress} className="h-1 mt-2" />
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="border-b border-border pb-4 last:border-0 last:pb-0">
                      <p className="font-medium text-foreground text-sm">{activity.action}</p>
                      <p className="text-xs text-muted-foreground mt-1">{activity.ngo}</p>
                      <div className="flex items-center justify-between mt-2">
                        <Badge variant="outline" className="text-xs">{activity.impact}</Badge>
                        <span className="text-xs text-muted-foreground">{activity.date}</span>
                      </div>
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
