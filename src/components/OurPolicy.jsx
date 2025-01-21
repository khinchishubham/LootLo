import React from 'react'
import {assets} from '../assets/assets/frontend_assets/assets'

function OurPolicy() {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-10">
      <div>
              <img src={assets.exchange_icon} alt="" className='w-12 m-auto mb-5' />
              <p className='font-semibold'>Easy Exchange</p>
              <p className='text-gray-600'>We provide hassle free exchange</p>
          </div>
          
      <div>
              <img src={assets.quality_icon} alt="" className='w-12 mb-5 m-auto' />
              <p className='font-semibold'>Return Policy</p>
              <p className='text-gray-600'>We provide 7 days free return policy</p>
          </div>
          
      <div>
              <img src={assets.support_img} alt="" className='w-12 mb-5 m-auto' />
              <p className='font-semibold'>Customer support</p>
              <p className='text-gray-600'>We provide 24x7 Customer support</p>
          </div>
          
    </div>
  );
}

export default OurPolicy
