import {MdAccountCircle as icon} from 'react-icons/md'

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
    {
      name: 'portraitPhotoImage',
      title: 'Portrait Photo',
      type: 'image',
    },
    {
      name: 'photoCredit',
      title: 'Photo Credit',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
}
