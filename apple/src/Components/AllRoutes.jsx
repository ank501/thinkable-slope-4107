import {Routes ,Route} from "react-router-dom"
import Accessories from "../Pages/Accessories"
import AdminPage from "../Pages/AdminPage"
import CartPage from "../Pages/CartPage"
import { HomePage } from "../Pages/HomePage"
import Ipad from "../Pages/Ipad"
import IPhone from "../Pages/IPhone"
import ProductDetailPage from "../Pages/ProductDetailPage"
import LoginPage from "../Pages/LoginPage"

import { ProductsPage } from "../Pages/PaymentPage"
import RegisterPage from "../Pages/ProductDetailPage"
import Store from "../Pages/Store"



const AllRoute =()=>{
    return (
        <Routes>
          <Route path="/" element={ <HomePage />}/>
          <Route path="/cart" element={ <CartPage />}/>
          <Route path="/login" element={ <LoginPage />}/>
          <Route path="/accessories" element={ <Accessories />}/>
         <Route path="/iPhone" element={<IPhone/>}/>
          <Route path="/store" element={ <Store />}/>
          <Route path="/product/:2" element={ <ProductDetailPage />}/>
          <Route path="/admin" element={ <AdminPage />}/>
          <Route path="/iPad" element={ <Ipad />}/>
        </Routes>
    )
}
export default AllRoute