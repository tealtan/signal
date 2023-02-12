export default {
  name: 'sectionContact',
  title: 'Section: Contact',
  type: 'document',
  __experimental_actions: ['create', 'update', /*'delete',*/ 'publish'],
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
      type: 'text',
    },
  ],
  preview: {
    select: {title: 'title'},
  },
}
