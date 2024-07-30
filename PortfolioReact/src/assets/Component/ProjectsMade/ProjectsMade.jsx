import { Box, Flex, Heading, Link, Text, Image, Divider, Button } from "@chakra-ui/react"
import proyectImg from "./img/Proyecto1.png"

function ProjectsMade(){
    const buttonStyle = {bgColor:"transparent", border:"1px", borderColor:"rgb(232, 106, 66)", px:"30px", py:"25px", color:"rgb(230,230,230)", fontFamily:"IBM Plex Sans"}
    const buttonHoverStyle = {bgColor:"rgb(232, 106, 66)"}

    const smallHeaderStyle = {color:"rgb(232, 106, 66)", fontFamily:"IBM Plex Sans", fontWeight:"semibold", fontSize:"24px"}
    const bigHeaderStyle = {fontFamily:"Playfair Display", color:"rgb(230, 230, 230)", fontSize:"52px"}

    const proyectHeaderStyle = {color:"rgb(192, 193, 194)", fontFamily:"IBM Plex Sans", fontSize:"18px", fontWeight:"semibold"}
    const proyectTextStyle = {color:"white", fontFamily:"IBM Plex Sans", fontSize:"32px", fontWeight:"semibold", py:"40px"}

    const linkStyle = {color:"rgb(192, 193, 194)", fontFamily:"IBM Plex Sans", fontWeight:"semibold", fontSize:"24px"}
    const linkHoverStyle = {color:"rgb(232, 106, 66)"}

    const proyectImgStyleR = {borderRadius:"10px", transform:'skewX(-10deg)'}
    const proyectImgStyleL = {borderRadius:"10px", transform:'skewX(10deg)'}
    
    return(
        <Flex as={'section'} w={"100vw"} px={"20vw"} py={"100px"} direction={"column"} alignItems={"center"} bg={"rgb(23, 22, 26)"}>
            <Text sx={smallHeaderStyle}>Proyectos</Text>
            <Heading sx={bigHeaderStyle}>Realizados</Heading>
            <Flex w={"100%"} py={"50px"} align={"center"}>
                <Flex direction={"column"} w={"45%"} px={"10px"}>
                    <Heading sx={proyectHeaderStyle}>Web UI/UX Design</Heading>
                    <Text sx={proyectTextStyle}>Protfolio / Landing Page - Proyecto final del curso de desarrollo FullStack. Lo estás visualizando ahora mismo.</Text>
                    <Link href="https://github.com/L-LopezMartin" sx={linkStyle} _hover={linkHoverStyle}>VER PROYECTO COMPLETO</Link>
                    <Divider w={"200px"} borderWidth={"2px"} borderRadius={"5px"} my="10px"></Divider>
                </Flex>
                <Box w={"55%"} bgColor={"rgb(34, 33, 37)"} p={"7% 7% 0 7%"} borderRadius={"10px"}>
                    <Image src={proyectImg} alt="Project Image" sx={proyectImgStyleR}></Image>
                </Box>
            </Flex>
            <Flex w={"100%"} py={"50px"} align={"center"}>
                <Box w={"55%"} bgColor={"rgb(34, 33, 37)"} p={"7% 7% 0 7%"} borderRadius={"10px"}>
                    <Image src={proyectImg} alt="Project Image" sx={proyectImgStyleL}></Image>
                </Box>
                <Flex direction={"column"} w={"45%"} px={"10px"}>
                    <Heading sx={proyectHeaderStyle}>Web UI/UX Design</Heading>
                    <Text sx={proyectTextStyle}>Protfolio / Landing Page - Proyecto final del curso de desarrollo FullStack. Lo estás visualizando ahora mismo.</Text>
                    <Link href="https://github.com/L-LopezMartin" sx={linkStyle} _hover={linkHoverStyle}>VER PROYECTO COMPLETO</Link>
                    <Divider w={"200px"} borderWidth={"2px"} borderRadius={"5px"} my="10px"></Divider>
                </Flex>
            </Flex>
            <Flex w={"100%"} py={"50px"} align={"center"}>
                <Flex direction={"column"} w={"45%"} px={"10px"}>
                    <Heading sx={proyectHeaderStyle}>Web UI/UX Design</Heading>
                    <Text sx={proyectTextStyle}>Protfolio / Landing Page - Proyecto final del curso de desarrollo FullStack. Lo estás visualizando ahora mismo.</Text>
                    <Link href="https://github.com/L-LopezMartin" sx={linkStyle} _hover={linkHoverStyle}>VER PROYECTO COMPLETO</Link>
                    <Divider w={"200px"} borderWidth={"2px"} borderRadius={"5px"} my="10px"></Divider>
                </Flex>
                <Box w={"55%"} bgColor={"rgb(34, 33, 37)"} p={"7% 7% 0 7%"} borderRadius={"10px"}>
                    <Image src={proyectImg} alt="Project Image" sx={proyectImgStyleR}></Image>
                </Box>
            </Flex>
            <Flex w={"100%"} py={"50px"} align={"center"}>
                <Box w={"55%"} bgColor={"rgb(34, 33, 37)"} p={"7% 7% 0 7%"} borderRadius={"10px"}>
                    <Image src={proyectImg} alt="Project Image" sx={proyectImgStyleL}></Image>
                </Box>
                <Flex direction={"column"} w={"45%"} px={"10px"}>
                    <Heading sx={proyectHeaderStyle}>Web UI/UX Design</Heading>
                    <Text sx={proyectTextStyle}>Protfolio / Landing Page - Proyecto final del curso de desarrollo FullStack. Lo estás visualizando ahora mismo.</Text>
                    <Link href="https://github.com/L-LopezMartin" sx={linkStyle} _hover={linkHoverStyle}>VER PROYECTO COMPLETO</Link>
                    <Divider w={"200px"} borderWidth={"2px"} borderRadius={"5px"} my="10px"></Divider>
                </Flex>
            </Flex>
            <Link href="https://github.com/L-LopezMartin"><Button sx={buttonStyle} _hover={buttonHoverStyle}>Ver Todos</Button></Link>
        </Flex>
    )
}

export default ProjectsMade