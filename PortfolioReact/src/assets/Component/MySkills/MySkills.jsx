import { Heading, Flex, Text, Image } from "@chakra-ui/react"


function MySkills(){
    return(
        <Flex as={'section'}>
            <Heading>Mis habilidades</Heading>
            <Flex>
                <Flex>
                    <Text>HTML</Text>
                    <Image alt="HTML Logo"></Image>
                </Flex>
                <Flex>
                    <Text>CSS</Text>
                    <Image alt="CSS Logo"></Image>
                </Flex>
                <Flex>
                    <Text>JavaScript</Text>
                    <Image alt="JS Logo"></Image>
                </Flex>
                <Flex>
                    <Text>Java</Text>
                    <Image alt="Java Logo"></Image>
                </Flex>
                <Flex>
                    <Text>C++</Text>
                    <Image alt="C++ Logo"></Image>
                </Flex>
                <Flex>
                    <Text>SQL</Text>
                    <Image alt="SQL Logo"></Image>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default MySkills