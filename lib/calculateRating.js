export function calculateRating(rating) {
	let textRating = "NR";

	let isFraction = false;

	// Getting sum of numbers
	let sum = rating.reduce(function (a, b) {
		return a + b[1];
	}, 0);

	let average = sum / 9;


	if (average >= 0 && average < 2) {
		textRating = "Horrible";
	} else if (average >= 2 && average < 3) {
		textRating = "Poor";
	} else if (average >= 3 && average < 4) {
		textRating = "Fair";
	} else if (average >= 4 && average < 4.5) {
		textRating = "Great";
	} else if (average >= 4.5) {
		textRating = "Excellent";
	} else {
		textRating = "HMMMM";
		// Fall through
	}

	return { isFraction, average, textRating };
}
