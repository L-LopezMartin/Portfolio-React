import { Box, Flex, Heading, Text, Link, Image, background} from "@chakra-ui/react"
import logoDb from "./img/globe.png"
import logoIg from "./img/Instagram.png"
import logoBh from "./img/behance_logo.png"
import yoTrabajo from "./img/DurandoEnElTrabajo.png"
import porcentaje80 from "./img/80.png"
import porcentaje90 from "./img/90.png"
import porcentaje95 from "./img/95.png"

function AboutMe(){

    const imgStyle = {borderRadius:"10px", filter:"grayscale(100%)", w:{lg:"300px", xl:"450px", '2xl':"600px"}, position:"relative", zIndex:"1", left:{lg:"75px", xl:"100px"},top:{lg:"-400px", xl:"-600px", '2xl':"-750px"}}
    const snsContainerStyle = {border:"4px", borderColor:"rgb(232, 106, 66)", borderRadius:"10px", w:{lg:"80%", xl:"75%"}, h:{lg:"400px", xl:"550px", '2xl':"700px"}, position:"relative", top:"10%",px:{base:"10px", xl:"20px"}}
    const snsStyle = {w:"40px", h:"40px", m:"10px", border:"2px", borderRadius:"100%", padding:"5px", borderColor:"grey"}
    const snsHoverStyle = {borderColor: "rgb(232, 106, 66)"}

    const smallHeadingStyle = {color:"rgb(232, 106, 66)", fontFamily:"IBM Plex Sans", fontWeight:"semibold", fontSize:{base:"18px", md:"24px"}}
    const bigHeadingStyle = {fontFamily:"Playfair Display", color:"rgb(230, 230, 230)", fontSize:{base:"44px", md:"52px"}}
    const textStyle = {color:"rgb(217, 217, 217)", fontFamily:"IBM Plex Sans", fontWeight:"normal", fontSize:{base:"16px", md:"20px"}, py:"50px"}

    const fieldsHeading = {fontFamily:"Playfair Display", color:"rgb(230, 230, 230)", fontSize:{base:"28px", md:"32px"}, pb:"30px"}
    const fieldPercentageStyle = {bgSize:"contain", bgRepeat:"no-repeat", p:"25px", fontSize:"18px", fontFamily:"IBM Plex Sans",backgroundPosition:"center"}
    const fieldNameStyle = {fontFamily:"IBM Plex Sans", color:"rgb(217, 217, 217)", fontSize:"20px", fontWeight:"semibold", pt:"10px"}

    return(
        <Flex as={'section'} id="AboutMe" w={"100vw"} px={"10vw"} bg={"rgb(28, 27, 31)"} py={{base:"100px", xl:"150px"}} alignItems={"center"}>
            <Box display={{base:"none", lg:"block"}} w={"50%"} h={{lg:"400px", xl:"600px", '2xl':"700px"}}>
                <Flex sx={snsContainerStyle} direction={"column"} justifyContent={"center"}>
                    <Link href="https://dribbble.com/"><Image sx={snsStyle} _hover={snsHoverStyle} src={logoDb} alt="Dribble Logo" w={"30px"}></Image></Link>
                    <Link href="https://www.instagram.com/"><Image sx={snsStyle} _hover={snsHoverStyle} src={logoIg} alt="Instagram Logo" w={"30px"}></Image></Link>
                    <Link href="https://www.behance.net/"><Image sx={snsStyle} _hover={snsHoverStyle} src={logoBh} alt="Behance Logo" w={"30px"}></Image></Link>
                </Flex>
                <Image sx={imgStyle} src={yoTrabajo} alt="Trabalho" ></Image>
            </Box>
            <Flex w={{base:"100%", lg:"50%"}} direction={"column"}>
                <Heading sx={smallHeadingStyle}>SOBRE MÍ</Heading>
                <Heading sx={bigHeadingStyle}>Por qué contratarme</Heading>
                <Text sx={textStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, sequi beatae aut atque consectetur quis natus earum quod, saepe architecto, blanditiis adipisci ab dignissimos ea. Harum veniam doloribus fugit ea!</Text>

                <Heading sx={fieldsHeading}>Campos de experiencia</Heading>
                <Flex justifyContent={"space-around"} wrap={{base:"wrap", xl:"nowrap"}}>
                    <Flex direction={"column"} alignItems={"center"} py={"15px"}>
                        <Text sx={fieldPercentageStyle} bgImage={porcentaje90}>90%</Text>
                        <Text sx={fieldNameStyle}>Investigación de usuario</Text>
                    </Flex>
                    <Flex direction={"column"} alignItems={"center"} py={"15px"}>
                        <Text sx={fieldPercentageStyle} bgImage={porcentaje80}>80%</Text>
                        <Text sx={fieldNameStyle}>Flujo del usuario</Text>
                    </Flex>
                    <Flex direction={"column"} alignItems={"center"} py={"15px"}>
                        <Text sx={fieldPercentageStyle} bgImage={porcentaje95}>95%</Text>
                        <Text sx={fieldNameStyle}>Esquematización de página</Text>
                    </Flex>
                    <Flex direction={"column"} alignItems={"center"} py={"15px"}>
                        <Text sx={fieldPercentageStyle} bgImage={porcentaje90}>90%</Text>
                        <Text sx={fieldNameStyle}>Prototipado</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default AboutMe