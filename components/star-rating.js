import React from "react";
import { getReviewType } from "../lib/getReviewType";
import { calculateRating } from "../lib/calculateRating";
import Stars from "./stars";
import ProgressRating from "./progress-rating";

const StarRating = ({ rating, categories, amenities }) => {
	 //console.log(rating);
	// const seasons = {
	// 	SUMMER: "summer",
	// 	WINTER: "winter",
	// 	SPRING: "spring",
	// 	AUTUMN: "autumn",
	// }

	// console.log(seasons.AUTUMN)

	//const propertyNames = Object.entries(rating);
	//console.log(propertyNames);
	let {
		value1,
		value2,
		value3,
		value4,
		value5,
		value6,
		value7,
		value8,
		value9,
	} = getReviewType(categories);

	const { isFraction, average, textRating} = calculateRating(
		rating,
		amenities
	);


	// <div className='flex flex-col md:flex-row border-b mx-8  '>
	return (
		<>
			
			<div className='flex  justify-start items-center align-top mb-4   '>
				<svg
					className='h-5 w-5 ml-1 fill-current text-pink-500'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='3 3 18 18'
					aria-hidden='true'
					focusable='false'>
					<path d='M20.83,9.15l-6-.52L12.46,3.08h-.92L9.18,8.63l-6,.52L2.89,10l4.55,4L6.08,19.85l.75.55L12,17.3l5.17,3.1.75-.55L16.56,14l4.55-4Z'></path>
				</svg>

				<h1 className='font-playfair-display mx-2 text-4xl md:text-6xl lg:text-6xl font-bold tracking-tighter leading-tight md:leading-none mb-2 md:text-left'>
					{/*isFraction ? Math.floor(average) + ".5" : Math.floor(average)*/}
					{average.toFixed(2)}
				</h1>

				<p className='font-playfair-display mx-1 text-xl font-bold'>
					{textRating}
				</p>
			</div>
			<p className=' font-Montserrat mx-1 my-3 mt-2  text-lg '>
			Rating breakdown{" "}
		</p>
			<div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 max-w-8xl mr-52 '>
				<div className='grid grid-cols-1  gap-x-20 md:grid-cols-3 lg:grid-cols-3 '>
					<div className='flex align-middle items-center'>
					
						<p className='mr-4 my-1 text-base font-light md:text-lg flex-1'>
							{value1}
						</p>
						<ProgressRating progress={rating?.ratingLocation}  />
					</div>
					<div className='flex align-middle items-center'>
					

						<p className='mr-4 my-1 text-base font-light md:text-lg flex-1'>
							{value2}{" "}
							{categories[0]._ref === "fef37ecd-188b-4ad6-bf33-5ffa917e59cd" ? (
								<span className='italic text-sm'> </span>
							) : (
								" "
							)}
						</p>
						<ProgressRating progress={Math.floor(rating?.ratingCleanliness)}  />
					</div>
					<div className='flex align-middle items-center'>
						{/*<Stars
							stars={Math.floor(rating?.ratingService)}
							isFraction={rating?.ratingService % 1 > 0 ? true : false}
						/>*/}
						<p className='mr-4 my-1 text-base font-light md:text-lg flex-1'>
							{value3}
						</p>
						<ProgressRating progress={Math.floor(rating?.ratingService)}  />
					</div>
					<div className='flex align-middle items-center'>
						{/*<Stars
							stars={Math.floor(rating?.ratingValue)}
							isFraction={rating?.ratingValue % 1 > 0 ? true : false}
						/>*/}
						<p className='mr-4 my-1 text-base font-light md:text-lg flex-1'>
							{value4}
						</p>
						<ProgressRating progress={Math.floor(rating?.ratingValue)}  />
					</div>
					<div className='flex align-middle items-center'>
						{/*<Stars
							stars={Math.floor(rating?.ratingValue)}
							isFraction={rating?.ratingValue % 1 > 0 ? true : false}
						/>*/}
						<p className='mr-4 my-1 text-base font-light md:text-lg flex-1'>
							{value5}
						</p>
						<ProgressRating progress={Math.floor(rating?.ratingBed)}  />
					</div>
					<div className='flex align-middle items-center'>
						{/*<Stars
							stars={Math.floor(rating?.ratingValue)}
							isFraction={rating?.ratingValue % 1 > 0 ? true : false}
						/>*/}
						<p className='mr-4 my-1 text-base font-light md:text-lg flex-1'>
							{value6}
						</p>
						<ProgressRating progress={Math.floor(rating?.ratingInternet)}  />
					</div>
					<div className='flex align-middle items-center'>
						{/*<Stars
							stars={Math.floor(rating?.ratingValue)}
							isFraction={rating?.ratingValue % 1 > 0 ? true : false}
						/>*/}
						<p className='mr-4 my-1 text-base font-light md:text-lg flex-1'>
							{value7}
						</p>
						<ProgressRating progress={Math.floor(rating?.ratingAmenities)}  />
					</div>
					<div className='flex align-middle items-center'>
						{/*<Stars
							stars={Math.floor(rating?.ratingValue)}
							isFraction={rating?.ratingValue % 1 > 0 ? true : false}
						/>*/}
						<p className='mr-4 my-1 text-base font-light md:text-lg flex-1'>
							{value8}
						</p>
						<ProgressRating progress={Math.floor(rating?.ratingGym)}  />
					</div>
					<div className='flex align-middle items-center'>
						{/*<Stars
							stars={Math.floor(rating?.ratingValue)}
							isFraction={rating?.ratingValue % 1 > 0 ? true : false}
						/>*/}
						<p className='mr-4 my-1 text-base font-light md:text-lg flex-1'>
							{value9}
						</p>
						<ProgressRating progress={Math.floor(rating?.ratingPool)}  />
					</div>
				</div>

				{amenities && (
					<div className='md:mb-4 mb-6'>
						{amenities &&
							amenities.map((item) => (
								<div
									key={item._key}
									className='flex flex-row justify-items-center items-center align-middle '>
									<Stars
										stars={Math.floor(item?.amenitiesRating)}
										isFraction={item?.amenitiesRating % 1 > 0 ? true : false}
									/>
									<p className='mx-6 my-1'>{item.title}</p>
								</div>
							))}
					</div>
				)}
			</div>
		</>
	);
};

export default StarRating;
