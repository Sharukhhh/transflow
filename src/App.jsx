
import About from './Components/About/About'
import Hero from './Components/Hero/Hero'
import SubHero from './Components/Hero/SubHero'
import Sections from './Components/cards/Sections'
import ServiceCard from './Components/cards/ServiceCard'
import MainNav from './Components/nav/MainNav'
import SubNav from './Components/nav/SubNav'
import Testimonials from './Components/testimonals/Testimonials'


function App() {

  return (
    <>
      <MainNav/>
      <SubNav/>
      <Hero/>
      <About/>
      <SubHero/>
      <ServiceCard/>
      <Sections usage={'services'}/>
      <Testimonials/>
      {/* <ServiceCard/> */}
      <Sections usage={'experts'}/>
    </>
  )
}

export default App
