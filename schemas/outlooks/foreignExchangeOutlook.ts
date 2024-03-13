export default {
    name: 'foreignExchangeOutlook',
    title: 'Foreign Exchange outlook Report',
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
                name: 'title',
                title: 'Title',
                type: 'string',
                description: 'Title of the PDF report',
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
  