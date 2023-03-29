// import { useState } from 'react'
import { FiMenu, FiSearch } from 'react-icons/fi'
// import { NavLink } from 'react-router-dom'

export default function Navbar() {
    
  return (
    <div className="flex justify-between px-4 py-3 bg-gray-50 shadow-md sticky top-0 left-0 right-0 z-50">
        <div className="bg-bgcol text-white h-[2.5rem] w-[2.5rem] flex items-center justify-center rounded-xl p-1 text-2xl">
            <FiMenu />
        </div>
        <div className="border border-bgcol h-[2.5rem] w-[2.5rem] flex items-center justify-center rounded-xl text-2xl">
            <FiSearch />
        </div>
    </div>
  )
}

