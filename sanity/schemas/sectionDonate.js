export default {
  name: 'sectionDonate',
  title: 'Section: Donate',
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
      name: 'sidebarDonateButton',
      title: 'Sidebar Donate Button',
      type: 'text',
    },
    {
      name: 'sidebarText',
      title: 'Sidebar Text',
      type: 'blockContent',
    },
  ],
  preview: {
    select: {title: 'title'},
  },
}
