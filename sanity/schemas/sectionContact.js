export default {
  name: 'sectionContact',
  title: 'Section: Contact',
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
      name: 'socialButtons',
      title: 'Social Buttons',
      description: 'Uses HTML. Contact Allen for edits.',
      type: 'text',
    },
    {
      name: 'emailTitle',
      title: 'Email Signup',
      type: 'string',
    },
    {
      name: 'emailBody',
      title: 'Email Body',
      type: 'blockContent',
    },
    {
      name: 'emailForm',
      title: 'Email Form',
      description: 'Uses HTML. Contact Allen for edits.',
      type: 'text',
    },
  ],
  preview: {
    select: {title: 'title'},
  },
}
