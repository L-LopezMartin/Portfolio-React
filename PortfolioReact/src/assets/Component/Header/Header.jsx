import { Flex } from '@chakra-ui/react'
import React from 'react'
import { Button } from '@chakra-ui/react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
  } from '@chakra-ui/react'
  import { Image } from '@chakra-ui/react'
  import {ChevronDownIcon} from '@chakra-ui/icons'

function Header() {
  return (
    <Flex as={"header"} direction={'row'} alignItems={'center'} justifyContent={'space-around'} w={'100vw'} px={'10vw'}>
        <Image src='' alt='Page Logo'/>
        <Flex>
            <Button>
                INICIO
            </Button>
            <Button>
                SOBRE MI
            </Button>
            <Button>
                PORTFOLIO
            </Button>
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    SERVICIOS
                </MenuButton>
                <MenuList>
                    <MenuItem>Diseño Web</MenuItem>
                    <MenuItem>Investigación de Usuario</MenuItem>
                    <MenuItem>Soluciones Móviles</MenuItem>
                    <MenuItem>Soluciones UI/UX</MenuItem>
                </MenuList>
            </Menu>
            <Button>
                PROCESO
            </Button>
            <Button>
                RESEÑAS
            </Button>
        </Flex>
            
        <Button>
            HABLEMOS
        </Button>
    </Flex>
  )
}

export default Header