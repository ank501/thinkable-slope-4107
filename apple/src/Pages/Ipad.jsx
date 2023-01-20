import React from 'react'
import { Center ,Heading, Stack ,VStack ,Image ,Text, Box, Container, HStack, Button, Grid, GridItem} from '@chakra-ui/react'
import Footer from '../Components/Footer'
import ProductCard from '../Components/ProductCard'

const Ipad = () => {
  return (
    <>
    
<Box bgColor={"black"} textColor={"white"}>
        <Center>
        <VStack>
        <Heading size="4xl" marginTop={90}>iPad Pro</Heading>
        <Heading size="2xl" marginTop={90}>Super Charged By</Heading>
        <Image src={"https://www.apple.com/v/ipad-pro/al/images/overview/hero/m2_logo__90ungfqgnsiu_large_2x.png"} />
        <Image width={"800px"} src='https://www.apple.com/v/ipad-pro/al/images/overview/hero/hero__gb2msr725aa2_large_2x.jpg' />
        <Heading width={"990px"}>Astonishing performance. Incredibly advanced {<br/>} displays. Superfast wireless connectivity. Next-level {<br/>}Apple Pencil capabilities. Powerful new features in {<br/>}iPadOS 16. The ultimate iPad experience.</Heading>
        <Image src='https://www.apple.com/v/ipad-pro/al/images/overview/hero/hero_combo__fcqcc3hbzjyy_large_2x.jpg'/>
        <Heading  size={"4xl"}> M2 chip{<br/>}Next-generation {<br/>} Performance.</Heading>
        <Image  width={'800px'} src='https://www.apple.com/v/ipad-pro/al/images/overview/chip/performance_hero__cxya4f2p5euu_large_2x.jpg'/>
        <Heading width={"990px"} size={"lg"} textAlign={"left"}>M2 chip. The M2 chip is the next generation of Apple silicon, with an 8‑core CPU that delivers up to 15 percent faster performance and a 10‑core GPU that provides up to 35 percent faster graphics performance.1 With a 40 percent faster Neural Engine to accelerate machine learning tasks and 50 percent more memory bandwidth, M2 brings astonishing performance and new capabilities to iPad Pro. So you can create photorealistic 3D designs, build intricate AR models, and play games with console‑quality graphics at high frame rates faster than ever. All while enjoying all‑day battery life.2</Heading>
        <Image src='https://www.apple.com/v/ipad-pro/al/images/overview/chip/m2_end_state__d1wjtfymwb8m_large_2x.jpg'/>
        <Box marginTop={"90px"}>
       <HStack>
        <Heading marginLeft={"50px"} maxW={"700px"} textAlign={"left"} size={"lg"}><p>A complete movie studio in your hands. The high‑performance media engine on M2 accelerates ProRes encode and decode. So you can convert video projects to ProRes up to 3x faster than before.3</p> {<br/>}
           ProRes video capture. Now for the first time you can capture ProRes video, using the high-performance media engine and image signal processor on M2 and advanced cameras on iPad Pro. Five studio‑quality microphones and four‑speaker audio with support for Dolby Atmos let you record and deliver theater‑like sound.</Heading>
        <Image width={"600px"} src='https://www.apple.com/v/ipad-pro/al/images/overview/chip/graphics_screen__cr7y07sbcoae_large_2x.jpg' />
       </HStack>
       </Box>
       {/* <Image  width={"800px"}  src='https://www.apple.com/v/ipad-pro/al/images/overview/cameras/cameras_rear__faqszid3rka6_large_2x.jpg'/> */}
       {/* <Image  width={"800px"}  src='https://www.apple.com/v/ipad-pro/al/images/overview/cameras/cameras_startframe__bhks1hdn6c02_large_2x.jpg'/> */}
        {/* <Image src='https://www.apple.com/v/ipad-pro/al/images/overview/wireless/5g_downloads_gradient__d7gdyc8m0u82_large_2x.png'/> */}
       
       {/* <Heading padding={"px"} textAlign={"left"} size={"4xl"}>iPadOS.{<br/>}
           Expand what’s {<br/>}possible.</Heading>
           <Heading maxW={"900px"} textAlign={"left"} size={"lg"}>Enhanced ways to work. iPadOS 16 gives you powerful new ways to do more than ever. New desktop-class apps make your workday more productive. Resize and overlap apps to multitask like a pro with Stage Manager.5 And hook up an external display, with resolutions up to 6K, for even more room for all your apps.6</Heading>
       
       <Image src='https://www.apple.com/v/ipad-pro/al/images/overview/ipados/thunderbolt_hero__bn4yb1ktt4dy_large_2x.jpg' />
       */}
        </VStack>
        </Center>
        </Box>
        
        <Box bgColor={"white"} >
            <Center>
                <VStack>
                    <Box marginTop={"90px"}>
                    <Heading alignSelf={"left"} textAlign={"left"} size={"4xl"}>Magic Keyboard.{<br/>} Apple Pencil.{<br/>} 
Endless possibilities.</Heading>
</Box>
                  <Image width={"800px"} src='https://www.apple.com/v/ipad-pro/al/images/overview/keyboard-pencil/accessories_hero__f5hy8spj2ouy_large_2x.png'/>
                   <Image width={"800px"} src="https://www.apple.com/v/ipad-pro/al/images/overview/keyboard-pencil/magic_keyboard_hero__ffbg8kz9n8qe_large_2x.jpg"/>
               
               <HStack>
                <Heading marginLeft={"90px"} textAlign={"left"}>Apple Pencil. With the power of Apple Pencil (2nd generation), iPad Pro transforms into an immersive drawing canvas and the world’s best note‑taking device. It sets the standard for how drawing, marking up documents, and even filling in text fields should feel — intuitive, precise, and magical.</Heading>
                <Image width={"700px"} src='https://www.apple.com/v/ipad-pro/al/images/overview/keyboard-pencil/accessories_1__f688jyg47vm2_large_2x.png'/>
               </HStack>
               <Heading marginBottom={"90px"} textAlign={"left"} size={"lg"} textColor={'gray.500'} maxW={"900px"}>A new dimension of Apple Pencil. Apple Pencil hover shows you exactly where your Apple Pencil will touch down on your display. So you can write, sketch, and illustrate with even greater precision. Watch apps and widgets expand on the Home Screen as you move over them. Preview your mark before you make it. See how your watercolors mix before you paint. Apple Pencil hover makes everything you do with Apple Pencil even more effortless.5</Heading>
               <Image width={"1000px"} borderRadius={"20px"} src='https://www.apple.com/v/ipad-pro/al/images/overview/keyboard-pencil/pencil_hover_static__crqnvlgdwvcm_large_2x.jpg'/>
                </VStack>
            </Center>
        </Box>
        <Box height={"100px"}>

        </Box>
        <Box>
            <Heading>Which iPad is right for you?</Heading>
            <Grid>
                <GridItem>
                   <ProductCard image={"https://www.apple.com/v/ipad-pro/al/images/overview/display-xdr/xdr_hero_static__kxba3smxjn2a_large_2x.jpg"} desc={"The ultimate iPad experience with the most advanced technology."} price={"$2000"}/>
                </GridItem>
                <GridItem>

                </GridItem>
                <GridItem>
                    
                </GridItem>
                <GridItem>

                </GridItem>
            </Grid>
        </Box>
<Footer />
        </>)
}

export default Ipad