import { Flex, Heading, Text, Link, Image } from "@chakra-ui/react"
import logoDb from "./img/globe.png"
import logoIg from "./img/Instagram.png"
import logoBh from "./img/behance_logo.png"
import yoTrabajo from "./img/DurandoEnElTrabajo.png"
import porcentaje80 from "./img/80.png"
import porcentaje90 from "./img/90.png"
import porcentaje95 from "./img/95.png"

function AboutMe(){
    return(
        <Flex as={'section'} w={"100vw"} px={"10vw"} bg={"rgb(23, 22, 26)"}>
            <Flex w={"40%"}>
                <Flex direction={"column"}>
                    <Link><Image src={logoDb} alt="Dribble Logo" w={"30px"}></Image></Link>
                    <Link><Image src={logoIg} alt="Instagram Logo" w={"30px"}></Image></Link>
                    <Link><Image src={logoBh} alt="Behance Logo" w={"30px"}></Image></Link>
                </Flex>
                <Image src={yoTrabajo} alt="Trabalho"></Image>
            </Flex>
            <Flex w={"60%"} direction={"column"}>
                <Heading>Sobre mí</Heading>
                <Heading>Por qué contratarme</Heading>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, sequi beatae aut atque consectetur quis natus earum quod, saepe architecto, blanditiis adipisci ab dignissimos ea. Harum veniam doloribus fugit ea!</Text>

                <Heading>Campos de experiencia</Heading>
                <Flex justifyContent={"space-around"}>
                    <Flex direction={"column"} alignItems={"center"}>
                        <Text bgImage={porcentaje90} bgSize={"contain"} bgRepeat={"no-repeat"} p={"25px"}>90%</Text>
                        <Text>Investigación de usuario</Text>
                    </Flex>
                    <Flex direction={"column"} alignItems={"center"}>
                        <Text bgImage={porcentaje80} bgSize={"contain"} bgRepeat={"no-repeat"} p={"25px"}>80%</Text>
                        <Text>Flujo del usuario</Text>
                    </Flex>
                    <Flex direction={"column"} alignItems={"center"}>
                        <Text bgImage={porcentaje95} bgSize={"contain"} bgRepeat={"no-repeat"} p={"25px"}>95%</Text>
                        <Text>Esquematización de página</Text>
                    </Flex>
                    <Flex direction={"column"} alignItems={"center"}>
                        <Text bgImage={porcentaje90} bgSize={"contain"} bgRepeat={"no-repeat"} p={"25px"}>90%</Text>
                        <Text>Prototipado</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default AboutMe