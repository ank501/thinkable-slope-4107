import React from 'react'
import { useParams ,Link as RouterLink } from 'react-router-dom'
import { Card, CardHeader, CardBody, CardFooter, Button ,Image,Text,Stack,Heading, Center } from '@chakra-ui/react'
const Acards = ({image,title,price ,id}) => {
  return (
    <>
    <RouterLink to={`/product/:${id}`}>
    <Card maxW='md'  size={"lg"} bgColor={"gray.100"}>
    <CardBody>
      <Image 
        src={image}
        alt='Green double couch with wooden legs'
        borderRadius='lg'
      />
      <Stack mt='6' spacing='3'>
        <Heading noOfLines={2} size='md'>{title}</Heading>
       
        <Text color='blue.600' fontSize='2xl'>
          ${price}
        </Text>
      </Stack>
    </CardBody>
        <Center>
           <Button marginBottom={'10'}>Buy</Button>
        </Center>
  </Card>
  </RouterLink>
    </>
  )
}

export default Acards