import { ArrowForwardIcon} from "@chakra-ui/icons"
import { Image, Flex, Heading, Box, Text } from "@chakra-ui/react"
import mrMakiu from "./img/MrMakiu.png"

function ClientReviews(){
    const headerStyle = {w:{base:"", md:"600px"}, fontFamily:"Playfair Display", fontSize:{base:"52px", md:"72px"}}

    const imgStyle = {w:{md:"200px", lg:"250px"}, p:"10px", bgColor:"rgb(46, 45, 49)", position:"relative", left:{md:"70%", xl:"55%", '2xl':"67%"}, top:"-230px", borderRadius:"10px", display:{base:"none", md:"block"}}
    const textStyle = {fontFamily:"IBM Plex Sans", fontSize:{base:"14px", xl:"18px", '2xl':"20px"}, fontWeight:"normal", color:"rgb(230, 230, 230)"}
    const personStyle = {fontFamily:"IBM Plex Sans", fontSize: {base:"14px", md:"18px"}, fontWeight:"semibold", color:"rgb(230, 230, 230)"}
    const personJobStyle = {fontFamily:"IBM Plex Sans", fontSize: {base:"14px", md:"18px"}, fontWeight:"semibold", color:"rgb(192, 193, 194)"}

    return(
        <Flex as={'section'} id={"Reviews"} direction={"column"} px={"10vw"} w={"100vw"} bg={"rgb(35, 34, 38)"} py={"100px"}>
            <Heading sx={headerStyle}>Vea lo que dicen los clientes <ArrowForwardIcon color={"rgb(232, 106, 66)"}></ArrowForwardIcon></Heading>
            <Flex wrap={"wrap"} direction={"row"} position={"relative"}>
                <Box w={{base:"100%", xl:"50%"}} h={{base:"", md:"300px"}} px={"20px"} pb={{base:"100px", md:"400px"}}>
                    <Box border={"solid"} borderColor={"rgb(232, 106, 66)"} borderRadius={"10px"} position={"relative"} top={"100px"}>
                        <Text sx={textStyle} w={{md:"70%", xl:"55%", '2xl':"67%"}} p={"20px"} pt={"50px"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus deserunt maxime repellat nisi? Consequuntur, iusto. A provident doloremque suscipit tempore libero voluptas ullam, fugit illum animi id, esse ut molestias?</Text>
                        <Text sx={personStyle} pl={"20px"}>Mr Makiu</Text>
                        <Text sx={personJobStyle} pl={"20px"} pb={"10px"}>Director de Marketing - Holalab</Text>
                    </Box>
                    <Image sx={imgStyle} src={mrMakiu} alt="MrMakiu"></Image>
                </Box>
                <Box w={{base:"100%", xl:"50%"}} h={{base:"", md:"300px"}} px={"20px"} pb={{base:"100px", md:"400px"}}>
                    <Box border={"solid"} borderColor={"rgb(232, 106, 66)"} borderRadius={"10px"} position={"relative"} top={"100px"}>
                        <Text sx={textStyle} w={{md:"70%", xl:"55%", '2xl':"67%"}} p={"20px"} pt={"50px"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus deserunt maxime repellat nisi? Consequuntur, iusto. A provident doloremque suscipit tempore libero voluptas ullam, fugit illum animi id, esse ut molestias?</Text>
                        <Text sx={personStyle} pl={"20px"}>Mr Makiu</Text>
                        <Text sx={personJobStyle} pl={"20px"} pb={"10px"}>Director de Marketing - Holalab</Text>
                    </Box>
                    <Image sx={imgStyle} src={mrMakiu} alt="MrMakiu"></Image>
                </Box>
                <Box w={{base:"100%", xl:"50%"}} h={{base:"", md:"300px"}} px={"20px"} pb={{base:"100px", md:"400px"}}>
                    <Box border={"solid"} borderColor={"rgb(232, 106, 66)"} borderRadius={"10px"} position={"relative"} top={"100px"}>
                        <Text sx={textStyle} w={{md:"70%", xl:"55%", '2xl':"67%"}} p={"20px"} pt={"50px"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus deserunt maxime repellat nisi? Consequuntur, iusto. A provident doloremque suscipit tempore libero voluptas ullam, fugit illum animi id, esse ut molestias?</Text>
                        <Text sx={personStyle} pl={"20px"}>Mr Makiu</Text>
                        <Text sx={personJobStyle} pl={"20px"} pb={"10px"}>Director de Marketing - Holalab</Text>
                    </Box>
                    <Image sx={imgStyle} src={mrMakiu} alt="MrMakiu"></Image>
                </Box>
                <Box w={{base:"100%", xl:"50%"}} h={{base:"", md:"300px"}} px={"20px"} pb={{base:"100px", md:"400px"}}>
                    <Box border={"solid"} borderColor={"rgb(232, 106, 66)"} borderRadius={"10px"} position={"relative"} top={"100px"}>
                        <Text sx={textStyle} w={{md:"70%", xl:"55%", '2xl':"67%"}} p={"20px"} pt={"50px"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus deserunt maxime repellat nisi? Consequuntur, iusto. A provident doloremque suscipit tempore libero voluptas ullam, fugit illum animi id, esse ut molestias?</Text>
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