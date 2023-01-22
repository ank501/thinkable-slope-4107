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
        <RouterLink to="/store">Store</RouterLink>
        <RouterLink to={"/login"}> Mac</RouterLink>
        <RouterLink to={"/iPad"}> iPad</RouterLink>
        <RouterLink to={"/iPhone"}> iPhone</RouterLink>
        <RouterLink to={"/iPhone"}> Watch</RouterLink>
        <RouterLink to={"/iPad"}> AirPods</RouterLink>
        <RouterLink to={"/iPad"}> TV & Home</RouterLink>
        <RouterLink to={"/accessories"}>Only On Apple</RouterLink>
        <RouterLink to={"/accessories"}>Accessories</RouterLink>
        <RouterLink to={"/admin"}>Admin</RouterLink>
        <RouterLink to="/product"> <SearchIcon /></RouterLink> 
        <RouterLink to="/store"> <BsBag /></RouterLink>   
    </HStack>
    
    
   </div>
    </>
}
export default Navbar