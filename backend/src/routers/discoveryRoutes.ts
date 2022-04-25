import express from 'express'

import { getDiscovery } from '../controllers/discoveryController'

const router = express.Router()

router.get('/', getDiscovery)

export default router
