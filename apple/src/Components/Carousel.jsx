import React from 'react'
import { Provider } from "chakra-ui-carousel";
import { LeftButton, RightButton } from "chakra-ui-carousel";
import SmallCard from './SmallCard';

const Carousel = () => {
    return (
        <Box>
          <Provider>
            <Carousel gap={50}>
                    <SmallCard bgCol={"black"} image={"https://www.apple.com/v/apple-watch-series-8/b/images/overview/hero/hero_static__c9d1bk9frtua_large_2x.jpg"}  title={"Apple Watch"} subtitle={"A healthy leap ahead."} textColor={"white"}/>
                    <SmallCard bgCol={"black"} image={"https://www.apple.com/v/home/ax/images/promos/iphone-14-pro/promo_iphone14pro__4n4twj56fzmu_large_2x.jpg"} subtitle={"Pro.beyond"} textColor={"white"}/>
                    <SmallCard bgCol={"smokewhite"} image={"https://www.apple.com/v/iphone-14/d/images/overview/display/xdr_display__cxbhgrgt5keq_large_2x.jpg"} title={"iPhone 14"} textColor={"black"}  subtitle={"Pro beyond ,A healthy leap ahead"} />
                    <SmallCard bgCol={"black"} image={"https://www.apple.com/in/ipad-pro/images/overview/hero/hero_combo__fcqcc3hbzjyy_large_2x.jpg"} title={"iPhone 12"} textColor={"white"} subtitle={"Pro beyond"}/>
            </Carousel>
            <LeftButton
              bgColor="red.500"
              customIcon={<ArrowLeftIcon />}
              textColor={"white.500"}
            />
            <RightButton bgColor="blue.500" customIcon={<ArrowRightIcon />} />
          </Provider>
        </Box>
      );
}

export default Carousel