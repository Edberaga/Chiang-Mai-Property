import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import logo from '../assets/images/logo.png'

export default function Header() {
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location.pathname);

    function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }
    
  return (
  <div className="bg-white border-b shadow-sm sticky top-0 z-40">
  <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
    <div>
      <img 
      src={logo} 
      alt="Chiang Mai Property Invest logo"
      className='w-[240px] cursor-pointer'
      onClick={() => navigate("/profile")}
      />
    </div>

    <div>
      <ul className="flex space-x-5">
        <li
          className={`
          cursor-pointer p-6 text-sm font-semibold border-b-[3px] ${pathMatchRoute("/") 
          ? "text-black border-b-red-500" 
          : "text-gray-400 border-b-transparent"}
          `}
          onClick={() => navigate("/")}
        >
          Home
        </li>
        <li
          className={`
          cursor-pointer p-6 text-sm font-semibold border-b-[3px] ${pathMatchRoute("/offers") 
          ? "text-black border-b-red-500" 
          : "text-gray-400 border-b-transparent"}
          `}
          onClick={() => navigate("/offers")}
        >
          Offers
        </li>
        <li
          className={`
          cursor-pointer p-6 text-sm font-semibold border-b-[3px] ${pathMatchRoute("/signin") || pathMatchRoute("/profile")
          ? "text-black border-b-red-500" 
          : "text-gray-400 border-b-transparent"}
          `}
          onClick={() => navigate("/signin")}
        >
          Sign in
        </li>
      </ul>
    </div>
  </header>
  </div>
  )
}