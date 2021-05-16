export default {
	name: "post",
	title: "Post",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "title",
				maxLength: 96,
			},
		},
		{
			name: "author",
			title: "Author",
			type: "reference",
			to: { type: "author" },
		},
		{
			name: "mainImage",
			title: "Main image",
			type: "image",
			options: {
				hotspot: true,
			},
		},
		{
			name: "categories",
			title: "Categories",
			type: "array",
			of: [{ type: "reference", to: { type: "category" } }],
		},
		{
			name: "publishedAt",
			title: "Published at",
			type: "datetime",
		},

		{
			name: "webLink",
			type: "string",
			title: "Website Link",
			description: "Add the website link for the hotel",
		},
		{
			name: "address",
			type: "string",
			title: "Business address",
		},

		{
      name:'rating',
      title:'Ratings',
      type:'rating'

    },

		{
			title: "Positives",
			name: "positives",

			description: "Add multiple Positive points",
			type: "array",
			of: [{ type: "string" }],
		},

		{
			title: "Negatives",
			name: "negatives",
			description: "Add multiple Negative points",
			type: "array",
			of: [{ type: "string" }],
		},

		{
			name: "verdict",
			title: "Verdict",
			description: "Add your Verdict",
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
