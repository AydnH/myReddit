import { Box } from "@chakra-ui/react";

export type WrapperVariant = "small" | "regular";

export interface WrapperProps{
    variant?: WrapperVariant;
}

export const Wrapper: React.FC<WrapperProps> = ({ 
    children, 
    variant = "regular",
 }) => {
return <Box 
            bg="#f5f6fa"
            mt={8} 
            mx="auto" 
            maxW={ variant === "regular" ? "800px" : "400px"} w="100%"
            borderRadius="md">
            {children}
        </Box>;
};