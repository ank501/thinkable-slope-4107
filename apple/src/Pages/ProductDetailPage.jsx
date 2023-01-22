import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Box, Grid, GridItem, Heading ,HStack,image } from '@chakra-ui/layout'
import React from 'react'
import MiniCard from '../Components/MiniCard'
import axios from 'axios'
import { useEffect ,useState } from 'react'
import { useParams } from 'react-router-dom'
import Acards from '../Components/Acards';
import ProductDetail from '../Components/ProductDetail'
import { Spinner } from '@chakra-ui/react'
import { Alert } from '@chakra-ui/react'


const datat = [{
  "id" : "1" ,
  "title" : "Buy AirPods Max" , 
  "image" : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-pink-202011?wid=532&hei=582&fmt=png-alpha&.v=1604022365000" ,
  "price" : "549",
  "desc"  : "Requires AirPods Max with the latest version of software, and iPhone and iPod touch models with the latest version of iOS; iPad models with the latest version of iPadOS; Apple Watch models with the latest version of watchOS; Mac models with the latest version of macOS; or Apple TV models with the latest version of tvOS."
}]

const Click =() =>{
  return <Alert>Product Adde to cart Successfully</Alert>
}


const ProductDetailPage = () => {
  
  return (
    <>

      return(
        <>
        {datat.map((item)=>{
          return  <ProductDetail key={item.id} image={item.image} title={item.title} price={item.price} subtitle={item.desc} handleClick={Click}/>
        })}
       
        </>
      )
 
      
      
    
  
  
    <Footer/>
    </>
  )
}

export default ProductDetailPage