import  React from "react"
import Home from "./oldalak/Home"
import Mermesek from "./oldalak/Mermesek"
import Ermesek from "./oldalak/Ermesek"
import Navbar from "./Navbar"

import {Route,Routes} from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'tachyons'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>covid</h1>
        <Routes>
          <Route path= "/" element={<Home/>}/>
          <Route path= "/mermesek" element={<Mermesek/>}/>
          <Route path= "/ermesek" element={<Ermesek/>}/>
        </Routes>
      </div>
        
          
    </>
  )
}

export default App
