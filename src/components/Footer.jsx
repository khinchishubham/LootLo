import React from 'react'
import { assets } from '../assets/assets/frontend_assets/assets'
function Footer() {
  return (
    <>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="w-32 mb-5" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
            blanditiis veniam praesentium magni in commodi ducimus iusto et
            repudiandae quas perspiciatis voluptas ratione est officia ex
            asperiores at, alias quod!
          </p>
        </div>

        <div>
          <p className="text-xl mb-5 font-medium">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl mb-5 font-medium">Get In Touch </p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91-1234567890</li>
            <li>123@gmail.com</li>
          </ul>
        </div>
          </div>
          <div>
              <hr />
              <p className='py-5 text-xl text-center'>Copyright 2025@ forever.com - All Right Reserved.</p>
          </div>
    </>
  );
}

export default Footer
