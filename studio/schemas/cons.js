export default {
	name: 'cons',
	title: 'Negatives',
	type: 'document',
	fields: [
		{
			name: 'reviewConText',
			title: 'Negatives',
			type: 'string',
		},
        {
            name: 'post',
            type: 'reference',
            to: [
              {type: 'post'}
            ]
          }
		//{
			// name: "rating",
			// title: "Rating",
			// type: "string",
			// options: {
			// 	list: [
			// 		{ title: "5 stars", value: "5-stars" },
			// 		{ title: "4 stars", value: "4-stars" },
			// 		{ title: "3 stars", value: "3-stars" },
			// 		{ title: "2 stars", value: "2-stars" },
			// 		{ title: "1 stars", value: "1-stars" },
			// 	],
			// 	layout: 'radio',
			// },
		//},
	],

    // type: 'object',
    // name: 'person',
    // fieldsets: [
    //   {name: 'social', title: 'Social media handles'}
    // ],
    // fields: [
    //   {
    //     title: 'Name',
    //     name: 'name',
    //     type: 'string'
    //   },
    //   {
    //     title: 'Twitter',
    //     name: 'twitter',
    //     type: 'string',
    //     fieldset: 'social'
    //   },
    //   {
    //     title: 'Instagram',
    //     name: 'instagram',
    //     type: 'string',
    //     fieldset: 'social'
    //   },
    //   {
    //     title: 'Facebook',
    //     name: 'facebook',
    //     type: 'string',
    //     fieldset: 'social'
    //   }
    // ]


};
