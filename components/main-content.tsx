"use client"

import { useState } from "react"
import {
  Hash,
  Bell,
  Pin,
  Users,
  Search,
  Inbox,
  BugIcon as QuestionMark,
  PlusCircle,
  Gift,
  GiftIcon as GIF,
  Smile,
  Send,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

type Message = {
  id: string
  user: {
    name: string
    avatar: string
    color: string
  }
  content: string
  timestamp: string
}

export default function MainContent() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      user: { name: "User1", avatar: "/placeholder.svg?height=40&width=40", color: "bg-red-500" },
      content: "Hey everyone! Welcome to the channel.",
      timestamp: "12:30 PM",
    },
    {
      id: "2",
      user: { name: "User2", avatar: "/placeholder.svg?height=40&width=40", color: "bg-blue-500" },
      content: "Thanks for having me here!",
      timestamp: "12:32 PM",
    },
    {
      id: "3",
      user: { name: "User3", avatar: "/placeholder.svg?height=40&width=40", color: "bg-green-500" },
      content: "I have a question about the new features. When will they be released?",
      timestamp: "12:35 PM",
    },
    {
      id: "4",
      user: { name: "User1", avatar: "/placeholder.svg?height=40&width=40", color: "bg-red-500" },
      content: "We're planning to release them next week. Stay tuned for updates!",
      timestamp: "12:37 PM",
    },
    {
      id: "5",
      user: { name: "User4", avatar: "/placeholder.svg?height=40&width=40", color: "bg-purple-500" },
      content: "Awesome! Looking forward to it.",
      timestamp: "12:40 PM",
    },
  ])

  return (
    <main className="flex-1 flex flex-col bg-gray-700 h-[calc(100vh-4rem)]">
      <div className="h-12 border-b border-gray-600 flex items-center px-4 justify-between">
        <div className="flex items-center">
          <Hash className="h-5 w-5 text-gray-400 mr-2" />
          <span className="font-bold text-white">general</span>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
            <Pin className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
            <Users className="h-5 w-5" />
          </Button>
          <div className="relative hidden md:block">
            <Input placeholder="Search" className="h-7 w-36 bg-gray-900 border-none text-sm" />
            <Search className="absolute right-2 top-1.5 h-4 w-4 text-gray-400" />
          </div>
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
            <Inbox className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
            <QuestionMark className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className="flex items-start space-x-3">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${message.user.color}`}>
              <span className="text-white font-bold">{message.user.name.charAt(0)}</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center">
                <span className="font-bold text-white">{message.user.name}</span>
                <span className="ml-2 text-xs text-gray-400">{message.timestamp}</span>
              </div>
              <p className="text-gray-200">{message.content}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4">
        <div className="relative bg-gray-600 rounded-lg">
          <div className="absolute left-3 top-2 flex space-x-1">
            <Button variant="ghost" size="icon" className="h-7 w-7 text-gray-300 hover:text-white">
              <PlusCircle className="h-5 w-5" />
            </Button>
          </div>
          <Input
            placeholder="Message #general"
            className="pl-12 pr-24 py-3 bg-transparent border-none text-white focus-visible:ring-0"
          />
          <div className="absolute right-3 top-2 flex space-x-1">
            <Button variant="ghost" size="icon" className="h-7 w-7 text-gray-300 hover:text-white">
              <Gift className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="h-7 w-7 text-gray-300 hover:text-white">
              <GIF className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="h-7 w-7 text-gray-300 hover:text-white">
              <Smile className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="h-7 w-7 text-gray-300 hover:text-white">
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
