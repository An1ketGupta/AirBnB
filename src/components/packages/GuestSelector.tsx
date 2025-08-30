"use client"
import { useState } from "react"
import { Minus, Plus } from "lucide-react"

interface GuestCounterProps {
  label: string
  description?: string
}

function GuestCounter({ label, description }: GuestCounterProps) {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)
  const decrement = () => count > 0 && setCount(count - 1)

  return (
    <div className="flex items-center justify-between py-4 border-b">
      <div>
        <p className="font-medium text-gray-800">{label}</p>
        {description && <p className="text-sm text-gray-500">{description}</p>}
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={decrement}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-400 text-gray-600 disabled:opacity-40"
          disabled={count === 0}
        >
          <Minus className="h-4 w-4" />
        </button>
        <span className="w-5 text-center font-medium">{count}</span>
        <button
          onClick={increment}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-400 text-gray-600"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}

export default function GuestSelector() {
  return (
    <div className="w-[350px] rounded-xl border bg-white p-4 shadow-md">
      <GuestCounter label="Adults" description="Ages 13 or above" />
      <GuestCounter label="Children" description="Ages 2–12" />
      <GuestCounter label="Infants" description="Under 2" />
      <GuestCounter label="Pets" description="Bringing a service animal?" />
    </div>
  )
}
