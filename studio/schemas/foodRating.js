const FoodRating = {
	type: "object",
	name: "foodRating",
	description: "Rating for Food",
	title: "foodRating",

	fieldsets: [{ name: "social", title: "Give a rating 1-5 for each item" }],
	options: {
		collapsible: true, // Makes the whole fieldset collapsible
		collapsed: false, // Defines if the fieldset should be collapsed by default or not
		columns: 2, // Defines a grid for the fields and how many columns it should have
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
				],
				layout: "radio",
			},

			fieldset: "social",

			//validation: (Rule) => Rule.required().min(1).max(5),
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
				],
				layout: "radio",
			},

			fieldset: "social",
			//validation: (Rule) => Rule.required().min(1).max(5),
		},
		{
			title: "Presentation of food on Plate",
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
				],
				layout: "radio",
			},

			fieldset: "social",

			//validation: (Rule) => Rule.required().min(1).max(5),
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
				],
				layout: "radio",
			},

			fieldset: "social",

			//validation: (Rule) => Rule.required().min(1).max(5),
		},

		{
			title: "Restaurant Ambiance",
			name: "Ambiance",
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
				],
				layout: "radio",
			},

			fieldset: "social",

			//validation: (Rule) => Rule.required().min(1).max(5),
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
				],
				layout: "radio",
			},

			fieldset: "social",

			//validation: (Rule) => Rule.required().min(1).max(5),
		},
		{
			title: "Restaurant Bathroom Cleanliness",
			name: "Bathroom",
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
				],
				layout: "radio",
			},

			fieldset: "social",

			//validation: (Rule) => Rule.required().min(1).max(5),
		},

		{
			title: "Restaurant Memorability",
			name: "Memorability",
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
				],
				layout: "radio",
			},

			fieldset: "social",

			//validation: (Rule) => Rule.required().min(1).max(5),
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
				],
				layout: "radio",
			},

			fieldset: "social",

			//validation: (Rule) => Rule.required().min(1).max(5),
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
				],
				layout: "radio",
			},

			fieldset: "social",

			//validation: (Rule) => Rule.required().min(1).max(5),
		},
	],
};

export default FoodRating;
