const express = require('express')
const router = express.Router()

const getDiscovery = require('./../controller/discoveryController')

router.get('/', getDiscovery)

module.exports = router
