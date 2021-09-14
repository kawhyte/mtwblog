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
	console.log(date);
	return (
		<section className='mt-20'>
			<div className='flex flex-wrap w-full mb-10'>
				<div className='lg:w-1/2 w-full mb-6 lg:mb-0 '>
					<h1 className='font-playfair-display  sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900'>
						Latest Review
					</h1>
					<div className='h-1 w-20 bg-pink-500 rounded'></div>
				</div>
			</div>

			<div className='flex flex-col justify-start items-center '>
				<div className=' relative '>
					<MtwAward address={address} date={date} />

					<div className='absolute bottom-0 right-0 mx-2 my-1 flex flex-col justify-start items-start align-middle '>
						<h3 className='mb-2 z-20 md:mb-6 text-lg sm:text-xl md:text-4xl font-bold tracking-tighter leading-tight bg-white px-3 py-2 mx-3 md:mx-0 rounded-lg'>
							<Link as={`/posts/${slug}`} href='/posts/[slug]'>
								<a className='hover:underline  break-all font-playfair-display'>
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
