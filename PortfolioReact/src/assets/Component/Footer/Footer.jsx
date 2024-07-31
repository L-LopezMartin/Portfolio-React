import { Flex, Text, Link, Image, Divider, Menu, FormControl, Input, Button, MenuButton, MenuList, MenuItem} from "@chakra-ui/react"
import { ArrowForwardIcon, AddIcon, CheckIcon } from "@chakra-ui/icons"
import logoDb from "./img/globe.png"
import logoIg from "./img/Instagram.png"
import logoBh from "./img/behance_logo.png"
import logoUp from "./img/UpworkLogo.png"
import ratingDribble from "./img/DribbleRating.png"
import ratingUpwork from "./img/UpworkRating.png"


function Footer(){
    const inMenuStyle = {bgColor: "transparent", color: "rgb(230, 230, 320)", fontFamily: "IBM Plex Sans", fontWeight: "bold", fontSize: "16px"}
    const inMenuHoverStyle = {color: "rgb(232, 106, 66)"}

    const formButtonStyle = {bgColor: "transparent", color:"rgb(232, 106, 66)", w:"10%",h:"100%", fontSize:"24px"}

    const titleStyle = {fontFamily:"IBM Plex Sans", fontWeight:"semibold", fontSize:{base:"20px", md:"28px"}}
    const textStyle = {fontFamily:"IBM Plex Sans", fontSize:{base:"12px", md:"16px"}, color:"rgb(193, 193, 194)"}
    const textHoverStyle = {color:"rgb(230, 230, 320)"}

    const snsStyle = {w:"40px", h:"40px", m:"10px", border:"2px", borderRadius:"100%", padding:"5px", borderColor:"grey"}
    const snsHoverStyle = {borderColor: "rgb(232, 106, 66)"}

    function suscribe(e){
        e.preventDefault()
        const arrow = document.getElementById("arrow")
        const check = document.getElementById("check")
        const email = document.getElementById("emailFooter")

        arrow.setAttribute("style", "display:none")
        check.setAttribute("style", "display:block")

        console.log(email.value, " se sucribió al newsletter" )
    }

    return(
        <Flex as={'footer'} direction={'column'} alignItems={'center'} justifyContent={'space-around'} w={'100vw'} px={'10vw'} bg={"rgb(23, 22, 26)"} py={"20px"}>
            <Flex direction={{base:"column", lg:'row'}} justifyContent={'space-between'} w={"100%"}>
                <Flex direction={"column"} w={{base:"100%", lg:"33%"}}>
                    <Text my={"10px"} sx={titleStyle}>Suscríbete al newsletter para estar al tanto de las noticias</Text>
                    <form onSubmit={suscribe}>
                        <FormControl display={"flex"} justifyContent={"space-between"}>
                            <Input id="emailFooter" type="email" fontSize={{base:"12px", md:"16px"}} border={"2px"} borderColor={"transparent"} placeholder="tu correo electrónico" w={"86%"} color={"rgb(230,230,230)"} _focusVisible={{border:"2px",borderColor:"rgb(232, 106, 66)"}}></Input>
                            <Button type="submit" sx={formButtonStyle}>
                                <ArrowForwardIcon h={"40px"} id="arrow"></ArrowForwardIcon>
                            </Button>
                            <CheckIcon id="check" fontSize={"40px"} color={"rgb(232, 106, 66)"} display={"none"}></CheckIcon>
                        </FormControl>
                    </form>
                    <Divider my={"5px"} borderWidth={"1.5px"} borderRadius={"7px"}/>
                    <Flex justifyContent={'center'} my={"30px"} wrap={"wrap"}>
                        <Link href="https://www.upwork.com/" w={"50%"} px={"5px"} _hover={{filter: "brightness(150%)"}}><Image src={ratingUpwork} alt="UpWorkRating"></Image></Link>
                        <Link href="https://dribbble.com/" w={"50%"} px={"5px"} _hover={{filter: "brightness(150%)"}}><Image src={ratingDribble} alt="Dribble"></Image></Link>
                    </Flex>
                </Flex>
                <Flex w={{base:"100%", lg:"66%"}}>
                    <Flex direction={'column'} w={"50%"} pb={"50px"} pl={{base:"0px", lg:"15%"}}>
                        <Text href="https://github.com/L-LopezMartin" my={"10px"} sx={titleStyle}>Links útiles</Text>
                        <Link href="https://github.com/L-LopezMartin" my={"5px"} sx={textStyle} _hover={textHoverStyle}>Proyectos</Link>
                        <Link href="https://github.com/L-LopezMartin" my={"5px"} sx={textStyle} _hover={textHoverStyle}>Servicios</Link>
                        <Link href="https://github.com/L-LopezMartin" my={"5px"} sx={textStyle} _hover={textHoverStyle}>Contactos</Link>
                        <Link href="https://github.com/L-LopezMartin" my={"5px"} sx={textStyle} _hover={textHoverStyle}>Blog</Link>
                    </Flex>
                    <Flex direction={'column'} w={"50%"} pb={"50px"} pl={{base:"0px", lg:"15%"}}>
                        <Text my={"10px"} sx={titleStyle}>Consultas</Text>
                        <Text my={"5px"} sx={textStyle}>leanejemplo@gmail.com.ar</Text>
                        <Text my={"5px"} sx={textStyle}>+54 9 261 6887381</Text>
                        <Text my={"5px"} sx={textStyle}>sky_pe/leandro</Text>
                    </Flex>
                </Flex>
            </Flex>
            <Flex justifyContent={'space-between'} w={"100%"} alignItems={"center"}>
                <Text sx={titleStyle}>
                    Mostrar todos los servicios
                </Text>
                <Menu >
                    <MenuButton _hover={{color:"rgb(232, 106, 66)"}}>
                        <AddIcon width={"30px"} height={"30px"} border={"1px"} borderRadius={"100%"} padding={"5px"}></AddIcon>
                    </MenuButton>
                    <MenuList border={"2px"} borderRadius={"7px"} borderColor={"rgb(232, 106, 66)"} bgColor={"rgb(23, 22, 26)"}>
                        <Link  href="https://github.com/L-LopezMartin"><MenuItem sx={inMenuStyle} _hover={inMenuHoverStyle}>Diseño Web</MenuItem></Link>
                        <Link  href="https://github.com/L-LopezMartin"><MenuItem sx={inMenuStyle} _hover={inMenuHoverStyle}>Investigación de Usuario</MenuItem></Link>
                        <Link  href="https://github.com/L-LopezMartin"><MenuItem sx={inMenuStyle} _hover={inMenuHoverStyle}>Soluciones Móviles</MenuItem></Link>
                        <Link  href="https://github.com/L-LopezMartin"><MenuItem sx={inMenuStyle} _hover={inMenuHoverStyle}>Soluciones UI/UX</MenuItem></Link>
                    </MenuList>
                </Menu>
            </Flex>

            <Divider my={"10px"} borderWidth={"1px"} borderRadius={"5px"}/>

            <Flex display={{base:"flex", md:"none"}}>
                <Link href="https://dribbble.com/" sx={snsStyle} _hover={snsHoverStyle}><Image src={logoDb} alt="Dribble Logo"></Image></Link>
                <Link href="https://www.instagram.com/" sx={snsStyle} _hover={snsHoverStyle}><Image src={logoIg} alt="Instagram Logo"></Image></Link>
                <Link href="https://www.behance.net/" sx={snsStyle} _hover={snsHoverStyle}><Image src={logoBh} alt="Behance Logo"></Image></Link>
                <Link href="https://www.upwork.com/" sx={snsStyle} _hover={snsHoverStyle}><Image src={logoUp} alt="UpWork Logo"></Image></Link>
            </Flex>
            <Flex justifyContent={'space-between'} w={"100%"} alignItems={"center"} my={"20px"}>
                <Text color={"grey"} textAlign={"left"}>© 2024 Allfolio - All right reserved</Text>
                <Flex display={{base:"none", md:"flex"}}>
                    <Link href="https://dribbble.com/" sx={snsStyle} _hover={snsHoverStyle}><Image src={logoDb} alt="Dribble Logo"></Image></Link>
                    <Link href="https://www.instagram.com/" sx={snsStyle} _hover={snsHoverStyle}><Image src={logoIg} alt="Instagram Logo"></Image></Link>
                    <Link href="https://www.behance.net/" sx={snsStyle} _hover={snsHoverStyle}><Image src={logoBh} alt="Behance Logo"></Image></Link>
                    <Link href="https://www.upwork.com/" sx={snsStyle} _hover={snsHoverStyle}><Image src={logoUp} alt="UpWork Logo"></Image></Link>
                </Flex>
                <Link href="https://youtu.be/0CdMqJ9Lidg?t=4)" color={"grey"}  _hover={textHoverStyle} textAlign={"right"}>Política de privacidad</Link>
            </Flex>
        </Flex>
    )
}
export default Footer