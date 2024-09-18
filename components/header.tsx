'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { links } from '@/lib/data'
import Link from 'next/link'
import { FaBars } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'
import { FaGithub } from 'react-icons/fa6'
import { FaLinkedin } from 'react-icons/fa'
import Image from 'next/image'
import logoWhite from '@/public/logo-white.svg'
import logoBlack from '@/public/logo-black.svg'

export const Header = () => {
    const [coloredNav, setColoredNav] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

    const handleMenuToggle = (): void => {
        try {
            setIsMenuOpen((prevState) => !prevState)
        } catch (error) {
            console.log('Error in menu toggle', error)
        }
    }

    // side effect for nav type
    useEffect(() => {
        const changeNavColor = () => setColoredNav(window.scrollY >= 10)
        window.addEventListener('scroll', changeNavColor)
        return () => window.removeEventListener('scroll', changeNavColor)
    }, [])

    // class changes with navbar type
    const logo = coloredNav ? logoBlack : logoWhite
    const navTextColorClass = coloredNav ? 'text-black' : 'text-white'

    return (
        <header className="relative z-[999] w-full">
            <motion.div
                className={`fixed left-1/2 w-full -translate-x-1/2 shadow-lg shadow-black/[0.03] backdrop-blur-md transition-colors duration-300 ${coloredNav ? 'bg-gradient-to-r from-pink-300 to-blue-300' : 'bg-white/5'}`}
                initial={{ y: -100, x: '-50%', opacity: 0 }}
                animate={{ y: 0, x: '-50%', opacity: 1 }}
                transition={{ type: 'just' }}
            >
                <nav className="container mx-auto flex w-full max-w-[900px] items-center justify-between gap-6 py-4">
                    <Image src={logo} alt="logo" className="w-full max-w-32" />

                    <ul className="hidden justify-center gap-8 sm:flex">
                        {links.map((link) => (
                            <li key={link.hash}>
                                <Link
                                    href={link.hash}
                                    className={`text-sm font-medium capitalize ${navTextColorClass}`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div
                        className={`flex w-full items-center justify-end gap-3 text-lg min-[420px]:w-fit ${navTextColorClass}`}
                    >
                        <a
                            target="_blank"
                            href="https://github.com/Sachintha-Prasad"
                            className="flex items-center justify-center rounded-full"
                        >
                            <FaGithub />
                        </a>
                        <a
                            target="_blank"
                            href="https://www.linkedin.com/in/sksprasad/"
                            className="flex items-center justify-center rounded-full"
                        >
                            <FaLinkedin />
                        </a>
                        <div
                            className={`cursor-pointer rounded-full text-lg sm:hidden ${navTextColorClass}`}
                            onClick={handleMenuToggle}
                        >
                            <FaBars className="block sm:hidden" />
                        </div>
                    </div>
                </nav>
            </motion.div>

            <nav
                className={`fixed inset-0 h-screen w-full bg-white/60 backdrop-blur-lg transition-transform duration-300 ease-in-out sm:hidden ${!isMenuOpen ? '-translate-x-full' : 'translate-x-0'}`}
            >
                <div
                    className="fixed right-6 top-6 cursor-pointer text-lg text-primary-dark-gray sm:hidden"
                    onClick={handleMenuToggle}
                >
                    <FaX className="block sm:hidden" />
                </div>
                <ul className="flex h-full flex-col items-center justify-center gap-4">
                    {links.map((link) => (
                        <li key={link.hash}>
                            <Link
                                href={link.hash}
                                className="text-sm font-medium capitalize"
                                onClick={handleMenuToggle}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}
