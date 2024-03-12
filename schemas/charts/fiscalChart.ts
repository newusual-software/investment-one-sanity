// fiscalChart.js

export default {
    name: 'fiscalChart',
    title: 'Fiscal Chart',
    type: 'document',
    fields: [
      {
        name: 'options',
        title: 'Options',
        type: 'object',
        fields: [
          {
            name: 'responsive',
            title: 'Responsive',
            type: 'boolean',
            description: 'Set to true for responsive chart',
          },
          {
            name: 'plugins',
            title: 'Plugins',
            type: 'object',
            fields: [
              {
                name: 'legend',
                title: 'Legend',
                type: 'object',
                fields: [
                  {
                    name: 'position',
                    title: 'Position',
                    type: 'string',
                    description: 'Position of the legend',
                  },
                ],
              },
              {
                name: 'title',
                title: 'Title',
                type: 'object',
                fields: [
                  {
                    name: 'display',
                    title: 'Display',
                    type: 'boolean',
                    description: 'Set to true to display the title',
                  },
                  {
                    name: 'text',
                    title: 'Text',
                    type: 'string',
                    description: 'Text for the chart title',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'labels',
        title: 'Labels',
        type: 'array',
        of: [{ type: 'string' }],
        description: 'Labels for the x-axis',
      },
      {
        name: 'datasets',
        title: 'Datasets',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'label',
                title: 'Label',
                type: 'string',
                description: 'Label for the dataset',
              },
              {
                name: 'data',
                title: 'Data',
                type: 'array',
                of: [{ type: 'number' }],
                description: 'Data points for the dataset',
              },
              {
                name: 'backgroundColor',
                title: 'Background Color',
                type: 'string',
                description: 'Background color for the dataset',
              },
            ],
          },
        ],
      },
    ],
  };
  