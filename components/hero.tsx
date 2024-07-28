'use client'

import React from 'react'
import profilePicture from '@/public/Profile Picture.png'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaArrowRightLong } from 'react-icons/fa6'
import { HiOutlineDocumentDownload } from 'react-icons/hi'

export const Hero = () => {
    return (
        <section className="custom-container">
            <div className="flex w-full flex-col items-start gap-8">
                {/* profile image */}
                <motion.div
                    className="relative rounded-full ring-4 ring-white/60"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'tween', duration: 0.3 }}
                >
                    <Image
                        src={profilePicture}
                        alt="s.k.s. prasad"
                        quality={100}
                        className="h-24 w-24 rounded-full"
                    />
                    <motion.span
                        className="absolute bottom-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-green-400"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                            type: 'spring',
                            stiffness: 125,
                            delay: 0.5,
                            duration: 0.8,
                        }}
                    >
                        <span className="absolute h-6 w-6 animate-ping rounded-full bg-emerald-200 opacity-80"></span>
                    </motion.span>
                </motion.div>

                {/* description */}
                <motion.div
                    className="flex w-full flex-col gap-4"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: 'just' }}
                >
                    <h1 className="bg-gradient-to-r from-pink-300 to-blue-300 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl lg:text-6xl">
                        Hello, I'm Sachintha Prasad
                    </h1>

                    <p className="text-gray-300 sm:text-lg">
                        I'm an enthusiastic{' '}
                        <span className="font-semibold text-white">
                            full-stack developer
                        </span>{' '}
                        with a strong foundation in both front-end and back-end
                        technologies. Currently I'm focusing on{' '}
                        <span className="font-semibold text-white">
                            Next.js
                        </span>{' '}
                        .
                    </p>
                </motion.div>

                {/* cta btns */}
                <motion.div
                    className="flex w-full flex-wrap items-center gap-3"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: 'just' }}
                >
                    <Link
                        href="#contact"
                        className="group flex w-full items-center justify-center gap-1 rounded-full bg-primary-dark-gray px-6 py-2 text-center text-lg text-white transition-transform duration-300 ease-in-out hover:scale-105 focus:scale-105 min-[420px]:w-fit"
                    >
                        Contact me{' '}
                        <FaArrowRightLong className="transition-transform duration-300 ease-in-out group-hover:translate-x-1.5 group-focus:translate-x-1.5" />
                    </Link>
                    <a
                        href="/S.K.S. Prasad.pdf"
                        download
                        className="group flex w-full items-center justify-center gap-1 rounded-full bg-gradient-to-r from-[#EC4899] to-[#F87174] px-6 py-2 text-center text-lg text-white transition-transform duration-300 ease-in-out hover:scale-105 focus:scale-105 min-[420px]:w-fit"
                    >
                        Download CV <HiOutlineDocumentDownload />
                    </a>
                </motion.div>
            </div>
        </section>
    )
}
