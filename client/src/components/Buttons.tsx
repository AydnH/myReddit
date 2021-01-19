import { AddIcon, ArrowUpIcon, StarIcon, SunIcon, TriangleUpIcon } from "@chakra-ui/icons"
import { Button, Link, Select } from "@chakra-ui/react"
import React from "react"
import NextLink from 'next/link';

export const NewPostsButton = () => {
    return (
        <Button rightIcon={<SunIcon/>}>
            New
        </Button>
    )
}

export const BestPostsButton = () => {
    return (
        <Button rightIcon={<ArrowUpIcon/>}>
            Best
        </Button>
    )
}

export const PopularPostsButton = () => {
    return (
    <Button rightIcon={<StarIcon/>}>
        Popular
    </Button>
    )
}

export const CreatePostsButton = () => {
    return (
    <Button rightIcon={<AddIcon/>}>
        Publish
    </Button> 
    )
}

export const RisingPostsButton = () => {
    return (
    <Button rightIcon={<TriangleUpIcon/>}>
        Rising
    </Button>
    )
}

export const LocationFilter = () => {
    return (
    <Select variant="filled" placeholder="country?"></Select>
    )
}

export const LoginButton = () => {
    return (
    <Button> 
        <NextLink href="/login">
        <Link color='black' mr={2}>login</Link>
        </NextLink>
    </Button>
    )
}

export const LogoutButton = () => {
    return (
        <Button colorScheme="red" variant="solid"> 
            logout
        </Button>
    )
}

export const RegisterButton = () => {
    return (
    <Button> 
        <NextLink href="/register">
            <Link color='black' mr={2}>Register</Link>
        </NextLink>
    </Button>
    )
}