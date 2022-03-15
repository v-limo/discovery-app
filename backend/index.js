const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const discoveryRoutes = require('./routes/discoveryRoutes')

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

// routes
app.get('/', (req, res) => res.status(200).json({ message: 'Health check!' }))
app.use('/api/discovery', require('./routes/discoveryRoutes'))


// listen
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
