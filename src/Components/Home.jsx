import React, { useContext, useEffect } from 'react'
import Nav from './Nav'
import { data, Link, useLocation } from 'react-router-dom'
import {productContext} from '../Components/utils/Context'
import Loading from './Loading'
import axios from 'axios'
const Home = () => {
 const [products] =   useContext(productContext)
 console.log(products);

 if (!products || products.length === 0) {
    return <Loading />;
  }

 
const {search} = useLocation()
const category  = decodeURIComponent(search.split('=')[1])

let filterproducts = products && products;

 const getproductscategory = async ()=>{
  try {
    const {data} = await axios.get(`/products/category/${category}`)
    filterproducts = data
  } catch (error) {
    console.log(error)
  }
 }

 useEffect(()=>{
  if (category .length > 0) getproductscategory()
 }, [category])
  return ( 
    <>
    <Nav/>
    <div className="w-full p-5 flex flex-wrap overflow-x-hidden overflow-y-auto pt-[5%] gap-4">
  {products.map((products) => {
    return (
      <Link
        key={products.id}
        to={`/details/${products.id}`}
        className="card flex flex-col items-center justify-between p-3 w-[100%] sm:w-[48%] md:w-[30%] lg:w-[18%] h-auto border shadow rounded"
      >
        <div
          className="hover:scale-110 transition-transform duration-300 w-full aspect-square bg-contain bg-center bg-no-repeat mb-5"
          style={{
            backgroundImage: `url(${products.image})`,
          }}
        />
        <h1 className="text-sm md:text-base text-center">{products.title}</h1>
      </Link>
    );
  })}
</div>

   
  </>
  
  );
}

export default Home
