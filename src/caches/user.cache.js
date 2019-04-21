import redis from 'redis'
import bluebird from 'bluebird'

const client = redis.createClient({
  host: process.env.DB_HOST
})
client.on('error', e => {
  console.error(`redis error : ${e}`)
})

bluebird.promisifyAll(client)

class UserCache {
  async store(user) {
    try {
      await client.hsetAsync('users:id', [user.id, user.uuid])
      await client.hsetAsync('users:email', [user.email, user.uuid])
      await client.hsetAsync('users:uuid', [user.uuid, JSON.stringify(user.toJSON())])
    } catch (e) {
      // log error
      console.error(e)
    }
  }

  async find(uuid) {
    if (uuid) {
      try {
        return await client.hgetAsync('users:uuid', uuid)
      } catch (e) {
        // log error
        console.error(e)
      }
    }
    return null
  }

  async findById(id) {
    if (id) {
      try {
        const uuid = await client.hgetAsync('users:id', id)
        return this.find(uuid)
      } catch (e) {
        // log error
        console.error(e)
      }
    }
    return null
  }

  async findByEmail(email) {
    if (email) {
      try {
        const uuid = await client.hgetAsync('users:email', email)
        return this.find(uuid)
      } catch (e) {
        // log error
        console.error(e)
      }
    }
    return null
  }

}

export default UserCache
