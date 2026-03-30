import { Brain, MapPin, Shield, Calendar, MessageSquare, BarChart3 } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Matching",
    description: "Our intelligent system matches volunteers with NGOs based on skills, interests, and availability.",
  },
  {
    icon: MapPin,
    title: "Location-Based Discovery",
    description: "Find NGOs and donation centers near you with our interactive map and location filters.",
  },
  {
    icon: Shield,
    title: "Trust & Verification",
    description: "Verified NGO profiles with badges, ratings, and transparent impact reports.",
  },
  {
    icon: Calendar,
    title: "Campaign Management",
    description: "Join events, track campaigns, and coordinate efforts with real-time updates.",
  },
  {
    icon: MessageSquare,
    title: "Collaboration Hub",
    description: "Post requests, share resources, and connect with other organizations seamlessly.",
  },
  {
    icon: BarChart3,
    title: "Impact Dashboard",
    description: "Track your contributions with detailed analytics and shareable impact reports.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Everything you need to make an impact
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Powerful tools designed to connect communities and amplify social good.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="relative rounded-2xl border border-border bg-card p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
