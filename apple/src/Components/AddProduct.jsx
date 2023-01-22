import { VStack ,Input, Button,Card,CardBody, Box, Divider } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'

const AddProduct = () => {
      const [addData ,setData] = useState({
        image : "",price :"",title:""
      })
   
      const handleChange = (e)=>{
        
        const {name ,value ,type} = e.target
        setData({
          ...addData,
          [name] : value
        })
      }

      const handleSubmit = (e)=>{
        e.preventDefault()
      }
   console.log(addData)
   const { image,title,price} = addData

  return (
     <>
     <form>
     <Box margin={"auto"} marginBottom={"50px"}  marginTop={"100px"} borderRadius={"20px"} maxW={"550px"}padding={"50px"} boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"}>
 
     <VStack maxW={"500px"} margin={"auto"}>
     <label>Image URL </label>

     <Input isInvalid name='image'
    errorBorderColor='red.300' border={"1px solid gray"} placeholder='image URL' type="text"  onChange={handleChange} value={image}  />
     <label>Product Name  </label>

     <Input isInvalid name='title'
    errorBorderColor='red.300' border={"1px solid gray"} placeholder='title' type="text"  onChange={handleChange} value={title} />
     <label>Price  </label>

     <Input  isInvalid name='price'
    errorBorderColor='red.300'border={"1px solid gray"} placeholder='price' type="text" onChange={handleChange} value={price} />
     </VStack>
     <Button
     margin={"50px"}
    colorScheme='teal'
    onSubmit={handleSubmit}
  >
    Add Data
  </Button>
  </Box>
  </form>
  <Divider />
     </>    
  )
}

export default AddProduct