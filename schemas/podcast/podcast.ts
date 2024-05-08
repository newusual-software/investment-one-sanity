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
        name: 'videoUrl',
        title: 'Video URL',
        type: 'url',
      },
      {
        name: 'audio',
        title: 'Audio',
        type: 'file',
      },
    ],
  }
  