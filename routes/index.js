const { Router } = require('express')
const router = Router()

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
]

router.get('/', (_, res) => {
  res.render('index', { messages: messages })
})

module.exports = router
