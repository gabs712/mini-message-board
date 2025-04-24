const { Router } = require('express')
const router = Router()

const { insertMessage } = require('../db/queries.js')

router.get('/', (_, res) => {
  res.render('form')
})

router.post('/', async (req, res) => {
  const { author, text } = req.body
  await insertMessage(author, text)

  res.redirect('/')
})

module.exports = router
