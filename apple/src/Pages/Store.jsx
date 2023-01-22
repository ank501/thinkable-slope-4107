import { Box, Grid, GridItem, Heading ,HStack,image } from '@chakra-ui/layout'
import React from 'react'
import MiniCard from '../Components/MiniCard'
import axios from 'axios'
import { useEffect ,useState } from 'react'
import { useParams } from 'react-router-dom'
import Acards from '../Components/Acards';
import { Button, Spinner,Center } from '@chakra-ui/react'
import Footer from '../Components/Footer'
import ProductDetail from '../Components/ProductDetail'

const miniData = [{"image" : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-14-16-mac-nav-202301?wid=400&hei=260&fmt=png-alpha&.v=1670959891635" , "title" : "Mac"}
,{"image" : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-iphone-nav-202209_GEO_US?wid=400&hei=260&fmt=png-alpha&.v=1661027785546" , "title" : "iPhone"},
{"image" : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-ipad-nav-202210?wid=400&hei=260&fmt=png-alpha&.v=1664912135437" , "title" : "iPad"}
,{"image" : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-watch-nav-202209?wid=400&hei=260&fmt=png-alpha&.v=1661796454103" , "title" : "Apple Watches"},
{"image" : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-airpods-nav-202209?wid=400&hei=260&fmt=png-alpha&.v=1660676485885" , "title" : "AirPods"},
{"image" : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-airtags-nav-202108?wid=400&hei=260&fmt=png-alpha&.v=1625783380000" , "title" : "AirTag"}
]


const Store = () => {
  const [data,setData] = useState([])
  const [page ,setPage] = useState(1)
  const [isLoading ,setIsLoading] = useState(true)
 
  const getData = (page)=>{
    setIsLoading(true)
    axios
    .get(`https://63ca4b26f36cbbdfc7557063.mockapi.io/apple/apple?page=${page}&limit=6`)
    .then((res)=>{
      setData(res.data)
      console.log(res.data)
      setIsLoading(false)
    })
  }
  
  useEffect(()=>{
    getData(page)
  },[page])

 if(isLoading){
  return ( <>

  <h1  marginTop={"280px"}
    alignItems={"center"} >Loaing....</h1> 
  <Spinner
    marginTop={"300px"}
    alignItems={"center"}
    thickness='4px'
    speed='0.65s'
    emptyColor='gray.200'
    color='blue.500'
    size='xl'
  />

  </> )
 }else{

 
  return (
   <>


   <Heading margin={"90px"}>Store. The best way to buy the {<br/>}products you love.</Heading>

  <Grid templateColumns='repeat(3, 1fr)' gap={6} width={"1100px"} margin={"auto"}>
    {data.map((item)=>{
      return (
        <GridItem style={{"borderRadius":"10px"}}><Acards id={item.id} key={item.id} image={item.image} title={item.title} price={item.price}/></GridItem>
      )
    })}
  </Grid>
  <Box margin={"90px"}>
  <Center>

    <HStack>
      <Button onClick={()=>{setPage(page-1)} }   disabled={(page>0)? true : false}>Prev</Button>
      <Button disabled>{page}</Button>
      <Button onClick={()=>{setPage(page+1)}}>Next</Button>
    </HStack>
 
  </Center>
  </Box>
  <Footer />
  
  {/* {
    data.map((item)=>{
      return(
        <Heading></Heading>
      )
    })
  } */}
   </>
  )
}
}

export default Store