export default {
    name: 'youtube',
    type: 'object',
    title: 'YouTube Embed',
    fields: [
        {
            name: 'description',
            title: 'Video description',
            type:'string',

        },
      {
        name: 'url',
        type: 'url',
        title: 'YouTube video URL'
        
      }
    ]
  }