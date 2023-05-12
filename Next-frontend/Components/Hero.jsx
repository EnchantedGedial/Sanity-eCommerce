import React from 'react'
import { useRouter } from 'next/router';
import { urlFor } from '../../backend/Lib/client'
import Link from 'next/link'

const Hero = ({heroBanner}) => {
  return (
    <>
    {console.log(heroBanner)}
    <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={urlFor(heroBanner.image)}/>
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{heroBanner.smallText}</h1>
      <p className="mb-8 leading-relaxed">{heroBanner.desc}</p>


      <div className="flex justify-center">

      <Link href={`/product/${heroBanner.product}`}>
       
       <button className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">{heroBanner.buttonText}</button>
       </Link>


        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">{heroBanner.largeText1}</button>


      </div>



    </div>
  </div>
</section>
      
    </>
  )
}

export default Hero
