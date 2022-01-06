const TechRating = {
	type: "object",
	name: "techRating",
	description: "Rating for Room Tech",
	title: "techRating",

	fieldsets: [{ name: "social", title: "Yes or NO  for tech items in room" }],
	options: {
		collapsible: true, // Makes the whole fieldset collapsible
		collapsed: false, // Defines if the fieldset should be collapsed by default or not
		columns: 3, // Defines a grid for the fields and how many columns it should have
	},
	initialValue: {
		USB: "No",
		HDMI: "No",
		TV: "No",
		Chromecast: "No",
		Wired: "No",
		Bluetooth: "No",
	},

	fields: [
		{
			title: "USB Ports",
			name: "USB",
			type: "string",

			options: {
				list: [
					{ title: "Yes", value: "Yes" },
					{ title: "No", value: "No" },
				],
				layout: "radio",
			},

			

			//validation: (Rule) => Rule.required().min(1).max(5),
		},

		{
			title: "HDMI Ports",
			name: "HDMI",
			type: "string",

			options: {
				list: [
					{ title: "Yes", value: "Yes" },
					{ title: "No", value: "No" },
				],
				layout: "radio",
			},

			
			//validation: (Rule) => Rule.required().min(1).max(5),
		},
		{
			title: "Smart TV",
			name: "TV",
			type: "string",

			options: {
				list: [
					{ title: "Yes", value: "Yes" },
					{ title: "No", value: "No" },
				],
				layout: "radio",
			},

			

			//validation: (Rule) => Rule.required().min(1).max(5),
		},
		{
			title: "Chromecast",
			name: "Chromecast",
			type: "string",

			options: {
				list: [
					{ title: "Yes", value: "Yes" },
					{ title: "No", value: "No" },
				],
				layout: "radio",
			},

			

			//validation: (Rule) => Rule.required().min(1).max(5),
		},

		{
			title: "Wired Internet",
			name: "Wired",
			type: "string",

			options: {
				list: [
					{ title: "Yes", value: "Yes" },
					{ title: "No", value: "No" },
				],
				layout: "radio",
			},

			

			//validation: (Rule) => Rule.required().min(1).max(5),
		},
		{
			title: "Bluetooth Speaker",
			name: "Bluetooth",
			type: "string",

			options: {
				list: [
                    { title: "Yes", value: "Yes" },
					{ title: "No", value: "No" },
				],
				layout: "radio",
			},

			

			//validation: (Rule) => Rule.required().min(1).max(5),
		},
		

		

		

		
	],
};

export default TechRating;
