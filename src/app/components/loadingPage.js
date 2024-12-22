import React from 'react'



const LoadingPage = () => {
  return (
    <div id='loading-page' role='status' className='bg-black relative'>
        <div className='absolute text-shadow-charcoal text-center uppercase font-extrabold text-[50px] top-64 pmx:top-96 spm:top-[350px]'>
            <p className='text-shadow-charcoal '>charcoal</p>
            <p className='text-shadow-charcoal -mt-5'>game</p>
        </div>
    </div>
  )
}

export default LoadingPage