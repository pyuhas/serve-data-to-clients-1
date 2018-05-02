const express     = require('express')
const bodyParser  = require('body-parser')
const morgan      = require('morgan')
const cors        = require('cors')
const app         = module.exports = express()
const PORT        = parseInt(process.env.PORT || 3000)



app.get('/', (req, res) => res.send('Hello World!'))
app.listen(PORT, () => console.log('Example app running'))



// app.use(notFound)
// app.use(errorHandler)
