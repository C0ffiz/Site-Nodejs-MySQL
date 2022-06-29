const express = require('express')
const exphbs = require('express-handlebars')
const fileUpload = require('express-fileupload')

const app = express()
app.use(fileUpload());

const conn = require('./db/conn')

const Cliente = require('./models/Cliente')

const Routes = require('./routes/Routes')

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json())

app.use(express.static('public'))

app.use('/bolos', Routes)

conn
  .sync()
  .then(() => {
    app.listen(3000)
  })
  .catch((err) => console.log(err))
