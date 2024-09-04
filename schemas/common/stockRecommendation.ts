
export default {
  name: 'stockRecommendation',
  title: 'Stock Recommendation',
  type: 'document',
  fields: [
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Label',
              type: 'string',
            },
            {
              name: 'link',
              title: 'Link',
              type: 'url',
            }
          ],
        }
      ],
    }
  ]
};
