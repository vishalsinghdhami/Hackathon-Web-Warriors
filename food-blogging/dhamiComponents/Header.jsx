import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
    <div className='flex justify-between px-4 pt-4'>
        <h2>Dashboard</h2>
        <Link href="/dashboard/allrecipes">
        <button className="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded" >All Recipes</button>
        </Link>
        <Link href="/dashboard/allblogs">
        <button className="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded" >All Blogs</button>
        </Link>

        <h2>Welcome Back, Clint</h2>
    </div>
  )
}

export default Header