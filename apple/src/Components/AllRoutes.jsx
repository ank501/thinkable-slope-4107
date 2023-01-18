import {Routes ,Route} from "react-router-dom"
import AdminPage from "../Pages/AdminPage"
import CartPage from "../Pages/CartPage"
import { HomePage } from "../Pages/HomePage"
import LoginPage from "../Pages/LoginPage"
import PaymentPage from "../Pages/PaymentPage"
import { ProductDetailPage } from "../Pages/ProductDetailPage"
import { ProductsPage } from "../Pages/ProductsPage"
import RegisterPage from "../Pages/RegisterPage"



const AllRoute =()=>{
    return (
        <Routes>
          <Route path="/" element={ <HomePage />}/>
          <Route path="/cart" element={ <CartPage />}/>
          <Route path="/login" element={ <LoginPage />}/>
          <Route path="/payment" element={ <PaymentPage />}/>
          <Route path="/" element={ <ProductDetailPage />}/>
          <Route path="/product" element={ <ProductsPage />}/>
          <Route path="/product/:id" element={ <RegisterPage />}/>
          <Route path="/admin" element={ <AdminPage />}/>

        </Routes>
    )
}
export default AllRoute