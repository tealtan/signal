export default {
  name: 'sectionPeople',
  title: 'Section: People',
  type: 'document',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
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
      name: 'sectionB',
      title: 'Section B',
      type: 'blockContent',
    },
	{
      name: 'sectionC',
      title: 'Section C',
      type: 'blockContent',
    },
  ],
  preview: {
    select: {title: 'title'},
  },
}
