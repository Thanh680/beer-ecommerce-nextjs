import Link from 'next/link'
import React from 'react'

function Navbar() { 
  return (
    <nav className='w-full flex p-4'>
        <div className='relative flex h-16 items-center justify-center w-full gap-20 '>
            <Link href="/">
                <p className='text-3xl font-bold'>7SEAS</p>
            </Link>
            <ul className="flex gap-10 text-xl">
                <Link href="/" className='block'>
                    <li>Home</li>
                </Link>
                <Link href="/products"> 
                    <li>Products</li>
                </Link>
                <Link href="/about"> 
                    <li>About</li>
                </Link>
                <Link href="/contact"> 
                    <li>Contact</li>
                </Link>
                <Link href="/contact"> 
                    <li>Cart</li>
                </Link>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
