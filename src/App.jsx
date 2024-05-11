import Banner from "./section/banner/Banner"
import Company from "./section/company/Company"
import Connector from "./section/connect/Connector"
import Counter from "./section/counter/Counter"
import Customer from "./section/customer/Customer"
import Footer from "./section/footer/Footer"
import Navbar from "./section/navbar/Navbar"
import Project from "./section/project/Project"
import Service from "./section/service/Service"
import Works from "./section/works/Works"



function App() {
  

  return (
    <>
    
      <Navbar/>
      <Banner/>
      <Service/>
      <Connector/>
      <Works/>
      <Counter/>
      <Company/>
      <Customer/>
      <Project/>
      <Footer/>
      
     
    </>
  )
}

export default App
