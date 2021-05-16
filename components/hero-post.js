import Avatar from "../components/avatar";
import Date from "../components/date";
import CoverImage from "../components/cover-image";
import Link from "next/link";
import StarRating from "./star-rating";

export default function HeroPost({
	title,
	coverImage,
	date,
	excerpt,
	author,
	slug,
}) {
	return (
		<section className=''>
			<div className='flex flex-col justify-start items-center'>
				<div className='mb-8 md:mb-10 relative'>
					<span className='flex flex-col-reverse justify-center items-center px-3 py-2 mx-2 my-2  text-base rounded-2xl text-gray-800  bg-yellow-50 absolute '>
						<p className='text-gray-800 font-bold text-sm'>Latest Post</p>
						<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
					  </svg>
					</span>

					<div className=' absolute bottom-0 right-0  mx-2 my-1 '>
						<h3 className='mb-2 md:mb-8 text-xl md:text-4xl font-bold tracking-tighter leading-tight bg-white px-3 py-2'>
							<Link as={`/posts/${slug}`} href='/posts/[slug]'>
								<a className='hover:underline break-all'>{title}</a>
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
				<div className='md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8 mb-16 md:mb-24 '>
					<div>
						<p className='text-lg leading-relaxed mb-2'>{excerpt}</p>
					</div>
				</div>
			</div>
		</section>
	);
}
