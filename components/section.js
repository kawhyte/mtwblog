import React from "react";
import Link from "next/link";
import { imageBuilder } from "../lib/sanity";
import cn from "classnames";

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
			width={1240}
			height={540}
			alt={`Cover Image for ${title}`}
			className={cn("shadow-small", {
				"object-cover object-center h-full w-full": slug,
			})}
			src={imageBuilder(coverImage).width(1240).height(540).url()}
		/>
	);
	return (
		<>
			<div>
				<section className='text-gray-600 body-font'>
					<div className='rounded-lg h-64 overflow-hidden'>
						{slug ? (
							<Link as={`/posts/${slug}`} href='/posts/[slug]'>
								<a aria-label={title}>{image}</a>
							</Link>
						) : (
							image
						)}
					</div>
					<h2 className='text-xl font-medium title-font text-gray-900 mt-5'>
						{title}
					</h2>
					<p className='text-base leading-relaxed mt-2'>{excerpt}</p>
					<Link as={`/posts/${slug}`} href='/posts/[slug]'>
						<a className='text-indigo-500 inline-flex items-center mt-3'>
							Read More
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
