import { Flex, Heading, Text, Divider, Link, Image } from "@chakra-ui/react"
import { ArrowDownIcon, ArrowForwardIcon} from "@chakra-ui/icons"


function HowIWork(){
    return(
        <Flex as={'section'}>
            <Flex>
                <Heading>Vea cómo trabajo <ArrowForwardIcon></ArrowForwardIcon></Heading>
                <Text>Explore nuestros procesos detrás de escena, talenteoso equipo e innovadores proyectos. Infórmese sobre nuestro enfoque</Text>
                <Flex>
                    <Heading>Lee nuestros últimos blogs</Heading>
                    <ArrowDownIcon></ArrowDownIcon>
                </Flex>
                <Link>
                    <Flex>
                        <Image alt='BlogImg'></Image>
                        <Flex>
                            <Text>Diseño</Text>
                            <Text>11 JUN 2024</Text>
                        </Flex>
                        <Heading>La compañía digital con más reseñas de Argentina - por manifest</Heading>
                    </Flex>
                </Link>
                <Link><Text>MÁS ENTRADAS DE BLOG</Text></Link>
                <Divider></Divider>
            </Flex>
            <Flex>
                <Flex>
                    <Heading>Investigación</Heading>
                    <Flex>
                        <Text>STEP-1</Text>
                        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque impedit possimus, natus tempora beatae ipsum iusto delectus reiciendis laborum corporis cumque cupiditate nisi sapiente recusandae voluptatibus. Nostrum eveniet ab ipsam?</Text>
                    </Flex>
                </Flex>
            </Flex>
            <Flex>
                <Flex>
                    <Heading>Esquematización de página</Heading>
                    <Flex>
                        <Text>STEP-2</Text>
                        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque impedit possimus, natus tempora beatae ipsum iusto delectus reiciendis laborum corporis cumque cupiditate nisi sapiente recusandae voluptatibus. Nostrum eveniet ab ipsam?</Text>
                    </Flex>
                </Flex>
            </Flex>
            <Flex>
                <Flex>
                    <Heading>Prototipado</Heading>
                    <Flex>
                        <Text>STEP-3</Text>
                        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque impedit possimus, natus tempora beatae ipsum iusto delectus reiciendis laborum corporis cumque cupiditate nisi sapiente recusandae voluptatibus. Nostrum eveniet ab ipsam?</Text>
                    </Flex>
                </Flex>
            </Flex>
            <Flex>
                <Flex>
                    <Heading>Entrega</Heading>
                    <Flex>
                        <Text>STEP-4</Text>
                        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque impedit possimus, natus tempora beatae ipsum iusto delectus reiciendis laborum corporis cumque cupiditate nisi sapiente recusandae voluptatibus. Nostrum eveniet ab ipsam?</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default HowIWork