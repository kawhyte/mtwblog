const FoodRating = {
	type: "object",
	name: "foodRating",
	description: "Rating for Food",
	title: "foodRating",

	fieldsets: [{ name: "social", title: "Give a rating 1-5 for each item" }],
	options: {
		collapsible: true, // Makes the whole fieldset collapsible
		collapsed: false, // Defines if the fieldset should be collapsed by default or not
		columns: 3, // Defines a grid for the fields and how many columns it should have
	},
	initialValue: {
		Ambiance: 1,
		Bathroom: 1,
		Cleanliness: 1,
		Flavor_and_Taste: 1,
		Location: 1,
		Memorability: 1,
		Presentation_on_Plate: 1,
		Service: 1,
		Value: 1,
	},

	fields: [
		{
			title: "Restaurant Location",
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
			title: "Food Flavor & Taste",
			name: "Flavor_and_Taste",
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
			title: "Food Presentation",
			name: "Presentation_on_Plate",
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
			title: "Restaurant Service/Staff",
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
			title: "Restaurant Ambiance",
			name: "Ambiance",
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
					{ title: ".5 stars", value: .5 }
				],
				layout: "radio",
			},

		
		},
		{
			title: "Restaurant Cleanliness",
			name: "Cleanliness",
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
			title: "Restaurant Bathroom Cleanliness",
			name: "Bathroom",
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
					{ title: "No bathroom", value: 0 },
				],
				layout: "radio",
			},


		},

		{
			title: "Would we return to this Restaurant?",
			name: "Memorability",
			type: "number",

			options: {
				list: [
					{ title: "5 stars - Fo sho! 👍🏽", value: 5 },
					{ title: "4.5 stars - Yes ", value: 4.5 },
					{ title: "4 stars", value: 4 },
					{ title: "3.5 stars", value: 3.5 },
					{ title: "3 stars - Maybe", value: 3 },
					{ title: "2.5 stars", value: 2.5 },
					{ title: "2 stars", value: 2 },
					{ title: "1.5 stars ", value: 1.5 },
					{ title: "1 star", value: 1 },
					{ title: ".5 star - F*ck No! 🤬", value: .5 },
				],
				layout: "radio",
			},

		},

		{
			title: "Food Value",
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

		{
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

		},
	],
};

export default FoodRating;
