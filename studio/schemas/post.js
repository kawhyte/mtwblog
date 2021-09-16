import { FaHotel } from "react-icons/fa";

export default {
	name: "post",
	title: "Reviews",
	type: "document",
	icon: FaHotel,
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
			validation: Rule => Rule.required().max(100).warning('Shorter titles are usually better')
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			validation: Rule => Rule.required(),
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
			validation: Rule => Rule.required(),
			options: {
				hotspot: true,
			},
		},
	
	
		{
			name: "categories",
			title: "Categories",
			type: "array",
			validation: Rule => Rule.required(),
			of: [{ type: "reference", to: { type: "category" } }],
		},
		{
			name: "publishedAt",
			title: "Visited Date",
			type: "datetime",
			validation: Rule => Rule.required(),
			options: {
				
				calendarTodayLabel: 'Today'
			  }
			
		},

		// {
		// 	name: "webLink",
		// 	type: "string",
		// 	title: "Website Link",
		// 	description: "Add the website link for the hotel",
		// },
		{
			name: "address",
			type: "string",
			title: "Location",
			validation: Rule => Rule.required(),
		},
		{
			name: "videoUrl",
			type: 'videoUrl',
			
			
		  },
		{
			name: "gallery",
			type: 'gallery',
			
			
		  },
		  



		  {
			title: "Select the type of link",
			description:
			  "External links go to other websites using the format `https://www.google.com`. Internal links are restricted to other pages in the SANITY database.",
			name: "linkType",
			type: "string",
			options: {
			  list: [
				{ title: "Hotel", value: "external" },
				{ title: "Food", value: "internal" },
			  ],
			  layout: "radio",
			},
		  },

		  {
			  name: "rating",
			  title: "Rating",
			  description: "Add a rating for each section.",
			  type: "rating",
			  hidden: ({ parent }) => parent?.linkType !== "external",
		
			},
		  {
			  name: "rating2",
			  title: "Rating",
			  description: "Add a rating for each section.",
			  type: "rating2",
			  hidden: ({ parent }) => parent?.linkType !== "internal",
		
			},
			{
				name: "amenities",
				title: "Additional rating",
				description: "Add additional rating ctaegory.",
				type: "array",
				of: [{ type: "amenities" }],
			},

		{
			title: "Positives",
			name: "positives",

			description: "Add multiple Positive points",
			validation: Rule => Rule.required(),
			type: "array",
			of: [{ type: "text" }],
		},

		{
			title: "Negatives",
			name: "negatives",
			description: "Add multiple Negative points",
			validation: Rule => Rule.required(),
			type: "array",
			of: [{ type: "text" }],
		},

		{
			name: "verdict",
			title: "Verdict",
			description: "Add your Verdict",
			validation: Rule => Rule.required(),
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
