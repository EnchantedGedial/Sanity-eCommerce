import React from 'react'
// This import is for importing image builder to thiss component
import { urlFor } from '../../backend/Lib/client'
import Link from 'next/link'
const Products = ({product}) => {
  return (
    <>
    <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">

  
        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">

          {/* This syntax must be fallowed to fetch and display image form sanity backend */}
          {/* src={urlFor(product.image)} */}
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={urlFor(product.image && product.image[0])}/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{product.name}</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">{product.details}</h2>
          <p class="mt-1">${product.price}</p>
          <Link  href={`/product/${product.slug}`}>
       
       <button className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">Buy Now</button>
       </Link>
       {   console.log(product.price)}
        </div>
      </div>
   
     
      
    </div>
  </div>
</section>
      
    </>
  )
}

export default Products
