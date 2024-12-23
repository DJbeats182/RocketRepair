import { Card } from '@/components/ui/card'
import { Shield, Clock, Wrench, BadgeCheck } from 'lucide-react'

const services = [
  {
    title: "Windshield Chip Repair",
    description: "Quick and effective repair for chips and small cracks before they spread",
    icon: Shield,
  },
  {
    title: "Same Day Service",
    description: "Fast response times with most repairs completed within an hour",
    icon: Clock,
  },
  {
    title: "Mobile Service",
    description: "We come to your location - home, office, or anywhere convenient",
    icon: Wrench,
  },
  {
    title: "Insurance Approved",
    description: "We work with all major insurance companies for hassle-free claims",
    icon: BadgeCheck,
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Services</h2>
          <p className="text-xl text-gray-600">Professional windshield repair services at your convenience</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="bg-white border border-gray-100 shadow-lg p-8 transform transition-all duration-300 hover:translate-y-[-4px]"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 transform transition-all duration-300 group-hover:scale-110">
                  <service.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}