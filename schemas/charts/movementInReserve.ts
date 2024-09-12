export default {
    name: 'movementInReserveChart',
    title: 'Movement In Reserve Chart',
    type: 'document',
    fields: [
      {
        name: 'xAxis',
        title: 'X-Axis Data',
        type: 'array',
        of: [{ type: 'string' }],
        description: 'Dates for the x-axis',
      },
      {
        name: 'y1',
        title: 'Y1 Data (Gross)',
        type: 'array',
        of: [{ type: 'number' }],
        description: 'Y1 values for the chart representing Gross',
      },
      {
        name: 'y2',
        title: 'Y2 Data (Liquid)',
        type: 'array',
        of: [{ type: 'number' }],
        description: 'Y2 values for the chart representing Liquid',
      },
     
    ],
  };
  