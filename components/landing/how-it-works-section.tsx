const steps = [
  {
    number: "1",
    title: "Create Your Profile",
    description: "Sign up as a volunteer, NGO, or business. Tell us about your skills, cause, or services.",
  },
  {
    number: "2",
    title: "Get Matched",
    description: "Our AI analyzes your profile and suggests the perfect NGOs or volunteers for collaboration.",
  },
  {
    number: "3",
    title: "Connect & Collaborate",
    description: "Reach out, join campaigns, donate resources, or volunteer your time and expertise.",
  },
  {
    number: "4",
    title: "Track Your Impact",
    description: "Monitor your contributions, celebrate milestones, and share your impact story.",
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-24 sm:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            How KindBridge Works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Get started in minutes and begin making a difference today.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {index < steps.length - 1 && (
                <div className="absolute top-8 left-[calc(50%+2rem)] hidden h-0.5 w-[calc(100%-4rem)] bg-border lg:block" />
              )}
              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold">
                  {step.number}
                </div>
                <h3 className="mt-6 text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-xs">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
