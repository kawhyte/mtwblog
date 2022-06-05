import { FaBook } from "react-icons/fa";

const Story = {
	name: "story",
	title: "Stories",
	type: "document",
	icon: FaBook,

	fields: [


		{
			title: "Select the type of post (Story or Guide)",
			description: "",
			name: "linkType",
			type: "string",
			validation: (Rule) => Rule.required(),
			options: {
				list: [
					{ title: "Story", value: "Story" },
					{ title: "Guide", value: "Guide" },
				],
				layout: "radio",
			},
		},
		


		{
			name: "title",
			title: "Title",
			type: "string",
			validation: (Rule) =>
				Rule.required().max(100).warning("Shorter titles are usually better"),
		},
		
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			validation: (Rule) => Rule.required(),
			options: {
				source: "title",
				maxLength: 96,
			},
		},

		{
			name: "mainImage",
			title: "Main image",
			type: "image",
			validation: (Rule) => Rule.required(),
			options: {
				hotspot: true,
			},
		},
		{
			name: "mainImageGallery",
			title: "Main image Gallery (4 images REQUIRED)",
			description:"These images will appear beside the main image (4 images REQUIRED)",
			type: "mainImageGallery",
			
		},

		{
			name: "publishedAt",
			title: "Story/Guide Date",
			type: "datetime",
			validation: (Rule) => Rule.required(),
			options: {
				calendarTodayLabel: "Today",
			},
		},
		{
			name: "address",
			type: "string",
			title: "Category or Type (Story/Guide)",
			hidden: true,
		},
		{
			name: "body",
			title: "Body",
			type: "blockContent",
		},

		{
			name: "gallery",
			type: "gallery",
			description:"Add photos for the gallery (optional)"
		},
	],

	preview: {
		select: {
			title: "title",
			author: "author.name",
			media: "mainImage",
		},
		prepare(selection) {
			const { author } = selection;
			return Object.assign({}, selection, {
				subtitle: author && `by ${author}`,
			});
		},
	},
};

export default Story;
