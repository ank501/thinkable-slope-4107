import { Box } from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'
import { useEffect  ,useState} from 'react'
import MainCard from '../Components/MainCard'
import Bagdata from '../Components/Drawer'
import ProductsCard from './ProductCard'


export const ProductsPage = () => {
  const [data,setData] = useState([])
 
  const getData = ()=>{
    axios
    .get('https://63ca4b26f36cbbdfc7557063.mockapi.io/apple/apple?page=1&limit=10')
    .then((res)=>setData(res.data))
  }
  
  useEffect(()=>{
    getData()
  },[])
  return (
    <>
 
    {data.map((item) => {

      return <ProductsCard image={item.avatar} title={item.title}/>
    })}
    </>
  )
}
