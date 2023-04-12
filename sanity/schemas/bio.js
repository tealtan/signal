import {MdLocalPlay as icon} from 'react-icons/md'

export default {
  name: 'bio',
  title: 'Bio Page',
  icon,
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200,
      },
    },
  {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
}
