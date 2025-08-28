import { useEffect, useState } from "react"
import PageSelection from "./Page";
import LOGO from "./Logo";
import DropDownMenu from "./Menu";
import SearchBar from "./SearchBar";

export default function Navbar(){
    const[currentScroll,setcurrentScroll] = useState(0)
    useEffect(()=>{
        function handleScroll(){
            setcurrentScroll(window.scrollY)
        }

        window.addEventListener("scroll",handleScroll)
    },[])

    return <div className={`px-12 w-full top-0 fixed z-50 bg-[#f3f3f3] transition-all duration-200 ${currentScroll>50 ? "h-[15vh]":"h-[25vh]"}`}>
        <div className="flex justify-between items-center">
            <LOGO/>
            <PageSelection/>
            <DropDownMenu/>
        </div>
        <div className="flex justify-center">
            <SearchBar/>
        </div>
        {/* <div className={`${currentScroll > 100 ? "h-[15vh]" : "h-[25vh]"}`} /> */}
    </div>
}