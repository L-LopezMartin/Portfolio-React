import { Box, Flex, Link, Image, Text, Button, Heading, Highlight, Divider} from "@chakra-ui/react"
import bgImage from "./img/YoGrande.png"
import videoAboutMe from "./img/VideoAboutMe.png"

function Hero(){
    const bgConfig = {bg:"rgb(23, 22, 26)", bgImage:{base:"", lg:bgImage}, bgSize:"70%", bgRepeat:"no-repeat", bgPos:"80% 40%"}

    const buttonStyle = {bgColor:"transparent", border:"1px", borderColor:"gray", color:"rgb(230, 230, 230)", fontFamily:"IBM Plex Sans", fontWeight:"bold", mx:"20px", px:"25px", py:"25px"}
    const buttonHoverStyle = {bgColor:"rgb(217, 44, 10)", borderColor:"rgb(217, 44, 10)"}

    const miniHeaderStyle = {color:"rgb(230, 230, 230)", fontWeight:"semibold", fontSize:"18px"}
    const miniTextStyle = {color:"rgb(192, 193, 194)", fontSize:"18px"}

    const scrollContact=()=>{
        const dest = document.getElementById("Contact");
        dest.scrollIntoView({behavior: "smooth"});
    }

    return(
        <Flex as="section" id="Hero" w={"100vw"} px={"10vw"} direction={"row"} h={"80vh"} alignItems={"center"} sx={bgConfig}>
            <Flex direction={"column"} w={{base:"100%",lg:"70%"}}>
                <Heading color={"rgb(192, 193, 194)"} fontSize={{base:"12px",lg:"14px", '2xl':"18px"}}> HOLA! SOY LEANDRO</Heading>
                <Text color={"rgb(230, 230, 230)"} fontSize={{base:"36px", lg:"50px" ,'2xl':"72px"}} fontWeight={"bold"}>
                    <Highlight query={'UI/UX'} styles={{color:"rgb(232, 106, 66)"}}>Soy diseñador UI/UX</Highlight>
                </Text>
                <Text color={"rgb(192, 193, 194)"} fontSize={{base:"20px",lg:"24px",'2xl':"32px"}} fontWeight={"semibold"}>Creador de experieniencias digitales fluidas</Text>
                <Flex py={"70px"}>
                    <Button sx={buttonStyle} _hover={buttonHoverStyle} onClick={scrollContact}>Contáctame</Button>
                    <Link href="https://github.com/L-LopezMartin"><Button sx={buttonStyle} _hover={buttonHoverStyle}>Ver curriculum</Button></Link>
                </Flex>
                <Flex alignItems={"center"}>
                    <Box>
                        <Text sx={miniHeaderStyle}>Email</Text>
                        <Text sx={miniTextStyle}>leanejemplo@gmail.com</Text>
                    </Box>
                    <Divider orientation="vertical" h={"40px"} mx={"20px"}></Divider>
                    <Box>
                        <Text sx={miniHeaderStyle}>Teléfono</Text>
                        <Text sx={miniTextStyle}>+54 9 261 6887381</Text>
                    </Box>
                    <Divider orientation="vertical" h={"40px"} mx={"20px"}></Divider>
                    <Box>
                        <Text sx={miniHeaderStyle}>Ubicación</Text>
                        <Text sx={miniTextStyle}>Mendoza, Agentina</Text>
                    </Box>
                </Flex>
            </Flex>
            <Link href="https://youtu.be/0CdMqJ9Lidg?t=4)" position={{base:"static",lg:"absolute"}} right={{base:"0px",lg:"20vw"}} top={{base:"0px",lg:"30vh"}}><Image src={videoAboutMe} alt="Conoce más sobre mí" boxSize={"120px"} _hover={{filter: "brightness(150%)"}}></Image></Link>
        </Flex>
    )
}

export default Hero