import React from "react";
import { getReviewType } from "../lib/getReviewType";
import { calculateRating } from "../lib/calculateRating";
import Stars from "./stars";

const StarRating = ({ rating, categories, amenities }) => {
	//console.log(amenities);
	let { value1, value2, value3, value4 } = getReviewType(categories);

	const { isFraction, average, textRating } = calculateRating(
		rating,
		amenities
	);
	// <div className='flex flex-col md:flex-row border-b mx-8  '>
	return (
		<>
			<div className='flex  justify-start items-center align-top mb-8   '>
				<h1 className='font-playfair-display text-4xl md:text-6xl lg:text-6xl font-bold tracking-tighter leading-tight md:leading-none mb-2 md:text-left'>
					{/*isFraction ? Math.floor(average) + ".5" : Math.floor(average)*/}
					{average.toFixed(2)}
				</h1>
				<div className='flex flex-col-reverse ml-3 mr-6 align-top justify-start '>
					<div className='flex flex-row justify-start align-middle items-start '>
						<Stars stars={Math.floor(average)} isFraction={isFraction} />
					</div>
					<p className='font-playfair-display mx-1 my-2  text-lg font-bold'>
						{" "}
						{textRating}
					</p>
				</div>
			</div>

			<p className='font-playfair-display mx-1 mt-2  text-lg font-bold'>
				Rating breakdown {" "}
			</p>

			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 border-b  max-w-5xl mb-6'>
				<div className='md:my-4 '>
					<div className='flex flex-row justify-items-center items-center align-middle '>
						<Stars
							stars={Math.floor(rating?.ratingLocation)}
							isFraction={rating?.ratingLocation % 1 > 0 ? true : false}
						/>
						<p className='mx-4 my-1 text-base'>{value1}</p>
					</div>
					<div className='flex flex-row justify-items-center items-center align-middle'>
						<Stars
							stars={Math.floor(rating?.ratingCleanliness)}
							isFraction={rating?.ratingCleanliness % 1 > 0 ? true : false}
						/>
						<p className='mx-4 my-1 text-base'>
							{value2}{" "}
							{categories[0]._ref === "fef37ecd-188b-4ad6-bf33-5ffa917e59cd" ? (
								<span className='italic text-sm'> (Comfort & Amenities) </span>
							) : (
								" "
							)}
						</p>
					</div>
					<div className='flex flex-row justify-items-center items-center align-middle'>
						<Stars
							stars={Math.floor(rating?.ratingService)}
							isFraction={rating?.ratingService % 1 > 0 ? true : false}
						/>
						<p className='mx-4 my-1 text-base'>{value3}</p>
					</div>
					<div className='flex flex-row justify-items-center items-center align-middle'>
						<Stars
							stars={Math.floor(rating?.ratingValue)}
							isFraction={rating?.ratingValue % 1 > 0 ? true : false}
						/>
						<p className='mx-4 my-1 text-base'>{value4}</p>
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
