import { Flex, Button, Menu, MenuButton, MenuList, MenuItem, Image } from '@chakra-ui/react'
import {ChevronDownIcon} from '@chakra-ui/icons'
import mainLogo from "./img/AllfolioLogo.png"

function Header() {

    const buttonStyle = {bgColor: "transparent", color: "rgb(230, 230, 320)", fontFamily: "IBM Plex Sans", fontWeight: "bold", fontSize: "16px"}
    const buttonHoverStyle = {bgColor: "white", color: "black"}
    const inMenuStyle = {bgColor: "transparent", color: "rgb(230, 230, 320)", fontFamily: "IBM Plex Sans", fontWeight: "bold", fontSize: "16px"}
    const inMenuHoverStyle = {color: "rgb(232, 106, 66)"}

    const hablemosStyle = {bg:'white', fontFamily:"IBM Plex Sans", color:"rgb(232, 106, 66)", fontWeight:"bold"}
    const hablemosHoverStyle = {color:'white', fontFamily:"IBM Plex Sans", bg:"rgb(232, 106, 66)", fontWeight:"bold"}

  return (
    <Flex as={"header"} direction={'row'} alignItems={'center'} justifyContent={'space-around'} w={'100vw'} px={'10vw'} bg={"rgb(23, 22, 26)"} h={"70px"}>
        <Image src={mainLogo} alt='Page Logo'/>
        <Flex as={"nav"}>
            <Button sx={buttonStyle} _hover={buttonHoverStyle}>
                INICIO
            </Button>
            <Button sx={buttonStyle} _hover={buttonHoverStyle}>
                SOBRE MI
            </Button>
            <Button sx={buttonStyle} _hover={buttonHoverStyle}>
                PORTFOLIO
            </Button>
            <Menu>
                <MenuButton sx={buttonStyle} _hover={buttonHoverStyle} _active={buttonHoverStyle} as={Button} rightIcon={<ChevronDownIcon />}>
                    SERVICIOS
                </MenuButton>
                <MenuList border={"2px"} borderRadius={"7px"} borderColor={"rgb(232, 106, 66)"} bgColor={"rgb(23, 22, 26)"}>
                    <MenuItem sx={inMenuStyle} _hover={inMenuHoverStyle}>Diseño Web</MenuItem>
                    <MenuItem sx={inMenuStyle} _hover={inMenuHoverStyle}>Investigación de Usuario</MenuItem>
                    <MenuItem sx={inMenuStyle} _hover={inMenuHoverStyle}>Soluciones Móviles</MenuItem>
                    <MenuItem sx={inMenuStyle} _hover={inMenuHoverStyle}>Soluciones UI/UX</MenuItem>
                </MenuList>
            </Menu>
            <Button sx={buttonStyle} _hover={buttonHoverStyle}>
                PROCESO
            </Button>
            <Button sx={buttonStyle} _hover={buttonHoverStyle}>
                RESEÑAS
            </Button>
        </Flex>
            
        <Button sx={hablemosStyle} _hover={hablemosHoverStyle}>
            HABLEMOS
        </Button>
    </Flex>
  )
}

export default Header