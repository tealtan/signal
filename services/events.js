var client = require('./contentfulClient').client

function getEvents (query) {
  query = query || {}
  query['content_type'] = 'events'
  query['order'] = 'fields.date'
  query['fields.date[gte]'] = '2017-09-01T00:00:00Z'
  return client.getEntries(query)
}

module.exports = {
  getEvents
}
