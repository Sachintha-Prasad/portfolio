import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Prasad | Full-stack dev',
    description:
        "I'm S.K.S. Prasad, and this is my personal portfolio website.",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.className} bg-primary-dark-gray h-[5000px]`}
            >
                <div className="absolute inset-0 -z-[990] scale-[0.8] opacity-60">
                    <div className="absolute left-1/2 top-[300px] -z-[998] h-full w-[60%] -translate-x-1/2 rounded-full bg-gradient-to-l from-[#EC4899] to-[#F87174] blur-[15rem]"></div>
                    <div className="absolute left-1/2 top-[300px] -z-[999] h-full w-[90%] -translate-x-1/2 rounded-full bg-[#6360ff] blur-[12rem]"></div>
                </div>
                {/* <Header /> */}
                {children}
            </body>
        </html>
    )
}
