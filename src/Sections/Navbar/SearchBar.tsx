import { useState } from "react"

export default function SearchBar(){
    const [datesSelector, setDateselector] = useState(false)

    return <div className="bg-white border-1 h-[9vh] md:w-[850px] w-full rounded-full my-2 shadow-lg/0.2 flex">
        
        {/* Search for the destination */}
        <div className="md:w-[260px] cursor-pointer w-[30vw] h-full rounded-full px-[2vw] hover:bg-neutral-200 flex items-center">
            <div className="text-sm font-medium">
                Where
                <input className="text-neutral-500 cursor-pointer outline-none placeholder-neutral-500" placeholder="Search Destinations"/>
            </div>
        </div>
        
        {/* Check In dates */}
        <div onClick={()=>{
            setDateselector(true)
        }} className={`md:w-[170px] text-sm font-medium w-[30vw] h-full rounded-full px-[2vw] hover:bg-neutral-200 cursor-pointer flex items-center`}>
            <div>
                <div>
                    Check In 
                </div>
                <div className="text-neutral-500">
                    Add dates
                </div>
            </div>
        </div>

        {/* Check Out dates */}
        <div className="md:w-[170px] text-sm font-medium cursor-pointer w-[30vw] h-full rounded-full px-[2vw] hover:bg-neutral-200 flex items-center">
            <div>
                <div>
                    Check In 
                </div>
                <div className="text-neutral-500">
                    Add dates
                </div>
            </div>
        </div>

        {/* Add guests */}
        <div className="md:w-[260px] text-sm font-medium w-[30vw] h-full rounded-full cursor-pointer pl-[2vw] pr-[1vw] hover:bg-neutral-200 flex items-center">
            <div className="md:w-[200px] w-[20vw]">
                <div >
                    Who
                </div>
                <div className="text-neutral-500">
                    Add Guests
                </div>
            </div>
            <div className="hover:bg-red-700 bg-red-600 h-12 w-14 flex items-center justify-center rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="white" className="size-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </div>
        </div>
    </div>
}