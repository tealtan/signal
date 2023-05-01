export default {
  name: 'sectionTop',
  title: 'Section: Top',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
  {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
    },
  {
      name: 'photoCredit',
      title: 'Photo Credit',
      type: 'string',
    },
  {
      title: 'Links',
      name: 'links',
      type: 'array',
      of: [{type: 'navLink'}],
      options: {
        modal: 'popover',
      },
    }
  ],
  preview: {
    select: {title: 'title'},
  },
}
