const HotelRating = {
	type: "object",
	name: "hotelRating",
	description: "Rating for HOTEL",
	title: "hotelRating",

	fieldsets: [{ name: "social", title: "Give a rating 1-5 for each item" }],
	options: {
		collapsible: true, // Makes the whole fieldset collapsible
		collapsed: false, // Defines if the fieldset should be collapsed by default or not
		columns: 3, // Defines a grid for the fields and how many columns it should have
	},
	initialValue: {
		Bed_Comfort: 1,
		Gym: 1,
		Internet_Speed: 1,
		Location: 1,
		Pool: 1,
		Room_Amenities: 1,
		Room_Cleanliness: 1,
		Service: 1,
		Value: 1,
	},

	fields: [
		{
			title: "Location of Hotel",
			name: "Location",
			type: "number",

			options: {
				list: [
					{ title: "5 stars", value: 5 },
					{ title: "4.5 stars", value: 4.5 },
					{ title: "4 stars", value: 4 },
					{ title: "3.5 stars", value: 3.5 },
					{ title: "3 stars", value: 3 },
					{ title: "2.5 stars", value: 2.5 },
					{ title: "2 stars", value: 2 },
					{ title: "1.5 stars", value: 1.5 },
					{ title: "1 stars", value: 1 },
					{ title: ".5 stars", value: .5 },
					
				],
				layout: "radio",
			},

			
			
		},
		{
			title: "Room Cleanliness",
			name: "Room_Cleanliness",
			type: "number",

			options: {
				list: [
					{ title: "5 stars", value: 5 },
					{ title: "4.5 stars", value: 4.5 },
					{ title: "4 stars", value: 4 },
					{ title: "3.5 stars", value: 3.5 },
					{ title: "3 stars", value: 3 },
					{ title: "2.5 stars", value: 2.5 },
					{ title: "2 stars", value: 2 },
					{ title: "1.5 stars", value: 1.5 },
					{ title: "1 stars", value: 1 },
					{ title: ".5 stars", value: .5 },
				
				],
				layout: "radio",
			},

		},
		{
			title: "Hotel Service",
			name: "Service",
			type: "number",

			options: {
				list: [
					{ title: "5 stars", value: 5 },
					{ title: "4.5 stars", value: 4.5 },
					{ title: "4 stars", value: 4 },
					{ title: "3.5 stars", value: 3.5 },
					{ title: "3 stars", value: 3 },
					{ title: "2.5 stars", value: 2.5 },
					{ title: "2 stars", value: 2 },
					{ title: "1.5 stars", value: 1.5 },
					{ title: "1 stars", value: 1 },
					{ title: ".5 stars", value: .5 },
					
				],
				layout: "radio",
			},

		},

		{
			title: "Bed Comfort",
			name: "Bed_Comfort",
			type: "number",

			options: {
				list: [
					{ title: "5 stars", value: 5 },
					{ title: "4.5 stars", value: 4.5 },
					{ title: "4 stars", value: 4 },
					{ title: "3.5 stars", value: 3.5 },
					{ title: "3 stars", value: 3 },
					{ title: "2.5 stars", value: 2.5 },
					{ title: "2 stars", value: 2 },
					{ title: "1.5 stars", value: 1.5 },
					{ title: "1 stars", value: 1 },
					{ title: ".5 stars", value: .5 },
					
				],
				layout: "radio",
			},

		},
		{
			title: "Internet Speed",
			name: "Internet_Speed",
			type: "number",
			description:"Test",
			//hidden: true,

			options: {
				list: [
					{ title: "5 stars (Excellent)", value: 5 },
					{ title: "4.5 stars (Near Excellent)", value: 4.5 },
					{ title: "4 stars (Very Fast)", value: 4 },
					{ title: "3.5 stars (Fast)", value: 3.5 },
					{ title: "3 stars (Great)", value: 3 },
					{ title: "2.5 stars (Good)", value: 2.5 },
					{ title: "2 stars (Above Average)", value: 2 },
					{ title: "1.5 stars(Average) ", value: 1.5 },
					{ title: "1 stars  (Poor)", value: 1 },
					{ title: ".5 stars (Horrible)", value: .5 },
					{ title: "No Internet", value: 0 },
				],
				layout: "radio",
			},

		},
		{
			title: "Room Amenities",
			name: "Room_Amenities",
			type: "number",

			options: {
				list: [
					{ title: "5 stars", value: 5 },
					{ title: "4.5 stars", value: 4.5 },
					{ title: "4 stars", value: 4 },
					{ title: "3.5 stars", value: 3.5 },
					{ title: "3 stars", value: 3 },
					{ title: "2.5 stars", value: 2.5 },
					{ title: "2 stars", value: 2 },
					{ title: "1.5 stars", value: 1.5 },
					{ title: "1 stars", value: 1 },
					{ title: ".5 stars", value: .5 },
					
				],
				layout: "radio",
			},

		},
		{
			title: "Hotel Gym",
			name: "Gym",
			type: "number",

			options: {
				list: [
					{ title: "5 stars", value: 5 },
					{ title: "4.5 stars", value: 4.5 },
					{ title: "4 stars", value: 4 },
					{ title: "3.5 stars", value: 3.5 },
					{ title: "3 stars", value: 3 },
					{ title: "2.5 stars", value: 2.5 },
					{ title: "2 stars", value: 2 },
					{ title: "1.5 stars", value: 1.5 },
					{ title: "1 stars", value: 1 },
					{ title: ".5 stars", value: .5 },
					{ title: "No Gym", value: 0 },
				],
				layout: "radio",
			},

		},
		{
			title: " Hotel Pool",
			name: "Pool",
			type: "number",

			options: {
				list: [
					{ title: "5 stars", value: 5 },
					{ title: "4.5 stars", value: 4.5 },
					{ title: "4 stars", value: 4 },
					{ title: "3.5 stars", value: 3.5 },
					{ title: "3 stars", value: 3 },
					{ title: "2.5 stars", value: 2.5 },
					{ title: "2 stars", value: 2 },
					{ title: "1.5 stars", value: 1.5 },
					{ title: "1 stars", value: 1 },
					{ title: ".5 stars", value: .5 },
					{ title: "No Pool", value: 0 },
				],
				layout: "radio",
			},

		},

		{
			title: "Hotel Value",
			name: "Value",
			type: "number",

			options: {
				list: [
					{ title: "5 stars", value: 5 },
					{ title: "4.5 stars", value: 4.5 },
					{ title: "4 stars", value: 4 },
					{ title: "3.5 stars", value: 3.5 },
					{ title: "3 stars", value: 3 },
					{ title: "2.5 stars", value: 2.5 },
					{ title: "2 stars", value: 2 },
					{ title: "1.5 stars", value: 1.5 },
					{ title: "1 stars", value: 1 },
					{ title: ".5 stars", value: .5 },
					
				],
				layout: "radio",
			},
		},

		
	],
};

export default HotelRating;


{/*
	title: "Overall",
	name: "ratingOverall",
	type: "number",
	hidden: true,

	options: {
		list: [
			{ title: "5 stars", value: 5 },
			{ title: "4.5 stars", value: 4.5 },
			{ title: "4 stars", value: 4 },
			{ title: "3.5 stars", value: 3.5 },
			{ title: "3 stars", value: 3 },
			{ title: "2.5 stars", value: 2.5 },
			{ title: "2 stars", value: 2 },
			{ title: "1.5 stars", value: 1.5 },
			{ title: "1 stars", value: 1 },
			{ title: ".5 stars", value: .5 },
			
		],
		layout: "radio",
	},

	

	//validation: (Rule) => Rule.required().min(1).max(5),
*/}