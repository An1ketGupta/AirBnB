import { useEffect, useState } from "react"
import PageSelection from "./Page";
import LOGO from "./Logo";
import DropDownMenu from "./Menu";

export default function Navbar(){
    const[currentScroll,setcurrentScroll] = useState(0)
    useEffect(()=>{
        function handleScroll(){
            setcurrentScroll(window.scrollY)
        }

        window.addEventListener("scroll",handleScroll)
    },[])

    return <div className={`mx-auto flex justify-between items-center w-full top-0 fixed z-50 bg-[#f3f3f3] transition-all duration-200 ease-in-out ${currentScroll>50 ? "h-[15vh]":"h-[25vh]"}`}>
        <LOGO/>
        <PageSelection/>
        <DropDownMenu/>
        {/* <div className={`${currentScroll > 100 ? "h-[15vh]" : "h-[25vh]"}`} /> */}
    </div>
}