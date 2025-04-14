"use client"

import { useState } from "react"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import Sidebar from "./sidebar"

export default function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent side="left" className="p-0 w-72">
        <Sidebar />
      </SheetContent>
    </Sheet>
  )
}
