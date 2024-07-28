import { Box, Flex, Heading, Text, Divider, Link, Image } from "@chakra-ui/react"
import { ArrowDownIcon, ArrowForwardIcon} from "@chakra-ui/icons"
import blogImg from "./img/Blog.png"


function HowIWork(){
    const bigHeaderStyle = {color:"rgb(230, 230, 230)", fontSize:"62px", fontFamily:"Playfair Display"}
    const smallTextStyle = {color:"rgb(217, 217, 217)", fontFamily:"IBM Plex Sans", fontWeight:"normal", fontSize:"20px"}
    const stepStepStyle = {color:"rgb(96, 96, 96)", w:"300px", fontFamily:"IBM Plex Sans", fontWeight:"semibold", fontSize:"22px"}
    const stepHeaderStyle = {color:"rgb(230, 230, 230)", pb:"50px"}
    const stepDivider = {w:"100%", my:"70px", borderWidth:"1px", borderRadius:"5px"}

    const linkHoverStyle = {color:"rgb(232, 106, 66)"}
    const linkStyle = {color:"rgb(192, 193, 194)", fontFamily:"IBM Plex Sans", fontSize:"22px", fontWeight:"semibold"}
    return(
        <Flex as={'section'} w={"100vw"} px={"10vw"} bg={"rgb(28, 27, 31)"} py={"100px"}>
            <Flex  direction={"column"} w={"40%"} justifyContent={"space-between"}>
                <Box>
                    <Heading pb={"50px"} sx={bigHeaderStyle}>Vea cómo trabajo <ArrowForwardIcon color={"rgb(232, 106, 66)"}></ArrowForwardIcon></Heading>
                    <Text sx={smallTextStyle}>Explore nuestros procesos detrás de escena, talenteoso equipo e innovadores proyectos. Infórmese sobre nuestro enfoque</Text>
                </Box>
                <Flex py={"30px"} direction={"column"}>
                    <Flex py={"30px"}>
                        <Heading sx={bigHeaderStyle}>Lee nuestros últimos blogs<ArrowDownIcon color={"rgb(232, 106, 66)"}></ArrowDownIcon></Heading>
                    </Flex>
                    <Link _hover={{filter: "brightness(110%)"}}>
                        <Flex direction={"column"} bgColor={"rgb(37, 36, 39)"} p={"30px"} borderRadius={"10px"}>
                            <Image src={blogImg} alt='BlogImg'></Image>
                            <Flex justifyContent={"space-between"}>
                                <Text fontFamily={"IBM Plex Sans"} fontWeight={"bold"} color={"rgb(192, 193, 194)"} fontSize={"14px"} py={"20px"}>DISEÑO</Text>
                                <Text fontFamily={"IBM Plex Sans"} fontWeight={"bold"} color={"rgb(192, 193, 194)"} fontSize={"14px"} py={"20px"}>11 JUN 2024</Text>
                            </Flex>
                            <Heading color={"rgb(230, 230, 230)"} fontSize={"24px"} fontWeight={"semibold"}>La compañía digital con más reseñas de Argentina - por manifest</Heading>
                        </Flex>
                    </Link>
                </Flex>
                <Box>
                    <Link pt={"20px"}><Text sx={linkStyle} _hover={linkHoverStyle}>MÁS ENTRADAS DE BLOG</Text></Link>
                    <Divider w={"100px"} borderRadius={"2px"}></Divider>
                </Box>
            </Flex>
            <Flex direction={"column"} pl={"100px"} w={"60%"}>
                <Flex direction={"column"}>
                    <Heading pb={"30px"} sx={stepHeaderStyle}>Investigación</Heading>
                    <Flex>
                        <Text sx={stepStepStyle}>STEP-1</Text>
                        <Text sx={smallTextStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque impedit possimus, natus tempora beatae ipsum iusto delectus reiciendis laborum corporis cumque cupiditate nisi sapiente recusandae voluptatibus. Nostrum eveniet ab ipsam?</Text>
                    </Flex>
                    <Divider sx={stepDivider}></Divider>
                </Flex>
                <Flex direction={"column"}>
                    <Heading pb={"30px"} sx={stepHeaderStyle}>Esquematización de página</Heading>
                    <Flex>
                        <Text sx={stepStepStyle}>STEP-2</Text>
                        <Text sx={smallTextStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque impedit possimus, natus tempora beatae ipsum iusto delectus reiciendis laborum corporis cumque cupiditate nisi sapiente recusandae voluptatibus. Nostrum eveniet ab ipsam?</Text>
                    </Flex>
                    <Divider sx={stepDivider}></Divider>
                </Flex>
                <Flex direction={"column"}>
                    <Heading pb={"30px"} sx={stepHeaderStyle}>Prototipado</Heading>
                    <Flex>
                        <Text sx={stepStepStyle}>STEP-3</Text>
                        <Text sx={smallTextStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque impedit possimus, natus tempora beatae ipsum iusto delectus reiciendis laborum corporis cumque cupiditate nisi sapiente recusandae voluptatibus. Nostrum eveniet ab ipsam?</Text>
                    </Flex>
                    <Divider sx={stepDivider}></Divider>
                </Flex>
                <Flex direction={"column"}>
                    <Heading pb={"30px"} sx={stepHeaderStyle}>Entrega</Heading>
                    <Flex>
                        <Text sx={stepStepStyle}>STEP-4</Text>
                        <Text sx={smallTextStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque impedit possimus, natus tempora beatae ipsum iusto delectus reiciendis laborum corporis cumque cupiditate nisi sapiente recusandae voluptatibus. Nostrum eveniet ab ipsam?</Text>
                    </Flex>
                    <Divider sx={stepDivider}></Divider>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default HowIWork