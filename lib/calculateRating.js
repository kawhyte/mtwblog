export function calculateRating(rating, amenities = []) {
	let textRating = "NR";
	let isFraction = false;
	let serviceFraction = false;
	let total = 0;
	let amenityLenght = 0;

	if (amenities.length > 0) {
		total = amenities.reduce(function (sum, current) {
			return sum + current.amenitiesRating;
		}, 0);

		amenityLenght = amenities.length;
	}

	let average =
		(rating?.ratingLocation +
			rating?.ratingCleanliness +
			rating?.ratingService +
			rating?.ratingValue +
			total) /
		(4 + amenityLenght);

	if (average - Math.floor(average) >= 0.5) {
		isFraction = true;
	}

	if (rating.ratingService % 1 >= 0.4) {
		serviceFraction = true;
	}
	//console.log("Math.floor(average)", Math.floor(average));

	if (average > 0 && average < 2) {
		textRating = "Meh";
	} else if (average > 2 && average < 3) {
		textRating = "Poor";
	} else if (average > 3 && average < 4) {
		textRating = "Great";
	} else if (average > 4 && average < 4.2) {
		textRating = "Awesome";
	} else if (average > 4.2) {
		textRating = "Excellent";
	} else {
		textRating = "HMMMM"; // Fall through
	}

	// switch (Math.floor(average)) {

	// 	case 1:
	// 		textRating = "Meh";
	// 		break;
	// 	case 2:
	// 		textRating = "Good";
	// 		break;
	// 	case 3:
	// 		textRating = "Good";
	// 		break;
	// 	case 4:
	// 		textRating = "Great";
	// 		break;
	// 	case  4.3:
	// 		textRating = "Awesome";
	// 		break;

	// 	default:
	// 		textRating = "HMMM";
	// 		break;
	// }
	return { isFraction, average, textRating };
}
