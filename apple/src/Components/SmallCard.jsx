import React from 'react'
import { Card, CardHeader, CardBody, CardFooter ,Text ,Heading ,Stack,Image} from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const SmallCard = ({image,title,subtitle,avail,learn,bgCol,textColor}) => {
  return (
    <Card background={bgCol}  >
        <CardHeader>
           <Heading size={"3xl"} textColor={textColor}>{title}</Heading>
           
           <Heading marginTop={"20px"} size="lg" textColor={textColor}>{subtitle}</Heading>
           
        </CardHeader>
  <CardBody>
  
    <Image
    
      src= {image}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
  </CardBody>
</Card>
  )
}

export default SmallCard