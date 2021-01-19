import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { LocationFilter, LoginButton, PopularPostsButton, RegisterButton, RisingPostsButton } from './Buttons'

export interface IButtonBar{}

export const ButtonBar: React.FC<IButtonBar> = ({}) => {
    return(
        <Flex>
            <Box>
                <PopularPostsButton/>
                
                <RisingPostsButton/>
                <LocationFilter/>
                <LoginButton/>
                <RegisterButton/>
            </Box>
        </Flex>
    )
}
