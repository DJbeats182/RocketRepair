import { Card } from '@/components/ui/card'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: "Sarah",
    location: "Vineyard",
    text: "Amazing service! They came to my office and fixed my windshield during my lunch break. Couldn't be more convenient!",
    rating: 5,
  },
  {
    name: "Michael",
    location: "Utah County",
    text: "Professional, quick, and high-quality work. The technician explained everything clearly and the repair looks perfect.",
    rating: 5,
  },
  {
    name: "Emily",
    location: "Provo",
    text: "Saved me so much time with their mobile service. The booking process was simple and they arrived right on schedule.",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">What Our Customers Say</h2>
          <p className="text-xl text-gray-600">Real experiences from satisfied customers</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border border-gray-100 shadow-lg p-8 transform transition-all duration-300 hover:translate-y-[-4px]">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">{testimonial.text}</p>
              <div>
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.location}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}