// inflationChart.js

export default {
  name: 'nseAsiChart',
  title: 'NSE ASI Chart',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: "title for the section",
      type: 'string',
      description: "Set Equity title"
    }, 
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      description: 'The cover image for the equity tab',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'smooth',
      title: 'smooth',
      type: 'boolean',
      description: 'Set to true for smooth chart',
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
          name: 'scales',
          title: 'Scales',
          type: 'object',
          fields: [
            {
              name: 'x',
              title: 'X-axis',
              type: 'object',
              fields: [
                {
                  name: 'ticks',
                  title: 'Ticks',
                  type: 'object',
                  fields: [
                    {
                      name: 'autoSkip',
                      title: 'Auto Skip',
                      type: 'boolean',
                      description:
                        'Enable automatic skipping of labels based on the space available',
                    },
                    {
                      name: 'maxTicksLimit',
                      title: 'Max Ticks Limit',
                      type: 'number',
                      description: 'Maximum number of ticks to display',
                    },
                    {
                      name: 'padding',
                      title: 'Padding',
                      type: 'number',
                      description: 'Padding between the tick label and the axis',
                    },
                    {
                      name: 'minRotation',
                      title: 'Min Rotation',
                      type: 'number',
                      description: 'Minimum rotation of tick labels',
                    },
                    {
                      name: 'maxRotation',
                      title: 'Max Rotation',
                      type: 'number',
                      description: 'Maximum rotation of tick labels',
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
      title: 'Datasets',
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
