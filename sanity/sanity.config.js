import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
//import {googleMapsInput} from '@sanity/google-maps-input'
import {schemaTypes} from './schemas'
import deskStructure from './sanity-structure'

export default defineConfig({
  name: 'default',
  title: 'signal',

  projectId: 'q4ur6w8h',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: deskStructure
    }),
    visionTool(),
    //googleMapsInput(),
  ],

  schema: {
    types: schemaTypes,
  },

  document: {
    actions: (prev, { schemaType }) => {
      // Allow only `publish` and `discardChanges` for singletons.
      if (
        schemaType === "sectionAbout" ||
        schemaType === "sectionContact" ||
        schemaType === "sectionDonate" ||
        schemaType === "sectionTop" ||
        schemaType === "sectionProjects" ||
        schemaType === "sectionEvents" ||
        schemaType === "sectionPeople" ||
        schemaType === "sectionGallery" ||
        schemaType === "sectionRecordings" ||
        schemaType === "sectionVideo"
      ) {
        return prev.filter(
          (obj) => obj.action === "publish" || obj.action === "discardChanges"
        );
      }

      // Allow everything for the rest of documents
      return prev;
    },
    newDocumentOptions: (prev /*, { creationContext }*/) => {
      // Remove singletons and feedback from "create new document"
      return prev.filter(
        (templateItem) =>
          ![
            "sectionAbout",
            "sectionContact",
            "sectionDonate",
            "sectionTop",
            "sectionProjects",
            "sectionEvents",
            "sectionPeople",
            "sectionGallery",
            "sectionRecordings",
            "sectionVideo",
            "people",
            "project"
          ].includes(templateItem.templateId)
      );
    },
  },
})
