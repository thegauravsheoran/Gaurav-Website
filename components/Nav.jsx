"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
    {
        name: 'About',
        path: '/',
    },
    {
        name: 'Experience',
        path: '/experience',
    },
    {
        name: 'Skills',
        path: '/skills',
    },
    {
        name: 'Projects',
        path: '/projects',
    },

]
const Nav = () => {
    const pathName = usePathname()
    return (
        <nav className='flex gap-8'>
            {links.map((link, index) => {
                return (
                    <Link href={link.path} key={index} className={`${link.path === pathName && "text-accent border-b-2 border-accent"}
                    capitalize hover:text-accent font-medium transition-all`}>
                        {link.name} </Link>
                );
            })}
        </nav>
    )
}

export default Nav
