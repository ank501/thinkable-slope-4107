import React from 'react'
import { Card, CardHeader, CardBody, CardFooter ,Image ,Flex ,Avatar, IconButton,Box ,Button ,Text, Heading} from '@chakra-ui/react' ;
import { Link } from 'react-router-dom';


const MainCard = ({image , title ,subtitle,marginTop}) => {
  return (
    <>
    <Card width={"100vw"} bgColor={"black"} borderRadius="0" textColor={"white"} marginTop={marginTop}>
  <CardHeader>
 

  </CardHeader>
  <CardBody>
     <Heading size={"3xl"}>{title}</Heading>
     <Heading size={"sm"} marginTop={"10px"} marginBottom={"20px"}>{subtitle}</Heading>
     <Image
    objectFit='cover'
    src={image}
    alt='Chakra UI'
  />
    
  </CardBody>
 

  <CardFooter>
   
  </CardFooter>
</Card>
    </>
  )
}

export default MainCard