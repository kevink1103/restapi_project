import randomString from 'random-string'
import {
  uuid
} from '../../utils/uuid'
import models from '../../models'

afterAll(() => models.sequelize.close())

test('ordered UUID should be printed.', () => {
  const orderedUuid = uuid()
  expect(orderedUuid).toMatch(/\b4[0-9A-Fa-f]{31}\b/g)
})

test('UUID should be created when a user is created.', async () => {
  const user = await models.User.create({
    email: `${randomString()}@test.com`,
    password: randomString()
  })

  expect(user.uuid).toMatch(/\b4[0-9A-Fa-f]{31}\b/g)
})
