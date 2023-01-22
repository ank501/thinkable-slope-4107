import { Box, Heading, VStack } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
import React from 'react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

const MiniCard = ({image,title}) => {
  return (
  <VStack>
    <Image src={image}/>
    <Heading>{title}</Heading>
</VStack>
)
}

export default MiniCard