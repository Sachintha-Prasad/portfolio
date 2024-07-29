'use client'

import React, { use } from 'react'
import { BsFillSendFill } from 'react-icons/bs'
import { FaUserAlt } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'
import { motion } from 'framer-motion'
import { sendEmail } from '@/actions/sendEmail'
import toast from 'react-hot-toast'
import { error } from 'console'

export const Contact = () => {
    return (
        <section id="contact" className="custom-container min-h-[800px]">
            <div className="flex w-full flex-col items-start gap-8">
                <motion.div
                    className="flex flex-col gap-1"
                    initial={{ y: 100, opacity: 0 }}
                    viewport={{ once: true }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: 'just' }}
                >
                    <h2 className="section-header">Contact Me</h2>
                    <p className="text-lg text-white">
                        Please contact me through{' '}
                        <a
                            href="mailto:prasadsachintha1231@gmail.com"
                            className="underline"
                        >
                            prasadsachintha1231@gmail.com
                        </a>{' '}
                        or throuh this form.
                    </p>
                </motion.div>
                <motion.form
                    className="flex w-full flex-col gap-6"
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'just' }}
                    action={async (formData) => {
                        await sendEmail(formData)
                        toast.success('Email sent successfully!')
                    }}
                >
                    <div>
                        <label
                            htmlFor="name"
                            className="mb-2 block font-medium text-white"
                        >
                            Name
                        </label>
                        <div className="relative">
                            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5 text-gray-400">
                                <FaUserAlt />
                            </div>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="block w-full rounded-lg border border-gray-300 bg-white/10 p-2.5 ps-10 text-white focus:border-indigo-400 focus:ring-indigo-400"
                                placeholder="Your name"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label
                            htmlFor="senderEmail"
                            className="mb-2 block font-medium text-white"
                        >
                            Your Email
                        </label>
                        <div className="relative">
                            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5 text-lg text-gray-400">
                                <IoMdMail />
                            </div>
                            <input
                                type="email"
                                id="senderEmail"
                                name="senderEmail"
                                className="block w-full rounded-lg border border-gray-300 bg-white/10 p-2.5 ps-10 text-white focus:border-indigo-400 focus:ring-indigo-400"
                                placeholder="yourname@example.com"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <div>
                            <label
                                htmlFor="message"
                                className="mb-2 block font-medium text-white"
                            >
                                Your message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                className="block w-full rounded-lg border border-gray-300 bg-white/10 p-2.5 text-white focus:border-indigo-400 focus:ring-indigo-400"
                                placeholder="Leave a message..."
                                required
                            ></textarea>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="group flex w-full items-center justify-center gap-2 self-end rounded-full bg-gradient-to-r from-[#EC4899] to-[#F87174] px-6 py-2 text-center text-lg text-white transition-transform duration-300 ease-in-out hover:scale-105 focus:scale-105 min-[420px]:w-fit"
                    >
                        Send Message{' '}
                        <BsFillSendFill className="group-hover:-translate-y-0.5 group-hover:translate-x-1" />
                    </button>
                </motion.form>
            </div>
        </section>
    )
}
