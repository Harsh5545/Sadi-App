"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { MessageSquare, Send, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar } from "@/components/ui/avatar"

interface Message {
  id: string
  content: string
  sender: "user" | "bot"
  timestamp: Date
}

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content: "Hello! Welcome to Alberow. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()

    if (!inputValue.trim()) return

    // Add user message
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")

    // Simulate bot response (in a real app, this would call an API)
    setTimeout(() => {
      const botResponse = getBotResponse(inputValue)
      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        content: botResponse,
        sender: "bot",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, botMessage])
    }, 1000)
  }

  // Simple bot response logic (would be replaced with AI in a real app)
  const getBotResponse = (message: string) => {
    const lowerMessage = message.toLowerCase()

    if (lowerMessage.includes("hello") || lowerMessage.includes("hi")) {
      return "Hello! How can I assist you with our saree collection today?"
    } else if (lowerMessage.includes("price") || lowerMessage.includes("cost")) {
      return "Our sarees range from ₹1,999 to ₹25,999 depending on the fabric, design, and craftsmanship. Is there a specific type you're interested in?"
    } else if (lowerMessage.includes("shipping") || lowerMessage.includes("delivery")) {
      return "We offer free shipping on all orders above ₹999. Standard delivery takes 3-5 business days, and express delivery (₹199 extra) takes 1-2 business days."
    } else if (lowerMessage.includes("return") || lowerMessage.includes("exchange")) {
      return "We have a 30-day return and exchange policy for unused items in their original packaging. Please note that customized items cannot be returned unless defective."
    } else if (lowerMessage.includes("material") || lowerMessage.includes("fabric")) {
      return "We offer sarees in various fabrics including silk (Banarasi, Kanjivaram, Tussar), cotton, georgette, chiffon, and linen. Each has unique properties and is suitable for different occasions."
    } else if (lowerMessage.includes("wedding") || lowerMessage.includes("bridal")) {
      return "Our wedding collection features exquisite Banarasi and Kanjivaram silk sarees with rich zari work, perfect for brides and wedding guests. Would you like to see our latest wedding collection?"
    } else {
      return "Thank you for your message. If you have specific questions about our products, shipping, returns, or need styling advice, please let me know. I'm here to help!"
    }
  }

  return (
    <>
      {/* Chat button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-4 right-4 z-40 h-14 w-14 rounded-full bg-rose-600 p-0 shadow-lg hover:bg-rose-700 ${
          isOpen ? "hidden" : "flex"
        }`}
      >
        <MessageSquare className="h-6 w-6" />
        <span className="sr-only">Open chat</span>
      </Button>

      {/* Chat widget */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 z-40 flex h-[500px] w-[350px] flex-col rounded-lg border bg-white shadow-xl dark:bg-gray-900">
          {/* Header */}
          <div className="flex items-center justify-between border-b bg-rose-600 p-4 text-white">
            <div className="flex items-center">
              <Avatar className="h-8 w-8 border-2 border-white">
                <div className="flex h-full w-full items-center justify-center bg-rose-700 text-xs font-medium text-white">
                  AI
                </div>
              </Avatar>
              <div className="ml-3">
                <h3 className="font-medium">Alberow Assistant</h3>
                <p className="text-xs">Online</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-rose-700"
            >
              <X className="h-5 w-5" />
              <span className="sr-only">Close chat</span>
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-4 flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.sender === "user" ? "bg-rose-600 text-white" : "bg-gray-100 dark:bg-gray-800"
                  }`}
                >
                  <p>{message.content}</p>
                  <p
                    className={`mt-1 text-right text-xs ${message.sender === "user" ? "text-rose-100" : "text-gray-500"}`}
                  >
                    {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSendMessage} className="border-t p-4">
            <div className="flex items-center">
              <Input
                type="text"
                placeholder="Type your message..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-1"
              />
              <Button type="submit" size="icon" className="ml-2 bg-rose-600 hover:bg-rose-700">
                <Send className="h-4 w-4" />
                <span className="sr-only">Send message</span>
              </Button>
            </div>
          </form>
        </div>
      )}
    </>
  )
}
