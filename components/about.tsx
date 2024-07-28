'use client'
import React from 'react'
import { motion } from 'framer-motion'

export const About = () => {
    return (
        <section id="about" className="custom-container">
            <div className="flex w-full flex-col items-start gap-8">
                <motion.h2
                    className="section-header"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: 'just', delay: 0.3 }}
                >
                    About me
                </motion.h2>
                <motion.p
                    className="text-gray-300 sm:text-lg"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: 'just', delay: 0.3 }}
                >
                    Hi, I'm Sachintha Prasad, an undergraduate in Computing and
                    Information Systems at Sabaragamuwa University of Sri Lanka.
                    I am passionate about full-stack development and possess a
                    strong ability to quickly learn and adapt to new technology
                    stacks. With excellent problem-solving and interpersonal
                    skills, I thrive under pressure and continuously seek
                    opportunities for professional growth and development. I
                    have experience in both front-end and back-end development,
                    with a keen interest in building dynamic web applications.
                    Currently, I am working on projects that involve React,
                    Tailwind CSS, and Spring Boot. Let's connect and explore
                    opportunities to build innovative solutions together.
                </motion.p>
            </div>
        </section>
    )
}
