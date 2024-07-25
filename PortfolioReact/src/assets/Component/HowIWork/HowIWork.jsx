import { Flex, Heading, Text, Divider, Link, Image } from "@chakra-ui/react"
import { ArrowDownIcon, ArrowForwardIcon} from "@chakra-ui/icons"


function HowIWork(){
    return(
        <Flex as={'section'} w={"100vw"} px={"10vw"}>
            <Flex  direction={"column"} w={"30%"}>
                <Heading pb={"50px"}>Vea cómo trabajo <ArrowForwardIcon></ArrowForwardIcon></Heading>
                <Text>Explore nuestros procesos detrás de escena, talenteoso equipo e innovadores proyectos. Infórmese sobre nuestro enfoque</Text>
                <Flex py={"30px"} direction={"column"}>
                    <Flex py={"30px"}>
                        <Heading>Lee nuestros últimos blogs</Heading>
                        <ArrowDownIcon fontSize={"42px"}></ArrowDownIcon>
                    </Flex>
                    <Link>
                        <Flex direction={"column"}>
                            <Image alt='BlogImg' h={"200px"}></Image>
                            <Flex justifyContent={"space-between"}>
                                <Text>Diseño</Text>
                                <Text>11 JUN 2024</Text>
                            </Flex>
                            <Heading>La compañía digital con más reseñas de Argentina - por manifest</Heading>
                        </Flex>
                    </Link>
                    <Link pt={"20px"}><Text>MÁS ENTRADAS DE BLOG</Text></Link>
                    <Divider w={"100px"} borderRadius={"2px"}></Divider>
                </Flex>
            </Flex>
            <Flex direction={"column"} pl={"100px"} w={"70%"}>
                <Flex direction={"column"}>
                    <Heading pb={"30px"}>Investigación</Heading>
                    <Flex>
                        <Text w={"300px"}>STEP-1</Text>
                        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque impedit possimus, natus tempora beatae ipsum iusto delectus reiciendis laborum corporis cumque cupiditate nisi sapiente recusandae voluptatibus. Nostrum eveniet ab ipsam?</Text>
                    </Flex>
                    <Divider w={"100%"} my={"20px"} borderWidth={"1px"} borderRadius={"5px"} ></Divider>
                </Flex>
                <Flex direction={"column"}>
                    <Heading pb={"30px"}>Esquematización de página</Heading>
                    <Flex>
                        <Text w={"300px"}>STEP-2</Text>
                        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque impedit possimus, natus tempora beatae ipsum iusto delectus reiciendis laborum corporis cumque cupiditate nisi sapiente recusandae voluptatibus. Nostrum eveniet ab ipsam?</Text>
                    </Flex>
                    <Divider w={"100%"} my={"20px"} borderWidth={"1px"} borderRadius={"5px"} ></Divider>
                </Flex>
                <Flex direction={"column"}>
                    <Heading pb={"30px"}>Prototipado</Heading>
                    <Flex>
                        <Text w={"300px"}>STEP-3</Text>
                        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque impedit possimus, natus tempora beatae ipsum iusto delectus reiciendis laborum corporis cumque cupiditate nisi sapiente recusandae voluptatibus. Nostrum eveniet ab ipsam?</Text>
                    </Flex>
                    <Divider w={"100%"} my={"20px"} borderWidth={"1px"} borderRadius={"5px"} ></Divider>
                </Flex>
                <Flex direction={"column"}>
                    <Heading pb={"30px"}>Entrega</Heading>
                    <Flex>
                        <Text w={"300px"}>STEP-4</Text>
                        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque impedit possimus, natus tempora beatae ipsum iusto delectus reiciendis laborum corporis cumque cupiditate nisi sapiente recusandae voluptatibus. Nostrum eveniet ab ipsam?</Text>
                    </Flex>
                    <Divider w={"100%"} my={"20px"} borderWidth={"1px"} borderRadius={"5px"} ></Divider>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default HowIWork