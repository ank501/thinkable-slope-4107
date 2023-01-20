import React from 'react'
import { useRef } from 'react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Box,Container ,video
} from '@chakra-ui/react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
//https://www.apple.com/105/media/us/homepod-2nd-generation/2022/f6c72fbe-43a7-45cd-b7b5-ce192011cca9/anim/spatial-audio/large_2x.mp4
const LoginPage = () => {
  const ref = useRef(0);
  return (
    <>
  
    <video  ref={ref} autoPlay loop muted>
    <source src="https://www.apple.com/105/media/us/homepod-2nd-generation/2022/f6c72fbe-43a7-45cd-b7b5-ce192011cca9/anim/spatial-audio/large_2x.mp4"
            type="video/webm"/>
    <source src="https://www.apple.com/105/media/us/homepod-2nd-generation/2022/f6c72fbe-43a7-45cd-b7b5-ce192011cca9/anim/spatial-audio/large_2x.mp4"
            type="video/mp4"/>
    </video>
     
   

    <Footer/>
    </>
   
  )
}

export default LoginPage