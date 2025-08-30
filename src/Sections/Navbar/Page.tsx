
import { useEffect, useState } from "react";
import Tabselector from "@/components/packages/Tabselector";

export default function PageSelection(){
    const[currentscroll,setcurrentScroll] = useState(0)
    useEffect(()=>{
        function handleScroll(){
            setcurrentScroll(window.scrollY)
        }

        window.addEventListener("scroll",handleScroll)
    },[])
    const[currenttab,setcurrenttab] = useState<string|null>("Home")
    return <div className={`flex gap-6 transition-all ${currentscroll>50?"relative -top-100":""}`}>
        <Tabselector 
            name="Home" 
            setcurrenttab={setcurrenttab}
            currenttab={currenttab} 
        />
        <Tabselector 
            name="Experience" 
            setcurrenttab={setcurrenttab}
            currenttab={currenttab} 
        />
        <Tabselector 
            name="Service" 
            setcurrenttab={setcurrenttab}
            currenttab={currenttab} 
        />
        </div>
}