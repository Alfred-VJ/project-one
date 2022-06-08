import React from 'react';
import { Button, Input, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { AiFillMail, AiFillGithub } from 'react-icons/ai'
import { DiJsBadge } from 'react-icons/di'
import { RiWhatsappFill } from 'react-icons/ri'
import { GrYoutube } from 'react-icons/gr'
import navStyles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={navStyles.mobileNav}>
      <Breadcrumb separator='' bg="brand.primary" p={4} color="brand.letOscur">

        <BreadcrumbItem>
          <BreadcrumbLink href='#'> <Button bg="brand.primary" leftIcon={<RiWhatsappFill />}>WatsApp</Button></BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href='#'><Button bg="brand.primary" leftIcon={<AiFillMail />}>Email</Button></BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href='#'><Button bg="brand.primary" leftIcon={<AiFillGithub />}>GitHub</Button></BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href='#'><Button bg="brand.primary" leftIcon={<DiJsBadge />}>Curso JavaScript</Button></BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href='#'><Button bg="brand.primary" leftIcon={<GrYoutube/>} >YouTube</Button></BreadcrumbLink>
        </BreadcrumbItem>

      </Breadcrumb>
    </div>

  )
}

export default Navbar