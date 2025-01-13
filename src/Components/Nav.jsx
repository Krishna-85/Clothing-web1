import React, { useContext } from 'react'
import { productContext } from './utils/Context'
import { Link } from 'react-router-dom'

const Nav = () => {
   const [products] =   useContext(productContext)
  
   let distinct_category = products && products.reduce((acc, cv)=>[...acc, cv.category],[])
   distinct_category = [...new Set(distinct_category)]
   console.log(distinct_category);
   
   const color = () =>{
    return `rgba(${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()})`
   }

  return (
    <nav className="w-full sm:w-[15%] h-auto sm:h-full flex bg-zinc-100 flex-col items-center pt-5">
    <a className="py-3 px-5 border rounded border-blue-200" href="/create">
      Add Items
    </a>
    <hr className="w-[80%] my-3" />
    <h1 className="text-2xl mb-3 w-[80%] text-center sm:text-left">Category Filter</h1>
    <div className="w-[80%]">
      {distinct_category.map((c, i) => (
        <Link key={i} to={`/?category=${c}`} className="flex items-center mb-3">
          <span
            style={{ backgroundColor: color() }}
            className="rounded-full mr-2 bg-blue-300 w-[16px] h-[16px]"
          />
          {c}
        </Link>
      ))}
    </div>
  </nav>
  
  )
}

export default Nav
