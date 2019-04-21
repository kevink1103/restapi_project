import express from 'express'

const router = express.Router()

router.route('/')
  .get((req, res, next) => {
    next(new Error('SENTRY ERROR!!!'))
  })

export default router
