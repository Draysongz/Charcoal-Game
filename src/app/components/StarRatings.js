import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

export function StarRating({ rating, maxRating }) {
  return (
    <div className="flex justify-center gap-1 text-white mb-1">
      {/* {[...Array(maxRating)].map((_, index) => (
        <FaStar
          key={index}
          className={`w-4 h-4 ${
            index < rating ? "text-white fill-white" : "text-gray-300"
          }`}
        />
      ))} */}

      <FaStar />
      <FaStar />
      <FaRegStar />
    </div>
  )
}