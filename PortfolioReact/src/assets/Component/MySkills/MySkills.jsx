import { Heading, Flex, Text, Image } from "@chakra-ui/react"
import logoCpp from "./img/C++.png"
import logoCSS from "./img/CSS3.png"
import logoHTML from "./img/HTML.png"
import logoJava from "./img/Java.png"
import logoJS from "./img/JavaScript.png"
import logoSQL from "./img/SQL.png"


function MySkills(){
    return(
        <Flex as={'section'} w={"100vw"} px={"10vw"} py={"30px"} direction={"column"} bg={"rgb(23, 22, 26)"}>
            <Heading>Mis habilidades</Heading>
            <Flex justify={"center"} wrap={"wrap"}>
                <Flex direction={"column"} alignItems={"center"} px={"50px"}>
                    <Text>HTML</Text>
                    <Image src={logoHTML} alt="HTML Logo" h={"100px"}></Image>
                </Flex>
                <Flex direction={"column"} alignItems={"center"} px={"50px"}>
                    <Text>CSS</Text>
                    <Image src={logoCSS} alt="CSS Logo" h={"100px"}></Image>
                </Flex>
                <Flex direction={"column"} alignItems={"center"} px={"50px"}>
                    <Text>JavaScript</Text>
                    <Image src={logoJS} alt="JS Logo" h={"100px"}></Image>
                </Flex>
                <Flex direction={"column"} alignItems={"center"} px={"50px"}>
                    <Text>Java</Text>
                    <Image src={logoJava} alt="Java Logo" h={"100px"}></Image>
                </Flex>
                <Flex direction={"column"} alignItems={"center"} px={"50px"}>
                    <Text>C++</Text>
                    <Image src={logoCpp} alt="C++ Logo" h={"100px"}></Image>
                </Flex>
                <Flex direction={"column"} alignItems={"center"} px={"50px"}>
                    <Text>SQL</Text>
                    <Image src={logoSQL} alt="SQL Logo" h={"100px"}></Image>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default MySkills