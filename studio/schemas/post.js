import { FaPencilAlt } from "react-icons/fa";

const Post = {
	name: "post",
	title: "Reviews",
	type: "document",
	icon: FaPencilAlt,

	fields: [
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
		// {
		// 	name: "author",
		// 	title: "Author",
		// 	type: "reference",
		// 	to: { type: "author" },
		// },
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
			title: "Select the type of review (Hotel or Food)",
			description: "",
			name: "linkType",
			type: "string",
			validation: (Rule) => Rule.required(),
			options: {
				list: [
					{ title: "Hotel", value: "hotel" },
					{ title: "Food", value: "food" },
				],
				layout: "radio",
			},
		},
		// {
		// 	name: "categories",
		// 	title: "Categories",
		// 	type: "array",
		// 	validation: (Rule) => Rule.required(),
		// 	of: [{ type: "reference", to: { type: "category" } }],
		// },
		{
			name: "publishedAt",
			title: "Visited Date",
			type: "datetime",
			validation: (Rule) => Rule.required(),
			options: {
				calendarTodayLabel: "Today",
			},
		},

		{
			name: "address",
			type: "string",
			title: "Location",
			validation: (Rule) => Rule.required(),
		},
		{
			name: "roomType",
			type: "string",
			title: "Room Type",
			description:"eg. 1 King Bed Lagoon Access (optional)",
			hidden: ({ parent }) => parent?.linkType !== "hotel",
			//validation: (Rule) => Rule.required(),
		},
		{
			name: "videoUrl",
			type: "videoUrl",
		},
		{
			name: "gallery",
			type: "gallery",
		},

		{
			name: "hotelRating",
			title: "Rating for Hotels",
			description: "Add a rating for each Hotel section.",
			type: "hotelRating",
			hidden: ({ parent }) => parent?.linkType !== "hotel",
		},
		{
			name: "foodRating",
			title: "Rating for Food",
			description: "Add a rating for each Food section.",
			type: "foodRating",
			hidden: ({ parent }) => parent?.linkType !== "food",
		},
		// {
		// 	name: "amenities",
		// 	title: "Additional rating",
		// 	description: "Add additional rating ctaegory.",
		// 	type: "array",
		// 	of: [{ type: "amenities" }],
		// },

		{
			title: "Positives",
			name: "positives",

			description: "Add multiple Positive points",
			validation: (Rule) => Rule.required(),
			type: "array",
			of: [{ type: "text" }],
		},

		{
			title: "Negatives",
			name: "negatives",
			description: "Add multiple Negative points",
			validation: (Rule) => Rule.required(),
			type: "array",
			of: [{ type: "text" }],
		},

		{
			name: "verdict",
			title: "Verdict",
			description: "Add your Verdict",
			validation: (Rule) => Rule.required(),
			type: "text",
		},

		{
			name: "body",
			title: "Body",
			type: "blockContent",
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

export default Post;
