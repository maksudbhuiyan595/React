import { Navbar } from "./Components/NavBar/Navbar"
import { Product } from "./Components/Product/Product"
import { Slider } from "./Components/Slider/Slider"

const products =[1,2,3,4];
 
function App() {

  return (
    <>
     <Navbar />
     {/* <Slider /> */}
     <Product  products={ products } />
    </>
  )
}

export default App
