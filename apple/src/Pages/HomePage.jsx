import React from 'react'


import { Card, CardHeader, CardBody, CardFooter , Heading ,Button ,Text, Box, Grid ,GridItem, Container} from '@chakra-ui/react'
import Footer from '../Components/Footer'
import MainCard from '../Components/MainCard'
import SmallCard from '../Components/SmallCard'





export const HomePage = () => {
  return (
   <>
   <Box bgGradient="linear(red.300, blue.400)" width={"100vw"}>
   <Card align='center' backgroundColor={"black"} width={"100vw"} borderRadius="0">
  <CardHeader>
    <Heading size='3xl' marginTop={"135px"} color={"white"}>Introducing the new {<br/>}MacBook Pro and Mac mini.</Heading>
  </CardHeader>
  <CardFooter>

<Button
  size='md'
  height='48px'
  width='200px'
  border='5px'

  borderRadius= 'full'
  backgroundColor='black'
  color='white'
>
Watch the Announcement
</Button>
    <Button colorScheme='blue'>Watch the Announcement</Button>
  </CardFooter>
</Card>
<MainCard title={"iPod pro"} subtitle={"SuperCharged By M2"} image={"https://www.apple.com/in/ipad-pro/images/overview/hero/hero_combo__fcqcc3hbzjyy_large_2x.jpg"}/>
<MainCard title={"Home Pod"} subtitle={"Profound Sound"} marginTop={"10px"} image={"https://www.apple.com/v/homepod-2nd-generation/a/images/overview/home_theater__bfqpfanbyss2_large_2x.jpg"}/>

<Grid templateColumns='repeat(2, 1fr)' gap={3} marginTop={"20px"}>
<GridItem><SmallCard bgCol={"black"} image={"https://www.apple.com/v/apple-watch-series-8/b/images/overview/hero/hero_static__c9d1bk9frtua_large_2x.jpg"}  title={"Apple Watch"} subtitle={"A healthy leap ahead."} textColor={"white"}/></GridItem>
<GridItem><SmallCard bgCol={"black"} image={"https://www.apple.com/v/iphone-14-pro/c/images/overview/hero/hero_endframe__dtzvajyextyu_large_2x.jpg"}  title={"iPhone 14 pro"} subtitle={"Pro.beyond"} textColor={"white"}/></GridItem>
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
