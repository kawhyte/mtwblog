import React from "react";
import Image from "next/image";

function ReviewHeader({ title, pattern, summary }) {
	//console.log("pattern ", pattern)
	return (
		<div className={"bg-white "}>
			<section className='text-gray-600 body-font'>
				{/*<div className='container px-5 py-2 md:py-12 mb-12 mx-auto'>+ pattern
                <div className='font-fancy flex flex-col py-12 text-center w-full mb-4'>
                    <h2 className='mb-3 py-2 px-2 mx-auto text-4xl md:text-6xl font-bold tracking-tighter leading-tight bg-white '>
                       {title} <span className='text-pink-500'>Reviews. </span>
                    </h2>

                    <p className='lg:w-1/3 transform -skew-x-12 mx-auto mb-4 py-2 px-2 bg-black text-white leading-relaxed text-lg'>
                     {summary}
                    </p>
                </div>
    </div>*/}

				<div className='container mx-auto flex px-5 pt-24 md:my-16 py md:flex-row flex-col items-center md:mb-20'>
					<div className=' lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 '>
						<h1 className='font-fancy mb-3 py-2 text-4xl md:text-6xl font-bold tracking-tighter leading-tight bg-white '>
							{title} <span className='text-pink-500'>Reviews. </span>
						</h1>
						<p className='mb-8 leading-relaxed text-2xl'>{summary}</p>
					</div>
					<div className='lg:max-w-4xl lg:w-full md:w-1/2 w-5/6 hidden md:block'>
						{/*<img
							className='object-cover object-center rounded'
							alt='Photo collage'
							src='/allposts.webp'
                        />*/}
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
