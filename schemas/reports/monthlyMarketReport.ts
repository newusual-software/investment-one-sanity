export default {
  name: 'monthlyMarketReport',
  title: 'Monthly Market Report',
  type: 'document',
  fields: [
    {
      name: 'pdfs',
      title: 'PDFs',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              description: 'A brief description of the market insight blog post',
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
        },
      ],
    },
  ],
};
