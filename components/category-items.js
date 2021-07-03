import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function CategoryItems({image}) {
    return (
        
        <div className="xl:w-1/4 md:w-1/2 p-4 ">
        <Link href="/hotel" className="" passHref> 
          <div className="bg-indigo-50 p-6 rounded-lg cursor-pointer">
         <a> 
            <Image width={200} height={200} className="h-40 rounded w-full object-cover object-center mb-6" src={image} alt="View of Sunset at a hotel" />
            
            <h2 className=" font-playfair-display text-lg text-gray-900 font-medium title-font mb-4">Hotel Reviewss</h2>
          </a></div>
          </Link>
        </div>
       
    )
}

export default CategoryItems
