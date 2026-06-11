import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { Projects } from '@/components/projects'
import { Services } from '@/components/services'
import { Process } from '@/components/process'
import { TechStack } from '@/components/tech-stack'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

// Testimonials queda fuera hasta tener quotes reales (ver TODO en el componente):
// publicar "Nombre Apellido" placeholder destruye la credibilidad del resto.
export default function Page() {
  return (
    <>
      <SiteNav />
      <main id="contenido" className="relative min-h-screen bg-background">
        <Hero />
        <Projects />
        <Services />
        <Process />
        <TechStack />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
