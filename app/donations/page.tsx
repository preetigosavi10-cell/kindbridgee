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
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { 
  Plus, 
  Utensils, 
  Clock, 
  MapPin, 
  CalendarIcon,
  Package,
  Truck,
  CheckCircle,
  AlertCircle
} from "lucide-react"
import { format } from "date-fns"

const mockDonations = [
  {
    id: 1,
    foodType: "Cooked Meals",
    quantity: "150 meals",
    description: "Leftover catering food from corporate event",
    pickupLocation: "123 Business Park, Mumbai",
    pickupTime: "Today, 2:00 PM - 4:00 PM",
    status: "pending",
    addedAt: "1 hour ago",
  },
  {
    id: 2,
    foodType: "Fresh Produce",
    quantity: "50 kg",
    description: "Vegetables and fruits nearing expiry date",
    pickupLocation: "456 Market Street, Mumbai",
    pickupTime: "Today, 6:00 PM - 8:00 PM",
    status: "scheduled",
    addedAt: "3 hours ago",
  },
  {
    id: 3,
    foodType: "Packaged Food",
    quantity: "200 packets",
    description: "Biscuits and snacks from surplus inventory",
    pickupLocation: "789 Industrial Area, Mumbai",
    pickupTime: "Tomorrow, 10:00 AM - 12:00 PM",
    status: "completed",
    addedAt: "Yesterday",
  },
]

function getStatusBadge(status: string) {
  switch (status) {
    case "pending":
      return <Badge variant="secondary" className="gap-1"><AlertCircle className="h-3 w-3" /> Pending Pickup</Badge>
    case "scheduled":
      return <Badge className="gap-1 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"><Truck className="h-3 w-3" /> Scheduled</Badge>
    case "completed":
      return <Badge className="gap-1 bg-primary/20 text-primary"><CheckCircle className="h-3 w-3" /> Completed</Badge>
    default:
      return null
  }
}

export default function DonationsPage() {
  const [showForm, setShowForm] = useState(false)
  const [date, setDate] = useState<Date>()

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-[73px]">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          {/* Header */}
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-foreground">Restaurant Donation Dashboard</h1>
              <p className="mt-2 text-muted-foreground">
                Manage your surplus food donations and schedule pickups
              </p>
            </div>
            <Button onClick={() => setShowForm(!showForm)}>
              <Plus className="h-4 w-4 mr-2" />
              Add Donation
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Utensils className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">1,250</p>
                    <p className="text-xs text-muted-foreground">Meals Donated</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/50 text-accent-foreground">
                    <Package className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">45</p>
                    <p className="text-xs text-muted-foreground">Total Donations</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                    <Truck className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">3</p>
                    <p className="text-xs text-muted-foreground">Pending Pickups</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">42</p>
                    <p className="text-xs text-muted-foreground">Completed</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Add Donation Form */}
          {showForm && (
            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Add Surplus Food</CardTitle>
                <CardDescription>
                  Provide details about the food you want to donate
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="foodType">Food Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select food type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cooked">Cooked Meals</SelectItem>
                          <SelectItem value="produce">Fresh Produce</SelectItem>
                          <SelectItem value="packaged">Packaged Food</SelectItem>
                          <SelectItem value="bakery">Bakery Items</SelectItem>
                          <SelectItem value="beverages">Beverages</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="quantity">Quantity</Label>
                      <Input id="quantity" placeholder="e.g., 100 meals, 50 kg" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea 
                      id="description" 
                      placeholder="Describe the food items, any special handling requirements..."
                      rows={3}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="pickupLocation">Pickup Location</Label>
                    <Input id="pickupLocation" placeholder="Full address for pickup" />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label>Pickup Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" className="w-full justify-start text-left font-normal">
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : "Pick a date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pickupTime">Preferred Time Window</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="morning">9:00 AM - 12:00 PM</SelectItem>
                          <SelectItem value="afternoon">12:00 PM - 3:00 PM</SelectItem>
                          <SelectItem value="evening">3:00 PM - 6:00 PM</SelectItem>
                          <SelectItem value="night">6:00 PM - 9:00 PM</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button type="submit">Schedule Donation</Button>
                    <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
                      Cancel
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}

          {/* Donations List */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">Your Donations</h2>
            <div className="space-y-4">
              {mockDonations.map((donation) => (
                <Card key={donation.id}>
                  <CardContent className="pt-6">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                          <Utensils className="h-6 w-6" />
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="font-semibold text-foreground">{donation.foodType}</h3>
                            <Badge variant="outline">{donation.quantity}</Badge>
                            {getStatusBadge(donation.status)}
                          </div>
                          <p className="text-sm text-muted-foreground">{donation.description}</p>
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground pt-2">
                            <span className="flex items-center gap-1">
                              <MapPin className="h-3.5 w-3.5" />
                              {donation.pickupLocation}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-3.5 w-3.5" />
                              {donation.pickupTime}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2 sm:flex-col">
                        <Button size="sm" variant="outline">Edit</Button>
                        {donation.status === "pending" && (
                          <Button size="sm" variant="destructive">Cancel</Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
