import React from "react";
import Link from "next/link";
import { imageBuilder } from "../lib/sanity";
import cn from "classnames";
import StarRating from "./star-rating";

function Section({
	title,
	coverImage,
	imageObject,
	date,
	excerpt,
	author,
	slug,
}) {


	const image = (
		<img
			width={392}
			height={171}
			alt={`Cover Image for ${title}`}
			className={cn("shadow-small", {
				"object-cover object-center h-full w-full": slug,
			})}
			src={imageBuilder(coverImage).width(392).height(171).url()}
		/>
	);
	return (
		<>
		
			<div>
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
				
			

					<Link as={`/posts/${slug}`} href='/posts/[slug]'>
						<a className='text-indigo-500 bg-white inline-flex items-center mt-1'>
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
		</>
	);
}

export default Section;
