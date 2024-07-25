import { Flex, Text, Link, Image, Divider, Menu, FormControl, Input, Button, MenuButton, MenuList, MenuItem} from "@chakra-ui/react"
import { ArrowForwardIcon, AddIcon } from "@chakra-ui/icons"

function Footer(){
    return(
        <Flex as={'footer'} direction={'column'} alignItems={'center'} justifyContent={'space-around'} w={'100vw'} px={'10vw'}>
            <Flex justifyContent={'space-between'} w={"100%"}>
                <Flex  direction={'column'}>
                    <Text>Suscríbete al newsletter para estar al tanto de las noticias</Text>
                    <FormControl >
                        <Input placeholder="tu correo electrónico" w={"86%"}></Input>
                        <Button w={"10%"} mx={"2"}> <ArrowForwardIcon></ArrowForwardIcon> </Button>
                    </FormControl>
                    <Divider my={"5px"} borderWidth={"1.5px"} borderRadius={"5px"}/>
                    <Flex justifyContent={'center'} my={"30px"}>
                        <Link mx={"10px"}><Image alt="UpWorkRating"></Image></Link>
                        <Link mx={"10px"}><Image alt="Dribble"></Image></Link>
                    </Flex>
                </Flex>
                <Flex  direction={'column'}>
                    <Text>Links útiles</Text>
                    <Link>Proyectos</Link>
                    <Link>Servicios</Link>
                    <Link>Contactos</Link>
                    <Link>Blog</Link>
                </Flex>
                <Flex  direction={'column'}>
                    <Text>Consultas</Text>
                    <Text>leanejemplo@gmail.com.ar</Text>
                    <Text>+54 9 261 6887381</Text>
                    <Text>sky_pe/leandro</Text>
                </Flex>
            </Flex>
            <Flex justifyContent={'space-between'} w={"100%"}>
                <Text>
                    Mostrar todos los servicios
                </Text>
                <Menu>
                    <MenuButton><AddIcon width={"30px"} height={"30px"} border={"1px"} borderRadius={"100%"} padding={"5px"}></AddIcon></MenuButton>
                    <MenuList>
                        <MenuItem>Diseño Web</MenuItem>
                        <MenuItem>Investigación de Usuario</MenuItem>
                        <MenuItem>Soluciones Móviles</MenuItem>
                        <MenuItem>Soluciones UI/UX</MenuItem>
                    </MenuList>
                </Menu>
            </Flex>

            <Divider my={"20px"}/>

            <Flex justifyContent={'space-between'} w={"100%"}>
                <Text>© 2024 Allfolio - All right reserved</Text>
                <Flex>
                    <Link mx={"10px"} border={"1px"} borderRadius={"100%"} padding={"5px"}><Image alt="Dribble Logo"></Image></Link>
                    <Link mx={"10px"} border={"1px"} borderRadius={"100%"} padding={"5px"}><Image alt="Instagram Logo"></Image></Link>
                    <Link mx={"10px"} border={"1px"} borderRadius={"100%"} padding={"5px"}><Image alt="Behance Logo"></Image></Link>
                    <Link mx={"10px"} border={"1px"} borderRadius={"100%"} padding={"5px"}><Image alt="UpWork Logo"></Image></Link>
                </Flex>
                <Link>Política de privacidad</Link>
            </Flex>
        </Flex>
    )
}
export default Footer