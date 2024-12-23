import Hero from '@/components/hero'
import Services from '@/components/services'
import HowItWorks from '@/components/how-it-works'
import Testimonials from '@/components/testimonials'
import CTASection from '@/components/cta-section'

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <HowItWorks />
      <Testimonials />
      <CTASection />
    </div>
  )
}