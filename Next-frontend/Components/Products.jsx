import React from 'react'
import { urlFor } from '../../Sanity-backend/Lib/client'
import Link from 'next/link'
const Products = ({product}) => {
  return (

            <>

                    <section class="text-gray-600 body-font">
                        <div class="container px-5 py-24 m-auto  ">
                          <div class="flex flex-wrap -m-4 content-center items-center">

                                  {product?.map((items)=>{
                                            return <>

                                                      <div class="lg:w-1/4 md:w-1/2 p-4 w-full flex flex-wrap flex-row m-4">
                                                            <a class="block relative h-48 rounded overflow-hidden">

                                                              {/* This syntax must be fallowed to fetch and display image form sanity backend */}
                                                                {/* src={urlFor(product.image)} */}
                                                                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={urlFor(items.image && items.image[0])}/>
                                                             </a>

                                                              <div class="mt-4">
                                                              <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{items.name}</h3>
                                                                <h2 class="text-gray-900 title-font text-lg font-medium">{items.details.slice(0,69)}...</h2>
                                                              <p class="mt-1">${items.price}</p>

                                                                {/* I did't understood why  slug.current is used rather than only using slug */}
                                                                <Link  href={`/product/${items.slug.current}`}>
                                                            
                                                            <button className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">Buy Now</button>
                                                            </Link>
                                                          
                                                              </div>
                                                        </div>
                                                  

                                                  </>
                                    })}
                                    
                            
                          </div>
                        </div>
                    </section>
            </>
  )
}

export default Products
