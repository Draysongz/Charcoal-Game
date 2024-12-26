import { StarRating } from "./StarRatings"


export function CreatureCard({ rating, text, image, texting, background, className }) {
  const getButtonText = (rating) => {
    if (rating === 0) return "AVAILABLE FOR PLAY"
    if (rating < 3) return "RANK UP"
    return "OWNED"
  }

  return (
    <div
      className="rounded-xl p-3 w-[170px] pmx:w-[190px]"
      style={{ background: background }}
    >
      <div className="relative">
        <div className="flex justify-center border px-4 mx-auto w-8/12 bg-blue-400 border-transparent py-1">
          <StarRating rating={rating} maxRating={3} />
        </div>
        <img
          src={image}
          alt="metal creature"
          className="rounded-md h-[98px] w-[150px] pmx:h-[130px] pmx:w-[170px] spm:h-[130px] spm:w-[150px] Imgs"
        />
      </div>
      <div className="text-center text-orange-600 font-bold uppercase pmx:text-[20px] pmx:mb-1 spm:text-[20px] spm:mb-1 textH">
        <p>{text}</p>
        <p className="-mt-[8px]">{texting}</p>
      </div>
      <div className="text-center uppercase bg-gray-500 bg-opacity-45 w-[95px] py-[2px] rounded-full text-[9px] ms-6 mb-2 pmx:ms-[25px] pmx:text-[12px] pmx:w-[120px] spm:ms-[16px] spm:w-[120px] spm:text-[12px] textT">
        lvl 10 required
      </div>
      <button
        variant="secondary"
        size="md"
        className={`mb-2 py-1 bg-slate-900 rounded-sm border-transparent text-xs font-semibold border w-8/12 mx-auto flex justify-center ${className}`}
      >
        {getButtonText(rating)}
      </button>
      <div className="flex uppercase text-[11px] pmx:text-[13px] font-bold border-t-2 border-white textB">
        <span className="text-orange-600 me-5 mt-1">pwr 1/ 10</span>
        <span className="border-e-2 border-white me-5 h-4 mt-1"></span>
        <img
          src="/images/targetNB.png"
          alt="target"
          className="w-5 h-5 mt-1 me-1"
        />
        <span className="mt-[5px] ">20k</span>
      </div>
    </div>
  )
}

