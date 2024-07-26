import { Flex, Heading, Link, Text, Image, Divider, Button } from "@chakra-ui/react"
import proyectImg from "./img/Proyecto1.png"

function ProjectsMade(){
    
    return(
        <Flex as={'section'} w={"100vw"} px={"10vw"} direction={"column"} alignItems={"center"} bg={"rgb(23, 22, 26)"}>
            <Text>Proyectos</Text>
            <Heading>Realizados</Heading>
            <Flex w={"100%"} py={"30px"}>
                <Flex direction={"column"} w={"75%"}>
                    <Heading>Web UI/UX Design</Heading>
                    <Text>Protfolio / Landing Page - Proyecto final del curso de desarrollo FullStack. Lo estás visualizando ahora mismo.</Text>
                    <Link>Ver proyecto completo</Link>
                    <Divider w={"100px"} borderWidth={"2px"}></Divider>
                </Flex>
                <Image src={proyectImg} w={"25%"} alt="Project Image"></Image>
            </Flex>
            <Flex w={"100%"} py={"30px"}>
                <Image src={proyectImg} w={"25%"} alt="Project Image"></Image>
                <Flex direction={"column"} w={"75%"}>
                    <Heading>Web UI/UX Design</Heading>
                    <Text>Protfolio / Landing Page - Proyecto final del curso de desarrollo FullStack. Lo estás visualizando ahora mismo.</Text>
                    <Link>Ver proyecto completo</Link>
                    <Divider w={"100px"} borderWidth={"2px"}></Divider>
                </Flex>
            </Flex>
            <Flex w={"100%"} py={"30px"}>
                <Flex direction={"column"} w={"75%"}>
                    <Heading>Web UI/UX Design</Heading>
                    <Text>Protfolio / Landing Page - Proyecto final del curso de desarrollo FullStack. Lo estás visualizando ahora mismo.</Text>
                    <Link>Ver proyecto completo</Link>
                    <Divider w={"100px"} borderWidth={"2px"}></Divider>
                </Flex>
                <Image src={proyectImg} w={"25%"} alt="Project Image"></Image>
            </Flex>
            <Flex w={"100%"} py={"30px"}>
                <Image src={proyectImg} w={"25%"} alt="Project Image"></Image>
                <Flex direction={"column"} w={"75%"}>
                    <Heading>Web UI/UX Design</Heading>
                    <Text>Protfolio / Landing Page - Proyecto final del curso de desarrollo FullStack. Lo estás visualizando ahora mismo.</Text>
                    <Link>Ver proyecto completo</Link>
                    <Divider w={"100px"} borderWidth={"2px"}></Divider>
                </Flex>
            </Flex>
            <Button w={"100px"}>Ver Todos</Button>
        </Flex>
    )
}

export default ProjectsMade