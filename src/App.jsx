import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Footer from "./components/Footer"
import Project from "./components/Project"
import SocialIcons from "./components/SocialIcons"


import "../src/styles/header.scss"
import "../src/styles/hero.scss"
import "../src/styles/about.scss"
import "../src/styles/footer.scss"


function App() {
  

  return (
    <>
      <Header />
      
      <Project />
      <SocialIcons />
 
      
    </>
  )
}

export default App
