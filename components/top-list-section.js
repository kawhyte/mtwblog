import React from "react";
import { imageBuilder } from "../lib/sanity";
import Image from "next/image";
import Link from "next/link";

function top({ posts, header }) {
	console.log(posts);
	let count  = 1
	return (
		<div>
			<section className='text-gray-600 body-font'>
				<div className='container px-5 py-24 mx-auto'>
					<div className='flex flex-wrap w-full mb-20'>
						<div className='lg:w-1/2 w-full mb-6 lg:mb-0'>
							<h1 className='sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900'>
								Our Top Picks
							</h1>
							<div className='h-1 w-20 bg-pink-500 rounded'></div>

							{/*<p className="mt-3 leading-relaxed text-gray-500"> Updated December 23, 2021</p>*/}
						</div>
						<p className='lg:w-1/2 w-full leading-relaxed text-gray-500'>
							We visited over 50 hotels and restaurants over the past few years, these are our top picks for the best service, location and value.
						</p>
					</div>

					<div className='lg:w-1/2 w-full mb-6 lg:mb-0'>
					<h1 className='sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900'>
						{header}
					</h1>
					

					{/*<p className="mt-3 leading-relaxed text-gray-500"> Updated December 23, 2021</p>*/}
				</div>
					<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12'>
						{ posts.slice(0, 20).map((item,i) => (

							item.linkType ==="hotel" && count <= 10 && (<div
								key={item._id}
								className='overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto'>
								
								
								<div className="relative">
								<Link as={`/posts/${item.slug}`} href='/posts/[slug]'>
								<a aria-label={item.title} className='w-full block h-full'>
								<p className='text-pink-500 text-lg font-medium bg-green-200 absolute rounded-full z-10 px-2 m-2'>
											{count++}
										</p>
									<Image
										width={1240}
										height={770}
										blurDataURL={imageBuilder(item.coverImage)
											.width(1240)
											.height(744)
											.quality(1)
											.format("webp")
											.url()}
										placeholder='blur'
										alt={`Cover Image for ${item.title}`}
										className=' object-cover object-center block  '
										src={imageBuilder(item.coverImage)
											.width(1240)
											.height(744)
											.format("webp")
											.url()}
									/>	

									
									
								

									<div className='bg-white dark:bg-gray-800 w-full   p-4'>
										
										<p className='text-gray-800 dark:text-white text-xl font-medium mb-2 truncate'>
										{item.title} 
										</p>
										<p className='text-gray-400 dark:text-gray-300 font-light text-md truncate'>
										{item.address}
										</p>
									</div>
								</a>
								</Link>
								</div>
							</div>)
						))}
					</div>
				</div>
			</section>
		</div>
	);
}

export default top;

// <img
// 	className='h-40 rounded w-full object-cover object-center mb-6'
// 	src='https://dummyimage.com/720x400'
// 	alt='content'
// />

// 	<Image
// 	width={1240}
// 	height={770}
// 	blurDataURL={imageBuilder(posts.coverImage[0])
// 		.width(1240)
// 		.height(744)
// 		.quality(1)
// 		.format("webp")
// 		.url()}
// 	placeholder='blur'
// 	alt={`Cover Image for ${posts.title}`}
// 	className=' object-cover object-center block  md:rounded-l-2xl'
// 	src={imageBuilder(posts.coverImage)
// 		.width(1240)
// 		.height(744)
// 		.format("webp")
// 		.url()}
// />

// <div key={item._id} className='flex flex-wrap -m-4'>

// 							<Image
// 								width={1240}
// 								height={770}
// 								blurDataURL={imageBuilder(item.coverImage)
// 									.width(1240)
// 									.height(744)
// 									.quality(1)
// 									.format("webp")
// 									.url()}
// 								placeholder='blur'
// 								alt={`Cover Image for ${item.title}`}
// 								className=' object-cover object-center block  md:rounded-l-2xl'
// 								src={imageBuilder(item.coverImage)
// 									.width(1240)
// 									.height(744)
// 									.format("webp")
// 									.url()}
// 							/>

// 							<div className='xl:w-1/4 md:w-1/2 p-4'>
// 								<div className='bg-gray-100 p-6 rounded-lg'>
// 									<h3 className='tracking-widest text-pink-500 text-xs font-medium title-font uppercase'>
// 										{item.linkType}
// 									</h3>
// 									<h3 className='tracking-widest text-pink-500 text-xs font-medium title-font'>
// 										{item.address}
// 									</h3>
// 									<h2 className='text-lg text-gray-900 font-medium title-font mb-4'>
// 										{item.title}
// 									</h2>
// 									<p className='leading-relaxed text-base'>{item.verdict}</p>
// 								</div>
// 							</div>
// 						</div>
