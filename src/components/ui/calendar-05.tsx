"use client"

import * as React from "react"
import { DateLib, type DateRange } from "react-day-picker"

import { Calendar } from "@/components/ui/calendar"

export default function Calendar05() {
  const today = new Date();
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>({
    from: new Date(today),
    to: new Date(2025, 6, 15),
  })

  return (
    <Calendar
      mode="range"
      defaultMonth={dateRange?.from}
      selected={dateRange}
      onSelect={setDateRange}
      disabled={{
        before: new Date(today),
      }}
      numberOfMonths={2}
      className="relative mt-10 rounded-lg -left-40 border shadow-sm"
    />
  )
}
