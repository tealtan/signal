export const structure = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Top Section')
        .child(S.editor().schemaType('sectionTop').documentId('ce298dc2-2c8d-4254-b0ab-d0ab0ae14875')),
      S.listItem()
        .title('About Section')
        .child(S.editor().schemaType('sectionAbout').documentId('8f96e3ca-1f81-47f8-98c5-21a5666a26ca')),
      S.listItem()
        .title('Projects Section')
        .child(S.editor().schemaType('sectionProjects').documentId('6b650ca6-cccb-4a2e-b44f-caa6e02ae80b')),
      S.listItem()
        .title('Events Section')
        .child(S.editor().schemaType('sectionEvents').documentId('53f326f2-297d-40cb-aca4-8a407d218a07')),
      S.listItem()
        .title('People Section')
        .child(S.editor().schemaType('sectionPeople').documentId('e616fa14-5687-4bcb-963b-215202a344a9')),
      S.listItem()
        .title('Recordings Section')
        .child(S.editor().schemaType('sectionRecordings').documentId('e5eb3be1-f10a-4d22-ba7d-064568687b4d')),
      S.listItem()
        .title('Video Section')
        .child(S.editor().schemaType('sectionVideo').documentId('d3f9076d-5a9c-48bf-93dd-857d9bc95275')),
      S.listItem()
        .title('Photos Section')
        .child(S.editor().schemaType('sectionGallery').documentId('a708e362-e9f9-4a00-9940-60fdc27bc910')),
      S.listItem()
        .title('Donate Section')
        .child(S.editor().schemaType('sectionDonate').documentId('1515722b-7fd7-4389-a9bc-758c28107755')),
      S.listItem()
        .title('Contact Section')
        .child(S.editor().schemaType('sectionContact').documentId('02decdc0-9029-4ff5-a5ad-73950328a28f')),

      S.divider(),

      // List out the rest of the document types, but filter out the section types above
      ...S.documentTypeListItems()
        .filter(listItem => ![
          'sectionTop',
          'sectionAbout',
          'sectionProjects', 'project',
          'sectionEvents',
          'sectionPeople', 'people',
          'sectionRecordings',
          'sectionVideo',
          'sectionGallery',
          'sectionDonate',
          'sectionContact',
        ]
        .includes(listItem.getId()))
    ])
