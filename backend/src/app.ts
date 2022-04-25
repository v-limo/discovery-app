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
app.use('/api/v1/discovery', discoveryRouter)

// Custom API error handler
app.use(apiErrorHandler)

export default app
