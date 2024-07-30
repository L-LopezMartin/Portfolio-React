import { Flex, Text, Image } from '@chakra-ui/react'
import dividerStar from "./img/4PointStar.svg"

function Banner() {
    const textStyle = {color:"rgb(230,230,230)", fontSize:{base:"22px", md:"22px", xl:"32px"}, fontWeight:"bold", textAlign:"center"}
    const starStyle = {w:{md:"40px", lg:"35px", xl:"50px"}, display:{base:"none", md:"block"}}
  
    return (
        <Flex as={'section'} w={"100vw"} justifyContent={"space-around"} alignItems={"center"} bg={"rgb(232, 106, 66)"} px={"5vw"} direction={{base:"column", md:"row"}} py={"20px"}>
            <Text sx={textStyle}>Diseño Web</Text>
            <Image src={dividerStar} alt='Star divider' sx={starStyle}></Image>
            <Text sx={textStyle}>Investigación de usuario</Text>
            <Image src={dividerStar} alt='Star divider' sx={starStyle}></Image>
            <Text sx={textStyle}>Soluciones móviles</Text>
            <Image src={dividerStar} alt='Star divider' sx={starStyle}></Image>
            <Text sx={textStyle}>Soluciones UI/UX</Text>
        </Flex>
    )
}

export default Banner