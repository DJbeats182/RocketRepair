import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="py-24 gradient-bg text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Fix Your Windshield?
        </h2>
        <p className="text-xl mb-8 text-blue-100">
          Book your mobile repair service now and get back on the road safely
        </p>
        <Link href="/book">
          <Button size="lg" variant="secondary" className="group">
            Schedule Repair 
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Button>
        </Link>
      </div>
    </section>
  )
}