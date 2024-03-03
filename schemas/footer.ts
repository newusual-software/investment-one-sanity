// footer.js
export default {
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      fields: [
        {
          name: 'cloudinaryUrl',
          title: 'Cloudinary URL',
          type: 'url',
          description: 'URL of the image hosted on Cloudinary',
        },
      ],
    },
    {
      name: 'email',
      title: 'Email Address',
      type: 'string',
    },
    {
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'platform',
              title: 'Social Platform',
              type: 'string',
              options: {
                list: [
                  {title: 'LinkedIn', value: 'linkedin'},
                  {title: 'Instagram', value: 'instagram'},
                  {title: 'X', value: 'X'},
                  {title: 'Facebook', value: 'facebook'},
                ],
              },
            },
            {
              name: 'link',
              title: 'Link',
              type: 'url',
            },
          ],
        },
      ],
    },
    {
      name: 'officeAddress',
      title: 'Office Address',
      type: 'string',
    },
    {
      name: 'phones',
      title: 'Phone Numbers',
      type: 'array',
      of: [{type: 'string'}],
    },
  ],
}
