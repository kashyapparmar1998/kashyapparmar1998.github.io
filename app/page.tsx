'use client'

import { Navigation } from '@/components/portfolio/navigation'
import { HeroSection } from '@/components/portfolio/hero-section'
import { AboutSection } from '@/components/portfolio/about-section'
import { SkillsSection } from '@/components/portfolio/skills-section'
import { ExperienceSection } from '@/components/portfolio/experience-section'
import { ProjectsSection } from '@/components/portfolio/projects-section'
import { ContactSection } from '@/components/portfolio/contact-section'
import { Footer } from '@/components/portfolio/footer'
import { useEffect } from 'react'

export default function Page() {
  useEffect(() => {
    // Load theme preference
    const theme = localStorage.getItem('theme')
    if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    }
  }, [])

  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}