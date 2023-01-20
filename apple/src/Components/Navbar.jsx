import NavbarCSS from "./Navbar.module.css"
import { Stack ,Box, HStack,Text ,Flex ,Popover} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { BsBag} from "react-icons/bs"
import {SearchIcon} from "@chakra-ui/icons"

const Navbar = () =>{
    return <>
   <div className={NavbarCSS.navbar}>
   
    <HStack className={NavbarCSS.navbarlink}>
        <RouterLink to="/"> <img width={"20px"}  src="https://www.transparentpng.com/thumb/apple-logo/ZA6SCV-apple-logo-photos.png" /></RouterLink>
        <RouterLink to="/product">Store</RouterLink>
        <RouterLink to={"/login"}> Mac</RouterLink>
        <RouterLink to={"/iPad"}> iPad</RouterLink>
        <RouterLink to={"/iPhone"}> iPhone</RouterLink>
        <RouterLink to={"/product"}> Watch</RouterLink>
        <RouterLink to={"/product"}> AirPods</RouterLink>
        <RouterLink to={"/product"}> TV & Home</RouterLink>
        <RouterLink to={"/product"}>Only On Apple</RouterLink>
        <RouterLink to={"/product"}>Accessories</RouterLink>
        <RouterLink to={"/product"}>Support</RouterLink>
        <RouterLink to="/product"> <SearchIcon /></RouterLink> 
        <RouterLink to="/payment"> <BsBag /></RouterLink>   
    </HStack>
    
    
   </div>
    </>
}
export default Navbar