import React from 'react';
import { Button, Input, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
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
          <BreadcrumbLink href='https://api.whatsapp.com/send?phone=+525579947397&text=Hola Alfred' target="_blank" ><Button bg="brand.primary" leftIcon={<RiWhatsappFill />}>WatsApp</Button></BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href='https://github.com/Alfred-VJ' target="_blank"><Button bg="brand.primary" leftIcon={<AiFillGithub />}>GitHub</Button></BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem >
          <BreadcrumbLink href='https://www.google.com/intl/es-419/gmail/about/' target="_blank"><Button bg="brand.primary" leftIcon={<AiFillMail />}>Email</Button></BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href='https://www.youtube.com/watch?v=zjwCOLaQw2c&list=PLZXhtO5iMVW1wPN-aZ_BnYLI9I36eXcyD' target="_blank"><Button bg="brand.primary" leftIcon={<DiJsBadge />}>Curso JavaScript</Button></BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href='https://www.youtube.com/channel/UC3K5-DQkXSFx2LfWnaGHY1g' target="_blank"><Button bg="brand.primary" leftIcon={<GrYoutube/>} >YouTube</Button></BreadcrumbLink>
        </BreadcrumbItem>

      </Breadcrumb>
    </div>

  )
}

export default Navbar