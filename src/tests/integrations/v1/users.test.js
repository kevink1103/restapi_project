import request from 'supertest'
import randomString from 'random-string'
import {
  uuid
} from '../../../utils/uuid'
import models from '../../../models'
import UserRepo from '../../../repositories/user.repository'

const app = require('../../../app')

let userRepo
let user

beforeAll(async () => {
  userRepo = new UserRepo()

  // Create 2 users
  await userRepo.store({
    email: randomString() + '@test.com',
    password: randomString()
  })
  // Keep one for sample
  user = await userRepo.store({
    email: randomString() + '@test.com',
    password: randomString()
  })
})

afterAll(() => models.sequelize.close())

describe('GET: /v1/users', () => {

  test('Show all users. | 200', async () => {
    let response = await request(app).get(`/v1/users`)

    expect(response.body.length).toBeGreaterThan(1)
  })

  test('Search user by UUID. | 200', async () => {
    let response = await request(app).get(`/v1/users/${user.uuid}`)
    
    expect(response.body.email).toBe(user.email)
  })

  test('Wrong UUID used for searching. | 404', async () => {
    let response = await request(app).get(`/v1/users/${uuid()}`)

    expect(response.statusCode).toBe(404)
  })
})
