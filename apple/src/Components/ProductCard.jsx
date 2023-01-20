import React from 'react'
import { Card, CardHeader, CardBody, CardFooter ,Image,Stack,Text,Heading,Divider,Button} from '@chakra-ui/react'


const ProductCard = ({image,title,desc,price}) => {
  return (
    <div>
    <Card maxW='sm'>
      <CardBody>
        <Image
          src={image}
          alt={title}
          borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{title}</Heading>
          <Text>
          {desc}
          </Text>
          <Text color='blue.600' fontSize='2xl'>
            {price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
    
          <Button variant='solid' colorScheme='blue'>
            Buy now
          </Button>
         
    
      </CardFooter>
    </Card></div>
  )
}

export default ProductCard