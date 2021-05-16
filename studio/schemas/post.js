export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'}
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}]
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime'
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
			title: "Overall Rating",
			name: "ratingOverall",
			type: "number",
			//validation: (Rule) => Rule.required().min(1).max(5),
		},
		{
			title: "Location Rating",
			name: "ratingLocation",
			type: "number",
			//validation: (Rule) => Rule.required().min(1).max(5),
		},
		{
			title: "Cleanliness Rating",
			name: "ratingCleanliness",
			type: "number",
			//validation: (Rule) => Rule.required().min(1).max(5),
		},
		{
			title: "Service Rating",
			name: "ratingService",
			type: "number",
			//validation: (Rule) => Rule.required().min(1).max(5),
		},
		{
			title: "Value Rating",
			name: "ratingValue",
			type: "number",
			//validation: (Rule) => Rule.required().min(1).max(5),
		},



{
			name: "pros",
			title: "Pros",
			description:"Add multiple Pros",
			type: "array",
			of: [{ type: "pros" }],
		},
		{
			name: "cons",
			title: "Cons",
			description:"Add multiple Cons",
			type: "array",
			of: [{ type: "cons" }],
		},




    {
			name: "verdict",
			title: "Verdict",
			description:"Add your Verdict",
			type: 'text'
		},

    {
      name: 'body',
      title: 'Body',
      type: 'blockContent'
    }
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage'
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`
      })
    }
  }
}
