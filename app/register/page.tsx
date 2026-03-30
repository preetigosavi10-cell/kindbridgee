"use client"

import { useState, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Users, Heart, Building2, ArrowLeft, ArrowRight } from "lucide-react"

type Role = "volunteer" | "ngo" | "business" | null

const roles = [
  {
    id: "volunteer" as const,
    title: "Volunteer",
    description: "Share your skills and time to support meaningful causes",
    icon: Users,
  },
  {
    id: "ngo" as const,
    title: "NGO",
    description: "Connect with volunteers and partners to amplify your impact",
    icon: Heart,
  },
  {
    id: "business" as const,
    title: "Business",
    description: "Donate surplus goods and build your CSR portfolio",
    icon: Building2,
  },
]

const skillOptions = [
  "Teaching & Education",
  "Healthcare & Medical",
  "Technology & IT",
  "Marketing & Communications",
  "Legal & Advocacy",
  "Finance & Accounting",
  "Event Planning",
  "Counseling & Support",
  "Manual Labor",
  "Arts & Creative",
]

const causeOptions = [
  "Education",
  "Healthcare",
  "Hunger & Food Security",
  "Environment",
  "Animal Welfare",
  "Women Empowerment",
  "Child Welfare",
  "Elderly Care",
  "Disability Support",
  "Disaster Relief",
]

const serviceOptions = [
  "Food Donation",
  "Financial Support",
  "Pro-Bono Services",
  "Employee Volunteering",
  "Event Sponsorship",
  "Equipment Donation",
  "Transportation",
  "Venue Support",
]

function RegisterContent() {
  const searchParams = useSearchParams()
  const initialRole = searchParams.get("role") as Role
  const [selectedRole, setSelectedRole] = useState<Role>(initialRole)
  const [step, setStep] = useState(initialRole ? 2 : 1)

  const handleRoleSelect = (role: Role) => {
    setSelectedRole(role)
    setStep(2)
  }

  const handleBack = () => {
    setStep(1)
    setSelectedRole(null)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-[73px]">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
          {step === 1 && (
            <div className="space-y-8">
              <div className="text-center">
                <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Join KindBridge
                </h1>
                <p className="mt-4 text-lg text-muted-foreground">
                  Choose how you want to make a difference
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {roles.map((role) => (
                  <button
                    key={role.id}
                    onClick={() => handleRoleSelect(role.id)}
                    className="group relative rounded-2xl border border-border bg-card p-6 text-left transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <role.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-foreground">{role.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {role.description}
                    </p>
                  </button>
                ))}
              </div>

              <p className="text-center text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link href="/login" className="font-medium text-primary hover:underline">
                  Sign in
                </Link>
              </p>
            </div>
          )}

          {step === 2 && selectedRole && (
            <Card>
              <CardHeader>
                <Button variant="ghost" size="sm" className="w-fit -ml-2 mb-2" onClick={handleBack}>
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </Button>
                <CardTitle>
                  {selectedRole === "volunteer" && "Create Volunteer Account"}
                  {selectedRole === "ngo" && "Register Your NGO"}
                  {selectedRole === "business" && "Register Your Business"}
                </CardTitle>
                <CardDescription>
                  Fill in your details to get started
                </CardDescription>
              </CardHeader>
              <CardContent>
                {selectedRole === "volunteer" && <VolunteerForm />}
                {selectedRole === "ngo" && <NGOForm />}
                {selectedRole === "business" && <BusinessForm />}
              </CardContent>
            </Card>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}

function VolunteerForm() {
  return (
    <form className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input id="firstName" placeholder="John" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input id="lastName" placeholder="Doe" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="john@example.com" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" placeholder="Create a password" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="location">Location</Label>
        <Input id="location" placeholder="City, Country" />
      </div>

      <div className="space-y-2">
        <Label>Skills (select all that apply)</Label>
        <div className="grid gap-3 sm:grid-cols-2">
          {skillOptions.map((skill) => (
            <div key={skill} className="flex items-center space-x-2">
              <Checkbox id={skill} />
              <label htmlFor={skill} className="text-sm text-foreground cursor-pointer">
                {skill}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="availability">Availability</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select your availability" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="weekdays">Weekdays</SelectItem>
            <SelectItem value="weekends">Weekends</SelectItem>
            <SelectItem value="evenings">Evenings</SelectItem>
            <SelectItem value="flexible">Flexible</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="bio">About You</Label>
        <Textarea id="bio" placeholder="Tell us a bit about yourself and why you want to volunteer..." rows={4} />
      </div>

      <Button type="submit" className="w-full gap-2">
        Create Account
        <ArrowRight className="h-4 w-4" />
      </Button>
    </form>
  )
}

function NGOForm() {
  return (
    <form className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="orgName">Organization Name</Label>
        <Input id="orgName" placeholder="Your NGO name" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="contactName">Contact Person</Label>
          <Input id="contactName" placeholder="Full name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="contactEmail">Contact Email</Label>
          <Input id="contactEmail" type="email" placeholder="contact@ngo.org" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" placeholder="Create a password" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="location">Location</Label>
        <Input id="location" placeholder="City, Country" />
      </div>

      <div className="space-y-2">
        <Label>Primary Cause</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select your primary cause" />
          </SelectTrigger>
          <SelectContent>
            {causeOptions.map((cause) => (
              <SelectItem key={cause} value={cause.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}>
                {cause}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="urgency">Current Urgency Level</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select urgency level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="low">Low - General support needed</SelectItem>
            <SelectItem value="medium">Medium - Active campaign</SelectItem>
            <SelectItem value="high">High - Urgent assistance needed</SelectItem>
            <SelectItem value="critical">Critical - Emergency response</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Organization Description</Label>
        <Textarea id="description" placeholder="Tell us about your organization, mission, and how volunteers can help..." rows={4} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="website">Website (optional)</Label>
        <Input id="website" placeholder="https://your-ngo.org" />
      </div>

      <Button type="submit" className="w-full gap-2">
        Register NGO
        <ArrowRight className="h-4 w-4" />
      </Button>
    </form>
  )
}

function BusinessForm() {
  return (
    <form className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="businessName">Business Name</Label>
        <Input id="businessName" placeholder="Your business name" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="contactName">Contact Person</Label>
          <Input id="contactName" placeholder="Full name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="contactEmail">Contact Email</Label>
          <Input id="contactEmail" type="email" placeholder="contact@business.com" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" placeholder="Create a password" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="location">Location</Label>
        <Input id="location" placeholder="City, Country" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="industry">Industry</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select your industry" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="restaurant">Restaurant / Food Service</SelectItem>
            <SelectItem value="retail">Retail</SelectItem>
            <SelectItem value="technology">Technology</SelectItem>
            <SelectItem value="healthcare">Healthcare</SelectItem>
            <SelectItem value="finance">Finance</SelectItem>
            <SelectItem value="manufacturing">Manufacturing</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label>Services You Can Offer</Label>
        <div className="grid gap-3 sm:grid-cols-2">
          {serviceOptions.map((service) => (
            <div key={service} className="flex items-center space-x-2">
              <Checkbox id={service} />
              <label htmlFor={service} className="text-sm text-foreground cursor-pointer">
                {service}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <Label>Food Donation Availability</Label>
        <div className="flex items-center space-x-2">
          <Checkbox id="foodDonation" />
          <label htmlFor="foodDonation" className="text-sm text-foreground cursor-pointer">
            We have surplus food available for donation
          </label>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">About Your Business</Label>
        <Textarea id="description" placeholder="Tell us about your business and how you would like to contribute..." rows={4} />
      </div>

      <Button type="submit" className="w-full gap-2">
        Register Business
        <ArrowRight className="h-4 w-4" />
      </Button>
    </form>
  )
}

export default function RegisterPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Loading...</div>
      </div>
    }>
      <RegisterContent />
    </Suspense>
  )
}
