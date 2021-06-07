export function calculateRating(rating, amenities) {

	
	let textRating = "NR";
	let isFraction = false;
	let serviceFraction = false;


	// const total =  amenities.reduce ((a,b) =>(

	// 	{x:a.amenitiesRating + b.amenitiesRating }
	// )


	// )


	var total = amenities.reduce(function (sum, current) {
		return sum + current.amenitiesRating;
	  }, 0);


	console.log("TOTAL ", total);

	let average =
		(rating?.ratingLocation +
			rating?.ratingCleanliness +
			rating?.ratingService +
			rating?.ratingValue + total) /
		(4 + amenities.length);

		console.log("average ", average);

	if (average - Math.floor(average) >= 0.5) {
		isFraction = true;
	}

	if (rating.ratingService % 1 >= 0.4) {
		serviceFraction = true;
	}

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
	return { isFraction, average, textRating };
}
