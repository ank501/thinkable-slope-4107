import React from 'react'
import NavbarCSS from "./Navbar.module.css"
import { HStack ,Text ,Link ,VStack ,Heading ,Divider ,Flex} from '@chakra-ui/react'



const Footer = () => {
   


  return (
     <>
     <div className={NavbarCSS.footer}>

      <div className={NavbarCSS.footer_up} >
       <Text>
          To access and use all the features of Apple Card, you must add Apple Card to Wallet on an iPhone or iPad with the latest version of iOS or iPadOS. Update to the latest version by going to Settings > General > Software Update. Tap Download and Install. <br/>
          Available for qualifying applicants in the United States.<br/>
          Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City Branch.<br/>
          Learn more about how Apple Card applications are evaluated at support.apple.com/kb/HT209218.<br/>
       </Text>

      </div>
<Divider />
      <div className={NavbarCSS.footer_mid}>
    
      <VStack>
          <Heading size='xs'>Shop and Learn</Heading>
           <Text><Link>Store</Link></Text>
           <Link>Mac</Link>
           <Link>iPhone</Link>
           <Link>iPad</Link>
           <Link>Watch</Link>
           <Link>AirPods</Link>
           <Link>Tv & Home</Link>
           <Link>AirTag</Link>
           <Link>Accessories</Link>
           <Link>Gift Cards</Link>
           
        </VStack>
        
        <VStack>
          <Heading size='xs'>Services</Heading>
          <Link>Apple Music</Link>
          <Link>Apple TV+</Link>
          <Link>Apple Fitness+</Link>
          <Link>Apple News+</Link>
          <Link>Apple Arcade</Link>
          <Link>iCloud</Link>
          <Link>Apple One</Link>
          <Link>Apple Card</Link>
          <Link>Apple Books</Link>
          <Link>Apple Podcast</Link>
          <Link>App Store</Link>
          
          <Heading size='xs'>Account</Heading>
          <Link>Manage Your Apple ID</Link>
          <Link>Apple Store Account</Link>
          <Link>iCloud.com</Link>

        
        </VStack>   
        
        <VStack>
          <Heading size='xs'>Apple Store</Heading>
          <Link>Find a Store</Link>
          <Link>Genius Bar</Link>
          <Link>Today at Apple</Link>
          <Link>Apple Camp</Link>
          <Link>Apple Store App</Link>
          <Link>Refurbished and Clearance</Link>
          <Link>Finance</Link>
        </VStack>
        
        <VStack>
        <Heading size='xs'>For Business </Heading>
          <Link>Apple and Business</Link>
          <Link>Shop for Business</Link>

          <Heading size='xs'>For Education </Heading>
          <Link>Apple and Education</Link>
          <Link>Shop for K-12</Link>
          <Link>Shop For College </Link>

          <Heading size='xs'>For Healthcare </Heading>
          <Link>Apple in Healthcare</Link>
          <Link>Health on Apple Watches</Link>
          <Link>Health Records on iPhone</Link>

          <Heading size='xs'>For Government </Heading>
          <Link>Shop for Government</Link>
          <Link>Shop for Veterans and Military</Link>

        </VStack>
       
        <VStack>
          <Heading size='xs'>About Values</Heading>
          <Link>Find a Store</Link>
          <Link>Genius Bar</Link>
          <Link>Today at Apple</Link>
          <Link>Apple Camp</Link>
          <Link>Apple Store App</Link>
          <Link>Refurbished and Clearance</Link>
          <Link>Finance</Link>

          <Heading size='xs'>About Apple</Heading>
          <Link>Apple Camp</Link>
          <Link>Apple Store App</Link>
          <Link>Refurbished and Clearance</Link>
          <Link>Apple Store App</Link>
          <Link>Refurbished and Clearance</Link>
          <Link>Finance</Link>
        </VStack>
      
      </div>

       <div className={NavbarCSS.footer_below}>

       </div>
      
     </div>
     </>
  )
}

export default Footer