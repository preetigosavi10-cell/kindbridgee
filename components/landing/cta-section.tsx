import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative isolate overflow-hidden rounded-3xl bg-primary px-6 py-16 sm:px-16 sm:py-24 text-center">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl text-balance">
            Ready to make a difference?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-primary-foreground/80 leading-relaxed">
            Join thousands of volunteers, NGOs, and businesses already creating impact through KindBridge.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="secondary" className="w-full sm:w-auto gap-2" asChild>
              <Link href="/register">
                Join KindBridge Today
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10 hover:text-primary-foreground" asChild>
              <Link href="/discover">
                Learn More
              </Link>
            </Button>
          </div>
          
          <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-primary-foreground/10 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-primary-foreground/10 blur-3xl" />
        </div>
      </div>
    </section>
  )
}
