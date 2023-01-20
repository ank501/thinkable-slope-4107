import React from 'react'
import { useRef , useEffect} from 'react'


import { Card, CardHeader, CardBody, CardFooter , Heading ,Button ,Text, Box, Grid ,GridItem, Container} from '@chakra-ui/react'
import Footer from '../Components/Footer'
import MainCard from '../Components/MainCard'
import SmallCard from '../Components/SmallCard'
import Vedio from "../Components/VedioPlayer"






export const HomePage = () => {
  const ref = useRef()

  const handleOnClick = ()=>{
    console.log(ref)
  ref.current.play()
  }
   
  useEffect(()=>{
    handleOnClick()
  },[])
 
  return (
   <>

   <Box bgGradient="linear(red.300, blue.400)" width={"100vw"}>
   <Card align='center' backgroundColor={"black"} width={"100vw"} borderRadius="0">
  <CardHeader>
    <Heading size='3xl' marginTop={"135px"} color={"white"}>Introducing the new {<br/>}MacBook Pro and Mac mini.</Heading>
  </CardHeader>
</Card>
<video ref={ref} autoPlay muted>

    <source src="https://www.apple.com/105/media/us/iphone-14-pro/2022/a3e991f3-071e-454c-b714-1b2319bb97a8/anim/hero/large_2x.mp4"
            type="video/webm"/>

    <source src="https://www.apple.com/105/media/us/iphone-14-pro/2022/a3e991f3-071e-454c-b714-1b2319bb97a8/anim/hero/large_2x.mp4"
            type="video/mp4"/>

</video>
<MainCard  title ={"Mac Book Pro"} subtitle={"SuperCharged By M2"} marginTop={"10px"}image={"https://www.apple.com/v/home/ax/images/heroes/macbook-pro-14-and-16/hero_mbp_preorder__caf0s6im2nqq_largetall_2x.jpg"}/>
<MainCard title={"Mac Mini"} subtitle={"SuperCharged By M2"}  marginTop={"10px"}image={"https://www.apple.com/v/home/ax/images/heroes/mac-mini/hero_macmini_preorder__ixuialh97nyq_largetall_2x.jpg"}/>
<MainCard title={"Home Pod"} subtitle={"Profound Sound"} marginTop={"10px"} image={"https://www.apple.com/v/home/ax/images/heroes/homepod/hero_homepod_announce__gmwsq6zqqcya_largetall_2x.jpg"}/>

<Grid templateColumns='repeat(2, 1fr)' gap={3} marginTop={"20px"}>
<GridItem><SmallCard bgCol={"black"} image={"https://www.apple.com/v/apple-watch-series-8/b/images/overview/hero/hero_static__c9d1bk9frtua_large_2x.jpg"}  title={"Apple Watch"} subtitle={"A healthy leap ahead."} textColor={"white"}/></GridItem>
<GridItem><SmallCard bgCol={"black"} image={"https://www.apple.com/v/home/ax/images/promos/iphone-14-pro/promo_iphone14pro__4n4twj56fzmu_large_2x.jpg"} subtitle={"Pro.beyond"} textColor={"white"}/></GridItem>
<GridItem><SmallCard bgCol={"smokewhite"} image={"https://www.apple.com/v/iphone-14/d/images/overview/display/xdr_display__cxbhgrgt5keq_large_2x.jpg"} title={"iPhone 14"} textColor={"black"}  subtitle={"Pro beyond ,A healthy leap ahead"} /></GridItem>
<GridItem><SmallCard bgCol={"black"} image={"https://www.apple.com/in/ipad-pro/images/overview/hero/hero_combo__fcqcc3hbzjyy_large_2x.jpg"} title={"iPhone 12"} textColor={"white"} subtitle={"Pro beyond"}/></GridItem>
</Grid>




   <div>
      <Footer /> 
    </div>
    </Box>
   
   </>

  )
 
}
