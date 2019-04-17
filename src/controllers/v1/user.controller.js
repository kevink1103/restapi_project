import moment from 'moment'
import models from '../../models'

const get = async (req, res, next) => {
  try {
    const users = await models.User.findAll()
    return res.json(users)
  } catch (e) {
    next(e)
  }
}

const post = async (req, res, next) => {
  try {
    const user = {
      email: req.body.email,
      password: req.body.password
    }
    models.User.create(user).then(() => {
      return res.json(user)
    })
  } catch (e) {
    next(e)
  }
}

export {
  get,
  post
}
