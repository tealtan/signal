var express = require('express')
var router = express.Router()
var sections = require('../services/sections')
var events = require('../services/events')

router.use(function (req, res, next) {
  sections.getSections().then(function (sectionCollection) {
    req.sections = sectionCollection.items
    next()
  })
})

router.use(function (req, res, next) {
  events.getEvents().then(function (eventCollection) {
    req.events = eventCollection.items
    next()
  })
})

router.get('/', function (req, res, next) {
  res.render('sections', {
    'title': 'Home',
    'sections': req.sections,
    'events': req.events
  })
})

module.exports = router
