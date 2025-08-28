import Body from "./Sections/Body"
import Navbar from "./Sections/Navbar/Navbar"

export default function App(){
  return <div>
    <Main/>
  </div>
}

function Main(){
  return <div>
    <Navbar/>
    <Body/>
  </div>
}