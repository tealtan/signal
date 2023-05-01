export default {
  name: 'sectionAbout',
  title: 'Section: About',
  type: 'document',
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
      name: 'bodyFullBio',
      title: 'Full Bio',
      type: 'blockContent',
    },
    {
      name: 'sidebar',
      title: 'Sidebar',
      type: 'text',
    },
  ],
  preview: {
    select: {title: 'title'},
  },
}
