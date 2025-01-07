import React from 'react'
import { Link } from 'react-router-dom'

const Details = () => {
  return (
    <div className='w-[70%] flex gap-10 items-center    h-full   m-auto p-[10%]'>
<img className='h-[80%] w-[40%] object-cover' src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" />

<div className="font-semibold w-[90%]  content">
    <h1 className='mb-2 text-3xl font-semibold'>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h1>
    <h1 className='text-xl mb-2 text-zinc-400'>Men's clothing</h1>
    <h2 className='text-red-400 mb-2'>₹109.95</h2>
    <p className='mb-10'>Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</p>
    
    <Link className=' mr-5 py-2 px-5 border rounded border-blue-300'>Edit</Link>
    <Link className='py-2 px-5 border rounded border-red-300'>Delete</Link>

    
</div>

    </div>
  )
}

export default Details
