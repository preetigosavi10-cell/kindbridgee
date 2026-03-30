"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Bell, 
  Heart, 
  Users, 
  Calendar, 
  MessageSquare, 
  CheckCircle,
  AlertCircle,
  Info,
  Trash2,
  Check,
  Settings
} from "lucide-react"
import Link from "next/link"

type NotificationType = "match" | "request" | "event" | "message" | "system"

interface Notification {
  id: number
  type: NotificationType
  title: string
  message: string
  time: string
  read: boolean
  actionUrl?: string
  actionLabel?: string
}

const mockNotifications: Notification[] = [
  {
    id: 1,
    type: "match",
    title: "New Match Found",
    message: "Food For All Foundation matches 95% with your skills. Check out their profile!",
    time: "2 minutes ago",
    read: false,
    actionUrl: "/matching",
    actionLabel: "View Match",
  },
  {
    id: 2,
    type: "event",
    title: "Event Reminder",
    message: "Tree Plantation Drive starts tomorrow at 6:00 AM. Don't forget to attend!",
    time: "1 hour ago",
    read: false,
    actionUrl: "/campaigns",
    actionLabel: "View Event",
  },
  {
    id: 3,
    type: "request",
    title: "Help Request Accepted",
    message: "Women Rise Together accepted your offer to help with their skill development program.",
    time: "3 hours ago",
    read: false,
    actionUrl: "/collaborate",
    actionLabel: "View Details",
  },
  {
    id: 4,
    type: "message",
    title: "New Message",
    message: "You have a new message from EduLight Initiative regarding volunteer opportunities.",
    time: "5 hours ago",
    read: true,
    actionUrl: "/chat",
    actionLabel: "Read Message",
  },
  {
    id: 5,
    type: "system",
    title: "Profile Verified",
    message: "Congratulations! Your volunteer profile has been verified. You now have access to all features.",
    time: "1 day ago",
    read: true,
  },
  {
    id: 6,
    type: "event",
    title: "Campaign Update",
    message: "Feed 1000 Families campaign has reached 75% of its goal. Only 244 families left!",
    time: "1 day ago",
    read: true,
    actionUrl: "/campaigns",
    actionLabel: "View Campaign",
  },
  {
    id: 7,
    type: "match",
    title: "Skill Match",
    message: "3 new NGOs are looking for volunteers with your teaching skills in Delhi.",
    time: "2 days ago",
    read: true,
    actionUrl: "/discover",
    actionLabel: "Explore",
  },
  {
    id: 8,
    type: "system",
    title: "Weekly Impact Report",
    message: "Your contributions helped provide 50 meals this week. View your full impact report.",
    time: "3 days ago",
    read: true,
    actionUrl: "/impact",
    actionLabel: "View Report",
  },
]

function getNotificationIcon(type: NotificationType) {
  switch (type) {
    case "match":
      return Heart
    case "request":
      return Users
    case "event":
      return Calendar
    case "message":
      return MessageSquare
    case "system":
      return Info
  }
}

function getNotificationColor(type: NotificationType) {
  switch (type) {
    case "match":
      return "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400"
    case "request":
      return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
    case "event":
      return "bg-accent/50 text-accent-foreground"
    case "message":
      return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
    case "system":
      return "bg-muted text-muted-foreground"
  }
}

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState(mockNotifications)
  const [filter, setFilter] = useState<"all" | "unread">("all")

  const unreadCount = notifications.filter(n => !n.read).length

  const filteredNotifications = filter === "all" 
    ? notifications 
    : notifications.filter(n => !n.read)

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })))
  }

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    ))
  }

  const deleteNotification = (id: number) => {
    setNotifications(notifications.filter(n => n.id !== id))
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-[73px]">
        <div className="mx-auto max-w-3xl px-6 py-12 lg:px-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Bell className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-2xl font-bold tracking-tight text-foreground">Notifications</h1>
                <p className="text-sm text-muted-foreground">
                  {unreadCount > 0 ? `${unreadCount} unread notifications` : "All caught up!"}
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              {unreadCount > 0 && (
                <Button variant="outline" size="sm" onClick={markAllAsRead}>
                  <Check className="h-4 w-4 mr-2" />
                  Mark all read
                </Button>
              )}
              <Button variant="ghost" size="icon">
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="all" onValueChange={(v) => setFilter(v as typeof filter)}>
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="unread" className="gap-2">
                Unread
                {unreadCount > 0 && (
                  <Badge variant="secondary" className="h-5 min-w-5 px-1.5">
                    {unreadCount}
                  </Badge>
                )}
              </TabsTrigger>
            </TabsList>

            <TabsContent value={filter} className="mt-6">
              {filteredNotifications.length === 0 ? (
                <Card>
                  <CardContent className="flex flex-col items-center justify-center py-12">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted mb-4">
                      <CheckCircle className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <h3 className="font-semibold text-foreground">All caught up!</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      No {filter === "unread" ? "unread " : ""}notifications to show.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <div className="space-y-3">
                  {filteredNotifications.map((notification) => {
                    const Icon = getNotificationIcon(notification.type)
                    return (
                      <Card 
                        key={notification.id} 
                        className={`transition-colors ${!notification.read ? "border-primary/30 bg-primary/5" : ""}`}
                      >
                        <CardContent className="pt-4 pb-4">
                          <div className="flex items-start gap-4">
                            <div className={`flex h-10 w-10 items-center justify-center rounded-lg shrink-0 ${getNotificationColor(notification.type)}`}>
                              <Icon className="h-5 w-5" />
                            </div>
                            <div className="flex-1 min-w-0 space-y-1">
                              <div className="flex items-start justify-between gap-2">
                                <div>
                                  <h3 className="font-medium text-foreground text-sm">
                                    {notification.title}
                                    {!notification.read && (
                                      <span className="ml-2 inline-block h-2 w-2 rounded-full bg-primary" />
                                    )}
                                  </h3>
                                  <p className="text-sm text-muted-foreground mt-0.5">
                                    {notification.message}
                                  </p>
                                </div>
                                <span className="text-xs text-muted-foreground whitespace-nowrap">
                                  {notification.time}
                                </span>
                              </div>
                              <div className="flex items-center gap-2 pt-2">
                                {notification.actionUrl && notification.actionLabel && (
                                  <Button size="sm" variant="outline" asChild>
                                    <Link href={notification.actionUrl}>
                                      {notification.actionLabel}
                                    </Link>
                                  </Button>
                                )}
                                {!notification.read && (
                                  <Button 
                                    size="sm" 
                                    variant="ghost"
                                    onClick={() => markAsRead(notification.id)}
                                  >
                                    <Check className="h-4 w-4 mr-1" />
                                    Mark read
                                  </Button>
                                )}
                                <Button 
                                  size="sm" 
                                  variant="ghost" 
                                  className="text-muted-foreground hover:text-destructive"
                                  onClick={() => deleteNotification(notification.id)}
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  )
}
