import request from 'supertest'
import randomString from 'random-string'
import jwt from 'jsonwebtoken'
import models from '../../../models'
import UserRepo from '../../../repositories/user.repository'

const app = require('../../../app')

const userRepo = new UserRepo()

afterAll(() => {
  models.sequelize.close()
})

describe('TEST: /v1/auth/login', () => {

  let userData
  let token

  beforeAll(async () => {
    userData = {
      email: randomString() + '@test.com',
      password: randomString()
    }

    // Create a user for testing
    await userRepo.store(userData)
  })

  test('Login test. | 200', async () => {
    let response = await request(app)
      .post('/v1/auth/login')
      .send({
        email: userData.email,
        password: userData.password
      })
    token = response.body.data.token
    expect(response.statusCode).toBe(200)
    expect(token).toBeTruthy()

    const payload = jwt.verify(token, process.env.JWT_SECRET)
    expect(payload.email).toBe(userData.email)
    
    const userRepo = new UserRepo()
    const user = await userRepo.find(payload.uuid)
    expect(user.email).toBe(userData.email)
  })

  test('Login with not existing user. | 404', async () => {
    let response = await request(app)
      .post('/v1/auth/login')
      .send({
        email: 'notFound@email.com',
        password: 'somwPassword'
      })
    
      expect(response.statusCode).toBe(404)
      expect(response.body.data.message).toBe('Cannot find the user')
  })

  test('Login with wrong password. | 422', async () => {
    let response = await request(app)
      .post('/v1/auth/login')
      .send({
        email: userData.email,
        password: "wrongPassword"
      })
    
    expect(response.statusCode).toBe(422)
    expect(response.body.data.message).toBe('Please check the password')
  })

  test('Search user with token. | 200', async () => {
    let response = await request(app)
      .get('/v1/auth/tokenTest')
      .set('Authorization', `Bearer ${token}`)
    
    expect(response.statusCode).toBe(200)
    expect(response.body.data.email).toBe(userData.email)
  })

  // My test
  test('Search user with no token. | 200', async () => {
    let response = await request(app)
      .get('/v1/auth/tokenTest')
      .set('Authorization', '')

    expect(response.statusCode).toBe(200)
    expect(response.body.data).toBe(null)
  })

})
