import Avatar from "../components/avatar";
import Date from "../components/date";
import CoverImage from "../components/cover-image";
import PostTitle from "../components/post-title";
import { imageBuilder } from "../lib/sanity";
import StarRating from "./star-rating";
import post from "../studio/schemas/post";
export default function PostHeader({
	title,
	categories,
	coverImage,
	date,
	author,
	amenities,
	videoUrl,
	address,
	rating,
}) {

	return (
		<>
			<div className='mb-8 md:mb-8 -mx-5 sm:mx-0'>
			<PostTitle className="">{title}</PostTitle>
			<CoverImage className="" title={title} imageObject={coverImage} url={coverImage} />
			</div>

			<div className=" flex">
			
			<div className='max-w-2xl flex flex-row'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					className='h-6 w-6'
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
				<div className=' text-gray-500 block text-base  mb-2 ml-2'>
					{address ? address : "No address provided"}
				</div>
			</div>
			
			<div className='max-w-2xl flex flex-row mx-8'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					className='h-6 w-6'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
					/>
				</svg>

				<div className=' text-gray-500 block ml-2 mb-2 text-base'>
					Visited <Date dateString={date} />
				</div>
			</div>
			</div>
			<div className=' block mt-4 text-base mb-6 md:mb-12'>
				<StarRating
					rating={rating}
					amenities={amenities}
					categories={categories}
				/>
			</div>
		</>
	);
}
// <div className='block mb-6 md:mb-12'>
// 	<Avatar name={author?.name} picture={author?.picture} />
// </div>
