import { Heading, Flex, Text, Image } from "@chakra-ui/react"


function MySkills(){
    return(
        <Flex as={'section'} w={"100vw"} px={"10vw"} py={"30px"} direction={"column"}>
            <Heading>Mis habilidades</Heading>
            <Flex justify={"center"} wrap={"wrap"}>
                <Flex direction={"column"} alignItems={"center"} px={"50px"}>
                    <Text>HTML</Text>
                    <Image alt="HTML Logo" h={"100px"}></Image>
                </Flex>
                <Flex direction={"column"} alignItems={"center"} px={"50px"}>
                    <Text>CSS</Text>
                    <Image alt="CSS Logo" h={"100px"}></Image>
                </Flex>
                <Flex direction={"column"} alignItems={"center"} px={"50px"}>
                    <Text>JavaScript</Text>
                    <Image alt="JS Logo" h={"100px"}></Image>
                </Flex>
                <Flex direction={"column"} alignItems={"center"} px={"50px"}>
                    <Text>Java</Text>
                    <Image alt="Java Logo" h={"100px"}></Image>
                </Flex>
                <Flex direction={"column"} alignItems={"center"} px={"50px"}>
                    <Text>C++</Text>
                    <Image alt="C++ Logo" h={"100px"}></Image>
                </Flex>
                <Flex direction={"column"} alignItems={"center"} px={"50px"}>
                    <Text>SQL</Text>
                    <Image alt="SQL Logo" h={"100px"}></Image>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default MySkills