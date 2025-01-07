import React, { useContext, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { productContext } from './utils/Context'
import axios from '../Components/utils/axios'
import { useState } from 'react'
import Loading from './Loading'
 
const Details = () => {
    const [products, setproducts] = useState(null)
    const {id} = useParams();
    console.log(id)
    const getSingleproduct = async ()=>{
        try {
           const {data} = await axios.get(`/products/${id}`)
           setproducts(data);
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(()=>{
getSingleproduct()
    },[])

    if (!products || products.length === 0) {
        return <Loading />;
      }
  return (
    <div className='w-[70%] flex gap-10 items-center    h-full   m-auto p-[10%]'>
<img className='h-[80%] w-[40%] object-cover' src={`${products.image}`} alt="" />

<div className="font-semibold w-[90%]  content">
    <h1 className='mb-2 text-3xl font-semibold'>{products.title}</h1>
    <h1 className='text-xl mb-2 text-zinc-400'>{products.category}</h1>
    <h2 className='text-red-400 mb-2'>₹109.95</h2>
    <p className='mb-10'>{products.description}</p>
    
    <Link className=' mr-5 py-2 px-5 border rounded border-blue-300'>Edit</Link>
    <Link className='py-2 px-5 border rounded border-red-300'>Delete</Link>

    
</div>

    </div>
  )
}

export default Details
