import { Divider, Flex, Heading, Text, FormLabel, FormControl, Button, Input, background, border } from "@chakra-ui/react"
import imgFondo from "./img/BolaNegra.png"

function ContactUs(){
    const inputStyle = {w:"200px" , my:"5px", border:"2px", color:"rgb(230,230,230)"}
    const inputFocusStyle = {borderColor:"rgb(232, 106, 66)"}

    const labelStyle = {my:"5px", color:"rgb(230,230,230)"}

    const buttonStyle = {w:"100px", my:"40px", bgColor:"transparent", border:"2px", borderColor:"rgb(232, 106, 66)", fontFamily:"IBM Plex Sans", color:"rgb(230,230,230)", fontWeight:"bold"}
    const buttonHoverStyle = {bgColor:"rgb(232, 106, 66)", color:"black"}

    return(
        <Flex as={'section'} id="Contact" w={"100vw"} direction={"column"} alignItems={"center"} bg={"rgb(232, 109, 70)"} bgImage={imgFondo} bgPos={"center"} bgRepeat={"no-repeat"} bgSize={"contain"}>
            <Heading mt={"50px"} fontFamily={"IBM Plex Sans"} fontSize={"78px"} w={"50%"} textAlign={"center"} color={"rgb(230,230,230)"}>¿Listo para discutir tu proyecto?</Heading>
            <Text mt={"30px"} fontFamily={"IBM Plex Sans"} fontWeight={"bold"} fontSize={"24px"} zIndex={"1"} color={"rgb(230,230,230)"}>CONTÁCTAME</Text>
            <Divider w={"150px"} borderWidth={"7px"} borderColor={"rgb(232, 106, 66)"} position={"relative"} top={"-15px"} opacity={"1"}></Divider>
            <FormControl>
                <Flex direction={"column"} alignItems={"center"}>
                    <FormLabel sx={labelStyle}>Nombre</FormLabel>
                    <Input sx={inputStyle} _focusVisible={inputFocusStyle} placeholder='Tu nombre'></Input>
                    <FormLabel sx={labelStyle}>Email</FormLabel>
                    <Input sx={inputStyle} _focusVisible={inputFocusStyle} placeholder='Tu correo electrónico'></Input>
                    <FormLabel sx={labelStyle}>Nombre de empresa</FormLabel>
                    <Input sx={inputStyle} _focusVisible={inputFocusStyle} placeholder='Nombre de tu empresa'></Input>
                    <FormLabel sx={labelStyle}>Tu mensaje</FormLabel>
                    <Input sx={inputStyle} _focusVisible={inputFocusStyle} placeholder='Tu mensaje a enviar'></Input>
                    <Button sx={buttonStyle} _hover={buttonHoverStyle}>Enviar</Button>
                </Flex>
            </FormControl>
        </Flex>
    )
}

export default ContactUs