'use client'
import { skillsData } from '@/lib/data'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

export const Skills = () => {
    const fadeInAnimationVariants = {
        initial: {
            opacity: 0,
            y: 100,
        },
        animate: (index: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.05 * index,
            },
        }),
    }
    return (
        <section id="skills" className="custom-container">
            <div className="flex w-full flex-col items-start gap-8">
                <motion.h2
                    className="section-header"
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'just' }}
                >
                    My Skills
                </motion.h2>
                <div className="grid w-full grid-cols-3 gap-4 min-[400px]:grid-cols-6 md:grid-cols-8">
                    {skillsData.map((skill, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInAnimationVariants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            custom={index}
                        >
                            <Image
                                src={skill.icon}
                                alt={skill.skill}
                                quality={100}
                                width={48}
                                height={48}
                                className="w-full"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
