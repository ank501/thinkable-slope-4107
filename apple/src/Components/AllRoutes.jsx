import {Routes ,Route} from "react-router-dom"
import AdminPage from "../Pages/AdminPage"
import CartPage from "../Pages/CartPage"
import { HomePage } from "../Pages/HomePage"
import Ipad from "../Pages/Ipad"
import IPhone from "../Pages/IPhone"

import LoginPage from "../Pages/LoginPage"
import PaymentPage from "../Pages/PaymentPage"
import { ProductsPage } from "../Pages/ProductsPage"
import RegisterPage from "../Pages/RegisterPage"



const AllRoute =()=>{
    return (
        <Routes>
          <Route path="/" element={ <HomePage />}/>
          <Route path="/cart" element={ <CartPage />}/>
          <Route path="/login" element={ <LoginPage />}/>
          <Route path="/payment" element={ <PaymentPage />}/>
         <Route path="/iPhone" element={<IPhone/>}/>
          <Route path="/product" element={ <ProductsPage />}/>
          <Route path="/product/:id" element={ <RegisterPage />}/>
          <Route path="/admin" element={ <AdminPage />}/>
          <Route path="/iPad" element={ <Ipad />}/>
        </Routes>
    )
}
export default AllRoute