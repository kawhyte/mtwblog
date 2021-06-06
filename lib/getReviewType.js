import { HOTEL, AIRPORT, FOOD, DAY_TRIP } from "../lib/constants";


export function getReviewType(categories) {
	
	let value1 = " ";
	let value2 = " ";
	let value3 = " ";
	let value4 = " ";
	switch (categories[0]._ref) {

	
		//Food
		case FOOD:
			value1 = "Flavor & Taste";
			value2 = "Presentation";
			value3 = "Service & Setting";
			value4 = "Value";
			break;
		//Hotel
		case HOTEL:
			value1 = "Location";
			value2 = "Room";
			value3 = "Service/Staff";
			value4 = "Price";
			break;

		//Day Trips
		case DAY_TRIP:
			value1 = "Day Trips ";
			value2 = "Day Trips ";
			value3 = "Day Trips ";
			value4 = "Day Trips ";

			break;

		//AirPort
		case AIRPORT:
			value1 = "AirPort";
			value2 = "AirPort";
			value3 = "AirPort";
			value4 = "AirPort";

			break;

		default:

			// let value1 = "Category not found";
			// let value2 = "Category not found";
			// let value3 = "Category not found";
			// let value4 = "Category not found";
			break;
	}
	return { value1, value2, value3, value4 };
}
