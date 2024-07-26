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
            <body className={`${inter.className} h-[5000px] bg-blue-950`}>
                <div className="absolute inset-0">
                    <div className="to-teal-[#F87174] absolute left-1/2 top-1/2 -z-[998] h-full w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-l from-[#EC4899] blur-[12rem]"></div>
                    <div className="absolute left-1/2 top-1/2 -z-[999] h-full w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6360ff] blur-[12rem]"></div>
                </div>
                <Header />
                {children}
            </body>
        </html>
    )
}
