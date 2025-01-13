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
<div className="w-full sm:w-[90%] md:w-[70%] flex flex-col md:flex-row gap-5 items-center m-auto p-5">
  <img 
    className="w-full md:w-[40%] h-auto object-contain rounded" 
    src={`${products.image}`} 
    alt="" 
  />
  <div className="font-semibold w-full md:w-[60%] content text-center md:text-left">
    <h1 className="mb-2 text-xl md:text-3xl font-semibold">{products.title}</h1>
    <h1 className="text-base md:text-xl mb-2 text-zinc-400">{products.category}</h1>
    <h2 className="text-red-400 mb-2 text-lg md:text-xl">₹109.95</h2>
    <p className="mb-5 text-sm md:text-base">{products.description}</p>
    <div className="flex justify-center md:justify-start gap-3">
      <Link className="py-2 px-4 border rounded border-blue-300">Edit</Link>
      <Link className="py-2 px-4 border rounded border-red-300">Delete</Link>
    </div>
  </div>
</div>

  )
}

export default Details
