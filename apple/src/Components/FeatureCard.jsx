import { Avatar, Box } from '@chakra-ui/react'
import React from 'react'

const FeatureCard = ({image}) => {
  return (
    <>
    <Box>
    <Avatar size='xl' name='Christian Nwamba' src={{image}} />
    </Box>
    </>
  )
}

export default FeatureCard