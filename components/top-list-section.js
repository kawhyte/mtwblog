import React from "react";
import { imageBuilder } from "../lib/sanity";
import Image from "next/image";
import Link from "next/link";
import PostBody from "./post-body";

function TopList({ posts, header, type }) {
	let count = 2;
	const numberOne = posts[0];
	const topPicks = posts.slice(1, 9);
	

	return (
		<div>
			<section className='text-gray-600 body-font'>
				<div className='container px-5 pb-24 mx-auto'>
					<div className='lg:w-1/2 w-full mb-6 lg:mb-0'>
						<h1 className='sm:text-3xl font-fancy  text-2xl font-medium title-font mb-2 py-5 text-gray-900'>
							{header}
						</h1>

						{/*<p className="mt-3 leading-relaxed text-gray-500"> Updated December 23, 2021</p>*/}
					</div>

					<section className='text-gray-600 body-font mb-6 '>
						<div className='container  mx-auto flex px-5 py-10 items-center justify-center flex-col'>
						<div className=' border-8 bg-white border-yellow-300 p-6 mb-4  '>
						

						<p className='text-black  absolute text-5xl font-medium bg-yellow-300  rounded-2xl z-10 px-4 m-2 '>
							1
						</p>
						
								<Image
									width={940}
									height={470}
									blurDataURL={imageBuilder(numberOne.coverImage)
										.width(1240)
										.height(744)
										.quality(1)
										.format("webp")
										.url()}
									placeholder='blur'
									alt={`Cover Image for ${numberOne.title}`}
									className=' object-cover object-center block  relative '
									src={imageBuilder(numberOne.coverImage)
										.width(1240)
										.height(744)
										.format("webp")
										.url()}
								/>

								<div className='text-center w-full mt-6 cursor-pointer'>
								<Link as={`/posts/${numberOne.slug}`} href='/posts/[slug]'>

									<h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
										
									{numberOne.title}
									</h1>
</Link>
									<PostBody content={numberOne.blurb} />
								</div>
							
								
							</div>
						</div>
					</section>

					<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12'>
						{topPicks.slice(0, 20).map(
							(item, i) =>
								item.linkType === type &&
								count <= 10 && (
									<div
										key={item._id}
										className='overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto'>
										<div className='relative'>
											<Link as={`/posts/${item.slug}`} href='/posts/[slug]'>
												<a
													aria-label={item.title}
													className='w-full block h-full'>
													<p className='text-black text-3xl font-medium bg-white absolute rounded-xl z-10 px-2 m-2'>
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
									</div>
								)
						)}
					</div>
				</div>
			</section>
		</div>
	);
}

export default TopList;

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
