import { Center, Grid, GridItem, Heading } from '@chakra-ui/react'
import React from 'react'
import Acards from '../Components/Acards'
import VedioPlayer from '../Components/VedioPlayer'

const NewYearAccessories = [{"image" : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQDT3?wid=532&hei=582&fmt=png-alpha&.v=1664481896795" ,
"title" : "Smart Folio for iPad (10th generation) - Watermelon" ,"price" :"79.00"} , {"image" : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HQDZ2?wid=532&hei=582&fmt=png-alpha&.v=1672297329482" ,"title" : "OtterBox Lumen Series Case with MagSafe for iPhone 14 - Red CNY Limited Edition" ,"price":"49.95" 
},{"image" : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MPL83?wid=532&hei=582&fmt=png-alpha&.v=1660798745418","title" :"RED Sport" ,"price" :"49.00"},
{
    "image" : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MLWJ3?wid=532&hei=582&fmt=png-alpha&.v=1630029877000" ,"title":"Apple Cable" ,"price" :"29.00"
},
{
    "title" : "Buy AirPods Max" , 
    "image" : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-pink-202011?wid=532&hei=582&fmt=png-alpha&.v=1604022365000" ,
    "price" : "549"
},
{
    "title" : "35W Dual USB-C Port Compact Power Adapter" , 
    "image" : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MNWM3?wid=532&hei=582&fmt=png-alpha&.v=1652736144126" ,
    "price" : "59"
}

]

const iPhoneAccessories =[
    {
        "title" : "iPhone 14 Pro Clear Case with MagSafe" , 
        "image" : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MPU63?wid=532&hei=582&fmt=png-alpha&.v=1661471392701" ,
        "price" : "49.00"
    },
    {
        "title" : "MagSafe Charger" , 
        "image" : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MHXH3?wid=532&hei=582&fmt=png-alpha&.v=1661269793559" ,
        "price" : "39.00"
    },
    {
        "title" : "iPhone 14 Pro Max Leather Case with MagSafe - Ink" , 
        "image" : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MPPP3?wid=532&hei=582&fmt=png-alpha&.v=1662503140974" ,
        "price" : "59.00"
    }  ,
    {
        "title" : "iPhone Leather Wallet with MagSafe - Forest Green" , 
        "image" : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MPPT3?wid=532&hei=582&fmt=png-alpha&.v=1663108575695" ,
        "price" : "59.00"
    }  
    , {
        "title" : "iPhone 14 Silicone Case with MagSafe - Lilac" , 
        "image" : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MPRY3?wid=532&hei=582&fmt=png-alpha&.v=1666123999266" ,
        "price" : "59.00"
    }  ,
    {
        "title" : "20W USB-C Power Adapter" , 
        "image" : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MU7T2_GEO_US?wid=532&hei=582&fmt=png-alpha&.v=1542406417329" ,
        "price" : "19.00"
    }  ,
    {
        "title" : "OtterBox Figura Series Case with MagSafe for iPhone 14 - Multicolor" , 
        "image" : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HQ512?wid=532&hei=582&fmt=png-alpha&.v=1662764942928" ,
        "price" : "49.98"
    }   ,
    {
        "title" : "OtterBox Lumen Series Case with MagSafe for iPhone 14 Pro - Blue" , 
        "image" : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HQ4V2?wid=532&hei=582&fmt=png-alpha&.v=1662752139881" ,
        "price" : "49.97"
    }   
]

const iPadAccessories =[
    {
        "title" : "Magic Keyboard Folio for iPad (10th generation) - US English" , 
        "image" : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQDP3_FV401?wid=532&hei=582&fmt=png-alpha&.v=1664481416885" ,
        "price" : "249.00"
    },
    {
        "title" : "Magic Keyboard for iPad Pro 12.9‑inch (6th generation) - Black" , 
        "image" : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MJQK3?wid=532&hei=582&fmt=png-alpha&.v=1665496505001" ,
        "price" : "349.00"
    },
    {
        "title" : "Apple Pencil (1st generation)" , 
        "image" : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MK0C2?wid=532&hei=582&fmt=png-alpha&.v=1564075356758" ,
        "price" : "99.00"
    }  ,
    {
        "title" : "USB-C to Apple Pencil Adapter" , 
        "image" : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQLU3?wid=532&hei=582&fmt=png-alpha&.v=1666191613710" ,
        "price" : "9.00"
    } ,
    {
        "title" : "Smart Folio for iPad (10th generation) - Watermelon" , 
        "image" : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQDT3?wid=532&hei=582&fmt=png-alpha&.v=1664481896795" ,
        "price" : "79.00"
    } ,
    {
        "title" : "Smart Folio for iPad Pro 11-inch (4th generation) - Marine Blue" , 
        "image" : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQDV3?wid=532&hei=582&fmt=png-alpha&.v=1664548062982" ,
        "price" : "79.00"
    } 
]
const watchBandAccessories =[
    {
        "title" : "Black Unity Sport Loop" , 
        "image" : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQTH3?wid=532&hei=582&fmt=png-alpha&.v=1673374526099" ,
        "price" : "49.00"
    },
    {
        "title" : "45mm Elderberry Sport Loop" , 
        "image" : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MPLD3?wid=532&hei=582&fmt=png-alpha&.v=1660799010979" ,
        "price" : "45.00"
    },
    {
        "title" : "Elderberry Sport Loop" , 
        "image" : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MPLD3?wid=532&hei=582&fmt=png-alpha&.v=1660799010979" ,
        "price" : "49.00"
    }  
    ,
    {
        "title" : "Graphite Milanese Loop" , 
        "image" : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ML773?wid=532&hei=582&fmt=png-alpha&.v=1630015271000" ,
        "price" : "99.00"
    } 
    ,
    {
        "title" : "Rainforest Braided Solo Loop" , 
        "image" : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQGM3ref?wid=532&hei=582&fmt=png-alpha&.v=1660861593465" ,
        "price" : "99.00"
    } ,
    {
        "title" : "45mm Elderberry Sport Loop" , 
        "image" : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MPLD3?wid=532&hei=582&fmt=png-alpha&.v=1660799010979" ,
        "price" : "45.00"
    },
    {
        "title" : "Elderberry Sport Loop" , 
        "image" : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MPLD3?wid=532&hei=582&fmt=png-alpha&.v=1660799010979" ,
        "price" : "49.00"
    }
]
const MacAccessories =[
    {
        "title" : "Studio Display" , 
        "image" : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MK0U3?wid=532&hei=582&fmt=png-alpha&.v=1646446502337" ,
        "price" : "1,599.00"
    },
    {
        "title" : "Magic Keyboard with Touch ID and Numeric Keypad" , 
        "image" : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MMMR3?wid=532&hei=582&fmt=png-alpha&.v=1645719947833" ,
        "price" : "199.00"
    },
    {
        "title" : "Magic Mouse" , 
        "image" : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MMMQ3?wid=532&hei=582&fmt=png-alpha&.v=1645138486301" ,
        "price" : "99.00"
    }  ,
    {
        "title" : "Magic Trackpad" , 
        "image" : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MMMP3?wid=532&hei=582&fmt=png-alpha&.v=1645136899926" ,
        "price" : "149.00"
    }  
    ,
    {
        "title" : "Power Adapter Extension Cable" , 
        "image" : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MK122?wid=532&hei=582&fmt=png-alpha&.v=1593112648000" ,
        "price" : "19.00"
    }  
    ,
    {
        "title" : "USB-C Digital AV Multiport Adapter" , 
        "image" : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MUF82?wid=532&hei=582&fmt=png-alpha&.v=1590526633000" ,
        "price" : "69.00"
    }  
]
const SoundAccessories =[
    {
        "title" : "AirPods Pro (2nd generation)" , 
        "image" : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQD83?wid=532&hei=582&fmt=png-alpha&.v=1660803972361" ,
        "price" : "249.00"
    },
    {
        "title" : "AirPods (3rd generation) with Lightning Charging Case" , 
        "image" : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73?wid=532&hei=582&fmt=png-alpha&.v=1632861342000" ,
        "price" : "169.00"
    },
    {
        "title" : "HomePod - Midnight" , 
        "image" : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/homepod-select-midnight-202210?wid=532&hei=582&fmt=png-alpha&.v=1670557210097" ,
        "price" : "299.00"
    } ,
    {
        "title" : "HomePod mini - Blue" , 
        "image" : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/homepod-mini-select-blue-202110?wid=532&hei=582&fmt=png-alpha&.v=1632925511000" ,
        "price" : "99.00"
    },
    {
        "title" : "AirPods Max - Green" , 
        "image" : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-green-202011?wid=532&hei=582&fmt=png-alpha&.v=1604022364000" ,
        "price" : "549.00"
    },
    {
        "title" : "AirPods (3rd generation) with MagSafe Charging Case" , 
        "image" : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73?wid=532&hei=582&fmt=png-alpha&.v=1632861342000" ,
        "price" : "179.00"
    }  ,
    {
        "title" : "Beats Fit Pro True Wireless Earbuds — Stone Purple" , 
        "image" : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MK2H3?wid=532&hei=582&fmt=png-alpha&.v=1634663497000" ,
        "price" : "199.00"
    },
    {
        "title" : "Beats Studio Buds – True Wireless Noise Cancelling Earphones – Sunset Pink" , 
        "image" : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MMT83?wid=532&hei=582&fmt=png-alpha&.v=1647541360014" ,
        "price" : "149.99"
    }  ,
    {
        "title" : "Beats Flex – All-Day Wireless Earphones - Flame Blue" , 
        "image" : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MYMG2?wid=532&hei=582&fmt=png-alpha&.v=1601053195000" ,
        "price" : "69.99"
    },
    {
        "title" : "Beats Studio3 Wireless Headphones – The Beats Skyline Collection - Shadow Gray" , 
        "image" : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MXJ92?wid=532&hei=582&fmt=png-alpha&.v=1580420175341" ,
        "price" : "349.95"
    }  
]
const AirTagAccessories =[
    {
        "title" : "AirTag" , 
        "image" : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airtag-single-select-202104?wid=532&hei=582&fmt=png-alpha&.v=1617761671000" ,
        "price" : "29.00"
    },
    {
        "title" : "AirTag 4 pack" , 
        "image" : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airtag-4pack-select-202104?wid=532&hei=582&fmt=png-alpha&.v=1617761669000" ,
        "price" : "99.00"
    },
    {
        "title" : "AirTag Leather Key Ring - Forest Green" , 
        "image" : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MM073?wid=532&hei=582&fmt=png-alpha&.v=1624640865000" ,
        "price" : "35.00"
    }  ,
    {
        "title" : "AirTag Leather Loop - Saddle Brown" , 
        "image" : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MX4A2?wid=532&hei=582&fmt=png-alpha&.v=1618028917000" ,
        "price" : "39.00"
    },
    {
        "title" : "Belkin Reflective Secure Holder with Key Ring for AirTag (4-Pack)" , 
        "image" : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HQ0Q2?wid=532&hei=582&fmt=png-alpha&.v=1649352718774" ,
        "price" : "49.00"
    },
    {
        "title" : "OtterBox Rugged Case for AirTag" , 
        "image" : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HPTT2?wid=532&hei=582&fmt=png-alpha&.v=1643861921849" ,
        "price" : "19.97"
    },
    {
        "title" : "Belkin Secure Holder with Carabiner for AirTag" , 
        "image" : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HPU02?wid=532&hei=582&fmt=png-alpha&.v=1642716892000" ,
        "price" : "19.95"
    } ,
    {
        "title" : "AirTag Hermès Bag Charm - Rose Texas" , 
        "image" : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQDD3?wid=532&hei=582&fmt=png-alpha&.v=1661357377200" ,
        "price" : "299.00"
    } ,
    {
        "title" : "AirTag Hermès Key Ring - Maison" , 
        "image" : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQDK3?wid=532&hei=582&fmt=png-alpha&.v=1671060101830" ,
        "price" : "349.00"
    }  
]
const Accessories = () => {
  return (
    <>
    <VedioPlayer vedio={"https://www.apple.com/105/media/us/tv-home/2023/725d90d2-b7c8-4ac4-9df9-35a7ca008428/anim/hero/large_2x.mp4"}/>
     <Center> <Heading margin={"20px"}>Featured Lunar New Year Accessories</Heading></Center>
    <Grid  templateColumns='repeat(4, 1fr)' gap={6}>
        {NewYearAccessories.map((item)=>{
            return (
                <GridItem >
                    <Acards image={item.image} price={item.price} title={item.title} />
                </GridItem>
            )
        })}
    </Grid>
    <Center> <Heading margin={"50px"}>Featured iPhone Accessories</Heading></Center>
    <Grid  templateColumns='repeat(4, 1fr)' gap={6}>
        {iPhoneAccessories.map((item)=>{
            return (
                <GridItem >
                    <Acards image={item.image} price={item.price} title={item.title} />
                </GridItem>
            )
        })}
    </Grid>
    <Center> <Heading margin={"50px"}>Featured iPhone Accessories</Heading></Center>
    <Grid  templateColumns='repeat(4, 1fr)' gap={6}>
        {iPadAccessories.map((item)=>{
            return (
                <GridItem >
                    <Acards image={item.image} price={item.price} title={item.title} />
                </GridItem>
            )
        })}
    </Grid>
    <Center> <Heading margin={"50px"}>Featured iPhone Accessories</Heading></Center>
    <Grid  templateColumns='repeat(4, 1fr)' gap={6}>
        {watchBandAccessories.map((item)=>{
            return (
                <GridItem >
                    <Acards image={item.image} price={item.price} title={item.title} />
                </GridItem>
            )
        })}
    </Grid>
    <Center> <Heading margin={"50px"}>Featured iPhone Accessories</Heading></Center>
    <Grid  templateColumns='repeat(4, 1fr)' gap={6}>
        {SoundAccessories.map((item)=>{
            return (
                <GridItem >
                    <Acards image={item.image} price={item.price} title={item.title} />
                </GridItem>
            )
        })}
    </Grid>
    <Center> <Heading margin={"50px"}>Featured iPhone Accessories</Heading></Center>
    <Grid  templateColumns='repeat(4, 1fr)' gap={6}>
        {MacAccessories.map((item)=>{
            return (
                <GridItem >
                    <Acards image={item.image} price={item.price} title={item.title} />
                </GridItem>
            )
        })}
    </Grid>
    <Center> <Heading margin={"50px"}>Featured iPhone Accessories</Heading></Center>
    <Grid  templateColumns='repeat(4, 1fr)' gap={6}>
        {AirTagAccessories.map((item)=>{
            return (
                <GridItem >
                    <Acards image={item.image} price={item.price} title={item.title} />
                </GridItem>
            )
        })}
    </Grid>
    </>
  )
}

export default Accessories