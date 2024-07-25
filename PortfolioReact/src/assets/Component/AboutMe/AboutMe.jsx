import { Flex, Heading, Text, Link, Image } from "@chakra-ui/react"

function AboutMe(){
    return(
        <Flex as={'section'}>
            <Flex>
                <Image alt="Trabalho"></Image>
                <Flex>
                    <Link><Image alt="Dribble Logo"></Image></Link>
                    <Link><Image alt="Instagram Logo"></Image></Link>
                    <Link><Image alt="Behance Logo"></Image></Link>
                </Flex>
            </Flex>
            <Flex>
                <Heading>Sobre mí</Heading>
                <Heading>Por qué contratarme</Heading>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, sequi beatae aut atque consectetur quis natus earum quod, saepe architecto, blanditiis adipisci ab dignissimos ea. Harum veniam doloribus fugit ea!</Text>

                <Heading>Campos de experiencia</Heading>
                <Flex>
                    <Text>90%</Text>
                    <Text>Investigación de usuario</Text>
                </Flex>
                <Flex>
                    <Text>80%</Text>
                    <Text>Flujo del usuario</Text>
                </Flex>
                <Flex>
                    <Text>95%</Text>
                    <Text>Esquematización de página</Text>
                </Flex>
                <Flex>
                    <Text>90%</Text>
                    <Text>Prototipado</Text>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default AboutMe