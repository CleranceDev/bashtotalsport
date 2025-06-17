import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Search from './components/SearchBar/Search'
import Features from './components/Features/Features'
import Female from './Pages/Female/Female'
import Men from './Pages/Men/Men'
import Brands from './Pages/brands/Brands'
import Puma from './Pages/Puma/Puma'
import Adidas from './Pages/adidas/Adidas'
import Nike from './Pages/nike/Nike'
import Shoes from './Pages/shoes/Shoes'
import Tech from './Pages/tech/Tech'
import RegisterUser from './Pages/createUser/RegisterUser'
import Location from './Pages/location/Location'
import CheckUser from './components/checkuser/CheckUser'
import LoginUser from './Pages/loginUser/LoginUser'
import Cart from './Pages/cart/Cart'
import Hoka from './Pages/hoka/Hoka'
import NewEra from './Pages/newEra/NewEra'
import Footer from './components/footer/Footer'
import NewBalance from './Pages/newBalance/NewBalance'
import Superga from './Pages/superga/Superga'
import Hitec from './Pages/hitec/Hitec'
import Asic from './Pages/asic/Asic'
import UnderArmor from './Pages/underArmor/UnderArmor'
import SearchPage from './Pages/search/SearchPage'
import SuccesOrder from './Pages/successOrder/SuccesOrder'
import Error from './Pages/Errorpage/Error'




const App = () => {
  return (
    <Router>
      <Navbar/>
      <Search/>
      <Features/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/female' element={<Female/>}/>
        <Route path='/men' element={<Men/>}/>
        <Route path='/brands' element={<Brands/>}/>
        <Route path='/puma' element={<Puma/>}/>
        <Route path='/Hoka' element={<Hoka/>}/>
        <Route path='/superga' element={<Superga/>}/>
        <Route path='/adidas' element={<Adidas/>}/>
        <Route path='/underarmor' element={<UnderArmor/>}/>
        <Route path='/newEra' element={<NewEra/>}/>
        <Route path='/nike' element={<Nike/>}/>
        <Route path='/hitec' element={<Hitec/>}/>
        <Route path='/asic' element={<Asic/>}/>
        <Route path='/newbalance' element={<NewBalance/>}/>
        <Route path='/shoes' element={<Shoes/>}/>
        <Route path='/tech' element={<Tech/>}/>
        <Route path='/registeruser' element={<RegisterUser/>}/>
        <Route path='/location' element={<Location/>}/>
        <Route path='/checkuser' element={<CheckUser/>}/>
        <Route path='/loginuser' element={<LoginUser/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/searchpage' element={<SearchPage/>}/>
        <Route path='/successorder' element={<SuccesOrder/>}/>
        <Route path='/error' element={<Error/>}/>

      </Routes>
      <Footer/>
    </Router>
  )
}

export default App