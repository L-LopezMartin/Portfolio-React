import { Flex, Text, Image } from '@chakra-ui/react'

function Banner() {
  
    return (
        <Flex as={'section'} w={"100vw"} justifyContent={"space-around"} h={"150px"}>
            <Text>Diseño Web</Text>
            <Image alt='Star divider'></Image>
            <Text>Investigación de usuario</Text>
            <Image alt='Star divider'></Image>
            <Text>Soluciones móviles</Text>
            <Image alt='Star divider'></Image>
            <Text>Soluciones UI/UX</Text>
        </Flex>
    )
}

export default Banner