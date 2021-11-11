import React from "react";
import Image from "next/image";

function Hero() {
	return (
		<div>
			<div className='bg-indigo-900 relative overflow-hidden my-24'>
				<Image
					src='https://res.cloudinary.com/babyhulk/image/upload/v1624648198/hero-image/PXL_20210613_032035183.MP.webp'
					className=' block absolute md:hidden h-full w-full object-cover'
					aria-label='Justify'
					layout='fill'
				/>

				<div className='inset-0 bg-black opacity-40  absolute'></div>
				<header className='absolute top-0 left-0 right-0 z-20'></header>
				<div className='container mx-auto px-6 sm:px-0 relative z-10 flex items-center py-32   xl:py-40 '>
					<div className='lg:w-3/5 xl:w-3/5 flex flex-col items-start relative z-10 ml-10'>
						<span className='font-bold uppercase text-pink-500'></span>
						<h1 className='font-fancy text-6xl sm:text-7xl text-white leading-tight mt-4'>
							Travel to Eat<span className='text-pink-500'></span>,
							<br />
							<span className='text-pink-500'> </span>Eat to Travel
						</h1>
						<h2 className='text-center text-white md:text-left text-xl mt-5'>
							Our journey in discovering and reviewing food, hotels and
							interesting locations.
						</h2>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;

// <Image

// src='https://res.cloudinary.com/babyhulk/image/upload/v1624648198/hero-image/PXL_20210613_032035183.MP.webp'
// className=' block absolute md:hidden h-full w-full object-cover'
// aria-label='Justify'
// layout='fill'
// />
