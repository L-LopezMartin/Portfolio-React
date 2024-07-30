import { Flex, Button, Menu, MenuButton, MenuList, MenuItem, Image, Link } from '@chakra-ui/react'
import {ChevronDownIcon} from '@chakra-ui/icons'
import mainLogo from "./img/AllfolioLogo.png"

function Header() {

    const buttonStyle = {mx:"5px", bgColor: "transparent", color: "rgb(230, 230, 320)", fontFamily: "IBM Plex Sans", fontWeight: "bold", fontSize: {base:"12px", md:"16px"}}
    const buttonHoverStyle = {bgColor: "white", color: "black"}
    const inMenuStyle = {bgColor: "transparent", color: "rgb(230, 230, 320)", fontFamily: "IBM Plex Sans", fontWeight: "bold", fontSize: "16px"}
    const inMenuHoverStyle = {color: "rgb(232, 106, 66)"}

    const hablemosStyle = {bg:'white', fontFamily:"IBM Plex Sans", color:"rgb(232, 106, 66)", fontWeight:"bold", fontSize:{base:"12px", md:"18px"}}
    const hablemosHoverStyle = {color:'white', fontFamily:"IBM Plex Sans", bg:"rgb(232, 106, 66)", fontWeight:"bold"}

    const scrollHero=()=>{
        const dest = document.getElementById("Hero");
        dest.scrollIntoView({behavior: "smooth"});
    }
    const scrollAboutMe=()=>{
        const dest = document.getElementById("AboutMe");
        dest.scrollIntoView({behavior: "smooth"});
    }
    const scrollHowIWork=()=>{
        const dest = document.getElementById("HowIWork");
        dest.scrollIntoView({behavior: "smooth"});
    }
    const scrollReviews=()=>{
        const dest = document.getElementById("Reviews");
        dest.scrollIntoView({behavior: "smooth"});
    }
    const scrollContact=()=>{
        const dest = document.getElementById("Contact");
        dest.scrollIntoView({behavior: "smooth"});
    }

  return (
    <Flex as={"header"} position={"fixed"} zIndex={"2"} direction={'row'} alignItems={'center'} justifyContent={'space-around'} w={'100vw'} px={'10vw'} bg={"rgb(23, 22, 26)"} h={{base:"50px", md:"60px"}} id='Header'>
        <Image src={mainLogo} alt='Page Logo' w={{base:"60px", md:"120px"}}/>
        <Flex as={"nav"} display={{base:"none", xl:"flex"}}>
            <Button sx={buttonStyle} _hover={buttonHoverStyle} onClick={scrollHero}>
                INICIO
            </Button>
            <Button sx={buttonStyle} _hover={buttonHoverStyle} onClick={scrollAboutMe}>
                SOBRE MI
            </Button>
            <Button sx={buttonStyle} _hover={buttonHoverStyle} onClick={scrollHero}>
                PORTFOLIO
            </Button>
            <Menu>
                <MenuButton sx={buttonStyle} _hover={buttonHoverStyle} _active={buttonHoverStyle} as={Button} rightIcon={<ChevronDownIcon />}>
                    SERVICIOS
                </MenuButton>
                <MenuList border={"2px"} borderRadius={"7px"} borderColor={"rgb(232, 106, 66)"} bgColor={"rgb(23, 22, 26)"}>
                    <Link href="https://github.com/L-LopezMartin"><MenuItem sx={inMenuStyle} _hover={inMenuHoverStyle}>Diseño Web</MenuItem></Link>
                    <Link href="https://github.com/L-LopezMartin"><MenuItem sx={inMenuStyle} _hover={inMenuHoverStyle}>Investigación de Usuario</MenuItem></Link>
                    <Link href="https://github.com/L-LopezMartin"><MenuItem sx={inMenuStyle} _hover={inMenuHoverStyle}>Soluciones Móviles</MenuItem></Link>
                    <Link href="https://github.com/L-LopezMartin"><MenuItem sx={inMenuStyle} _hover={inMenuHoverStyle}>Soluciones UI/UX</MenuItem></Link>
                </MenuList>
            </Menu>
            <Button sx={buttonStyle} _hover={buttonHoverStyle} onClick={scrollHowIWork}>
                PROCESO
            </Button>
            <Button sx={buttonStyle} _hover={buttonHoverStyle} onClick={scrollReviews}>
                RESEÑAS
            </Button>
        </Flex>
        <Flex  display={{base:"none", sm:"flex", xl:"none"}}>
            <Menu>
                <MenuButton sx={buttonStyle} _hover={buttonHoverStyle} _active={buttonHoverStyle} as={Button} rightIcon={<ChevronDownIcon />}>
                    SERVICIOS
                </MenuButton>
                <MenuList border={"2px"} borderRadius={"7px"} borderColor={"rgb(232, 106, 66)"} bgColor={"rgb(23, 22, 26)"}>
                    <Link href="https://github.com/L-LopezMartin"><MenuItem sx={inMenuStyle} _hover={inMenuHoverStyle}>Diseño Web</MenuItem></Link>
                    <Link href="https://github.com/L-LopezMartin"><MenuItem sx={inMenuStyle} _hover={inMenuHoverStyle}>Investigación de Usuario</MenuItem></Link>
                    <Link href="https://github.com/L-LopezMartin"><MenuItem sx={inMenuStyle} _hover={inMenuHoverStyle}>Soluciones Móviles</MenuItem></Link>
                    <Link href="https://github.com/L-LopezMartin"><MenuItem sx={inMenuStyle} _hover={inMenuHoverStyle}>Soluciones UI/UX</MenuItem></Link>
                </MenuList>
            </Menu>
        </Flex>
        <Button sx={hablemosStyle} _hover={hablemosHoverStyle} w={{base:"100px", md:"150px"}} h={{base:"30px", md:"45px"}} onClick={scrollContact}>
            HABLEMOS
        </Button>
    </Flex>
  )
}

export default Header