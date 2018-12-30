var express = require('express')
var router = express.Router()
var products = require('../services/sections')

/* router params */
// router.param('slug', function (req, res, next, slug) {
//   products.getProduct(slug).then(function (product) {
//     req.product = product.items[0]
//     next()
//   })
// })

router.use(function (req, res, next) {
  products.getSections().then(function (sectionCollection) {
    req.sections = sectionCollection.items
    next()
  })
})

// router.get('/products/:slug', function (req, res, next) {
//   res.render('product', {title: req.product.fields.productName, product: req.product})
// })
//
// router.get('/products', function (req, res, next) {
//   res.render('products', {
//     'title': 'Products',
//     'products': req.products
//   })
// })

router.get('/', function (req, res, next) {
  res.render('sections', {
    'title': 'Sections',
    'sections': req.sections
  })
})

module.exports = router
