import React from 'react'
import { Box, BreadcrumbLink, Flex, IconButton, Spacer, Text } from '@chakra-ui/react'
import { AiFillGithub } from 'react-icons/ai'
import { FaInstagramSquare } from 'react-icons/fa'
import { ImFacebook2, ImLinkedin, ImTwitter } from 'react-icons/im'
import { GrYoutube } from 'react-icons/gr'

const Footer = () => {
    return (

        <Box bg="brand.letOscur" w="100%" p={50}>
            <Flex justifyContent="center">
                <a href='https://www.youtube.com/channel/UC3K5-DQkXSFx2LfWnaGHY1g' target="_blank">
                    <IconButton bg='brand.GT' mr={1} icon={<GrYoutube />} fontSize='30' color='brand.YT' />
                </a>

                <a href='https://www.facebook.com/profile.php?id=100081023243964' target="_blank">
                    <IconButton bg='brand.GT' mr={1} icon={<ImFacebook2 />} fontSize='30' color='brand.FB' />
                </a>

                <a href='https://www.instagram.com/micaminodeprogramador/' target="_blank">
                    <IconButton bg='brand.GT' mr={1} icon={<FaInstagramSquare />} fontSize='30' color='brand.IN' />
                </a>

                <a href='https://www.linkedin.com/in/jos%C3%A9-alfredo-vel%C3%A1zquez-ju%C3%A1rez-30b827232/' target="_blank">
                    <IconButton bg='brand.GT' mr={1} icon={<ImLinkedin />} fontSize='30' color='brand.LN' />
                </a>

                <a href='https://github.com/Alfred-VJ' target="_blank">
                    <IconButton bg='brand.GT' mr={1} icon={<AiFillGithub />} fontSize='30' color='brand.HTML' />
                </a>

                <a href='https://twitter.com/JosAlfredoVelz8' target="_blank">
                    <IconButton bg='brand.GT' mr={1} icon={<ImTwitter />} fontSize='30' color='brand.TW' />
                </a>
            </Flex>
            <Flex justifyContent="center">
                <Box mt={5}>
                    <Text color="white" fontSize={{ md: "15px", base: "8px" }} >Mi camino de programador es un canal creado por José Alfredo Velázquez Juárez.</Text>
                    <Spacer />
                    <Text color="white" fontSize={{ md: "15px", base: "8px" }} >Puedes seguirme en cualquiera de mis redes o mandarme un Correo al siguiente email:</Text>
                    <Spacer />
                    <Text color="white" fontSize={{ md: "15px", base: "8px" }} >micaminodeprogramador@gmail.com</Text>
                </Box>
            </Flex>
        </Box>

    )
}

export default Footer