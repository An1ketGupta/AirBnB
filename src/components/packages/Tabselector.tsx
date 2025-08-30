import Lottie from "lottie-react";
import homeanimations from "../../assets/animations/home.json"

export default function Tabselector({
    name,
    setcurrenttab,
    currenttab
}:{
    name:string,
    setcurrenttab:React.Dispatch<React.SetStateAction<string | null>>,
    currenttab:string | null
}) {
    return <div onClick={() => {
        setcurrenttab(name)
    }} className={`font-[Airbnb Cereal VF, Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;] flex text-[#8f9092] font-semibold gap-2 cursor-pointer justify-center transition-all duration-300 items-center px-2 ${currenttab === name ? "text-black border-b-4 border-black" : ""}`}>
        <Lottie
            animationData={homeanimations}
            loop={true}
            autoplay={true}
            className={`w-10 h-16 hover:scale-115 transition-all duration-200`}
        />
        {name}s
    </div>
} 