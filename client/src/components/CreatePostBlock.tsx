import { SearchIcon } from "@chakra-ui/icons"
import { Flex, Input, Button, Box, Textarea, Heading } from "@chakra-ui/react"
import { Form, Formik } from "formik"
import React from "react"
import { CreatePostsButton } from "./Buttons";

export type WrapperVariant = "small" | "regular";

interface WrapperProps{
    variant?: WrapperVariant;
}

export const CreatePostBlock: React.FC<WrapperProps> = ({variant = "regular"}) => {
    const values = {title: '', text: ''}
    
    return (
        <Formik initialValues={{title:'', text:''}}
            onSubmit={(values) => {values.title = 'submitted', values.text = 'submitted'}}
        >
        <Box 
            bg="#f5f6fa"
            mt={8} 
            mx="auto" 
            maxW={ variant === "regular" ? "800px" : "400px"} w="100%"
            borderRadius="md"
            >
            <Heading size="md" pb={2} mx="2" pt={2}>Create post</Heading>
            <Form>
                <Input 
                    value={values.title}
                    placeholder="Create a post..." 
                    mb={4}
                    p={4}
                />
                {/* <Box mb={4}>
                <Textarea 
                    value={values.text}
                    placeholder="whats on your mind?...." 
                />
                </Box>
                <Flex justify="center" align="center" pb={4}>
                <CreatePostsButton />
                </Flex> */}
            </Form>
        </Box> 
        </Formik>

    )
}