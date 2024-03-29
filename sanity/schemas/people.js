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
      name: 'isInstrument',
      title: 'Is an Instrument',
      type: 'boolean',
    },
    {
      name: 'bioLink',
      title: 'Bio Link',
      type: 'url',
      validation: Rule => Rule.uri({
        allowRelative: true
      })
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'position',
    },
  },
}
