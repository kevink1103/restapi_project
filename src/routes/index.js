import express from 'express'
import {index} from '../controllers/index.controller'

const router = express.Router()

/* GET home page. */
router.get('/', index)

module.exports = router
