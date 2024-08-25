import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Index from './components/Index'
import Contact from './components/Contact'
import Lighting from './components/dropdownPages/Lighting'
import Tables from './components/dropdownPages/Tables'
import Storage from './components/dropdownPages/Storage'
import Bedrooms from './components/dropdownPages/Bedrooms'
import Sofa from './components/dropdownPages/Sofa'
import Accessories from './components/dropdownPages/Accessories'
import NewArrivals from './components/NewArrivals'




export default function App() {
  return (
    <div className="mt-16 md:mt-20 lg:mt-24">

        <Nav/>
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/new-arrivals" element={<NewArrivals />} />
          <Route path="/products/lighting" element={<Lighting/>} />
          <Route path="/products/tables" element={<Tables/>} />
          <Route path="/products/storage" element={<Storage/>} />
          <Route path="/products/bedrooms" element={<Bedrooms/>} />
          <Route path="/products/sofa-and-chairs" element={<Sofa/>} />
          <Route path="/products/home-accessories" element={<Accessories/>} />
        </Routes>
        <Footer/>
    </div>
  )
}