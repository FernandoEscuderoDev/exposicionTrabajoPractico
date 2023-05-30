import { chakra, shouldForwardProp } from '@chakra-ui/react';
import { isValidMotionProp, motion } from 'framer-motion';
import React from 'react'

const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
  });

export const Fade= ({children}) => {
  return (
    <ChakraBox initial={{ opacity: 0 }} animate={{ opacity: 1, transition:{ duration: 1.5} }} exit={{ opacity: 0 }}>
        {children}
    </ChakraBox>
  )
}