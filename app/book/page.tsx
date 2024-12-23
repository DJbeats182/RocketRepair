import BookingForm from '@/components/booking/booking-form'
import BookingHeader from '@/components/booking/booking-header'

export default function BookPage() {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BookingHeader />
        <BookingForm />
      </div>
    </div>
  )
}