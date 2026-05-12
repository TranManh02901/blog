import {Flex, Img, chakra, shouldForwardProp } from "@chakra-ui/react";
import React from "react";
import profile from "../media/profile.png"
import { motion, isValidMotionProp } from "framer-motion";

const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});


export default function Avt() {
    return (
        <Flex justifyContent="center"
        zIndex="1"
        >
            <ChakraBox
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 10,
              ease: "linear",
              repeat: Infinity,
              delay: 1
            }}
            w="100%"
            h={120}>
              <Img
              boxSize="120" borderRadius="full"
              src={profile} alt="profile"
              boxShadow="dark-lg">
              </Img>
            </ChakraBox>
        </Flex>
    );
};