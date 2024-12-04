import { Link, Route, Routes } from "react-router-dom";
import About from "./Components/About"
import Shop from "./Components/Shop"
import Sale from "./Components/Sale"
import Developer from "./Components/Developer"
import Explore from "./Components/Explore"
import Reviews from "./Components/Reviews";
import Support from "./Components/Support"
import Build from "./Components/Build"
import NotFound from "./Components/NotFound"
import Keyboard from "./Components/Keyboard"

function App(){
    
    return(
        <>
            <div className="MainCon">
                <nav>
                    <ul>
                        <li>
                            <Link to ="/">Shop</Link>
                        </li>
                        <li>
                            <Link to ="/sale">Sale</Link>
                        </li>
                        <li>
                            <Link to ="/build">Build</Link>
                        </li>
                        <li>
                            <Link to ="/explore">Explore</Link>
                        </li>
                        <li>
                            <Link to ="/reviews">Reviews</Link>
                        </li>
                        <li>
                            <Link to ="/support">Support</Link>
                        </li>
                        <li>
                            <Link to ="/developer">Developer</Link>
                        </li>
                        <li>
                            <Link to ="/about">About</Link>
                        </li>
                    </ul>
                    <h1>KeyStaxx</h1>
                </nav>

                <Routes>
                    <Route path = "/" element = {<Shop />} />
                    <Route path = "/sale" element = {<Sale />} />
                    <Route path = "/build" element = {<Build />} />
                    <Route path = "/explore" element = {<Explore />} />
                    <Route path = "/reviews" element = {<Reviews />} />
                    <Route path = "/Support" element = {<Support />} />
                    <Route path = "/Developer" element = {<Developer />} />
                    <Route path = "/about" element = {<About />} />
                    <Route path = "/sale" >
                        <Route index element = {<Sale />} />
                        <Route path=":keyboardId" element = {<Keyboard />} />
                    </Route>
                    <Route path = "*" element = {<NotFound />} />
                </Routes>
            </div>
        </>
    )

}
export default App