import React from 'react'

const PlayAll = () => {
  return (
    <div className='flex mt-4 space-x-3
    spm:space-x-4 p4m:space-x-5'>
        <div className='rounded-xl p-3 w-[170px] pmx:w-[190px] spm:w-[175px]' style={{ background: "linear-gradient(to bottom, #6AE5F3, #1D4D53)" }}>
            <div className=''>
                <img src='/images/WaterFairy.png' alt='water fairy' className='rounded-md h-[95px] w-[150px] pmx:h-[130px] pmx:w-[170px] spm:h-[130px] spm:w-[170px]' />
            </div>
        <div className='text-center text-orange-600 font-bold uppercase pmx:text-[20px] pmx:mb-1 spm:text-[20px] spm:mb-1'>
            <p>water</p>
            <p className='-mt-[8px]'>creature</p>
        </div>
        <div className='text-center uppercase bg-gray-500 bg-opacity-45 w-[60px] py-[2px] rounded-full text-[9px] ms-10 mb-2 pmx:ms-[52px] pmx:text-[12px] spm:ms-[44px] spm:text-[12px]'>
            owned
        </div>
        <div className='flex uppercase text-[11px] pmx:text-[13px] font-bold border-t-2 border-white'>
            <span className='text-orange-600 me-5 mt-1'>pwr 1/ 10</span> 
                <span className='border-e-2 border-white me-5 h-4 mt-1'></span>
                <img src='/images/targetNB.png' alt='target' className='w-5 h-5 mt-1 me-1' />
            <span className='mt-[5px] '>
                20k
            </span> 
        </div>
        </div>

        <div className='rounded-xl p-3 w-[170px] pmx:w-[190px] spm:w-[175px]' style={{ background: "linear-gradient(to bottom, #6AE5F3, #1D4D53)" }}>
              <div className='rounded-md'>
                  <img src='/images/wolf.png' alt='wolf' className='rounded-md h-[95px] pmx:h-[130px] w-[150px] pmx:w-[170px] spm:h-[130px] spm:w-[170px]' />
              </div>
        <div className='text-center text-orange-600 font-bold uppercase pmx:text-[20px] pmx:mb-1 spm:text-[20px] spm:mb-1'>
            <p>ice</p>
            <p className='-mt-[8px]'>creature</p>
        </div>
        <div className='text-center uppercase bg-gray-500 bg-opacity-45 w-[95px] py-[2px] rounded-full text-[9px] ms-6 mb-2 pmx:ms-[25px] pmx:text-[12px] pmx:w-[120px] spm:ms-[16px] spm:w-[120px] spm:text-[12px]'>
            lvl 10 required
        </div>
        <div className='flex uppercase text-[11px] pmx:text-[13px] font-bold border-t-2 border-white'>
            <span className='text-orange-600 me-5 mt-1'>pwr 1/ 10</span> 
                <span className='border-e-2 border-white me-5 h-4 mt-1'></span>
                <img src='/images/targetNB.png' alt='target' className='w-5 h-5 mt-1 me-1' />
            <span className='mt-[5px] '>
                20k
            </span>
          </div>
        </div>
    </div>
  )
}

export default PlayAll