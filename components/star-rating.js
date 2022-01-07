import React from "react";
import { ratingItem } from "../lib/getReviewType";
import { calculateRating } from "../lib/calculateRating";
import Image from "next/image";
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
	//console.log("Star LinkTYPE", linkType)
	//const { average, textRating } = calculateRating(propertyNames);
	// console.log("getReviewType", ratingItem["Bed_Comfort"].name);

	const propertyNames = Object.entries(rating);
	propertyNames.pop();

	const { average, textRating } = calculateRating(propertyNames);
	//console.log("propertyNames",propertyNames)
	console.log("rating",rating)
	return (
		<>
			<div className='flex  justify-start items-end align-top mb-6   '>
				<div className='flex flex-col justify-center items-center bg-pink-500 p-3 rounded-2xl'>
					<h1 className='font-black text-white mx-2 text-4xl md:text-6xl lg:text-6xl tracking-tighter leading-tight md:leading-none md:text-left'>
						{/*isFraction ? Math.floor(average) + ".5" : Math.floor(average)*/}
						{average.toFixed(2)}
					</h1>
					<div className='flex items-center'>
						<span className=' text-base uppercase text-white'>out of 5</span>
						<span>
							<svg
								className='h-3 w-3 ml-1 mb-1  fill-current text-white'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='3 3 18 18'
								aria-hidden='true'
								focusable='false'>
								<path d='M20.83,9.15l-6-.52L12.46,3.08h-.92L9.18,8.63l-6,.52L2.89,10l4.55,4L6.08,19.85l.75.55L12,17.3l5.17,3.1.75-.55L16.56,14l4.55-4Z'></path>
							</svg>
						</span>
					</div>
				</div>
				<p className=' ml-4 text-3xl font-black'>{textRating}</p>
			</div>

			<p className=' font-Montserrat font-medium  my-3 mt-2  text-lg '>
				{linkType === "hotel" ? "Hotel" : "Restaurant/Food"} rating breakdown{" "}
			</p>
			<div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 max-w-8xl '>
				<div className='grid grid-cols-1  gap-x-8 gap-y-5 lg:gap-y-4  md:gap-x-10  lg:gap-x-10 md:grid-cols-1 lg:grid-cols-3 mt-3 '>
					{propertyNames.map((item) => {
						let text = item[0];

						return (
							<div key={item[0]} className=' border flex flex-col justify-center p-3 rounded-2xl '>
								<div className='flex flex-row justify-start items-center'>
									<span className=' pr-4'>
										<Image
											className=''
											src={ratingItem[text].icon}
											alt={"icon"}
											width={25}
											height={25}
										/>
									</span>

									{item[1] > 0
										? `${ratingItem[text].name}` 
										: `No on-site ${ratingItem[text].name} availiable`} 
								</div>
								{item[1] > 0 && <div className=' flex-1 flex flex-row align-middle items-center'>
									<p className='mr-2 my-1 text-base font-medium md:text-lg '>
										{/*item[0].replace(/_/g, " ")*/}
									</p>
									 <ProgressRating progress={item[1]} />
								</div>}
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default StarRating;
