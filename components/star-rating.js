import React from "react";
import { getReviewType } from "../lib/getReviewType";
import { calculateRating } from "../lib/calculateRating";
import Stars from "./stars";
import ProgressRating from "./progress-rating";

const StarRating = ({ rating, linkType }) => {
	//console.log(rating);
	//console.log(categories);
	// const seasons = {
	// 	SUMMER: "summer",
	// 	WINTER: "winter",
	// 	SPRING: "spring",
	// 	AUTUMN: "autumn",
	// }

	// console.log(seasons.AUTUMN)
	//console.log("Linkedy", linkType)
	//console.log("Linkedy", rating)

	const propertyNames = Object.entries(rating);
	propertyNames.pop();

	const { average, textRating } = calculateRating(propertyNames);

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

				<h1 className='font-black mx-2 text-4xl md:text-6xl lg:text-6xl tracking-tighter leading-tight md:leading-none mb-2 md:text-left'>
					{/*isFraction ? Math.floor(average) + ".5" : Math.floor(average)*/}
					{average.toFixed(2)}
				</h1>

				<p className=' mx-1 text-xl font-black'>{textRating}</p>
			</div>

			<p className=' font-Montserrat font-medium  my-3 mt-2  text-lg '>
				{linkType === "food" ? "Restaurant/Food" : "Hotel"} rating breakdown{" "}
			</p>
			<div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 max-w-8xl'>
				<div className='grid grid-cols-1  gap-x-8  lg:gap-x-20 md:grid-cols-1 lg:grid-cols-3 '>
					{propertyNames.map((item) => {
						//console.log(item);

						return (
							<div key={item[0]} className='flex align-middle items-center'>
								<p className='mr-2 my-1 text-base font-medium md:text-lg flex-1'>
									{item[0].replace(/_/g, " ")}
								</p>
								<ProgressRating progress={item[1]} />
							</div>
						);
					})}

					{/*amenities && (
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
								)*/}
				</div>
			</div>
		</>
	);
};

export default StarRating;
