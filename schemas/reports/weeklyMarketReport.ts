export default {
  name: 'weeklyMarketReport',
  title: 'Weekly market Report',
  type: 'document',
  fields: [
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A brief description of the PDF report',
      validation: (Rule: any) => Rule.max(500).error('Description must not be more than 500 characters long.'),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'Preview image of the PDF report',
    },
    {
      name: 'file',
      title: 'File',
      type: 'file',
      description: 'PDF file',
      options: {
        accept: 'application/pdf',
      },
    },
  ],
};
