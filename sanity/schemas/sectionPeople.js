export default {
  name: 'sectionPeople',
  title: 'Section: People',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'sectionA',
      title: 'Section A',
      type: 'blockContent',
    },
    {
      name: 'sectionAofPeopleLeftCol',
      title: 'Section A People (Left Column)',
      type: 'array',
      of: [{type: 'people'}],
    },
    {
      name: 'sectionAofPeopleRightCol',
      title: 'Section A People (Right Column)',
      type: 'array',
      of: [{type: 'people'}],
    },
    {
      name: 'sectionB',
      title: 'Section B',
      type: 'blockContent',
    },
    {
      name: 'sectionBofPeopleLeftCol',
      title: 'Section B People (Left Column)',
      type: 'array',
      of: [{type: 'people'}],
    },
    {
      name: 'sectionBofPeopleRightCol',
      title: 'Section B People (Right Column)',
      type: 'array',
      of: [{type: 'people'}],
    },
    {
      name: 'sectionC',
      title: 'Section C',
      type: 'blockContent',
    },
    {
      name: 'sectionCofPeopleLeftCol',
      title: 'Section C People (Left Column)',
      type: 'array',
      of: [{type: 'people'}],
    },
    {
      name: 'sectionCofPeopleRightCol',
      title: 'Section C People (Right Column)',
      type: 'array',
      of: [{type: 'people'}],
    },
  ],
  preview: {
    select: {title: 'title'},
  },
}
