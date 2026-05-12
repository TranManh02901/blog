import React from "react";
import { Flex,Text,useColorModeValue } from "@chakra-ui/react";

const Content = () =>{
    return(
        <Text
        color={useColorModeValue('blackAlpha.700','white')}
        fontFamily="Hack">In development {`:(`}</Text>
    )
}

export class Anode extends React.Component {
    render(){
        return(
            <Flex justifyContent="center" marginTop="20">
                <Content/>
            </Flex>
        )
    };
};