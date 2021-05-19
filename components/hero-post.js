import Avatar from "../components/avatar";
import Date from "../components/date";
import CoverImage from "../components/cover-image";
import Link from "next/link";
import MtwAward from "./mtw-award";

export default function HeroPost({
	title,
	coverImage,
	date,
	address,
	excerpt,
	author,
	slug,
}) {
	return (
		<section className='mt-20'>
			<h2 className='font-playfair-display mb-5 sm:mb-12 text-2xl md:text-3xl  font-medium tracking-tight leading-tight'>
				Featured Review
			</h2>

			<div className='flex flex-col justify-start items-center'>
				<div className=' relative'>
					<MtwAward />

					<div className='absolute bottom-0 right-0 mx-2 my-1 flex flex-col justify-start items-start align-middle '>
						<div className='max-w-xl flex flex-row bg-pink-500 pl-4 pr-3 sm:pr-8 py-1 -mb-2 z-20 rounded-r-xl '>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-4 w-4 sm:h-5 sm:w-5 text-white mt-1'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
								/>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
								/>
							</svg>
							<div className=' text-white block   mb-2 ml-2 text-sm sm:text-lg'>
								{address ? address : "No address provided"}
							</div>
						</div>

						<h3 className='mb-2 md:mb-6 text-xl md:text-4xl font-bold tracking-tighter leading-tight bg-white px-3 py-2'>
							<Link as={`/posts/${slug}`} href='/posts/[slug]'>
								<a className='hover:underline break-all font-playfair-display'>
									{title}
								</a>
							</Link>
						</h3>
					</div>
					<CoverImage
						slug={slug}
						imageObject={coverImage}
						title={title}
						url={coverImage}
					/>
				</div>
				<div className='md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8 mb-16 md:mb-12 '>
					<div>
						<p className='text-lg leading-relaxed mb-2'>{excerpt}</p>
					</div>
				</div>
			</div>
		</section>
	);
}
