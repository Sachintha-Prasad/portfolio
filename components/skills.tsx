import { skillsData } from '@/lib/data'
import Image from 'next/image'
import React from 'react'

export const Skills = () => {
    return (
        <section id="skills" className="custom-container">
            <div className="flex w-full flex-col items-start gap-8">
                <h2 className="section-header">My Skills</h2>
                <div className="grid w-full grid-cols-3 gap-4 min-[400px]:grid-cols-6 md:grid-cols-8">
                    {skillsData.map((skill, index) => (
                        <Image
                            src={skill.icon}
                            key={index}
                            alt={skill.skill}
                            quality={100}
                            width={150}
                            height={150}
                            className="w-full max-w-20"
                        />
                    ))}
                    <br />
                </div>
            </div>
        </section>
    )
}
