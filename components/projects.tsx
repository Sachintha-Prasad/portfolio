import React from 'react'
import { projectsData } from '@/lib/data'
import { ProjecCard } from './projectCard'

export const Projects = () => {
    return (
        <section id="projects" className="custom-container">
            <div className="flex w-full flex-col items-start gap-8">
                <h2 className="section-header">My projects</h2>

                <div className="grid w-full gap-x-6 gap-y-4 md:grid-cols-2">
                    {projectsData.map((project, index) => (
                        <React.Fragment key={index}>
                            <ProjecCard {...project} />
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    )
}
