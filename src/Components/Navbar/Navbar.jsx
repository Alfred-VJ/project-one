import React from 'react';
import { Button, Text, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { AiFillMail, AiFillGithub } from 'react-icons/ai';
import { DiJsBadge } from 'react-icons/di';
import { RiWhatsappFill } from 'react-icons/ri';
import { GrYoutube } from 'react-icons/gr';
import navStyles from './Navbar.module.css';



const Navbar = () => {
  return (
    <div className={navStyles.mobileNav}>
      <Breadcrumb separator='' bg="brand.primary" p={4} color="brand.letOscur">

        <BreadcrumbItem>
          <BreadcrumbLink href='https://api.whatsapp.com/send?phone=+525579947397&text=Hola Alfred' target="_blank" ><Button bg="brand.primary" leftIcon={<RiWhatsappFill />}><Text display={{ md: "flex", base: "none" }}>WatsApp</Text></Button></BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href='https://github.com/Alfred-VJ' target="_blank"><Button bg="brand.primary" leftIcon={<AiFillGithub />}><Text display={{ md: "flex", base: "none" }} >GitHub</Text></Button></BreadcrumbLink>
        </BreadcrumbItem>

        {/* <BreadcrumbItem >
          <BreadcrumbLink href='https://www.google.com/intl/es-419/gmail/about/' target="_blank"><Button bg="brand.primary" leftIcon={<AiFillMail />}><Text>Email</Text></Button></BreadcrumbLink>
        </BreadcrumbItem> */}

        <BreadcrumbItem>
          <BreadcrumbLink href='https://www.youtube.com/watch?v=zjwCOLaQw2c&list=PLZXhtO5iMVW1wPN-aZ_BnYLI9I36eXcyD' target="_blank"><Button bg="brand.primary" leftIcon={<DiJsBadge />}><Text display={{ md: "flex", base: "none" }} >Curso JavaScript</Text></Button></BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href='https://www.youtube.com/channel/UC3K5-DQkXSFx2LfWnaGHY1g' target="_blank"><Button bg="brand.primary" leftIcon={<GrYoutube />} ><Text display={{ md: "flex", base: "none" }} >YouTube</Text></Button></BreadcrumbLink>
        </BreadcrumbItem>

      </Breadcrumb>
    </div>

  )
}

export default Navbar