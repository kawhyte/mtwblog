import React from "react";
import { render } from "react-dom";

import Stars from "./stars";

const StarRating = ({ rating }) => {





	let textRating = "NR";
	let isFraction = false;
	let locationFraction = false;
	let serviceFraction = false;
	let roomFraction = false;

	let average =
		(rating?.ratingLocation +
			rating?.ratingCleanliness +
			rating?.ratingService +
			rating?.ratingValue) /4;

	if (average - Math.floor(average) >= 0.5) {
		isFraction = true;
	}

	if (rating.ratingService % 1  >= 0.4) {
		serviceFraction = true;
	}



	// console.log("AVG  ", average)
	// console.log("rating?.ratingLocation ", rating?.ratingLocation)
	// console.log("rating?.ratingCleanliness ", rating?.ratingCleanliness)
	// console.log("rating?.ratingService ", rating?.ratingService%1)
	// console.log("rating?.ratingValue ", rating?.ratingValue)

//  console.log("Math.floor(average) ", Math.floor(average))
//  console.log("average ", average)
//  console.log("isFraction ", isFraction)
//  console.log("TEST ", rating?.ratingService % 1)

	// const heartIcons = Array(maxHearts)
	// 	.fill()
	// 	.map((_, index) => {
	// 		return <Heart key={index} />;
	// 	});
	switch (Math.floor(average)) {
		case 1:
			textRating = "Meh";
			break;
		case 2:
			textRating = "Ok-ish";
			break;
		case 3:
			textRating = "Good";
			break;
		case 4:
			textRating = "Great";
			break;
		case 5:
			textRating = "Awesome";
			break;

		default:
			textRating = "Hmmmm";
			break;
	}

	

	return (
		<>
			<div className='flex flex-col md:flex-row border-b mx-8  '>
				<div className='flex  justify-start items-center align-top mb-8 md:border-r '>
					<h1 className='font-playfair-display text-6xl md:text-7xl lg:text-7xl font-bold tracking-tighter leading-tight md:leading-none mb-2 md:text-left'>
						{isFraction ? Math.floor(average) + ".5" : Math.floor(average)}
					</h1>
					<div className='flex flex-col-reverse ml-3 mr-6 align-top justify-start '>
						<div className='flex flex-row justify-start align-middle   items-start '>
							<Stars stars={Math.floor(average)} isFraction={isFraction} />
						</div>
						<p className='font-playfair-display mx-1 my-2  text-xl font-bold'> {textRating}</p>
					</div>
				</div>

				<div className='md:my-4 md:ml-6 '>
					<div className='flex flex-row justify-items-center items-center align-middle '>
						<Stars stars={Math.floor(rating?.ratingLocation)} isFraction={rating?.ratingLocation % 1 > 0 ? true : false} />
						<p className='mx-6 my-1'>Location</p>
					</div>
					<div className='flex flex-row justify-items-center items-center align-middle'>
						<Stars stars={Math.floor(rating?.ratingCleanliness)} isFraction={rating?.ratingCleanliness % 1 > 0 ? true : false} />
						<p className='mx-6 my-1 '>
							Room<span className='italic text-sm'> (Comfort, Size & Amenities) </span>
						</p>
					</div>
					<div className='flex flex-row justify-items-center items-center align-middle'>
						<Stars stars={Math.floor(rating?.ratingService)} isFraction={rating?.ratingService% 1 > 0 ? true : false} />
						<p className='mx-6 my-1'>Service</p>
					</div>
					<div className='flex flex-row justify-items-center items-center align-middle'>
						<Stars stars={Math.floor(rating?.ratingValue)} isFraction={rating?.ratingValue% 1 > 0 ? true : false}/>
						<p className='mx-6 my-1'>Price</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default StarRating;
