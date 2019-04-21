import Wrapper from '.'

class UserWrapper extends Wrapper {
  static create(obj) {
    if (!obj) {
      return null
    }

    return new UserWrapper(obj)
  }

  toWeb() {
    const values = Object.assign({}, this)
    delete values.id
    delete values.password

    return values
  }
}

export default UserWrapper
