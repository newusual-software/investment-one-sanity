
export default ({
    name: 'marketInsightAds',
    title: 'Market Insight Ads',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        description: 'The main title of the market insight block',
      },
      {
        name: 'subtitle',
        title: 'Subtitle',
        type: 'string',
        description: 'The subtitle of the market insight block',
      },
      {
        name: 'Adimage',
        title: 'AdImage',
        type: 'image',
        description: 'The image displayed in the market insight block',
        options: {
          hotspot: true,
        },
        fields: [
          {
            name: 'cloudinaryUrl',
            title: 'Cloudinary URL',
            type: 'url',
            description: 'URL of the image hosted on Cloudinary',
          },
        ],
      },
      {
        name: 'content',
        title: 'Content',
        type: 'text',
        description: 'The content of the market insight block',
      },
    ],
  })
  