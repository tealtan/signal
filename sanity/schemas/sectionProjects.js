export default {
  name: 'sectionProjects',
  title: 'Section: Projects',
  type: 'document',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
    {
      name: 'projects',
      title: 'Projects',
      type: 'array',
      of: [{type: 'project'}],
    },
  ],
  preview: {
    select: {title: 'title'},
  },
}
