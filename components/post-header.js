import Avatar from "../components/avatar";
import Date from "../components/date";
import Link from "next/link";
import CoverImage from "../components/cover-image";
import cn from "classnames";
import PostTitle from "../components/post-title";
import Image from "next/image";
import { imageBuilder } from "../lib/sanity";
import StarRating from "./star-rating";
import Awards from "./mtw-award";
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
	//ratingType,
	gallery,
	linkType,
	roomType ="1 bedroom standard room"
}) {

	 //ratingType = post?.rating;
	// console.log("roomType",roomType)

	 //console.log("Post-head ratingType ", rating);
	// console.log("Post-head linkType ", post.linkType);

	// if (post?.linkType === "food") {
	// 	ratingType = post?.foodRating;
	// }

	return (
		<>
			<div className='mb-8 md:mb-4 -mx-5 sm:mx-0 z-50'>
				<PostTitle>{title}</PostTitle>

				<p className='text-gray-900 font-normal md:text-sm p-1 text-center md:text-left '>
					<span className='mr-1 text-lg'>
						{address ? address : "No address provided"}{" "}
					</span>
					|{" "}
					<span className='ml-1 text-gray-700 font-normal text-lg'>
						Visited <Date dateString={date} />
					</span>
				</p>
			{ roomType &&	<p className=' text-gray-900 font-normal  md:text-lg  text-center md:text-left'>
					{linkType === "hotel" ? `${roomType || "test"}` : ""}{" "}
	</p>}
			</div>

			{/*<CoverImage title={title} imageObject={coverImage} url={coverImage} />*/}

			<section className='text-gray-600 body-font'>
				<div className='container py-2 mx-auto flex flex-wrap'>
					<div className='flex flex-wrap '>
						<div className='flex flex-wrap md:w-1/2 w-full pt-2'>
							<div className=' w-full '>
								<Image
									width={1240}
									height={770}
									blurDataURL={imageBuilder(coverImage)
										.width(1240)
										.height(744)
										.quality(1)
										.format("webp")
										.url()}
									placeholder='blur'
									alt={`Cover Image for ${title}`}
									className=' object-cover object-center block  md:rounded-l-2xl'
									src={imageBuilder(coverImage)
										.width(1240)
										.height(744)
										.format("webp")
										.url()}
								/>
							</div>
						</div>
						<div className=' md:flex flex-wrap md:w-1/2 hidden '>
							<div className=' md:w-1/2  pl-2 pt-2  '>
								<Image
									width={1240}
									height={770}
									blurDataURL={imageBuilder(gallery[3])
										.width(1240)
										.height(740)
										.quality(1)
										.format("webp")
										.url()}
									placeholder='blur'
									alt={`Cover Image for ${title}`}
									className=' block '
									src={imageBuilder(gallery[3])
										.width(1240)
										.height(740)
										.format("webp")
										.url()}
								/>
							</div>
							<div className='pl-2 pt-2 w-1/2  '>
								<Image
									width={1240}
									height={770}
									blurDataURL={imageBuilder(gallery[2])
										.width(1240)
										.height(740)
										.quality(1)
										.format("webp")
										.url()}
									placeholder='blur'
									alt={`Cover Image for ${title}`}
									className='  block rounded-tr-2xl'
									src={imageBuilder(gallery[2])
										.width(1240)
										.height(740)
										.format("webp")
										.url()}
								/>
							</div>
							<div className=' pl-2   w-1/2'>
								<Image
									width={1240}
									height={770}
									blurDataURL={imageBuilder(gallery[1])
										.width(1240)
										.height(740)
										.quality(1)
										.format("webp")
										.url()}
									placeholder='blur'
									alt={`Cover Image for ${title}`}
									className=' block '
									src={imageBuilder(gallery[1])
										.width(1240)
										.height(740)
										.format("webp")
										.url()}
								/>
							</div>
							<div className='pl-2 pt-  w-1/2 relative'>
								{/*<span className='  px-3 ml-6  md:mx-3 my-4 z-20  text-base rounded-lg flex   bg-white border-black border-2 shadow-lg absolute bottom-0 right-0  mb-6 mr-6 '>
							<a href="gallery" className='text-black font-normal text-xs md:text-sm p-1  '>
							View all photos
								
							</a>
							</span>*/}
								<Image
									width={1240}
									height={770}
									blurDataURL={imageBuilder(gallery[0])
										.width(1240)
										.height(740)
										.quality(1)
										.format("webp")
										.url()}
									placeholder='blur'
									alt={`Cover Image for ${title}`}
									className='  block rounded-br-2xl'
									src={imageBuilder(gallery[0])
										.width(1240)
										.height(740)
										.format("webp")
										.url()}
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/*<div className="flex">
			<div className='mb-8 md:mb-8 -mx-5 sm:mx-0'>
			<PostTitle >{title}</PostTitle>
			<Awards address={address} date= {date}/>
			<CoverImage  title={title} imageObject={coverImage} url={coverImage} />
			
			</div>


			<div>More pics</div>

	</div>*/}

			<div className=' block mt-4 text-base mb-6 md:mb-12'>
				<StarRating
					rating={rating}
					amenities={amenities}
					categories={categories}
					//linkType={linkType}
				/>
			</div>

			{/*Amenities*/}

			{/*<div className=" flex">
			
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
			</div>*/}
		</>
	);
}
