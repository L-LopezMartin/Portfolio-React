import { Flex, Heading, Link, Text, Image, Divider, Button } from "@chakra-ui/react"

function ProjectsMade(){
    
    return(
        <Flex as={'section'}>
            <Text>Proyectos</Text>
            <Heading>Realizados</Heading>
            <Flex>
                <Flex>
                    <Heading>Web UI/UX Design</Heading>
                    <Text>Protfolio / Landing Page - Proyecto final del curso de desarrollo FullStack. Lo estás visualizando ahora mismo.</Text>
                    <Link>Ver proyecto completo</Link>
                    <Divider></Divider>
                </Flex>
                <Image alt="Project Image"></Image>
            </Flex>
            <Flex>
                <Flex>
                    <Heading>Web UI/UX Design</Heading>
                    <Text>Protfolio / Landing Page - Proyecto final del curso de desarrollo FullStack. Lo estás visualizando ahora mismo.</Text>
                    <Link>Ver proyecto completo</Link>
                    <Divider></Divider>
                </Flex>
                <Image alt="Project Image"></Image>
            </Flex>
            <Flex>
                <Flex>
                    <Heading>Web UI/UX Design</Heading>
                    <Text>Protfolio / Landing Page - Proyecto final del curso de desarrollo FullStack. Lo estás visualizando ahora mismo.</Text>
                    <Link>Ver proyecto completo</Link>
                    <Divider></Divider>
                </Flex>
                <Image alt="Project Image"></Image>
            </Flex>
            <Flex>
                <Flex>
                    <Heading>Web UI/UX Design</Heading>
                    <Text>Protfolio / Landing Page - Proyecto final del curso de desarrollo FullStack. Lo estás visualizando ahora mismo.</Text>
                    <Link>Ver proyecto completo</Link>
                    <Divider></Divider>
                </Flex>
                <Image alt="Project Image"></Image>
            </Flex>
            <Button>Ver Todos</Button>
        </Flex>
    )
}

export default ProjectsMade