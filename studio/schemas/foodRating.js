export default {
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
		ratingAmenities: 1,
		ratingBed: 1,
		ratingCleanliness: 1,
		ratingGym: 1,
		ratingInternet: 1,
		ratingLocation: 1,
		ratingPool: 1,
		ratingService: 1,
		ratingValue: 1,
	},

	fields: [

		{
			title: "Location",
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
			title: "Flavor & Taste",
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
			title: "Presentation",
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
			title: "Service/Staff",
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
			title: "Ambiance",
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
			title: "Cleanliness",
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
			title: "Bathroom",
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
			title: "Memorability",
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
			title: "Value",
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
