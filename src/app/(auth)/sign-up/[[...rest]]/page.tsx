"use client"

import { SignUp } from "@clerk/nextjs"

export default function Page() {
  return (
    <div className="w-full flex-1 flex items-center justify-center">
      <SignUp />
    </div>
  )
}