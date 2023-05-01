import {MdLocalPlay as icon} from 'react-icons/md'

export default {
  name: 'people',
  title: 'People',
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
      name: 'position',
      title: 'Position',
      type: 'string',
    },
    {
      name: 'group',
      title: 'Group',
      type: 'boolean',
    },
    {
      name: 'bioLink',
      title: 'Bio Link',
      type: 'url',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'position',
    },
  },
}
