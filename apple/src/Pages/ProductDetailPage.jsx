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






const ProductDetailPage = () => {
  const [data,setData] = useState([])
  const {id} =useParams()

  const getData = ()=>{
  axios
    .get(`https://63ca4b26f36cbbdfc7557063.mockapi.io/apple/apple${id}`)
    .then((res)=>{
      setData(res.data)
      console.log(res.data)
    })
  }
  
  useEffect(()=>{
    getData()
  },[])
  return (
    <>
    
      
      
    
  
  
    <Footer/>
    </>
  )
}

export default ProductDetailPage