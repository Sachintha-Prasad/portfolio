import { About } from '@/components/about'
import { Hero } from '@/components/hero'
import { Projects } from '@/components/projects'
import { Skills } from '@/components/skills'

export default function Home() {
    return (
        <main>
            <Hero />
            <About />
            <Projects />
            <Skills />
        </main>
    )
}
