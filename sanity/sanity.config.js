import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
//import {googleMapsInput} from '@sanity/google-maps-input'
import {schemaTypes} from './schemas'
import {structure} from './sanity-structure'

export default defineConfig({
  name: 'default',
  title: 'signal',

  projectId: 'q4ur6w8h',
  dataset: 'production',

  plugins: [
    deskTool({structure}),
    visionTool(),
    //googleMapsInput(),
  ],

  schema: {
    types: schemaTypes,
  },
})
