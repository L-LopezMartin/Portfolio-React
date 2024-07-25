import { Flex, Heading, Text, Link, Image } from "@chakra-ui/react"

function AboutMe(){
    return(
        <Flex as={'section'} w={"100vw"} px={"10vw"}>
            <Flex w={"40%"}>
                <Flex direction={"column"}>
                    <Link><Image alt="Dribble Logo"></Image></Link>
                    <Link><Image alt="Instagram Logo"></Image></Link>
                    <Link><Image alt="Behance Logo"></Image></Link>
                </Flex>
                <Image alt="Trabalho"></Image>
            </Flex>
            <Flex w={"60%"} direction={"column"}>
                <Heading>Sobre mí</Heading>
                <Heading>Por qué contratarme</Heading>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, sequi beatae aut atque consectetur quis natus earum quod, saepe architecto, blanditiis adipisci ab dignissimos ea. Harum veniam doloribus fugit ea!</Text>

                <Heading>Campos de experiencia</Heading>
                <Flex justifyContent={"space-around"}>
                    <Flex direction={"column"} alignItems={"center"}>
                        <Text>90%</Text>
                        <Text>Investigación de usuario</Text>
                    </Flex>
                    <Flex direction={"column"} alignItems={"center"}>
                        <Text>80%</Text>
                        <Text>Flujo del usuario</Text>
                    </Flex>
                    <Flex direction={"column"} alignItems={"center"}>
                        <Text>95%</Text>
                        <Text>Esquematización de página</Text>
                    </Flex>
                    <Flex direction={"column"} alignItems={"center"}>
                        <Text>90%</Text>
                        <Text>Prototipado</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default AboutMe