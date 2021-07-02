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
	console.log("average)", average);

	if (average >= 0 && average < 2) {
		textRating = "Meh";
	} else if (average >= 2 && average < 3) {
		textRating = "Poor";
	} else if (average >= 3 && average < 4) {
		textRating = "Great";
	} else if (average >= 4 && average < 4.5) {
		textRating = "Awesome";
	} else if (average >= 4.5) {
		textRating = "Excellent";
	} else {
		textRating = "HMMMM"; // Fall through
	}

	
	return { isFraction, average, textRating };
}
