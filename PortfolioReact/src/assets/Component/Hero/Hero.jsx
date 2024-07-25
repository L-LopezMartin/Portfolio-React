import { Box, Flex, Link, Image, Text, Button, Heading, Highlight } from "@chakra-ui/react"

function Hero(){
    return(
        <section>
            <Flex>
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
                    <Box>
                        <Text>Teléfono</Text>
                        <Text>+54 9 261 6887381</Text>
                    </Box>
                    <Box>
                        <Text>Ubicación</Text>
                        <Text>Mendoza, Agentina</Text>
                    </Box>
                </Flex>
            </Flex>
            <Link><Image alt="Conoce más sobre mí"></Image></Link>
        </section>
    )
}

export default Hero