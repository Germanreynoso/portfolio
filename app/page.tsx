import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { Stats } from '@/components/stats'
import { Projects } from '@/components/projects'
import { Services } from '@/components/services'
import { TechStack } from '@/components/tech-stack'
import { Experience } from '@/components/experience'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <main className="relative min-h-screen bg-background">
      <SiteNav />
      <Hero />
      <Stats />
      <Projects />
      <Services />
      <TechStack />
      <Experience />
      <Contact />
      <SiteFooter />
    </main>
  )
}
