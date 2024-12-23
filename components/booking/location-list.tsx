import { MapPin } from 'lucide-react'

const locations = [
  {
    id: 1,
    address: "North 1550 West",
    city: "Lindon",
    state: "UT",
    zip: "84042"
  },
  {
    id: 2,
    address: "East 1700 South",
    city: "Provo",
    state: "UT",
    zip: "84606"
  },
  {
    id: 3,
    address: "West Center Street",
    city: "Provo",
    state: "UT",
    zip: "84601"
  },
  {
    id: 4,
    address: "East 80 North",
    city: "American Fork",
    state: "UT",
    zip: "84003"
  },
  {
    id: 5,
    address: "S 470 E St",
    city: "Orem",
    state: "UT",
    zip: "84058"
  }
]

export default function LocationList() {
  return (
    <div className="space-y-4">
      {locations.map((location) => (
        <div
          key={location.id}
          className="flex items-center p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
        >
          <MapPin className="text-blue-600 mr-4" size={24} />
          <div>
            <p className="font-medium text-gray-900">
              {location.address}
            </p>
            <p className="text-gray-500">
              {location.city}, {location.state} {location.zip}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}