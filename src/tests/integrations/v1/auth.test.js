import request from 'supertest'
import randomString from 'random-string'
import jwt from 'jsonwebtoken'
import models from '../../../models'
import userRepo from '../../../repositories/user.repository'

const app = require('../../../app')

afterAll(() => models.sequelize.close())

describe('로그인 테스트', () => {

  let userData;

  beforeAll(async () => {
    userData = {
      email: randomString() + '@test.com',
      password: randomString()
    }

    // 테스트용 사용자 생성
    await userRepo.store(userData)
  })

  test('실제 로그인 테스트. | 200', async () => {
    let response = await request(app)
      .post('/v1/auth/login')
      .send({
        email: userData.email,
        password: userData.password
      })

    expect(response.statusCode)
      .toBe(200)
    expect(response.body.data.token)
      .toBeTruthy()
  })

  test('없는 사용자로 로그인. | 404', async () => {
    let response = await request(app)
      .post('/v1/auth/login')
      .send({
        email: 'notFound@email.com',
        password: 'somePassword'
      })

    expect(response.statusCode)
      .toBe(404)
    expect(response.body.data.message)
      .toBe('사용자를 찾을 수 없습니다.')
  })

  test('잘못된 비밀번호로 로그인. | 404', async () => {
    let response = await request(app)
      .post('/v1/auth/login')
      .send({
        email: userData.email,
        password: 'wrongPassword'
      })

    expect(response.statusCode)
      .toBe(422)
    expect(response.body.data.message)
      .toBe('비밀번호를 확인 해주세요.')
  })
})