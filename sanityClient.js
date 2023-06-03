const sanityClient = require('@sanity/client')

module.exports = sanityClient({
  projectId: 'q4ur6w8h', // you can find this in sanity.json
  dataset: 'production', // or the name you chose in step 1
  apiVersion: '2023-01-14', // update to today's date
  useCdn: true, // `false` if you want to ensure fresh data
})
