import React from 'react'
import Link from 'next/link'
import CategoryItems from './category-items'




// const category = [
// 	{
// 		name: "Hotel Review",
// 		href: "/hotel",
// 		image: "https://res.cloudinary.com/babyhulk/image/upload/c_scale,w_238/v1621896780/project/PXL_20210428_025517322.MP.webp",
// 		text: "Hotel icon",
//     alt: "View of Sunset at a hotel"
		
// 	},
// 	{
// 		name: "Food Review",
// 		href: "/food",
// 		image: "https://res.cloudinary.com/babyhulk/image/upload/c_scale,w_238/v1621897187/project/MVIMG_20191203_091517.webp",
// 		text: "Hotel icon",
//     alt: "View of Food" 
		
// 	},
// 	{
// 		name: "Day Trips",
// 		href: "/day-trip",
// 		image: "https://res.cloudinary.com/babyhulk/image/upload/c_scale,w_238/v1621897765/project/PXL_20210222_215622925.MP.webp",
// 		text: "Hotel icon",
//     alt:"View of Mountains with snow" 
		
// 	},
// 	{
// 		name: "Airport/Airline Reviews",
// 		href: "/airport",
// 		image: "https://res.cloudinary.com/babyhulk/image/upload/c_scale,w_238/v1621897965/project/IMG_20180904_001734.webp",
// 		text: "Hotel icon",
//     alt: "View of an Airport" 
		
// 	}
// ];

function Categories() {
    return (
        <>
        <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="font-playfair-display  sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Browse by Category</h1>
              <div className="h-1 w-20 bg-pink-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500 text-lg"> You want to get out and see the world, but you have so many questions. Check out our trips.</p>
          </div>
          <div className="flex flex-wrap justify-center -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4">
            <Link href="/hotel" className=""> 
              <div className="bg-indigo-50 p-6 rounded-lg cursor-pointer">
             <a> 
                <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://res.cloudinary.com/babyhulk/image/upload/c_scale,w_238/v1621896780/project/PXL_20210428_025517322.MP.webp" alt="View of Sunset at a hotel" />
                
                <h2 className=" font-playfair-display text-lg text-gray-900 font-medium title-font mb-4">Hotel Reviews</h2>
              </a></div>
              </Link>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
            <Link href="/food" className=""> 
              <div className="bg-indigo-50 p-6 rounded-lg cursor-pointer">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://res.cloudinary.com/babyhulk/image/upload/c_scale,w_238/v1621897187/project/MVIMG_20191203_091517.webp" alt="View of Food" />
                
                <h2 className=" font-playfair-display text-lg text-gray-900 font-medium title-font mb-4">Food Reviews</h2>
              </div>
              </Link>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
            <Link href="/day-trip" className=""> 
              <div className="bg-indigo-50 p-6 rounded-lg cursor-pointer">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://res.cloudinary.com/babyhulk/image/upload/c_scale,w_238/v1621897765/project/PXL_20210222_215622925.MP.webp" alt="View of Mountains with snow" />
                
                <h2 className=" font-playfair-display text-lg text-gray-900 font-medium title-font mb-4">Day Trips</h2>
              </div>
              </Link>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
            <Link href="/airport" className=""> 
              <div className="bg-indigo-50 p-6 rounded-lg cursor-pointer">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://res.cloudinary.com/babyhulk/image/upload/c_scale,w_238/v1621897965/project/IMG_20180904_001734.webp" alt="View of Airport" />
                
                <h2 className=" font-playfair-display text-lg text-gray-900 font-medium title-font mb-4">Airport/Airline Reviews</h2>
              </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}

export default Categories
