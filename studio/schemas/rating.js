export default {
	type: "object",
	name: "rating",
	description: "Rate different areas",
	fieldsets: [{ name: "social", title: "Give a rating 1-5 for each item" }],
	options: {
		collapsible: true, // Makes the whole fieldset collapsible
		collapsed: false, // Defines if the fieldset should be collapsed by default or not
		columns: 2, // Defines a grid for the fields and how many columns it should have
	},

	fields: [
		{
			title: "Location",
			name: "ratingLocation",
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
			title: "Room (Comfort and Size)",
			name: "ratingCleanliness",
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
			title: "Service",
			name: "ratingService",
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
			title: "Price",
			name: "ratingValue",
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
			hidden:true,
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
