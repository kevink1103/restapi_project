require('dotenv').config()

import createError from 'http-errors'
import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import moment from 'moment'
import compression from 'compression'
import helmet from 'helmet'
import cors from 'cors'

import response from './utils/response'
import jwtMiddleware from './middlewares/jwt.middleware'
import { logger, stream } from './configs/winston'

import v1Route from './routes/v1'

var app = express()

app.use(compression())
app.use(helmet())
app.use(morgan('combined', { stream }))
app.use(express.json())
app.use(express.urlencoded({
  extended: false
}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use(jwtMiddleware)
app.use(cors())

app.use('/v1', v1Route)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404))
})

app.use(function(err, req, res, next) {
  if (process.env.NODE_ENV === 'production') {
    // sentry
    const sentry = require('@sentry/node')
    sentry.init({ dsn: process.env.SENTRY_DSN })
    app.use(sentry.Handlers.errorHandler())
    
    // slack
    const { IncomingWebhook } = require('@slack/client')
    const webhook = new IncomingWebhook(process.env.SLACK_WEBHOOK)
    webhook.send({
      'attachments': [
          {
            'color': '#ff0000',
            'text': "HI, I'm just trying!",
            'fields': [
              {
                'title': err.message,
                'value': err.stack,
                'short': false
              }
            ],
            'ts': moment().unix()
          }
        ]
      }, (err, res) => {
        if (err) {
          sentry.captureException(err)
        }
      }
    )
  }
  next(err)
})

// error handler
app.use(function(err, req, res, next) {
  let apiError = err

  if (!err.status) {
    apiError = createError(err)
  }

  if (process.env.NODE_ENV === 'test') {
    const errObj = {
      req: {
        headers: req.headers,
        query: req.query,
        body: req.body,
        route: req.route
      },
      error: {
        message: apiError.message,
        stack: apiError.stack,
        status: apiError.status
      },
      user: req.user
    }
    logger.error(`${moment().format('YYYY-MM-DD HH:mm:ss')}`, errObj)
  }
  else {
    res.locals.message = apiError.message
    res.locals.error = apiError
  }


  // render the error page
  return response(
    res, 
    {
      message: apiError.message
    },
    apiError.status
  )
})

module.exports = app
