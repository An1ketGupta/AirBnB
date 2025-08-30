import Calendar05 from "@/components/ui/calendar-05"
import { useState } from "react"
import Wherebox from "@/components/packages/SearchWhere"
import GuestSelector from "@/components/packages/GuestSelector"

export default function SearchBar() {
  const [currentsearch, setcurrentsearch] = useState("")
  const [checkIn, setCheckIn] = useState<Date | null>(null)
  const [checkOut, setCheckOut] = useState<Date | null>(null)

  return (
    <div className="bg-white border h-[9vh] md:w-[650px] w-full rounded-full my-2 shadow-lg flex overflow-visible relative">
      {/* Search for the destination */}
      <div
        onClick={() => setcurrentsearch("where")}
        className="md:w-[200px] cursor-pointer justify-center flex-col w-[30vw] h-full rounded-full px-[2vw] hover:bg-neutral-200 flex items-center"
      >
        <div className="text-sm font-medium w-full">
          Where
          <input
            className="text-neutral-500 cursor-pointer outline-none placeholder-neutral-500 w-full bg-transparent"
            placeholder="Search Destinations"
          />
        </div>
        {currentsearch === "where" && (
          <div className="absolute top-[9vh] left-0 z-50">
            <Wherebox />
          </div>
        )}
      </div>

      {/* Check In dates */}
      <div
        onClick={() => setcurrentsearch("checkin")}
        className="md:w-[175px] text-sm font-medium w-[30vw] h-full rounded-full px-[2vw] hover:bg-neutral-200 cursor-pointer flex items-center"
      >
        <div>
          <div>When</div>
          <div className="text-neutral-500">
            {checkIn ? checkIn.toDateString() : "Add dates"}
          </div>
        </div>
        {currentsearch === "checkin" && (
          <div className="absolute top-[9vh] left-1/4 z-50">
            <Calendar05
              mode="checkin"
              checkIn={checkIn}
              setCheckIn={setCheckIn}
              setcurrentsearch={setcurrentsearch}
            />
          </div>
        )}
      </div>

      {/* Add guests */}
      <div
        onClick={() => setcurrentsearch("guest")}
        className="md:w-[265px] text-sm font-medium w-[30vw] rounded-full cursor-pointer flex flex-col pl-[2vw] pr-[1vw] hover:bg-neutral-200 relative"
      >
        <div className="flex items-center h-full">
          <div className="md:w-[200px] w-[20vw]">
            <div>Who</div>
            <div className="text-neutral-500">Add Guests</div>
          </div>
          <div className="hover:bg-red-700 bg-red-600 h-12 w-16 flex items-center justify-center rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="white"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
        </div>
        {currentsearch === "guest" && (
          <div className="absolute top-[9vh] right-0 z-50">
            <GuestSelector />
          </div>
        )}
      </div>
    </div>
  )
}
