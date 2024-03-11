// schema.js

export default {
  name: 'analystView',
  title: 'Analyst view',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The title of the market insight blog post',
      validation: (Rule: any) => Rule.min(20).error('Title must be at least 30 characters long.'),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A brief description of the market insight blog post',
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      description: 'The cover image for the market insight blog post',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Heading 1', value: 'h1' },
            { title: 'Heading 2', value: 'h2' },
            { title: 'Heading 3', value: 'h3' },
            { title: 'Heading 4', value: 'h4' },
            { title: 'Heading 5', value: 'h5' },
            { title: 'Heading 6', value: 'h6' }
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Number', value: 'number' },
          ],
        },
        {
          type: 'image',
          fields: [
            { name: 'caption', title: 'Caption', type: 'string', options: { isHighlighted: true } },
            { name: 'alt', title: 'Alternative text', type: 'string', options: { isHighlighted: true } },
          ],
          options: { hotspot: true },
        },
      ],
      description: 'The content of the market insight blog post',
    },
  ],
};
