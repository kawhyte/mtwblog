import Date from "../components/date";
import PostTitle from "../components/post-title";
import Image from "next/image";
import { imageBuilder } from "../lib/sanity";
import StarRating from "./star-rating";
import ShareButtons from "../components/share-buttons";
import BodySectionSeparator from "./body-section-separator";
import PostBody from "../components/post-body";

export default function PostHeader({
	title,
	shareURL,
	categories,
	coverImage,
	date,
	blurb,
	author,
	amenities,
	videoUrl,
	address,
	rating,
	//ratingType,
	gallery,
	linkType,
	roomType = "King bedroom",
}) {
	//ratingType = post?.rating;

	// if (post?.linkType === "food") {
	// 	ratingType = post?.foodRating;
	// }

	const photodefault = {
		_key: "d6dfccca542b",
		_type: "galaryImage",
		asset: {
			_ref: "image-6221448f03b5658a07088aa0af23b8e75ad2e8e6-3024x4032-jpg",
			_type: "reference",
		},
	};

	return (
		<>
			<div className='flex md:flex-col flex-col'>
				<div className='md:mb-4 -mx-5 sm:mx-0'>
					<PostTitle>{title}</PostTitle>

					<div className='flex flex-col justify-start align-middle md:flex-row'>
						<div>
							<p className='text-gray-900 font-medium md:text-sm p-1 text-center md:text-left '>
								<span className='text-lg'>
									{address ? address : "No address provided"}{" "}
								</span>
								|{" "}
								<span className='ml-1 text-gray-900 font-medium text-lg'>
									Visited <Date dateString={date} />
								</span>
							</p>
							{roomType && (
								<p className=' text-gray-900 font-medium  md:text-lg  text-center md:text-left'>
									{linkType === "hotel" ? `${roomType || "test"}` : ""}{" "}
								</p>
							)}
						</div>

						<ShareButtons shareURL={shareURL}></ShareButtons>
					</div>
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
										blurDataURL={imageBuilder(
											gallery[3] ? gallery[3] : photodefault
										)
											.width(1240)
											.height(740)
											.quality(1)
											.format("webp")
											.url()}
										placeholder='blur'
										alt={`Cover Image for ${title}`}
										className=' block '
										src={imageBuilder(gallery[3] ? gallery[3] : photodefault)
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
										blurDataURL={imageBuilder(
											gallery[2] ? gallery[2] : photodefault
										)
											.width(1240)
											.height(740)
											.quality(1)
											.format("webp")
											.url()}
										placeholder='blur'
										alt={`Cover Image for ${title}`}
										className='  block rounded-tr-2xl'
										src={imageBuilder(gallery[2] ? gallery[2] : photodefault)
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
										blurDataURL={imageBuilder(
											gallery[1] ? gallery[1] : photodefault
										)
											.width(1240)
											.height(740)
											.quality(1)
											.format("webp")
											.url()}
										placeholder='blur'
										alt={`Cover Image for ${title}`}
										className=' block '
										src={imageBuilder(gallery[1] ? gallery[1] : photodefault)
											.width(1240)
											.height(740)
											.format("webp")
											.url()}
									/>
								</div>
								<div className='pl-2 pt-  w-1/2 relative'>
									{/*<span className='  px-3 ml-6  md:mx-3 my-4 z-20  text-base rounded-lg flex   bg-white border-black border-2 shadow-lg absolute bottom-0 right-0  mb-6 mr-6 '>
							<a href="gallery" className='text-black font-medium text-xs md:text-sm p-1  '>
							View all photos
								
							</a>
							</span>*/}
									<Image
										width={1240}
										height={770}
										blurDataURL={imageBuilder(
											gallery[0] ? gallery[0] : photodefault
										)
											.width(1240)
											.height(740)
											.quality(1)
											.format("webp")
											.url()}
										placeholder='blur'
										alt={`Cover Image for ${title}`}
										className='  block rounded-br-2xl'
										src={imageBuilder(gallery[0] ? gallery[0] : photodefault)
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
			</div>
			{blurb && (
				<>
					<div>
						<p className='max-w-4xl text-justify lg:text-lg mx-4 my-8'>
						<PostBody content={blurb} /> 	
						</p>
					</div>
					<BodySectionSeparator />
				</>
			)}

			{rating && (
				<div className=' block mt-4 text-base mb-6 md:mb-12'>
					<StarRating
						rating={rating}
						amenities={amenities}
						categories={categories}
						linkType={linkType}
					/>
				</div>
			)}
		</>
	);
}
