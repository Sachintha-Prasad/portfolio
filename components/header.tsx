'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { links } from '@/lib/data'
import Link from 'next/link'
import { FaBars } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'

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
        <header className="fixed z-[999] w-screen">
            <motion.div
                className="container absolute left-1/2 top-8 hidden max-w-[500px] rounded-full bg-white/60 p-4 px-8 shadow-lg shadow-black/[0.03] backdrop-blur-xl sm:block"
                initial={{ y: -100, x: '-50%', opacity: 0 }}
                animate={{ y: 0, x: '-50%', opacity: 1 }}
            >
                <nav className="w-full">
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
                </nav>
            </motion.div>

            <motion.div
                className="absolute right-[24px] top-8 z-[999] block rounded-full bg-white/60 p-4 shadow-lg shadow-black/[0.03] backdrop-blur-xl sm:hidden"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                onClick={handleMenuToggle}
            >
                {isMenuOpen ? (
                    <FaX className="block sm:hidden" />
                ) : (
                    <FaBars className="block sm:hidden" />
                )}
            </motion.div>

            <nav
                className={`h-screen w-full bg-white/60 backdrop-blur-lg transition-transform duration-300 ease-in-out sm:hidden ${!isMenuOpen ? 'translate-x-full' : 'translate-x-0'}`}
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
