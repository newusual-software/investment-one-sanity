export default {
  name: 'iefx',
  type: 'document',
  title: 'Chart Data',
  fields: [
    {
      name: 'chartTitle',
      type: 'string',
      title: 'Chart Title',
    },
    {
      name: 'xAxis',
      type: 'array',
      title: 'X Axis Data',
      of: [{ type: 'string' }],
      description: 'Labels for the x-axis (e.g., dates)',
    },
    {
      name: 'yAxis',
      type: 'array',
      title: 'Y Axis Data',
      of: [{ type: 'number' }],
      description: 'Values for the y-axis corresponding to the x-axis labels',
    },
    {
      name: 'colorSettings',
      type: 'object',
      title: 'Color Settings',
      fields: [
        {
          name: 'borderColor',
          type: 'string',
          title: 'Border Color',
          description: 'Color for the line border in RGBA format',
          initialValue: 'rgba(249, 115, 12, 1)',
        },
        {
          name: 'pointColor',
          type: 'string',
          title: 'Point Color',
          description: 'Color for the points in RGBA format',
          initialValue: 'rgba(249, 115, 12, 1)',
        },
      ],
    },
    {
      name: 'lineSettings',
      type: 'object',
      title: 'Line Settings',
      fields: [
        {
          name: 'smooth',
          type: 'boolean',
          title: 'Smooth Line',
          description: 'Whether the line should be smooth or straight',
          initialValue: true,
        },
        {
          name: 'tension',
          type: 'number',
          title: 'Line Tension',
          description: 'Amount of line tension (0 for straight lines, higher values for smoother lines)',
          initialValue: 0.5,
        },
      ],
    },
  ],
};
