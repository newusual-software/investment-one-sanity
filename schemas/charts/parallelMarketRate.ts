// charts.js
export default {
    name: 'parallelMarketRate',
    type: 'document',
    title: 'Parallel Market Rate chart',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
      },
      {
        name: 'labels',
        type: 'array',
        title: 'Labels',
        of: [{type: 'string'}],
      },
      {
        name: 'datasets',
        type: 'array',
        title: 'Datasets',
        of: [{
          type: 'object',
          fields: [
            {
              name: 'label',
              type: 'string',
              title: 'Label',
            },
            {
              name: 'data',
              type: 'array',
              title: 'Data',
              of: [{type: 'number'}],
            },
            {
              name: 'backgroundColor',
              title: 'Background Color',
              type: 'string'
            },
            {
              name: 'borderColor',
              title: 'Border Color',
              type: 'string',
            },
            {
              name: 'borderWidth',
              type: 'number',
              title: 'Border Width',
            },
            {
              name: 'pointRadius',
              type: 'number',
              title: 'Point Radius',
            },
            {
              name: 'pointHitRadius',
              type: 'number',
              title: 'Point Hit Radius',
            },
            {
              name: 'pointBorderColor',
              type: 'string',
              title: 'Point Border Color',
            },
            {
              name: 'pointBackgroundColor',
              type: 'string',
              title: 'Point Background Color',
            },
          ]
        }]
      }
    ]
  }
  