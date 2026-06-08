import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { Credibility } from '@/components/credibility'
import { Projects } from '@/components/projects'
import { Services } from '@/components/services'
import { Process } from '@/components/process'
import { TechStack } from '@/components/tech-stack'
import { Testimonials } from '@/components/testimonials'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <main className="relative min-h-screen bg-background">
      <SiteNav />
      <Hero />
      <Credibility />
      <Projects />
      <Services />
      <Process />
      <TechStack />
      <Testimonials />
      <Contact />
      <SiteFooter />
    </main>
  )
}
