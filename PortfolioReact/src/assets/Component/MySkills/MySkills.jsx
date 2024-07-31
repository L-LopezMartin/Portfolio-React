import { Heading, Flex, Text, Image } from "@chakra-ui/react"
import logoCpp from "./img/C++.png"
import logoCSS from "./img/CSS3.png"
import logoHTML from "./img/HTML.png"
import logoJava from "./img/Java.png"
import logoJS from "./img/JavaScript.png"
import logoSQL from "./img/SQL.png"


function MySkills(){
    const logoTextStyle = {fontWeight:"bold", fontFamily:"IBM Plex Sans", fontSize:{base:"18px", md:"24px"}, color:"rgb(230, 230, 230)"}
    return(
        <Flex as={'section'} w={"100vw"} px={"10vw"} py={"50px"} direction={"column"} bg={"rgb(23, 22, 26)"} pb={"40px"}>
            <Heading fontFamily={"Playfair Display"} fontWeight={"bold"} fontSize={{base:"36px", md:"48px"}} color={"rgb(230, 230, 230)"}>Mis habilidades</Heading>
            <Flex justify={"center"} wrap={"wrap"} pt={"20px"}>
                <Flex direction={"column"} alignItems={"center"} px={"20px"} w={{base:"50%", lg:"33%", '2xl':"16%"}}>
                    <Text sx={logoTextStyle}>HTML</Text>
                    <Image src={logoHTML} alt="HTML Logo" h={{base:"70px", md:"100px"}}></Image>
                </Flex>
                <Flex direction={"column"} alignItems={"center"} px={"20px"} w={{base:"50%", lg:"33%", '2xl':"16%"}}>
                    <Text sx={logoTextStyle}>CSS</Text>
                    <Image src={logoCSS} alt="CSS Logo" h={{base:"70px", md:"100px"}}></Image>
                </Flex>
                <Flex direction={"column"} alignItems={"center"} px={"20px"} w={{base:"50%", lg:"33%", '2xl':"16%"}}>
                    <Text sx={logoTextStyle}>JavaScript</Text>
                    <Image src={logoJS} alt="JS Logo" h={{base:"70px", md:"100px"}}></Image>
                </Flex>
                <Flex direction={"column"} alignItems={"center"} px={"20px"} w={{base:"50%", lg:"33%", '2xl':"16%"}}>
                    <Text sx={logoTextStyle}>Java</Text>
                    <Image src={logoJava} alt="Java Logo" h={{base:"70px", md:"100px"}}></Image>
                </Flex>
                <Flex direction={"column"} alignItems={"center"} px={"20px"} w={{base:"50%", lg:"33%", '2xl':"16%"}}>
                    <Text sx={logoTextStyle}>C++</Text>
                    <Image src={logoCpp} alt="C++ Logo" h={{base:"70px", md:"100px"}}></Image>
                </Flex>
                <Flex direction={"column"} alignItems={"center"} px={"20px"} w={{base:"50%", lg:"33%", '2xl':"16%"}}>
                    <Text sx={logoTextStyle}>SQL</Text>
                    <Image src={logoSQL} alt="SQL Logo" h={{base:"70px", md:"100px"}}></Image>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default MySkills