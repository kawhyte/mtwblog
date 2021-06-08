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
