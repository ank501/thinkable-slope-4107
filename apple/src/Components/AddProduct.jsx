import { VStack ,Input, Button,Card,CardBody, Box, Divider } from '@chakra-ui/react'
import React from 'react'

const AddProduct = () => {

  
  return (
     <>
     <Box margin={"auto"} marginBottom={"50px"}  marginTop={"100px"} borderRadius={"20px"} maxW={"550px"}padding={"50px"} boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"}>
 
     <VStack maxW={"500px"} margin={"auto"}>
     <label>Image URL </label><Input isInvalid
    errorBorderColor='red.300' border={"1px solid gray"} placeholder='image URL' type="text" />
     <label>Product Name  </label><Input isInvalid
    errorBorderColor='red.300' border={"1px solid gray"} placeholder='title' type="text" />
     <label>Price  </label><Input  isInvalid
    errorBorderColor='red.300'border={"1px solid gray"} placeholder='price' type="text" />
     </VStack>
     <Button
     margin={"50px"}
    colorScheme='teal'
  >
    Add Data
  </Button>
  </Box>
  <Divider />
     </>    
  )
}

export default AddProduct