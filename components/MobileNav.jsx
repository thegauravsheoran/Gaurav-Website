"use client"

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { CiMenuFries } from 'react-icons/ci'
import path from 'path'


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
    {
        name: 'Contact',
        path: '/contact',
    },
]

const MobileNav = () => {
    const pathName = usePathname()
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className='text-[32px] text-accent' />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <div className='mt-32 mb-40 text-center text-2xl'>
                    <h1 className='text-4xl font-semibold'>Gaurav<span className='text-accent'>.</span></h1>
                </div>
                <nav className='flex flex-col items-center justify-center gap-8'>
                    {links.map((link, index) => {
                        return (
                            <Link href={link.path} key={index} className={`${link.path === pathName && "text-accent border-b-2 border-accent"}
                             capitalize hover:text-accent transition-all`}>
                                {link.name} </Link>
                        );
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav
