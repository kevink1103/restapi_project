import express from 'express'
import {get, post} from '../../controllers/v1/user.controller'

const router = express.Router()

router.route('/')
  .get(
    get
  )
  .post(
    post
  )

export default router
