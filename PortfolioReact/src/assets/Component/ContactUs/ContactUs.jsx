import { Divider, Flex, Heading, Text, FormLabel, FormControl, Button, Input, background } from "@chakra-ui/react"
import imgFondo from "./img/BolaNegra.png"

function ContactUs(){

    return(
        <Flex as={'section'} w={"100vw"} direction={"column"} alignItems={"center"} bg={"rgb(232, 109, 70)"} bgImage={imgFondo} bgPos={"center"} bgRepeat={"no-repeat"} bgSize={"contain"}>
            <Heading my={"50px"}>¿Listo para discutir tu proyecto?</Heading>
            <Text>CONTÁCTAME</Text>
            <Divider w={"100px"} borderWidth={"5px"}></Divider>
            <FormControl>
                <Flex direction={"column"} alignItems={"center"}>
                    <FormLabel my={"5px"}>Nombre</FormLabel>
                    <Input w={"200px"} my={"5px"} placeholder='Tu nombre'></Input>
                    <FormLabel my={"5px"}>Email</FormLabel>
                    <Input w={"200px"} my={"5px"} placeholder='Tu correo electrónico'></Input>
                    <FormLabel my={"5px"}>Nombre de empresa</FormLabel>
                    <Input w={"200px"} my={"5px"} placeholder='Nombre de tu empresa'></Input>
                    <FormLabel my={"5px"}>Tu mensaje</FormLabel>
                    <Input w={"200px"} my={"5px"} placeholder='Tu mensaje a enviar'></Input>
                    <Button w={"100px"} my={"40px"}>Enviar</Button>
                </Flex>
            </FormControl>
        </Flex>
    )
}

export default ContactUs