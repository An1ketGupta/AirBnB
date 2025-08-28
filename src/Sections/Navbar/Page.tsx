import Lottie from "lottie-react";
import homeanimations from "../../assets/animations/home.json"
import { useState } from "react";

export default function PageSelection(){
    const[page,setpage] = useState("Home")
    return <div className="flex gap-6 transition-all">
            <div onClick={()=>{
                setpage("Home")
            }} className={`flex justify-center transition-all duration-300 items-center rounded-xl px-2 ${page === "Home" ? "bg-neutral-200 shadow-md": ""}`}>
                <Lottie
                animationData={homeanimations}
                loop={true}
                autoplay={true}
                className={`w-12 h-18`}
                />
                Home
            </div>
            <div onClick={()=>{
                setpage("Experiences")
            }} className={`flex justify-center transition-all duration-300 items-center rounded-xl px-2 ${page === "Experiences" ? "bg-neutral-200 shadow-md": ""}`}>
                <Lottie
                animationData={homeanimations}
                loop={true}
                autoplay={true}
                className={`w-12 h-18`}
                />
                Experiences
            </div>
            <div onClick={()=>{
                setpage("Services")
            }} className={`flex justify-center transition-all duration-300 items-center rounded-xl px-2 ${page === "Services" ? "bg-neutral-200 shadow-md": ""}`}>
                <Lottie
                animationData={homeanimations}
                loop={true}
                autoplay={true}
                className={`w-12 h-18`}
                />
                Services
            </div>
        </div>
}