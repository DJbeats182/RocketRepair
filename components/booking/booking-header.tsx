import Link from 'next/link'
import Logo from '../logo'

export default function BookingHeader() {
  return (
    <div className="text-center mb-12">
      <Link href="/" className="inline-block">
        <div className="relative w-[200px] h-[50px] mx-auto mb-8">
          <Logo />
        </div>
      </Link>
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Book an Appointment</h1>
      <p className="text-lg text-gray-600">
        Schedule your mobile windshield repair service at your preferred location
      </p>
    </div>
  )
}