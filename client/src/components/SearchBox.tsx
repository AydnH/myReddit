import { SearchIcon } from "@chakra-ui/icons"
import { Button, Flex, Input } from "@chakra-ui/react"
import React from "react"

export interface ISearchBox{}

export const SearchBox: React.FC<ISearchBox> = ({}) => {
    return (
        <Flex>
        <Input mr={2} placeholder="Search...."  />
        <Button leftIcon={<SearchIcon/>}/>
        </Flex>
    )
}