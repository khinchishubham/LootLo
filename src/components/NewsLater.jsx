import React from 'react'

function NewsLater() {
    const onSubmitHandler = (event) => {
        event.preventDefault();
     }
    return (
    <div className='text-center'>
          <p className='text-2xl font-medium text-gray-800'>Subscribe and get 20% off</p>
          <p className='text-gray-400 mt-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum iusto iste alias reiciendis doloribus, aperiam quasi aliquam quibusdam repellendus eligendi!</p>
          <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 pl-3 '> 
              <input className="w-full sm:flex-1 border outline-none" type="email" placeholder='Enter your Email here' />
              <button type='submit' className='bg-black text-white text-xs px-2 py-1'>Submit</button>
          </form>
    </div>
  )
}

export default NewsLater
