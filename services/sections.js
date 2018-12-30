var client = require('./contentfulClient').client

function getSections (query) {
  query = query || {}
  query.content_type = 'section'
  return client.getEntries(query)
}

module.exports = {
  getSections
}
