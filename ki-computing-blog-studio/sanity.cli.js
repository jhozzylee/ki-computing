import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'uma8cfiu',
    dataset: 'ki-computing-blog-studio'
  },
  deployment: {
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/cli#auto-updates
     */
    autoUpdates: true,
    appId: 'dvbtj3u5ndjphg9tlw8jjr4y', 
  }
})
