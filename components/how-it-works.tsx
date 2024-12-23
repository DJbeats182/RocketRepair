import { Card } from '@/components/ui/card'
import { PhoneCall, Calendar, Car, CheckCircle } from 'lucide-react'

const steps = [
  {
    title: "1. Book Appointment",
    description: "Schedule a convenient time for your repair through our online booking system or phone",
    icon: PhoneCall,
  },
  {
    title: "2. Choose Location",
    description: "Select where you want us to perform the repair - home, office, or anywhere else",
    icon: Calendar,
  },
  {
    title: "3. We Come to You",
    description: "Our mobile repair unit arrives at your location with all necessary equipment",
    icon: Car,
  },
  {
    title: "4. Quick Repair",
    description: "Professional repair completed in about 30 minutes for most windshield damage",
    icon: CheckCircle,
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">How It Works</h2>
          <p className="text-xl text-gray-600">Simple steps to get your windshield repaired</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card 
              key={index}
              className="bg-white border border-gray-100 shadow-lg p-8 transform transition-all duration-300 hover:translate-y-[-4px]"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 transform transition-all duration-300 group-hover:scale-110">
                  <step.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}