import React from "react";
import { getReviewType } from "../lib/getReviewType";
import { calculateRating } from "../lib/calculateRating";
import Stars from "./stars";

const StarRating = ({ rating, categories }) => {
	let { value1, value2, value3, value4 } = getReviewType(categories);

	const { isFraction, average, textRating } = calculateRating(rating);
	// <div className='flex flex-col md:flex-row border-b mx-8  '>
	return (
		<>
		<div className='flex  justify-start items-center align-top mb-8  '>
			<h1 className='font-playfair-display text-6xl md:text-7xl lg:text-7xl font-bold tracking-tighter leading-tight md:leading-none mb-2 md:text-left'>
				{isFraction ? Math.floor(average) + ".5" : Math.floor(average)}
			</h1>
			<div className='flex flex-col-reverse ml-3 mr-6 align-top justify-start '>
				<div className='flex flex-row justify-start align-middle   items-start '>
					<Stars stars={Math.floor(average)} isFraction={isFraction} />
				</div>
				<p className='font-playfair-display mx-1 my-2  text-xl font-bold'>
					{" "}
					{textRating}
				</p>
			</div>
		</div>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 border-b '>

				<div className='md:my-4 md:ml-6 mb-6 '>
					<p className='font-playfair-display mx-1 my-2  text-xl font-bold'>
						Property rating{" "}
					</p>
					<div className='flex flex-row justify-items-center items-center align-middle '>
						<Stars
							stars={Math.floor(rating?.ratingLocation)}
							isFraction={rating?.ratingLocation % 1 > 0 ? true : false}
						/>
						<p className='mx-6 my-1'>{value1}</p>
					</div>
					<div className='flex flex-row justify-items-center items-center align-middle'>
						<Stars
							stars={Math.floor(rating?.ratingCleanliness)}
							isFraction={rating?.ratingCleanliness % 1 > 0 ? true : false}
						/>
						<p className='mx-6 my-1 '>
							{value2}{" "}
							{categories[0]._ref === "fef37ecd-188b-4ad6-bf33-5ffa917e59cd" ? (
								<span className='italic text-sm'>
									{" "}
									(Comfort, Size & Amenities){" "}
								</span>
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
						<p className='mx-6 my-1'>{value3}</p>
					</div>
					<div className='flex flex-row justify-items-center items-center align-middle'>
						<Stars
							stars={Math.floor(rating?.ratingValue)}
							isFraction={rating?.ratingValue % 1 > 0 ? true : false}
						/>
						<p className='mx-6 my-1'>{value4}</p>
					</div>
				</div>

				<div className='md:my-4 md:ml-6 mb-8 md:mb-0'>
					<p className='font-playfair-display mx-1 my-2  text-xl font-bold'>
					Amenities rating{" "}
					</p>
					<div className='flex flex-row justify-items-center items-center align-middle '>
						<Stars
							stars={Math.floor(rating?.ratingLocation)}
							isFraction={rating?.ratingLocation % 1 > 0 ? true : false}
						/>
						<p className='mx-6 my-1'>{value1}</p>
					</div>
					<div className='flex flex-row justify-items-center items-center align-middle'>
						<Stars
							stars={Math.floor(rating?.ratingCleanliness)}
							isFraction={rating?.ratingCleanliness % 1 > 0 ? true : false}
						/>
						<p className='mx-6 my-1 '>
							{value2}{" "}
							{categories[0]._ref === "fef37ecd-188b-4ad6-bf33-5ffa917e59cd" ? (
								<span className='italic text-sm'>
									{" "}
									(Comfort, Size & Amenities){" "}
								</span>
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
						<p className='mx-6 my-1'>{value3}</p>
					</div>
					<div className='flex flex-row justify-items-center items-center align-middle'>
						<Stars
							stars={Math.floor(rating?.ratingValue)}
							isFraction={rating?.ratingValue % 1 > 0 ? true : false}
						/>
						<p className='mx-6 my-1'>{value4}</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default StarRating;
