import Body from "./Sections/Body"
import Footer from "./Sections/Footer/footer"
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
    <Footer/>
  </div>
}