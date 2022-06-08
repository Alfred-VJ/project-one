import React from 'react';
import { Box, Text, Heading, Image, Grid, GridItem, Spacer, Flex, Wrap } from '@chakra-ui/react';
import img from '../../img/flecha.png';
import imgYo from '../../img/yo.png';
import cardHtml from '../../img/cardHTML.png';
import cardCss from '../../img/cardCSS.png';
import cardJs from '../../img/cardJS.png';
import cardGit from '../../img/cardGit.png';
import cardNodeJs from '../../img/cardNodeJS.png';
import cardPostgresql from '../../img/cardPostgresql.png';
import cardReact from '../../img/cardReact.png';
import cardRedux from '../../img/cardRedux.png';
import cardSequelize from '../../img/cardSequelize.png';
import cardGitHub from '../../img/cardGitHub.png';

const Home = () => {
    return (
        <div>

            <Box bg="brand.primary" w="100%" p={300}>
                <Heading fontFamily='Shadows Into Light' color='brand.letOscur' letterSpacing='3px' noOfLines={1}>MI CAMINO DE PROGRAMADOR;</Heading>
                <Image mt='-80px' src={img} />

                <Text fontFamily='Shadows Into Light' color='brand.letOscur' fontSize='50' mb='-200' >El esfuerzo no sirve para nada si no crees en ti mismo.</Text>

            </Box>


            <Flex >

                <Box bg="brand.letOscur" w="100%" h="800px" display="grid" placeContent="center">
                    <Image src={imgYo} h="350" />
                </Box>

                <Box bg="brand.resalt" w="100%" h="800px" display="grid" placeContent="center">
                    <Text fontFamily='Shadows Into Light' color='brand.letOscur' fontSize='30' ml="5" mr="5" >Soy Alfredo Velázquez Juárez.<br /><br />Mi camino a la programación no ha sido fácil, pero siempre intento superarme y dar lo mejor de mí en cada momento de mi vida. </Text>
                </Box>

            </Flex>


            <Box bg="brand.secundary" w="100%" p={400}>
                <Text fontSize='6xl' fontFamily='Shadows Into Light' color='white' letterSpacing="12px" >Habilidades</Text>
                <Grid templateColumns="repeat(4, 1fr)" gap={6} justifyContent="center" >
                    <GridItem w="150px" m="80px" >
                        <Image src={cardHtml} />
                        <Box>
                            <Text fontFamily='Shadows Into Light' color='brand.HTML' fontSize='33'>HTML5</Text>
                            <Text w="250px" ml="-50px" mt="25px" fontFamily='Shadows Into Light' color='white' fontSize='20' >Esta fue la primera tecnología que aprendí cuando quise convertirme en desarrollador web.</Text>
                        </Box>
                    </GridItem>
                    <GridItem w="150px" m="80px" >
                        <Image src={cardCss} />
                        <Box>
                            <Text fontFamily='Shadows Into Light' color='brand.CSS' fontSize='33'>CSS</Text>
                            <Text w="250px" ml="-50px" mt="25px" fontFamily='Shadows Into Light' color='white' fontSize='20'>La tecnología más divertida cuando la aprendí, ya hace casi dos años que la conozco.</Text>
                        </Box>
                    </GridItem>
                    <GridItem w="150px" m="80px" >
                        <Image src={cardJs} />
                        <Box>
                            <Text fontFamily='Shadows Into Light' color='brand.JS' fontSize='33'>JAVASCRIPT</Text>
                            <Text w="250px" ml="-50px" mt="25px" fontFamily='Shadows Into Light' color='white' fontSize='20'>Cuando comparé este lenguaje con otros, pensé que JS era un lenguaje extraño, pero ahora lo amo.</Text>
                        </Box>
                    </GridItem>
                    <GridItem w="150px" m="80px" >
                        <Image src={cardNodeJs} />
                        <Box>
                            <Text fontFamily='Shadows Into Light' color='brand.ND' fontSize='33'>NODE.JS</Text>
                            <Text w="250px" ml="-50px" mt="25px" fontFamily='Shadows Into Light' color='white' fontSize='20'>Entorno que empecé a utilizar sin saber que era, con el tiempo fui entendiendo lo que era y su importancia en el desarrollo.</Text>
                        </Box>
                    </GridItem>
                    <GridItem w="150px" m="80px" >
                        <Image src={cardPostgresql} />
                        <Box>
                            <Text fontFamily='Shadows Into Light' color='brand.PS' fontSize='33'>POSTGRES</Text>
                            <Text w="250px" ml="-50px" mt="25px" fontFamily='Shadows Into Light' color='white' fontSize='20'>Creo que fue el primer sistema que aprendí en serio para gestionar un base de datos, aún tengo mucho que aprender, así que Máximo Esfuerzo.</Text>
                        </Box>
                    </GridItem>
                    <GridItem w="150px" m="80px" >
                        <Image src={cardSequelize} />
                        <Box>
                            <Text fontFamily='Shadows Into Light' color='brand.CSS' fontSize='33'>SEQUELIZE</Text>
                            <Text w="250px" ml="-50px" mt="25px" fontFamily='Shadows Into Light' color='white' fontSize='20'>Este OMR hizo que fuera más fácil para mí la parte del BackEnd a la hora de crear aplicaciones WEB.</Text>
                        </Box>
                    </GridItem>
                    <GridItem w="150px" m="80px" >
                        <Image src={cardReact} />
                        <Box>
                            <Text fontFamily='Shadows Into Light' color='brand.RT' fontSize='33'>REACT</Text>
                            <Text w="250px" ml="-50px" mt="25px" fontFamily='Shadows Into Light' color='white' fontSize='20'>Que librería tan genial, al principio me costó, pero ahora no dejo de usarla y aprender más de ella.</Text>
                        </Box>
                    </GridItem>
                    <GridItem w="150px" m="80px" >
                        <Image src={cardRedux} />
                        <Box>
                            <Text fontFamily='Shadows Into Light' color='brand.RX' fontSize='33'>REDUX</Text>
                            <Text w="250px" ml="-50px" mt="25px" fontFamily='Shadows Into Light' color='white' fontSize='20'>Herramienta que para mí es indispensable para trabajar en proyectos de React sobre todo si son de mediana a gran escala.</Text>
                        </Box>
                    </GridItem>
                    <GridItem w="150px" m="80px" >
                        <Image src={cardGitHub} />
                        <Box>
                            <Text fontFamily='Shadows Into Light' color='brand.GH' fontSize='35'>GITHUB</Text>
                            <Text w="250px" ml="-50px" mt="25px" fontFamily='Shadows Into Light' color='white' fontSize='20'>Cada vez veo más valioso este servicio, aprender esta u otra herramienta parecida es de lo más importante para un desarrollador.</Text>
                        </Box>
                    </GridItem>
                    <GridItem w="150px" m="80px" >
                        <Image src={cardGit} />
                        <Box>
                            <Text fontFamily='Shadows Into Light' color='brand.HTML' fontSize='33'>GIT</Text>
                            <Text w="250px" ml="-50px" mt="25px" fontFamily='Shadows Into Light' color='white' fontSize='20'>Una herramienta más que todo desarrollador debe ir dominando a lo largo de su carrera.</Text>
                        </Box>
                    </GridItem>
                </Grid >
            </Box>

            <Box bg="brand.letOscur" w="100%" p={400}>
              
                <Flex mt='-300px' ml={-59}>
                    <Image w='16' h='16' src={cardGit} />
                    <Spacer mr={3} />
                    <Image w='16' h='16' src={cardJs} />
                    <Spacer mr={3} />
                    <Image w='16' h='16' src={cardHtml} />
                    <Spacer mr={3} />
                    <Image w='16' h='16' src={cardCss} />
                    <Spacer mr={3} />
                    <Image w='16' h='16' src={cardGitHub} />
                    <Spacer mr={3} />
                    <Image w='16' h='16' src={cardSequelize} />
                    <Spacer mr={3} />
                    <Image w='16' h='16' src={cardReact} />
                    <Spacer mr={3} />
                    <Image w='16' h='16' src={cardRedux} />
                    <Spacer mr={3} />
                    <Image w='16' h='16' src={cardPostgresql} />
                    <Spacer mr={3} />
                    <Image w='16' h='16' src={cardNodeJs} />
                </Flex>

                <Text mt='80px' color='brand.ND' fontFamily='Kdam Thmor Pro' fontWeight='600' fontSize='25px' letterSpacing={3} >
                    Me apasiona la programación, todo el tiempo estoy aprendiendo algo nuevo y practicando mucho.
                    <Spacer mt={10} />
                    Conozco todas las tecnologías que mencioné, pero sé que tengo que seguir aprendiendo y actualizándome en cada una de ellas.
                    <Spacer />

                </Text>

            </Box>


            <Box bg="brand.primary" w="100%" p={400}>
                <Text fontFamily='Shadows Into Light' color='brand.letOscur' fontSize='60' >Un genio es 10% talento y 90% esfuerzo.</Text>
            </Box>

        </div>
    )
}

export default Home