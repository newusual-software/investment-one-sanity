import {PlayIcon} from '@sanity/icons'

const TitleStyle = (props: {
  children:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | Iterable<React.ReactNode>
    | null
    | undefined
}) => <span style={{fontFamily: 'Garamond', fontSize: '2em'}}>{props.children} </span>

export default {
  name: 'announcement',
  title: 'Announcement',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The title of the market insight blog post',
      validation: (Rule: any) => Rule.min(20).error('Title must be at least 30 characters long.'),
    },
    {
      name: 'marketType',
      title: 'Market Type',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A brief description of the market insight blog post',
      validation: (Rule: any) =>
        Rule.max(500).error('Title must not be more than 500 characters long.'),
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      description: 'The cover image for the market insight blog post',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
      description: 'The name of the author',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'Heading 1', value: 'h1'},
            {title: 'Heading 2', value: 'h2'},
            {title: 'Heading 3', value: 'h3'},
            {title: 'Heading 4', value: 'h4'},
            {title: 'Heading 5', value: 'h5'},
            {title: 'Heading 6', value: 'h6'},
            {title: 'Quote', value: 'blockquote'},
            {
              title: 'Title',
              value: 'title',
              component: TitleStyle,
            },
          ],
          lists: [
            {title: 'Bullet', value: 'bullet'},
            {title: 'Number', value: 'number'},
          ],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
              {title: 'Underline', value: 'underline'},
              {title: 'Strike', value: 'strike-through'},
              {title: 'Code', value: 'code'},
            ],
          },
        },
        {
          type: 'image',
          fields: [
            {name: 'caption', title: 'Caption', type: 'string'},
            {name: 'alt', title: 'Alternative text', type: 'string'},
          ],
          options: {hotspot: true},
        },
        {
          name: 'youtube',
          type: 'object',
          title: 'YouTube Embed',
          icon: PlayIcon,
          fields: [
            {
              name: 'url',
              type: 'url',
              title: 'YouTube video URL',
            },
          ],
        },
      ],
      description: 'The content of the market insight blog post',
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
