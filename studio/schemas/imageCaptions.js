const imageCaptions = {
    name: 'imgcaptions',
    title: 'ImageCaptions',
    type: 'object',
    fields: [
        {
            name: "caption",
            type: "string",
            title: "Photo Caption",
            options: {
                isHightlighted: true,
            },
        },
        {
            name: "attribution",
            type: "string",
            
        },
    ]
  }

  export default imageCaptions;