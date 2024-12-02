import Footer from "./footer"
import Header from "./Header"
import Body from "./Body"

export default function App(){
  return(
      <>
      <Header />
      <Body name="Pedro" food="pizza" isHealthy={false} age={30}/>
      {/* this is the body component */}
      <Body name="Peter" food="burger" isHealthy={false} age={31}/>
      <Body name="Parker" food="fries" isHealthy={false} age={32}/>
      <Body name="Bruce" food="ice cream" isHealthy={false} age={33}/>
      <Body name="Wayne" food="chicken" isHealthy={false} age={34}/>
      <Body />
      <Footer />
      </>
  )
}
