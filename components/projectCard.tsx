import { projectsData } from '@/lib/data'
import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { FiExternalLink } from 'react-icons/fi'

type ProjectProps = (typeof projectsData)[number]

export const ProjecCard = ({
    title,
    description,
    tags,
    imageUrl,
    gitLink,
    linkedinLink,
    liveLink,
}: ProjectProps) => {
    return (
        <article className="group flex min-h-[350px] w-full flex-col gap-3 overflow-hidden rounded-lg bg-white/10 outline-none">
            <div className="max-h-[200px] overflow-hidden">
                <Image
                    src={imageUrl}
                    alt={title}
                    className="custom-transition w-full object-fill group-hover:scale-105"
                />
            </div>
            <div className="flex flex-col gap-2 p-4">
                <h1 className="text-2xl font-semibold text-white sm:text-3xl">
                    {title}
                </h1>
                <p className="text-white">{description}</p>
                <div className="flex flex-wrap items-center justify-start gap-3">
                    {tags.map((item, index) => (
                        <div
                            key={index}
                            className="min-w-[100px] rounded bg-gray-400/30 px-3 py-1 text-center text-[13px] font-medium text-white"
                        >
                            {item}
                        </div>
                    ))}
                </div>
                <div className="mt-4 flex gap-6">
                    <div className="flex items-center gap-1 text-white">
                        <a href={gitLink} target="_blank">
                            Github
                        </a>
                        <FiExternalLink />
                    </div>
                    {linkedinLink.length !== 0 && (
                        <div className="flex items-center gap-1 text-white">
                            <a href={linkedinLink} target="_blank">
                                Linkedin
                            </a>
                            <FiExternalLink />
                        </div>
                    )}
                    {liveLink.length !== 0 && (
                        <div className="flex items-center gap-1 text-white">
                            <a href={liveLink} target="_blank">
                                Live preview
                            </a>
                            <FiExternalLink />
                        </div>
                    )}
                </div>
            </div>
        </article>
    )
}
