import { Box, Flex, Link, Image, Text, Button, Heading, Highlight, Divider} from "@chakra-ui/react"
import bgImage from "./img/YoGrande.png"
import videoAboutMe from "./img/VideoAboutMe.png"

function Hero(){
    const bgConfig = {bg:"rgb(23, 22, 26)", bgImage:{base:"", lg:bgImage}, bgSize:"70%", bgRepeat:"no-repeat", bgPos:{base:"120% 50%", xl:"90% 40%"}}

    const buttonStyle = {bgColor:"transparent", border:"1px", borderColor:"gray", color:"rgb(230, 230, 230)", fontFamily:"IBM Plex Sans", fontWeight:"bold", mx:{base:"10px", md:"20px"}, px:{base:"10px", md:"25px"}, py:{base:"10px", md:"25px"}, fontSize:{base:"12px", md:"16px"}}
    const buttonHoverStyle = {bgColor:"rgb(217, 44, 10)", borderColor:"rgb(217, 44, 10)"}

    const miniHeaderStyle = {color:"rgb(230, 230, 230)", fontWeight:"semibold", fontSize:{base:"12px", lg:"14px",xl:"18px"}}
    const miniTextStyle = {color:"rgb(192, 193, 194)", fontSize:{base:"12px", lg:"14px", xl:"18px"}}

    const scrollContact=()=>{
        const dest = document.getElementById("Contact");
        dest.scrollIntoView({behavior: "smooth"});
    }

    return(
        <Flex as="section" id="Hero" w={"100vw"} px={"10vw"} h={{base:"500px", md:"400px", lg:"80vh"}} alignItems={"center"} sx={bgConfig}>
            <Flex direction={"column"} w={{base:"100%", md:"80%",lg:"70%"}}>
                <Box w={{base:"100%", md:"100%"}}>
                    <Heading color={"rgb(192, 193, 194)"} fontSize={{base:"12px",lg:"14px", '2xl':"18px"}}> HOLA! SOY LEANDRO</Heading>
                    <Text color={"rgb(230, 230, 230)"} fontSize={{base:"36px", lg:"50px" ,'2xl':"72px"}} fontWeight={"bold"}>
                        <Highlight query={'UI/UX'} styles={{color:"rgb(232, 106, 66)"}}>Soy diseñador UI/UX</Highlight>
                    </Text>
                    <Text color={"rgb(192, 193, 194)"} fontSize={{base:"16px",lg:"24px",'2xl':"32px"}} fontWeight={"semibold"}>Creador de experieniencias digitales fluidas</Text>
                </Box>
                <Flex py={{base:"20px", lg:"70px"}}>
                    <Button sx={buttonStyle} _hover={buttonHoverStyle} onClick={scrollContact}>Contáctame</Button>
                    <Link href="https://github.com/L-LopezMartin"><Button sx={buttonStyle} _hover={buttonHoverStyle}>Ver curriculum</Button></Link>
                </Flex>
                <Flex alignItems={"center"} justifyContent={"space-around"}>
                    <Flex alignItems={{base:"normal", md:"center"}} direction={{base:"column", md:"row"}}>
                        <Box my={"5px"}>
                            <Text sx={miniHeaderStyle}>Email</Text>
                            <Text sx={miniTextStyle}>leanejemplo@gmail.com</Text>
                        </Box>
                        <Divider display={{base:"none", md:"block"}} orientation="vertical" h={"40px"} mx={{base:"10px", md:"20px"}}></Divider>
                        <Box my={"5px"}>
                            <Text sx={miniHeaderStyle}>Teléfono</Text>
                            <Text sx={miniTextStyle}>+54 9 261 6887381</Text>
                        </Box>
                        <Divider display={{base:"none", md:"block"}} orientation="vertical" h={"40px"} mx={{base:"10px", md:"20px"}}></Divider>
                        <Box my={"5px"}>
                            <Text sx={miniHeaderStyle}>Ubicación</Text>
                            <Text sx={miniTextStyle}>Mendoza, Agentina</Text>
                        </Box>
                    </Flex>
                    <Link href="https://youtu.be/0CdMqJ9Lidg?t=4)" position={{base:"static",md:"absolute"}} right={{base:"10vw",xl:"20vw"}} top={{base:"150px",lg:"30vh"}}>
                        <Image src={videoAboutMe} alt="Conoce más sobre mí" boxSize={{base:"100px", md:"100px",lg:"120px"}} _hover={{filter: "brightness(150%)"}}></Image></Link>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Hero