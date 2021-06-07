export default {
	title: "Video URL",
	name: "videoUrl",
	type: "object",
	fieldsets: [{ name: "video", title: "Add Video title and Url" }],

	options: {
		collapsible: true, // Makes the whole fieldset collapsible
		collapsed: false, // Defines if the fieldset should be collapsed by default or not
		columns: 2, // Defines a grid for the fields and how many columns it should have
	},

	fields: [
		{
			title: "Video title",
			name: "title",
			type: "string",

			fieldset: "video",
			//validation: (Rule) => Rule.required().min(1).max(5),
		},

		{
			title: "Youtube Video URL",
			name: "url",
			type: "string",

			fieldset: "video",
			//validation: (Rule) => Rule.required().min(1).max(5),
		},
	],
};
