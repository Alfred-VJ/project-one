import React from 'react'
import { Box, Flex, IconButton, Spacer, Text } from '@chakra-ui/react'
import { AiFillMail, AiFillGithub } from 'react-icons/ai'
import { FaInstagramSquare } from 'react-icons/fa'
import { ImFacebook2, ImLinkedin, ImTwitter } from 'react-icons/im'
import { GrYoutube } from 'react-icons/gr'

const Footer = () => {
    return (
        <div>
            <Box bg="brand.letOscur" w="100%" p={50}>
                <Flex justifyContent="center">
                    <IconButton bg='brand.GT' mr={1} icon={<GrYoutube />} fontSize='30' color='brand.YT' />
                    <IconButton bg='brand.GT' mr={1} icon={<ImFacebook2 />} fontSize='30' color='brand.FB' />
                    <IconButton bg='brand.GT' mr={1} icon={<FaInstagramSquare />} fontSize='30' color='brand.IN' />
                    <IconButton bg='brand.GT' mr={1} icon={<ImLinkedin />} fontSize='30' color='brand.LN' />
                    <IconButton bg='brand.GT' mr={1} icon={<AiFillGithub />} fontSize='30' color='brand.HTML' />
                    <IconButton bg='brand.GT' mr={1} icon={<ImTwitter />} fontSize='30' color='brand.TW' />
                </Flex>
                <Flex justifyContent="center">
                    <Box mt={5}>
                        <Text color="white" >Mi camino de programador es un canal creado por José Alfredo Velázquez Juárez.</Text>
                        <Spacer />
                        <Text color="white" >micaminodeprogramador@gmail.com</Text>
                    </Box>
                </Flex>
            </Box>
        </div>
    )
}

export default Footer