import React, { useContext } from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'
import {productContext} from '../Components/utils/Context'
import Loading from './Loading'
const Home = () => {
 const [products] =   useContext(productContext)
 console.log(products);

 if (!products || products.length === 0) {
    return <Loading />;
  }

 
  return ( 
    <>
    <Nav/>
    <div className="w-[85%] p-10 flex flex-wrap overflow-x-hidden overflow-y-auto  pt-[5%]  h-full">
    {products.map((products)=>{
      return  <Link to="/details/1" className="card flex mr-3 mb-3 p-3 justify-center items-center flex-col w-[18%] h-[30vh] border shadow rounded">
        <div className="hover:scale-110 w-full mb-5 h-[80%] bg-contain bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${products.image})`
          }}
        />
        <h1>{products.title}</h1>
      </Link>
    })}
  </div>
   
  </>
  
  );
}

export default Home
