const secondaryMainImages = {
	name: "mainImageGallery",
	type: "object",
	title: "mainImageGallery",
	fields: [
		{
			name: "images",
			type: "array",
			title: "Add Images",
			validation: (Rule) => Rule.required(),
			of: [
				{
					//name: 'image',
					type: "galaryImage",
					//title: 'Image',
				},
			],
			options: {
				layout: "grid",
			},
		},
		// {
		//   name: 'display',
		//   type: 'string',
		//   title: 'Display as',
		//   description: 'How should we display these images?',
		//   options: {
		//     list: [
		//       { title: 'Stacked on top of eachother', value: 'stacked' },
		//       { title: 'In-line', value: 'inline' },
		//       { title: 'Carousel', value: 'carousel' },
		//     ],
		//     layout: 'radio', // <-- defaults to 'dropdown'
		//   },
		// },
		// {
		//   name: 'zoom',
		//   type: 'boolean',
		//   title: 'Zoom enabled',
		//   description: 'Should we enable zooming of images?',
		// },
	],
	preview: {
		select: {
			images: "images",
			image: "images.0",
		},
		prepare(selection) {
			const { images, image } = selection;

			return {
				title: `Gallery block of ${Object.keys(images).length} images`,
				subtitle: `Alt text: ${image.alt}`,
				media: image,
			};
		},
	},
};

export default secondaryMainImages;
