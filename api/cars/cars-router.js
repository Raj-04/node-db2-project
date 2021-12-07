const express = require('express')
const Car = require('./cars-model')
const {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
} = require('./cars-middleware')

const router = express.Router()

module.exports = router
