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
      description: 'Uses HTML. Contact Allen for edits.',
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
