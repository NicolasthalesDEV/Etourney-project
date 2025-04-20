"use client"

import { useState } from "react"
import { Hash, Plus, Mic, Headphones, Settings, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type Channel = {
  id: string
  name: string
  unread: boolean
  active?: boolean
}

type Category = {
  id: string
  name: string
  channels: Channel[]
  collapsed?: boolean
}

export default function Sidebar() {
  const [categories, setCategories] = useState<Category[]>([
    {
      id: "1",
      name: "Text Channels",
      channels: [
        { id: "1", name: "general", unread: true, active: true },
        { id: "2", name: "help", unread: false },
        { id: "3", name: "announcements", unread: true },
      ],
    },
    {
      id: "2",
      name: "Voice Channels",
      channels: [
        { id: "4", name: "General", unread: false },
        { id: "5", name: "Gaming", unread: false },
        { id: "6", name: "Music", unread: false },
      ],
      collapsed: true,
    },
  ])

  const toggleCategory = (categoryId: string) => {
    setCategories(
      categories.map((category) =>
        category.id === categoryId ? { ...category, collapsed: !category.collapsed } : category,
      ),
    )
  }

  return (
    <aside className="w-72 bg-gray-800 text-white hidden md:flex flex-col h-[calc(100vh-4rem)]">
      <div className="p-4 border-b border-gray-700 font-bold flex items-center justify-between">
        <h2>Server Name</h2>
        <Button variant="ghost" size="icon" className="h-5 w-5">
          <ChevronDown className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto">
        {categories.map((category) => (
          <div key={category.id} className="mb-2">
            <div
              className="px-4 py-2 text-xs font-semibold text-gray-400 flex items-center cursor-pointer hover:text-gray-200"
              onClick={() => toggleCategory(category.id)}
            >
              <ChevronDown className={cn("h-3 w-3 mr-1 transition-transform", category.collapsed && "-rotate-90")} />
              {category.name.toUpperCase()}
            </div>

            {!category.collapsed && (
              <div className="space-y-1 px-2">
                {category.channels.map((channel) => (
                  <div
                    key={channel.id}
                    className={cn(
                      "flex items-center px-2 py-1 rounded group hover:bg-gray-700 cursor-pointer",
                      channel.active && "bg-gray-700 text-white",
                    )}
                  >
                    <Hash className="h-5 w-5 mr-2 text-gray-400 group-hover:text-gray-200" />
                    <span
                      className={cn(
                        "text-gray-400 group-hover:text-gray-200",
                        channel.active && "text-white font-medium",
                        channel.unread && "text-white font-medium",
                      )}
                    >
                      {channel.name}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="p-3 bg-gray-900 flex items-center justify-between">
        <div className="flex items-center">
          <div className="h-8 w-8 rounded-full bg-indigo-500 flex items-center justify-center mr-2">
            <span className="font-medium text-sm">US</span>
          </div>
          <div>
            <div className="text-sm font-medium">Username</div>
            <div className="text-xs text-gray-400">#1234</div>
          </div>
        </div>
        <div className="flex space-x-1">
          <Button variant="ghost" size="icon" className="h-7 w-7">
            <Mic className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-7 w-7">
            <Headphones className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-7 w-7">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Button className="absolute bottom-6 right-6 p-3 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg md:hidden">
        <Plus className="h-5 w-5" />
      </Button>
    </aside>
  )
}
