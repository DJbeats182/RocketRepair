import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <div className="relative gradient-bg text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Mobile Windshield Repair
            <br />
            That Comes to You
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Professional windshield repair service at your convenience.
            <br />
            We come to your home or office - anywhere in the city!
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/book">
              <Button size="lg" variant="secondary" className="group">
                Book Now 
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </Link>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
    </div>
  )
}