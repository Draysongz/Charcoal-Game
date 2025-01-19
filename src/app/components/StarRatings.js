import { Star } from 'lucide-react'

export function StarRating({ rating, maxRating }) {
  return (
    <div className="flex">
      {[...Array(maxRating)].map((_, index) => (
        <Star
          key={index}
          className={`w-4 h-4 ${
            index < rating ? "text-white fill-white" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  )
}

