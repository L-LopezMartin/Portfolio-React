import { Divider, Flex, Heading, Text, FormLabel, FormControl, Button, Input } from "@chakra-ui/react"

function ContactUs(){

    return(
        <Flex as={'section'}>
            <Heading>¿Listo para discutir tu proyecto?</Heading>
            <Text>CONTÁCTAME</Text>
            <Divider></Divider>
            <FormControl>
                <FormLabel>Nombre</FormLabel>
                <Input placeholder='Tu nombre'></Input>
                <FormLabel>Email</FormLabel>
                <Input placeholder='Tu correo electrónico'></Input>
                <FormLabel>Nombre de empresa</FormLabel>
                <Input placeholder='Nombre de tu empresa'></Input>
                <FormLabel>Tu mensaje</FormLabel>
                <Input placeholder='Tu mensaje a enviar'></Input>
                <Button>Enviar</Button>
            </FormControl>
        </Flex>
    )
}

export default ContactUs