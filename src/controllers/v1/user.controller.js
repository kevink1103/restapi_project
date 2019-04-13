import moment from 'moment'
import {models} from '../../models'

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
      email: req.query.email,
      password: req.query.password,
      createdAt: moment().format("YYYY-MM-DD HH:MM"),
      updatedAt: moment().format("YYYY-MM-DD HH:MM")
    }

    models.User.create(user).then(() => {
      console.log(user)
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
