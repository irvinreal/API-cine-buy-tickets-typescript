import express = require('express')
import bodyParser = require('body-parser')
import 'dotenv/config'

import moviesRouter from './routes/movies'
import showtimesRouter from './routes/showtimes'
import ticketsRouter from './routes/tickets'
import seatsRouter from './routes/seats'

const PORT = process.env.PORT

const app = express()
app.use(express.json())
app.use(bodyParser.json())

app.use('/api', moviesRouter)
app.use('/api', showtimesRouter)
app.use('/api', ticketsRouter)
app.use('/api', seatsRouter)

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
})
