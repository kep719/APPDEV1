import { Link, Route, Routes } from "react-router-dom"
//when importing components ComponentName from file/heirarchy
//{contexts} -> useState, useRarams, BrowserRouter, Link, Route, Routes
import Home from "./components/Home"
import About from "./components/About"
import NotFound from "./components/NotFound"
import Games from "./components/Games"
import Game from "./components/Game"

function App(){

  return(
    <>
      <nav>
        <ul>
          <li>
            <Link to ="/">Home</Link>
          </li>
          <li>
            <Link to ="/about">About</Link>
          </li>
          <li>
            <Link to ="/games">Games</Link>
          </li>
        </ul>
      </nav>

      {/* Routes for the application */}

      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/about" element = {<About />} />
        <Route path = "/games" >
          <Route index element = {<Games />} />
          <Route path=":gameId" element = {< Game />} />
        </Route>

        <Route path = "*" element = {<NotFound />} /> 
        {/* '*' means not listed in the routes path */}
      </Routes>
    </>
  )

}
export default App