const { Router } = require('express')
const router = Router()

const messages = require('../data/messages.js')

router.get('/', (_, res) => {
  res.render('form')
})

router.post('/', (req, res) => {
  messages.push({
    text: req.body.text,
    user: req.body.author,
    added: new Date(),
  })

  res.redirect('/')
})

module.exports = router
