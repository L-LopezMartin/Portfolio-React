import { ArrowForwardIcon } from "@chakra-ui/icons"
import { Image, Flex, Heading, Box, Text } from "@chakra-ui/react"

function ClientReviews(){
    return(
        <Flex as={'section'}>
            <Heading>Vea lo que dicen los clientes <ArrowForwardIcon></ArrowForwardIcon></Heading>
            <Flex>
                <Box>
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus deserunt maxime repellat nisi? Consequuntur, iusto. A provident doloremque suscipit tempore libero voluptas ullam, fugit illum animi id, esse ut molestias?</Text>
                    <Text>Mr Makiu</Text>
                    <Text>Director de Marketing - Holalab</Text>
                </Box>
                <Image alt="MrMakiu"></Image>
            </Flex>
        </Flex>
    )
}

export default ClientReviews