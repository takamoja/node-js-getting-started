const express = require('express')
const basicAuth = require('basic-auth-connect')
const path = require('path')
const PORT = process.env.PORT || 5000

const USERNAME = 'user'
const PASSWORD = 'luser1'

express()
  .use(basicAuth(USERNAME, PASSWORD))

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
