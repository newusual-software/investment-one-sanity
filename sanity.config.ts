import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {colorInput} from '@sanity/color-input'

export default defineConfig({
  name: 'default',
  title: 'investment-one-sanity',

  projectId: 'm13r4f5p',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), colorInput()],
  
  schema: {
    types: schemaTypes,
  },
})
