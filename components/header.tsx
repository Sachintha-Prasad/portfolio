'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { links } from '@/lib/data'
import Link from 'next/link'
import { FaBars } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'
import { FaGithub } from 'react-icons/fa6'
import { FaLinkedinIn } from 'react-icons/fa6'

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

    const handleMenuToggle = (): void => {
        try {
            setIsMenuOpen((prevState) => !prevState)
        } catch (error) {
            console.log('Error in menu toggle', error)
        }
    }

    return (
        <header className="fixed z-[999] w-full">
            <motion.div
                className="container absolute left-1/2 top-8 hidden max-w-[600px] rounded-full bg-white/60 p-4 px-8 shadow-lg shadow-black/[0.03] backdrop-blur-xl sm:block"
                initial={{ y: -100, x: '-50%', opacity: 0 }}
                animate={{ y: 0, x: '-50%', opacity: 1 }}
                transition={{ type: 'just' }}
            >
                <nav className="flex w-full items-center justify-between gap-6">
                    <ul className="flex justify-center gap-8">
                        {links.map((link) => (
                            <li key={link.hash}>
                                <Link
                                    href={link.hash}
                                    className="text-sm font-medium capitalize"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="flex w-full items-center justify-center gap-3 min-[420px]:w-fit">
                        <a
                            target="_blank"
                            href="https://github.com/Sachintha-Prasad"
                            className="bg-primary-dark-gray flex items-center justify-center rounded-full p-2 text-lg text-white"
                        >
                            <FaGithub />
                        </a>
                        <a
                            target="_blank"
                            href="https://www.linkedin.com/in/sksprasad/"
                            className="bg-primary-dark-gray flex items-center justify-center rounded-full p-2 text-lg text-white"
                        >
                            <FaLinkedinIn />
                        </a>
                    </div>
                </nav>
            </motion.div>

            <motion.div
                className="absolute right-[24px] top-8 z-[999] flex items-center gap-3"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
            >
                <div className="flex w-full items-center justify-center gap-3 min-[420px]:w-fit sm:hidden">
                    <a
                        target="_blank"
                        href="https://github.com/Sachintha-Prasad"
                        className="text-primary-dark-gray flex items-center justify-center rounded-full bg-white/60 p-2 text-lg"
                    >
                        <FaGithub />
                    </a>
                    <a
                        target="_blank"
                        href="https://www.linkedin.com/in/sksprasad/"
                        className="text-primary-dark-gray flex items-center justify-center rounded-full bg-white/60 p-2 text-lg"
                    >
                        <FaLinkedinIn />
                    </a>
                </div>
                <div
                    className="text-primary-dark-gray cursor-pointer rounded-full bg-white/60 p-2 text-lg shadow-lg shadow-black/[0.03] backdrop-blur-xl sm:hidden"
                    onClick={handleMenuToggle}
                >
                    {isMenuOpen ? (
                        <FaX className="block sm:hidden" />
                    ) : (
                        <FaBars className="block sm:hidden" />
                    )}
                </div>
            </motion.div>

            <nav
                className={`absolute h-screen w-full bg-white/60 backdrop-blur-lg transition-transform duration-300 ease-in-out sm:hidden ${!isMenuOpen ? '-translate-x-full' : 'translate-x-0'}`}
            >
                <ul className="flex h-full flex-col items-center justify-center gap-4">
                    {links.map((link) => (
                        <li key={link.hash}>
                            <Link
                                href={link.hash}
                                className="text-sm font-medium capitalize"
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
