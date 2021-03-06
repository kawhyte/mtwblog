import React from "react";
import Link from "next/link";
import Image from "next/image";
import { imageBuilder } from "../lib/sanity";
import cn from "classnames";

function Section({posts, PostType="posts"}) {
	return (
	<div className="flex justify-center px-4  "> 
		<div className=' grid grid-cols-1 gap-4 lg:gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
			{posts.map((item) => {
				return (
					<div key={item.slug}>
						<section className='text-gray-600 body-font mb-10 z-50 '>
							<div className='rounded-xl h-full'>
								{item.slug ? (
									<Link as={`/${PostType}/${item.slug}`} href={`/${PostType}/[slug]`}>
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
													"object-cover object-center h-full w-full": item.slug,
												})}
												src={imageBuilder(item.coverImage)
													.width(392)
													.height(171)
													.url()}
											/>
											<h2 className=' text-xl font-medium title-font text-gray-700 mt-3'>
											{item.title}
										</h2>
										<p className='text-base leading-relaxed mt-2'>{item.excerpt}</p>
										<div className=' text-pink-500 block   mb-2  text-lg'>
											{item.address ? item.address : "No address provided"}{" "}
										</div>
										</a>
									</Link>
								) : (
									image
								)}
							</div>
							
							{/*<h2 className=' text-xl font-medium title-font text-gray-700 mt-3'>
								{item.title}
							</h2>
							<p className='text-base leading-relaxed mt-2'>{item.excerpt}</p>
							<div className=' text-pink-500 block   mb-2  text-lg'>
								{item.address ? item.address : "No address provided"}{" "}
								<span className='p-2'>|</span>
								<Link as={`/posts/${item.slug}`} href='/posts/[slug]'>
									<a className='text-blue-500  inline-flex items-center mt-1'>
										View Review
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

export default Section;
