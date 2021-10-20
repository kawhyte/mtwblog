import { HOTEL, AIRPORT, FOOD, DAY_TRIP } from "../lib/constants";

const ratingItem = {
	//Hotel
	Location: {
		name: "Location",
		icon: "/icon/location.svg",
	},
	Bed_Comfort: {
		name: "Bed Comfort",
		icon: "/icon/bed.svg",
	},
	Room_Cleanliness: {
		name: "Room Cleanliness",
		icon: "/icon/clean.svg",
	},
	Gym: {
		name: "Gym",
		icon: "/icon/gym.svg",
	},
	Pool: {
		name: "Pool",
		icon: "/icon/pool.svg",
	},
	Service: {
		name: "Service",
		icon: "/icon/bathroom.svg",
	},
	Internet_Speed: {
		name: "Wifi Speed",
		icon: "/icon/wifi.svg",
	},
	Room_Amenities: {
		name: "Room Amenities",
		icon: "/icon/amenities.svg",
	},
	Value: {
		name: "Value",
		icon: "/icon/value.svg",
	},

	/// Food

	Flavor_and_Taste: {
		name: "Taste",
		icon: "/icon/taste.svg",
	},
	Presentation_on_Plate: {
		name: "Presentation",
		icon: "/icon/presentation.svg",
	},
	Memorability: {
		name: "Memorability",
		icon: "/icon/memo.svg",
	},
	Ambiance: {
		name: "Ambiance",
		icon: "/icon/ambiance.svg",
	},
	Service: {
		name: "Service",
		icon: "/icon/coffee.svg",
	},
	Cleanliness: {
		name: "Cleanliness",
		icon: "/icon/clean.svg",
	},
	Bathroom: {
		name: "Bathroom",
		icon: "/icon/bathroom2.svg",
	},
};

export { ratingItem };

// export function getReviewType(categories) {
// 	let value1 = " ";
// 	let value2 = " ";
// 	let value3 = " ";
// 	let value4 = " ";
// 	let value5 = " ";
// 	let value6 = " ";
// 	let value7 = " ";
// 	let value8 = " ";
// 	let value9 = " ";
// 	switch (categories[0]._ref) {
// 		//Food
// 		case FOOD:
// 			value1 = "Flavor & Taste";
// 			value2 = "Presentation";
// 			value3 = "Service";
// 			value4 = "Value";
// 			value5 = "Ambiance";
// 			value6 = "Cleanliness";
// 			value7 = "Bathroom";
// 			value8 = "Location";
// 			value9 = "Memorability";
// 			break;
// 		//Hotel
// 		case HOTEL:
// 			value1 = "Location";
// 			value2 = "Cleanliness";
// 			value3 = "Service/Staff";
// 			value4 = "Value";
// 			value5 = "Bed Comfort";
// 			value6 = "Internet Speed";
// 			value7 = "Room Amenities";
// 			value8 = "Gym";
// 			value9 = "Pool";
// 			break;

// 		//Day Trips
// 		case DAY_TRIP:
// 			value1 = "Day Trips ";
// 			value2 = "Day Trips ";
// 			value3 = "Day Trips ";
// 			value4 = "Day Trips ";

// 			break;

// 		//AirPort
// 		case AIRPORT:
// 			value1 = "AirPort";
// 			value2 = "AirPort";
// 			value3 = "AirPort";
// 			value4 = "AirPort";

// 			break;

// 		default:
// 			// let value1 = "Category not found";
// 			// let value2 = "Category not found";
// 			// let value3 = "Category not found";
// 			// let value4 = "Category not found";
// 			break;
// 	}
// 	return {
// 		value1,
// 		value2,
// 		value3,
// 		value4,
// 		value5,
// 		value6,
// 		value7,
// 		value8,
// 		value9,
// 	};
// }
