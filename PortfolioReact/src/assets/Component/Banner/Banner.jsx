import { Flex, Text, Image } from '@chakra-ui/react'
import dividerStar from "./img/4PointStar.svg"

function Banner() {
  
    return (
        <Flex as={'section'} w={"100vw"} justifyContent={"space-around"} alignItems={"center"} h={"100px"} bg={"rgb(232, 106, 66)"}>
            <Text>Diseño Web</Text>
            <Image src={dividerStar} alt='Star divider' w={"50px"}></Image>
            <Text>Investigación de usuario</Text>
            <Image src={dividerStar} alt='Star divider' w={"50px"}></Image>
            <Text>Soluciones móviles</Text>
            <Image src={dividerStar} alt='Star divider' w={"50px"}></Image>
            <Text>Soluciones UI/UX</Text>
        </Flex>
    )
}

export default Banner