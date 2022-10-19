import React from 'react';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  } from '@chakra-ui/react'


interface NavContainer {
    children: React.ReactNode;
    /**
     * This is the className for the given item, Not the ClassName for the cotnianer
     */
    className?: string;
}

export const NavContainer = () => {
    return (
        <Breadcrumb spacing='8px'>
            <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href='/'>home</BreadcrumbLink>
            </BreadcrumbItem>
        
            <BreadcrumbItem>
                <BreadcrumbLink href='/roadmap'>roadmap</BreadcrumbLink>
            </BreadcrumbItem>
        
            <BreadcrumbItem>
                <BreadcrumbLink href='/contact'>contact</BreadcrumbLink>
            </BreadcrumbItem>
      </Breadcrumb>
    )
}