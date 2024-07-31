import { Divider, Flex, Heading, Text, FormLabel, FormControl, Button, Input } from "@chakra-ui/react"
import imgFondo from "./img/BolaNegra.png"

function ContactUs(){
    const inputStyle = {w:"200px" , my:"5px", border:"2px", color:"rgb(230,230,230)"}
    const inputFocusStyle = {borderColor:"rgb(232, 106, 66)"}

    const labelStyle = {my:"5px", color:"rgb(230,230,230)"}

    const buttonStyle = {w:"100px", my:"40px", bgColor:"transparent", border:"2px", borderColor:"rgb(232, 106, 66)", fontFamily:"IBM Plex Sans", color:"rgb(230,230,230)", fontWeight:"bold"}
    const buttonHoverStyle = {bgColor:"rgb(232, 106, 66)", color:"black"}

    
    
    function enviarForm(e){
        const submitButton = document.getElementById("submitButton")
        const feedback = document.getElementById("feedback")
        const name = document.getElementById("name")
        const firma = document.getElementById("firma")
        const msg = document.getElementById("msg")
        const email = document.getElementById("emailContact")
        
        e.preventDefault()
        submitButton.setAttribute("style", "display:none")
        feedback.setAttribute("style", "display:block")

        console.log("Nombre: ",name.value)
        console.log("Correo electrónico: ",email.value)
        console.log("Nombre de la empresa: ",firma.value)
        console.log("Mensaje enviado: ",msg.value)
    }
    
    return(
        <Flex as={'section'} id="Contact" w={"100vw"} h={"800px"} direction={"column"} alignItems={"center"} bg={"rgb(232, 109, 70)"} bgImage={imgFondo} bgPos={"center"} bgRepeat={"no-repeat"} bgSize={{base:"700px 700px", md:"contain"}}>
            <Heading mt={"50px"} fontFamily={"IBM Plex Sans"} fontSize={{base:"42px", md:"56px", lg:"78px"}} w={"70%"} textAlign={"center"} color={"rgb(230,230,230)"}>¿Listo para discutir tu proyecto?</Heading>
            <Text mt={"30px"} fontFamily={"IBM Plex Sans"} fontWeight={"bold"} fontSize={"24px"} zIndex={"1"} color={"rgb(230,230,230)"}>CONTÁCTAME</Text>
            <Divider w={"150px"} borderWidth={"7px"} borderColor={"rgb(232, 106, 66)"} position={"relative"} top={"-15px"} opacity={"1"}></Divider>
            <form onSubmit={enviarForm}>
                <FormControl>
                    <Flex direction={"column"} alignItems={"center"}>
                        <FormLabel sx={labelStyle}>Nombre</FormLabel>
                        <Input id="name" type="string" sx={inputStyle} _focusVisible={inputFocusStyle} placeholder='Tu nombre'></Input>
                        <FormLabel sx={labelStyle}>Email</FormLabel>
                        <Input id="emailContact" type="email" sx={inputStyle} _focusVisible={inputFocusStyle} placeholder='Tu correo electrónico'></Input>
                        <FormLabel sx={labelStyle}>Nombre de empresa</FormLabel>
                        <Input id="firma" type="string" sx={inputStyle} _focusVisible={inputFocusStyle} placeholder='Nombre de tu empresa'></Input>
                        <FormLabel sx={labelStyle}>Tu mensaje</FormLabel>
                        <Input id="msg" type="string" sx={inputStyle} _focusVisible={inputFocusStyle} placeholder='Tu mensaje a enviar'></Input>
                        <Text id="feedback" display={"none"} py={"20px"} fontSize={"32px"}> Enviado! </Text>
                        <Button id="submitButton" type="submit" sx={buttonStyle} _hover={buttonHoverStyle}>Enviar</Button>
                    </Flex>
                </FormControl>
            </form>
        </Flex>
    )
}

export default ContactUs