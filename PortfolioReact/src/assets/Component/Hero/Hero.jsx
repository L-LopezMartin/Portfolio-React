import { Box, Flex, Link, Image, Text, Button, Heading, Highlight, Divider } from "@chakra-ui/react"
import bgImage from "./img/YoGrande.png"
import videoAboutMe from "./img/VideoAboutMe.png"

function Hero(){
    return(
        <Flex as="section" w={"100vw"} px={"10vw"} direction={"row"} h={"70vh"} alignItems={"center"} bg={"rgb(23, 22, 26)"} bgImage={bgImage} bgSize={"50%"} bgRepeat={"no-repeat"} bgPos={"center"}>
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
                    <Divider orientation="vertical" h={"50px"} mx={"20px"}></Divider>
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
            <Link position={"absolute"} right={"20vw"} top={"30vh"}><Image src={videoAboutMe} alt="Conoce más sobre mí" boxSize={"100px"}></Image></Link>
        </Flex>
    )
}

export default Hero