import React from 'react'
import {useState} from 'react'
import { assets } from '../assets/assets/frontend_assets/assets.js'
import {NavLink,Link} from 'react-router-dom'
function Navbar() {
  const [visible, setVisible] = useState(false);
    return (
      <>
        <div className="  flex items-center justify-between py-5 font-medium">
       <Link to='/'><img src={assets.logo} className="w-36" alt="" />
           </Link>
          <ul className="hidden sm:flex gap-5 text-gray-700">
            <NavLink to="/" className="flex flex-col items-center gap-1">
              <p>Home</p>
              <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
            </NavLink>

            <NavLink to="/collection" className="flex flex-col items-center gap-1">
              <p>Collection</p>
              <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
            </NavLink>

            <NavLink to="/contact" className="flex flex-col items-center gap-1">
              <p>Contact</p>
              <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
            </NavLink>

            <NavLink to="/about" className="flex flex-col items-center gap-1">
              <p>About</p>
              <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
            </NavLink>
          </ul>
          
          <div className='flex items-center gap-6'>
            <img src={assets.search_icon} className='w-6 cursor-pointer' />
            
            <div className='group relative'>
              <img src={assets.profile_icon} className='w-5 cursor-pointer' />
              <div className='group-hover:flex hidden   right-0 pt-4 absolute'>
                <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                  <p className='cursor-pointer  hover:text-black'>Profile</p>
                  <p className='cursor-pointer hover:text-black'>Orders</p>
                  <p className='cursor-pointer hover:text-black'>Logout</p>

                </div>

              </div>
            </div>

            <Link to='/cart' className='relative'>
              <img src={ assets.cart_icon} className='w-6' />
            <p className='right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white  aspect-square rounded-full text-[-10px] absolute'>10</p>
            </Link>

            <img onClick={()=>setVisible(true)} src={assets.menu_icon} className='w-6 sm:hidden cursor-pointer' />
           
          </div>
         
          <div className={`absolute top-0 right-0 bottom-0 overflow-hidden transition-all bg-white  ${visible ? 'w-full' : 'w-0'}`}>
          

            <div  className='flex items-center gap-4 p-3'>
              <img onClick={()=>setVisible(false)} className='h-4 rotate-180 cursor-pointer' src={assets.dropdown_icon} />
              <p onClick={()=>setVisible(false)} className='cursor-pointer'>Back</p>

            </div>
            <div className='flex flex-col'>
              
           <NavLink  onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/' >Home</NavLink>
              <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border'to='/collection' >Collection</NavLink>
            <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border'to='/contact' >Contact</NavLink>
            <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border'to='/about'>About</NavLink>
             </div>
         
                
            </div>

        </div>
      </>
    );
}

export default Navbar
