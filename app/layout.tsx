import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'
import { SpeedInsights } from '@vercel/speed-insights/next'

const rubik = Rubik({
    weight: ['400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
})

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
                className={`${rubik.className} h-[4000px] bg-primary-dark-gray`}
            >
                <div className="fixed inset-0 -z-[990] scale-[0.7] opacity-60">
                    <div className="absolute left-1/2 top-[200px] -z-[998] h-[300px] w-[60%] -translate-x-1/2 rounded-full bg-gradient-to-l from-[#EC4899] to-[#F87174] blur-[15rem]"></div>
                    <div className="absolute left-1/2 top-[200px] -z-[999] h-[300px] w-[90%] -translate-x-1/2 rounded-full bg-[#6360ff] blur-[12rem]"></div>
                </div>
                <Header />
                {children}
                <SpeedInsights />
            </body>
        </html>
    )
}
