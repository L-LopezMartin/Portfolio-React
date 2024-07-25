import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons"
import { Image, Flex, Heading, Box, Text, Button } from "@chakra-ui/react"

function ClientReviews(){
    return(
        <Flex as={'section'} direction={"column"} px={"10vw"} w={"100vw"}>
            <Heading w={"300px"} my={"50px"}>Vea lo que dicen los clientes <ArrowForwardIcon></ArrowForwardIcon></Heading>
            <Flex alignItems={"center"}>
                    <Button><ArrowBackIcon></ArrowBackIcon></Button>
                <Box border={"solid"} borderRadius={"10px"}>
                    <Text w={"60%"} p={"20px"} pt={"50px"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus deserunt maxime repellat nisi? Consequuntur, iusto. A provident doloremque suscipit tempore libero voluptas ullam, fugit illum animi id, esse ut molestias?</Text>
                    <Text pl={"20px"}>Mr Makiu</Text>
                    <Text pl={"20px"} pb={"10px"}>Director de Marketing - Holalab</Text>
                </Box>
                <Image alt="MrMakiu" position={"relative"} left={"-300px"} top={"-100px"}></Image>
                    <Button><ArrowForwardIcon></ArrowForwardIcon></Button>
            </Flex>
        </Flex>
    )
}

export default ClientReviews