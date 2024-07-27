import { Flex, Text, Image } from '@chakra-ui/react'
import dividerStar from "./img/4PointStar.svg"

function Banner() {
    const textStyle = {color:"rgb(230,230,230)", fontSize:"32px", fontWeight:"bold"}
  
    return (
        <Flex as={'section'} w={"100vw"} justifyContent={"space-around"} alignItems={"center"} h={"150px"} bg={"rgb(232, 106, 66)"} px={"5vw"}>
            <Text sx={textStyle}>Diseño Web</Text>
            <Image src={dividerStar} alt='Star divider' w={"50px"}></Image>
            <Text sx={textStyle}>Investigación de usuario</Text>
            <Image src={dividerStar} alt='Star divider' w={"50px"}></Image>
            <Text sx={textStyle}>Soluciones móviles</Text>
            <Image src={dividerStar} alt='Star divider' w={"50px"}></Image>
            <Text sx={textStyle}>Soluciones UI/UX</Text>
        </Flex>
    )
}

export default Banner