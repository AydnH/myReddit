import { Flex, Box } from "@chakra-ui/react"
import React from "react"
import { WrapperProps } from "./Wrapper"


interface ITrendingProps {}

export const Trending: React.FC<WrapperProps> = ({ variant = "regular"}) => {

    return (
        <Flex flex={1} m='auto' maxW={800} height={40} align='center' p={4}>
            <Box 
            bg='#f5f6fa' 
            height={150}  
            borderRadius="md" 
            mx="auto" 
            maxW={ variant === "regular" ? "800px" : "400px"} w="100%"
            >
                trending
            </Box>
        </Flex>
    )
}