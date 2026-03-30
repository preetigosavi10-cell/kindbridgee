import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Building2, Heart } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
            Connect. Collaborate.
            <span className="block text-primary">Create Impact.</span>
          </h1>
          
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl max-w-2xl mx-auto text-pretty">
            KindBridge connects NGOs, volunteers, and businesses to build stronger communities. 
            Find your cause, make your mark, and transform lives together.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto gap-2" asChild>
              <Link href="/register">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
              <Link href="/discover">
                Explore NGOs
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-3 max-w-4xl mx-auto">
          <Link href="/register?role=volunteer" className="group">
            <div className="relative rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">Join as Volunteer</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Share your skills, find meaningful causes, and make a difference in your community.
              </p>
              <span className="mt-4 inline-flex items-center text-sm font-medium text-primary group-hover:gap-2 transition-all">
                Get started <ArrowRight className="h-4 w-4 ml-1" />
              </span>
            </div>
          </Link>

          <Link href="/register?role=ngo" className="group">
            <div className="relative rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/50 text-accent-foreground">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">Register Your NGO</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Connect with volunteers and businesses to amplify your social impact.
              </p>
              <span className="mt-4 inline-flex items-center text-sm font-medium text-primary group-hover:gap-2 transition-all">
                Get started <ArrowRight className="h-4 w-4 ml-1" />
              </span>
            </div>
          </Link>

          <Link href="/register?role=business" className="group">
            <div className="relative rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
                <Building2 className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">Partner as Business</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Donate surplus goods, sponsor campaigns, and build your CSR portfolio.
              </p>
              <span className="mt-4 inline-flex items-center text-sm font-medium text-primary group-hover:gap-2 transition-all">
                Get started <ArrowRight className="h-4 w-4 ml-1" />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
