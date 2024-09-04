// schema.js

export default {
    name: 'homeBanner',
    title: 'Home Banner',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        description: 'The main title for the home banner',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        description: 'Description for the home banner',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        description: 'Background image for the home banner',
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
        name: 'buttonText',
        title: 'Button Text',
        type: 'string',
        description: 'Text for the button',
      },
      {
        name: 'buttonColor',
        title: 'Button Color',
        type: 'string',
        description: 'Color for the button',
      },
      {
        name: 'videoUrl',
        title: 'Video URL',
        type: 'url',
      },
    ],
  };
  