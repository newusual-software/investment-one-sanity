// agroReport.js

export default {
    name: 'bankingReport',
    title: 'Banking Report',
    type: 'document',
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
  } 