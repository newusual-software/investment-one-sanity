// file: macroEconomicsGpdChart.js

export default {
  name: 'macroEconomicsGpdChart',
  title: 'Macro Economics GDP Chart',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: "title for the section",
      type: 'string',
      description: "Set macro economics title"
    }, 
    {
      name: 'smooth',
      title: 'Smooth Tension',
      type: 'boolean',
      description: 'Set to true for smooth tension, false for no tension',
    },
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
        {
          name: 'scales',
          title: 'Scales',
          type: 'object',
          fields: [
            {
              name: 'y',
              title: 'Y-axis',
              type: 'object',
              fields: [
                {
                  name: 'beginAtZero',
                  title: 'Begin at Zero',
                  type: 'boolean',
                  description: 'Set to true to begin the scale at zero',
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
                      description: 'Text for the y-axis title',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: 'elements',
          title: 'Elements',
          type: 'object',
          fields: [
            {
              name: 'line',
              title: 'Line',
              type: 'object',
              fields: [
                {
                  name: 'tension',
                  title: 'Tension',
                  type: 'number',
                  description: 'Tension value for the line',
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
      of: [{type: 'string'}],
      description: 'Labels for the x-axis',
    },
    {
      name: 'datasets',

      type: 'object',
      fields: [
        {
          name: 'fill',
          title: 'Fill',
          type: 'boolean',
          description: 'Whether to fill the area below the line',
        },
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
          of: [{type: 'number'}],
          description: 'Data points for the dataset',
        },
        {
          name: 'backgroundColor',
          title: 'Background Color',
          type: 'string',
          description: 'Background color for the dataset',
        },
        {
          name: 'borderColor',
          title: 'Border Color',
          type: 'string',
          description: 'Border color for the dataset',
        },
        {
          name: 'borderWidth',
          title: 'Border Width',
          type: 'number',
          description: 'Width of the border for the dataset',
        },
        {
          name: 'pointRadius',
          title: 'Point Radius',
          type: 'number',
          description: 'Radius of the points on the line',
        },
        {
          name: 'pointHitRadius',
          title: 'Point Hit Radius',
          type: 'number',
          description: 'Radius for determining if the point is hit',
        },
        {
          name: 'pointBorderColor',
          title: 'Point Border Color',
          type: 'string',
          description: 'Border color for the points on the line',
        },
        {
          name: 'pointBackgroundColor',
          title: 'Point Background Color',
          type: 'string',
          description: 'Background color for the points on the line',
        },
      ],
    },
  ],
}
