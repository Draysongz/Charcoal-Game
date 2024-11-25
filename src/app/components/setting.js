import Link from 'next/link'
import React from 'react'

const Settings = () => {
  return (
    <div className='mt-20 p-5 pmx:mt-32'>
        <div className='border-2 border-orange-600 p-5 py-2'>
          <div class="grid grid-cols-1 uppercase border-white">
            <Link href="">
              <div class="bg-gray-800 p-4 border-[0.5px] border-white hover:bg-orange-500">how to play</div>
            </Link>
            <Link href="/airdrop">
              <div class="bg-gray-800 p-4 border-[0.5px] border-white hover:bg-orange-500">airdrop</div>
            </Link>
            <Link href="">
              <div class="bg-gray-800 p-4 border-[0.5px] border-white hover:bg-orange-500">stat</div>
            </Link>
            <Link href="">
              <div class="bg-gray-800 p-4 border-[0.5px] border-white hover:bg-orange-500">skins</div>
            </Link>
          </div>
        </div>


    </div>
  )
}

export default Settings