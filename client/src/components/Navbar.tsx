import { Box, Flex, Link, Button, Heading } from '@chakra-ui/react';
import React from 'react';
import NextLink from 'next/link'
import { SearchBox } from './SearchBox';
import { LoginButton, LogoutButton, PopularPostsButton, RegisterButton, RisingPostsButton } from './Buttons';

interface INavbarProps {}

export const NavBar: React.FC<INavbarProps> = ({}) => {
    const me = true;

    let body = null;
    if(me === true){
    body = (
        <>
        <Flex>
            <Box mr={2}>
                <LoginButton />
            </Box>
            <Box mr={"auto"}>
                <RegisterButton/>
            </Box>
        </Flex>
        </>
        )
    } else {
        body = (
            <>
                <Flex>
                    <Box mr={2}><RisingPostsButton/></Box> 
                    <Box mr={2}><PopularPostsButton/></Box>
                    <Box color="red"><LogoutButton/></Box>
                </Flex>
            </>
        )
    }
    return (
        <Flex zIndex={1} position='sticky' top={0} bgGradient="linear(to-b, #353b48, #2f3640)" p={4} ml='auto' >
            <Flex flex={1} m='auto' maxW={800} height={15} align={'center'}>
                <NextLink href='/'>
                    <Link>
                    <Link color='white' mr={2}>home</Link>
                    </Link>
                </NextLink>
                <Box mr={2} ml={"auto"}>
                    <SearchBox/>
                </Box>
                <Box ml={"auto"}>
                    {body}
                </Box>    
            </Flex>
        </Flex>
    );
}