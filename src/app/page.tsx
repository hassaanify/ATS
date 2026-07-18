'use client'

import { Navigation } from '@/components/layout/navigation'
import { HeroSection } from '@/components/sections/hero'
import { AboutSection } from '@/components/sections/about'
import { ExpertiseSection } from '@/components/sections/expertise'
import { ServicesSection } from '@/components/sections/services'
import { TechnologiesSection } from '@/components/sections/technologies'
import { IndustriesSection } from '@/components/sections/industries'
import { WhyATSSection } from '@/components/sections/why-ats'
import { LeadershipSection } from '@/components/sections/leadership'
import { ProcessWorkflowSection } from '@/components/sections/process'
import { ContactSection } from '@/components/sections/contact'
import { Footer } from '@/components/layout/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      <Navigation />
      
      <section id="hero">
        <HeroSection />
      </section>
      
      <section id="about">
        <AboutSection />
      </section>
      
      <section id="expertise">
        <ExpertiseSection />
      </section>
      
      <section id="services">
        <ServicesSection />
      </section>
      
      <section id="technologies">
        <TechnologiesSection />
      </section>
      
      <section id="industries">
        <IndustriesSection />
      </section>
      
      <section id="why-ats">
        <WhyATSSection />
      </section>
      
      <section id="leadership">
        <LeadershipSection />
      </section>
      
      <section id="process">
        <ProcessWorkflowSection />
      </section>
      
      <section id="contact">
        <ContactSection />
      </section>
      
      <Footer />
    </main>
  )
}