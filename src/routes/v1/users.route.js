import express from 'express'
import {get, post, deleteAll} from '../../controllers/v1/user.controller'

const router = express.Router()

router.route('/:uuid?')
  .get(
    get
  )
  .post(
    post
  )
  .delete(
    deleteAll
  )

export default router
