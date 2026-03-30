"use client"

import { useState, useRef, useEffect } from "react"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { 
  Send, 
  Bot, 
  User, 
  Sparkles,
  RefreshCw,
  ArrowLeft
} from "lucide-react"
import Link from "next/link"

interface Message {
  id: number
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

const initialMessages: Message[] = [
  {
    id: 1,
    role: "assistant",
    content: "Hello! I'm KindBot, your AI assistant for KindBridge. I can help you find NGOs, volunteer opportunities, or answer questions about our platform. How can I assist you today?",
    timestamp: new Date(),
  },
]

const suggestedQuestions = [
  "Find NGOs working on education near me",
  "How do I start volunteering?",
  "What are the trending campaigns?",
  "How can my business donate food?",
]

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const scrollAreaRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
  }, [messages])

  const handleSend = async (content?: string) => {
    const messageContent = content || input
    if (!messageContent.trim()) return

    const userMessage: Message = {
      id: messages.length + 1,
      role: "user",
      content: messageContent,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const responses: Record<string, string> = {
        "find ngos working on education near me": "I found several education-focused NGOs near you:\n\n1. **EduLight Initiative** (Delhi) - Rating: 4.9/5 - Provides quality education to underprivileged children\n\n2. **Learn & Grow Foundation** (Noida) - Rating: 4.7/5 - Focuses on digital literacy\n\n3. **Bright Future Academy** (Gurgaon) - Rating: 4.8/5 - Scholarship programs for deserving students\n\nWould you like me to help you connect with any of these organizations?",
        "how do i start volunteering?": "Getting started as a volunteer is easy! Here's how:\n\n1. **Create your profile** - Sign up and add your skills, interests, and availability\n\n2. **Get matched** - Our AI will suggest NGOs that match your profile\n\n3. **Connect** - Reach out to NGOs you're interested in\n\n4. **Start making impact** - Join events, campaigns, or regular volunteering\n\nWould you like me to help you set up your volunteer profile?",
        "what are the trending campaigns?": "Here are the top trending campaigns right now:\n\n1. **Feed 1000 Families** by Food For All Foundation - 76% complete\n\n2. **Plant 10000 Trees** by Green Earth Warriors - 42% complete\n\n3. **Education for All** by EduLight Initiative - 62% complete\n\nThese campaigns have high engagement and are making significant impact. Would you like to join any of them?",
        "how can my business donate food?": "Great initiative! Here's how your business can donate food:\n\n1. **Register as a Business** - Create a business account on KindBridge\n\n2. **Set up donations** - Use our Restaurant Donation Dashboard to list surplus food\n\n3. **Schedule pickups** - NGOs will coordinate pickup times that work for you\n\n4. **Track impact** - See how many meals your donations have provided\n\nWe also offer food safety guidelines and can connect you with verified NGOs. Want me to guide you through the registration?",
      }

      const normalizedInput = messageContent.toLowerCase().trim()
      const matchedResponse = Object.entries(responses).find(([key]) => 
        normalizedInput.includes(key) || key.includes(normalizedInput)
      )

      const assistantMessage: Message = {
        id: messages.length + 2,
        role: "assistant",
        content: matchedResponse?.[1] || "That's a great question! I can help you with:\n\n- Finding NGOs and volunteer opportunities\n- Understanding how KindBridge works\n- Navigating campaigns and events\n- Setting up donations for businesses\n\nCould you provide more details about what you're looking for?",
        timestamp: new Date(),
      }

      setIsTyping(false)
      setMessages((prev) => [...prev, assistantMessage])
    }, 1500)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const handleReset = () => {
    setMessages(initialMessages)
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 pt-[73px] flex flex-col">
        <div className="border-b border-border bg-muted/30">
          <div className="mx-auto max-w-3xl px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" asChild>
                <Link href="/">
                  <ArrowLeft className="h-4 w-4" />
                </Link>
              </Button>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <h1 className="font-semibold text-foreground">KindBot</h1>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <Sparkles className="h-3 w-3" />
                    AI Assistant
                  </p>
                </div>
              </div>
            </div>
            <Button variant="ghost" size="sm" onClick={handleReset}>
              <RefreshCw className="h-4 w-4 mr-2" />
              New Chat
            </Button>
          </div>
        </div>

        <div className="flex-1 flex flex-col max-w-3xl mx-auto w-full">
          <ScrollArea className="flex-1 px-6" ref={scrollAreaRef}>
            <div className="py-6 space-y-6">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${message.role === "user" ? "justify-end" : ""}`}
                >
                  {message.role === "assistant" && (
                    <Avatar className="h-8 w-8 shrink-0">
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        <Bot className="h-4 w-4" />
                      </AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                      message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap leading-relaxed">{message.content}</p>
                  </div>
                  {message.role === "user" && (
                    <Avatar className="h-8 w-8 shrink-0">
                      <AvatarFallback>
                        <User className="h-4 w-4" />
                      </AvatarFallback>
                    </Avatar>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-3">
                  <Avatar className="h-8 w-8 shrink-0">
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      <Bot className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="bg-muted rounded-2xl px-4 py-3">
                    <div className="flex gap-1">
                      <span className="h-2 w-2 rounded-full bg-muted-foreground/50 animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="h-2 w-2 rounded-full bg-muted-foreground/50 animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="h-2 w-2 rounded-full bg-muted-foreground/50 animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </div>
              )}

              {messages.length === 1 && (
                <div className="pt-4">
                  <p className="text-sm text-muted-foreground mb-3">Suggested questions:</p>
                  <div className="flex flex-wrap gap-2">
                    {suggestedQuestions.map((question) => (
                      <Button
                        key={question}
                        variant="outline"
                        size="sm"
                        className="text-xs"
                        onClick={() => handleSend(question)}
                      >
                        {question}
                      </Button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          <div className="border-t border-border p-4">
            <div className="flex gap-2">
              <Input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1"
                disabled={isTyping}
              />
              <Button 
                onClick={() => handleSend()} 
                disabled={!input.trim() || isTyping}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground text-center mt-2">
              KindBot can make mistakes. Verify important information.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
