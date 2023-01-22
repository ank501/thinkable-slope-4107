import { Heading, HStack, VStack ,Image, Box } from '@chakra-ui/react'
import React from 'react'
import Footer from '../Components/Footer'
import MainCard from '../Components/MainCard'
import VedioPlayer from '../Components/VedioPlayer'
import LoginPage from './LoginPage'

const IPhone = () => {
  return (
    <>
    <Box bgColor={"black"} textColor={"white"} padding={"60px"}>
    <VedioPlayer vedio={"https://www.apple.com/105/media/us/homepod-2nd-generation/2023/f6c72fbe-43a7-45cd-b7b5-ce192011cca9/anim/spatial-audio/large_2x.mp4"}/>
    <VStack>
      <HStack>
        <Image  width={"600px"}src= "https://www.apple.com/v/homepod-2nd-generation/a/images/overview/homekit__e4awkkuaslua_large_2x.jpg"/>
        <Heading textAlign={"left"}>Hey Siri,{<br/>}
open the blinds {<br/>}at 7 AM9</Heading>
      </HStack>
      <HStack>
        <Heading textAlign={"left"} width={"500px"}>
        Hands down, the best way to run the house.
        </Heading>
        <Heading textAlign={"left"} width={"900px"}>
        As your smart home hub, HomePod lets you control your home without lifting a finger.9 With Siri and smart accessories, things like closing the garage door can get done using just your voice. And with the ability to create automations along with helpful features like Sound Recognition,10 tasks like dimming lights at night and listening for smoke alarms happen automatically.
        </Heading>
      </HStack>
      <HStack>
        <Image height={"700px"}  src="https://www.apple.com/v/homepod-2nd-generation/a/images/overview/hp_shell__cyo07fb10lqq_large_2x.jpg"/>
        <Heading>HomePod is built to bring out the best in Apple Music.2 Listen to all of your favorite artists and songs — spanning every imaginable genre — in the highest quality, right in your own home. With effortless access to one of the world’s largest music libraries, the music never really has to stop.</Heading>
        <Heading></Heading>
      </HStack>
    </VStack>
    <VedioPlayer vedio={"https://www.apple.com/105/media/us/homepod-2nd-generation/2023/f6c72fbe-43a7-45cd-b7b5-ce192011cca9/anim/spatial-awareness/large_2x.mp4"}/>
    <MainCard image={"https://www.apple.com/v/homepod-2nd-generation/a/images/overview/home_theater__bfqpfanbyss2_large_2x.jpg"}/>

    </Box>
    </>
  )
}

export default IPhone