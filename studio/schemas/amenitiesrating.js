export default{
    name: 'amenitiesrating',
    title: 'Amenities rating',
    type:'object',
    fields: [

        {
            name: 'amenitiesRatingTitle',
            title: 'Amenity Title',
            type:'string',

        },
        {
            name: 'amenitiesRatingDescription',
            title: 'Amenities rating Description',
            type:'string',

        },
        {
			title: "Rating",
			name: "amenitiesratingLocation",
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

			
			//validation: (Rule) => Rule.required().min(1).max(5),
		},

        
    ]
}