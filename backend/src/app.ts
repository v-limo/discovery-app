import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'

import apiErrorHandler from './middlewares/apiErrorHandler'
import discoveryRouter from './routers/discoveryRoutes'

dotenv.config({ path: '.env' })
const app = express()

// Express configuration
app.set('port', process.env.PORT || 5000)

// Global middleware
app.use(cors())
app.use(express.json())

// Set up routers
app.get('/', (req, res) => {
  res.json({
    'OK : ✅': new Date().toISOString(),
    example_resource:
      'https://wolt-app.herokuapp.com/v1/api/discovery?lat=60.17091&lon=24.94101',
  })
})

app.use('/api/v1/discovery', discoveryRouter)

// Custom API error handler
app.use(apiErrorHandler)

export default app
