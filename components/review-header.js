import React from "react";
import Image from "next/image";

function ReviewHeader({ title, pattern, summary }) {
	//console.log("pattern ", pattern)
	return (
		<div className={"bg-white "}>
			<section className='text-gray-600 body-font'>
				<div className='container mx-auto flex px-5 pt-24 md:my-16 py md:flex-row flex-col items-center md:mb-20'>
					<div className=' lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 '>
						<h1 className='font-fancy mb-3 py-2 text-4xl md:text-6xl font-bold tracking-tighter leading-tight bg-white text-pink-500'>
							{title}
						</h1>
						<p className='mb-8 leading-relaxed text-2xl'>{summary}</p>
					</div>
					<div className='lg:max-w-4xl lg:w-full md:w-1/2 w-5/6 hidden md:block'>
						<Image
							src='/allposts.webp'
							width={896}
							height={645}
							alt='Photo Collage'
							blurDataURL='/allposts.webp'
							placeholder='blur'
						/>
					</div>
				</div>
			</section>
		</div>
	);
}

export default ReviewHeader;
