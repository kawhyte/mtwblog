import React from "react";
import Link from "next/link";
import { imageBuilder } from "../lib/sanity";
import cn from "classnames";
import StarRating from "./star-rating";
import { add } from "date-fns";

function Section(props) {
	//  console.log("address ", address, title,kenny)
	console.log("New PROPS ", props.posts[0]);
	// const image = (
	// 	<img
	// 		width={392}
	// 		height={171}
	// 		alt={`Cover Image for ${title}`}
	// 		className={cn("shadow-small", {
	// 			"object-cover object-center h-full w-full": slug,
	// 		})}
	// 		src={imageBuilder(coverImage).width(392).height(171).url()}
	// 	/>
	// );
	// className="grid grid-row-1 md:grid-row-2 lg:grid-row-2 gap-1 max-w-5xl mb-6
	return (
		<div className="grid grid-cols-1  sm:grid-cols-2 grid-rows-1 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3  gap-6 ">
			{props.posts.map((item) => {
			
				return (
					<div key={item.slug} >
						<section className='text-gray-600 body-font mb-6'>
							<div className='rounded-xl h-full overflow-hidden'>
								{item.slug ? (
									<Link as={`/posts/${item.slug}`} href='/posts/[slug]'>
										<a aria-label={item.title}>
											<img
												width={392}
												height={171}
												alt={`Cover Image for ${item.title}`}
												className={cn("shadow-small", {
													"object-cover object-center h-full w-full": item.slug,
												})}
												src={imageBuilder(item.coverImage)
													.width(392)
													.height(171)
													.url()}
											/>
										</a>
									</Link>
								) : (
									image
								)}
							</div>
							<h2 className='font-playfair-display text-xl font-medium title-font text-gray-900 mt-3'>
								{item.title}
							</h2>
							<p className='text-base leading-relaxed mt-2'>{item.excerpt}</p>
							<div className=' text-gray-500 block   mb-2  text-lg'>
								{item.address ? item.address : "No address provided"}
							</div>

							<Link as={`/posts/${item.slug}`} href='/posts/[slug]'>
								<a className='text-green-800 bg-white inline-flex items-center mt-1'>
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
						</section>
					</div>
				);
			})}
		</div>
	);

	{
		/*<div key={i+1}>
				<section className='text-gray-600 body-font mb-6'>
					<div className='rounded-xl h-full overflow-hidden'>
						{slug ? (
							<Link as={`/posts/${slug}`} href='/posts/[slug]'>
								<a aria-label={title}>{image}</a>
							</Link>
						) : (
							image
						)}
					</div>
					<h2 className='font-playfair-display text-xl font-medium title-font text-gray-900 mt-3'>
						{title}
					</h2>
					<p className='text-base leading-relaxed mt-2'>{excerpt}</p>
					<div className=' text-gray-500 block   mb-2  text-lg'>
					{address ? address : "No address provided"}
				</div>
			

					<Link as={`/posts/${slug}`} href='/posts/[slug]'>
						<a className='text-green-800 bg-white inline-flex items-center mt-1'>
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
				</section>
						</div>*/
	}
}

export default Section;
