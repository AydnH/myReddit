import { Box, Flex } from "@chakra-ui/react"
import React from "react"
import { BestPostsButton, NewPostsButton, PopularPostsButton, RisingPostsButton } from "./Buttons"
import { WrapperProps } from "./Wrapper"


interface IFilterBarProps {}

export const FilterBar: React.FC<WrapperProps> = ({variant = "regular"}) => {

    return (
        <Flex > 
            <Flex 
            maxW={ variant === "regular" ? "800px" : "400px"} w="100%" height={30}
            p={4}
            ml='auto'
            >
            <Box mr={2}><PopularPostsButton/></Box>
            <Box mr={2}><RisingPostsButton/></Box>
            <Box mr={2}><BestPostsButton/></Box>
            <Box mr={2}><NewPostsButton/></Box>
            </Flex>
        </Flex>
    )
}