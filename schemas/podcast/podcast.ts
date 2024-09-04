import {PlayIcon} from '@sanity/icons'

export default {
    name: 'Podcast',
    title: 'Podcast',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'marketType',
        title: 'Market Type',
        type: 'string',
      },
      {
        name: 'article',
        title: 'Article',
        type: 'text',
      },
      {
        name: 'audio',
        title: 'Audio',
        type: 'file',
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
        name: 'content',
        title: 'Content',
        type: 'array',
        of: [
          {
            type: 'block',
            styles: [
              {title: 'Normal', value: 'normal'},
              {title: 'Heading 1', value: 'h1'},
              {title: 'Heading 2', value: 'h2'},
              {title: 'Heading 3', value: 'h3'},
              {title: 'Heading 4', value: 'h4'},
              {title: 'Heading 5', value: 'h5'},
              {title: 'Heading 6', value: 'h6'},
              {title: 'Quote', value: 'blockquote'},
            ],
            lists: [
              {title: 'Bullet', value: 'bullet'},
              {title: 'Number', value: 'number'},
            ],
            marks: {
              decorators: [
                {title: 'Strong', value: 'strong'},
                {title: 'Emphasis', value: 'em'},
                {title: 'Underline', value: 'underline'},
                {title: 'Strike', value: 'strike-through'},
                {title: 'Code', value: 'code'},
              ],
            },
          },
          {
            type: 'image',
            fields: [
              {name: 'caption', title: 'Caption', type: 'string'},
              {name: 'alt', title: 'Alternative text', type: 'string'},
            ],
            options: {hotspot: true},
          },
          {
            name: 'youtube',
            type: 'object',
            title: 'YouTube Embed',
            icon: PlayIcon,
            fields: [
              {
                name: 'url',
                type: 'url',
                title: 'YouTube video URL',
              },
            ],
          },
        ],
        description: 'The content of the market insight blog post',
      },
    ],
  }
  