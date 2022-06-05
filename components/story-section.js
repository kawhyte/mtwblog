import React from "react";
import Link from "next/link";
import Image from "next/image";
import { imageBuilder } from "../lib/sanity";
import cn from "classnames";

function StorySection(props) {

	//console.log(props)
	return (
		<div className='flex justify-center px-4 '>
			<div className='grid grid-cols-1 gap-4 lg:gap-8  sm:grid-cols-2 grid-rows-1 md:grid-cols-2  lg:grid-cols-3 z-50  '>
				{props.stories.map((item) => {
					return (
						<div key={item.slug}>
							<section className='text-gray-600 body-font mb-10'>
								<div className='rounded-xl h-full'>
									{item.slug ? (
										<Link as={`/stories/${item.slug}`} href='/stories/[slug]'>
											<a aria-label={item.title}>
												<Image
													width={392}
													height={171}
													blurDataURL={imageBuilder(item.coverImage)
														.width(392)
														.height(171)
														.quality(1)
														.url()}
													placeholder='blur'
													alt={`Cover Image for ${item.title}`}
													className={cn("shadow-small", {
														"object-cover object-center h-full w-full":
															item.slug,
													})}
													src={imageBuilder(item.coverImage)
														.width(392)
														.height(171)
														.url()}
												/>
												<h2 className=' text-xl font-medium title-font text-gray-700 mt-3'>
													{item.title}
												</h2>
												<p className='text-base leading-relaxed mt-2'>
													{item.excerpt}
												</p>
												<div className=' text-pink-500 block   mb-2  text-lg capitalize'>
													{item.linkType ? item.linkType : "No category provided"}{" "}
												</div>
											</a>
										</Link>
									) : (
										''
									)}
								</div>
								{/*<h2 className=' text-xl font-medium title-font text-gray-700 mt-3'>
								{item.title}
							</h2>
							<p className='text-base leading-relaxed mt-2'>{item.excerpt}</p>
							<div className=' text-pink-500 block   mb-2  text-lg'>
                            {item.address ? item.address : "No category provided"}{" "}
                            <span className='p-2'>|</span>
								<Link as={`/stories/${item.slug}`} href='/stories/[slug]'>
									<a className='text-blue-500  inline-flex items-center mt-1'>
										View Story
										<svg
											fill='none'
											stroke='currentColor'
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											className='w-4 h-4 ml-2'
											viewBox='0 0 24 24'>
											<path d='M5 12h14M12 5l7 7-7 7'></path>
										</svg>
									</a>
								</Link>
								</div>*/}
							</section>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default StorySection;
