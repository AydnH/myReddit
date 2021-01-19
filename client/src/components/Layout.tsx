import { Box } from '@chakra-ui/react';
import React from 'react';
import { CreatePostBlock } from './CreatePostBlock';
import { FilterBar } from './Filterbar';
import { NavBar } from "./Navbar";
import { Trending } from './Trending';
import { Wrapper, WrapperVariant } from './Wrapper';

interface LayoutProps {
    variant?: WrapperVariant;
}

export const Layout: React.FC<LayoutProps> = ({ children, variant }) => {
    return ( 
        <>
        <Box bg="#2f3640">
        <NavBar />
        <Trending/>
        <CreatePostBlock />
        <FilterBar/>
        <Wrapper variant={variant}>
            ({children})
        </Wrapper>
        </Box>
        </>
    );
}