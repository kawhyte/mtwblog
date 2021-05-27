import React from "react";
import Navbar from "./navbar3";

function Hero() {
	return (
		<div>
			<div className='bg-indigo-900 relative overflow-hidden h-5/6'>
				<img
					src='https://res.cloudinary.com/babyhulk/image/upload/v1622066371/project/Main.webp'
					className=' block absolute md:hidden h-full w-full object-cover'
					aria-label= "Justify"
				/>

				<video
					autoPlay
					loop
					muted
					className='hidden md:block w-full h-full absolute object-cover'>
					<source
						src='https://res.cloudinary.com/babyhulk/video/upload/v1621433741/Video/Pexels_Videos_1409899.mp4'
						type='video/mp4'
					/>
					Your browser does not support the video tag.
					<source
						src='https://petermedina.com/video/beach.webm'
						type='video/webm'
					/>
					Your browser does not support the video tag.
				</video>

				<div className='inset-0 bg-black opacity-40  absolute'></div>
				<header className='absolute top-0 left-0 right-0 z-20'>
					
				</header>
				<div className='container mx-auto px-6 sm:px-0 relative z-10 flex items-center py-32   xl:py-40 '>
					<div className='lg:w-3/5 xl:w-3/5 flex flex-col items-start relative z-10'>
						<span className='font-bold uppercase text-pink-500'></span>
						<h1 className='font-playfair-display text-6xl sm:text-7xl text-white leading-tight mt-4'>
							Travel,
							<br />
							Explore <span className='text-pink-500'> &</span> Eat
						</h1>
						<h2 className='text-center text-white md:text-left text-xl mt-5'>
							Our journey in discovering and reviewing food, hotels and
							interesting items.
						</h2>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
