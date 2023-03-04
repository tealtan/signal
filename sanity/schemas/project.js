import {MdLocalPlay as icon} from 'react-icons/md'

export default {
  name: 'project',
  title: 'Project',
  icon,
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
    {
      name: 'sidebar',
      title: 'Sidebar',
      type: 'blockContent',
    }
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
}
