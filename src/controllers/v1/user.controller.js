import httpStatus from 'http-status'
import createError from 'http-errors'
import UserRepo from '../../repositories/user.repository'

const get = async (req, res, next) => {
  try {
    const userRepo = new UserRepo()

    if (req.params.uuid) {
      const user = await userRepo.find(req.params.uuid)

      if (!user) {
        throw(createError(httpStatus.NOT_FOUND, 'Cannot find the User.'))
      }

      return res.json(user.toWeb())
    }
    else {
      const users = await userRepo.all()

      return res.json(users.map(user => user.toWeb()))
    }
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
    
    const userRepo = new UserRepo()
    const createdUser = await userRepo.store(user)

    return res.json(createdUser.toWeb())
  } catch (e) {
    next(e)
  }
}

const deleteAll = async (req, res, next) => {
  try {
    const userRepo = new UserRepo()
    await userRepo.deleteAll()

    return res.json({
      message: "All deleted"
    })
  } catch (e) {
    next(e)
  }
}

export {
  get,
  post,
  deleteAll
}
