'use client'
import React from 'react'
import { projectsData } from '@/lib/data'
import { ProjecCard } from './projectCard'
import { motion } from 'framer-motion'

export const Projects = () => {
    const fadeInAnimationVariants = {
        initial: {
            opacity: 0,
            y: 100,
        },
        animate: (index: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                type: 'just',
                delay: 0.08 * index,
            },
        }),
    }

    return (
        <section id="projects" className="custom-container">
            <div className="flex w-full flex-col items-start gap-8">
                <motion.h2
                    className="section-header"
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'just' }}
                >
                    My Projects
                </motion.h2>
                <div className="grid w-full gap-x-6 gap-y-4 md:grid-cols-2">
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInAnimationVariants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            custom={index}
                            className="min-h-[350px]"
                        >
                            <ProjecCard {...project} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
