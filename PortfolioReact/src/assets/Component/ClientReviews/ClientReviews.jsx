import { ArrowForwardIcon} from "@chakra-ui/icons"
import { Image, Flex, Heading, Box, Text } from "@chakra-ui/react"
import mrMakiu from "./img/MrMakiu.png"

function ClientReviews(){
    const headerStyle = {w:"600px", fontFamily:"Playfair Display", fontSize:"72px"}

    const imgStyle = {w:"250px", p:"10px", bgColor:"rgb(46, 45, 49)", position:"relative", left:"67%", top:"-230px", borderRadius:"10px"}
    const textStyle = {fontFamily:"IBM Plex Sans", fontSize:"20px", fontWeight:"normal", color:"rgb(230, 230, 230)"}
    const personStyle = {fontFamily:"IBM Plex Sans", fontSize: "18px", fontWeight:"semibold", color:"rgb(230, 230, 230)"}
    const personJobStyle = {fontFamily:"IBM Plex Sans", fontSize: "18px", fontWeight:"semibold", color:"rgb(192, 193, 194)"}

    return(
        <Flex as={'section'} id={"Reviews"} direction={"column"} px={"10vw"} w={"100vw"} bg={"rgb(35, 34, 38)"} py={"100px"}>
            <Heading sx={headerStyle}>Vea lo que dicen los clientes <ArrowForwardIcon color={"rgb(232, 106, 66)"}></ArrowForwardIcon></Heading>
            <Flex wrap={"wrap"} direction={"row"} position={"relative"}>
                <Box w={"50%"} h={"300px"} px={"20px"} pb={"400px"}>
                    <Box border={"solid"} borderColor={"rgb(232, 106, 66)"} borderRadius={"10px"} position={"relative"} top={"100px"}>
                        <Text sx={textStyle} w={"67%"} p={"20px"} pt={"50px"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus deserunt maxime repellat nisi? Consequuntur, iusto. A provident doloremque suscipit tempore libero voluptas ullam, fugit illum animi id, esse ut molestias?</Text>
                        <Text sx={personStyle} pl={"20px"}>Mr Makiu</Text>
                        <Text sx={personJobStyle} pl={"20px"} pb={"10px"}>Director de Marketing - Holalab</Text>
                    </Box>
                    <Image sx={imgStyle} src={mrMakiu} alt="MrMakiu"></Image>
                </Box>
                <Box w={"50%"} h={"300px"} px={"20px"} pb={"400px"}>
                    <Box border={"solid"} borderColor={"rgb(232, 106, 66)"} borderRadius={"10px"} position={"relative"} top={"100px"}>
                        <Text sx={textStyle} w={"67%"} p={"20px"} pt={"50px"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus deserunt maxime repellat nisi? Consequuntur, iusto. A provident doloremque suscipit tempore libero voluptas ullam, fugit illum animi id, esse ut molestias?</Text>
                        <Text sx={personStyle} pl={"20px"}>Mr Makiu</Text>
                        <Text sx={personJobStyle} pl={"20px"} pb={"10px"}>Director de Marketing - Holalab</Text>
                    </Box>
                    <Image sx={imgStyle} src={mrMakiu} alt="MrMakiu"></Image>
                </Box>
                <Box w={"50%"} h={"300px"} px={"20px"} pb={"400px"}>
                    <Box border={"solid"} borderColor={"rgb(232, 106, 66)"} borderRadius={"10px"} position={"relative"} top={"100px"}>
                        <Text sx={textStyle} w={"67%"} p={"20px"} pt={"50px"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus deserunt maxime repellat nisi? Consequuntur, iusto. A provident doloremque suscipit tempore libero voluptas ullam, fugit illum animi id, esse ut molestias?</Text>
                        <Text sx={personStyle} pl={"20px"}>Mr Makiu</Text>
                        <Text sx={personJobStyle} pl={"20px"} pb={"10px"}>Director de Marketing - Holalab</Text>
                    </Box>
                    <Image sx={imgStyle} src={mrMakiu} alt="MrMakiu"></Image>
                </Box>
                <Box w={"50%"} h={"300px"} px={"20px"} pb={"400px"}>
                    <Box border={"solid"} borderColor={"rgb(232, 106, 66)"} borderRadius={"10px"} position={"relative"} top={"100px"}>
                        <Text sx={textStyle} w={"67%"} p={"20px"} pt={"50px"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus deserunt maxime repellat nisi? Consequuntur, iusto. A provident doloremque suscipit tempore libero voluptas ullam, fugit illum animi id, esse ut molestias?</Text>
                        <Text sx={personStyle} pl={"20px"}>Mr Makiu</Text>
                        <Text sx={personJobStyle} pl={"20px"} pb={"10px"}>Director de Marketing - Holalab</Text>
                    </Box>
                    <Image sx={imgStyle} src={mrMakiu} alt="MrMakiu"></Image>
                </Box>
            </Flex>
        </Flex>
    )
}

export default ClientReviews