import { Box, Flex, Link, Image, Text, Button, Heading, Highlight, Divider } from "@chakra-ui/react"

function Hero(){
    return(
        <Flex as="section" w={"100vw"} px={"10vw"} direction={"row"} h={"80vh"} alignItems={"center"}>
            <Flex direction={"column"} w={"50%"}>
                <Heading> Hola! Soy Leandro</Heading>
                <Text><Highlight query={'UI/UX'}>Soy diseñador UI/UX</Highlight></Text>
                <Text>Creador de experieniencias digitales fluidas</Text>
                <Flex>
                    <Button>Contáctame</Button>
                    <Button>Ver curriculum</Button>
                </Flex>
                <Flex>
                    <Box>
                        <Text>Email</Text>
                        <Text>leanejemplo@gmail.com</Text>
                    </Box>
                    <Divider orientation="vertical" h={"80%"} mx={"20px"}></Divider>
                    <Box>
                        <Text>Teléfono</Text>
                        <Text>+54 9 261 6887381</Text>
                    </Box>
                    <Divider orientation="vertical" h={"50px"} mx={"20px"}></Divider>
                    <Box>
                        <Text>Ubicación</Text>
                        <Text>Mendoza, Agentina</Text>
                    </Box>
                </Flex>
            </Flex>
            <Link position={"absolute"} right={"20vw"} top={"30vh"}><Image alt="Conoce más sobre mí"></Image></Link>
        </Flex>
    )
}

export default Hero