# RESTful API Boilerplate

[![Build Status](https://travis-ci.org/kevink1103/restapi_project.svg?branch=master)](https://travis-ci.org/kevink1103/restapi_project)

A Production Grade RESTful API Boilerplate using Express.js and PostgreSQL.

- [x] Express.js
- [x] Sequelize
- [x] Docker Compose
- [x] PostgeSQL
- [x] Babel
- [x] Compression
- [x] Helmet
- [ ] JWT
- [x] Jest
- [x] Supertest
- [x] Travis CI

## Getting Started

```bash
# Get the latest snapshot
git clone https://github.com/kevink1103/restapi_project.git

# Change directory
cd restapi_project/src

# Make sure to set env variables
mv example.env .env && vi .env

# Run PostgreSQL Server using Docker
docker-compose up

# Open a new bash to proceed

# Install sequelize-cli and nodemon globally
npm install -g sequelize-cli
npm install -g nodemon

# Install NPM dependencies
npm install --save-dev

# Migrate using Sequelize
sequelize db:migrate

# Try seeding
sequelize db:seed:all

# Then simply start your app
npm start

# Or try testing
npm test

```

For demo, open up Postman and send a GET request to your server.

```text
127.0.0.1:3000/v1/users/
```

You can start developing your server from here.  
Integration with Sequelize and PostgreSQL is done for you.

## Resources

[https://medium.com/@final.lee](https://medium.com/@final.lee)

1. [아하 REST API 서버 개발 (1)](https://medium.com/aha-official/%EC%95%84%ED%95%98-rest-api-%EC%84%9C%EB%B2%84-%EA%B0%9C%EB%B0%9C-1-90b5da9e6593)
2. [아하 REST API 서버 개발 (2)](https://medium.com/aha-official/%EC%95%84%ED%95%98-rest-api-%EC%84%9C%EB%B2%84-%EA%B0%9C%EB%B0%9C-2-f61c9324d2c2)
3. [아하 REST API 서버 개발 (3)](https://medium.com/aha-official/%EC%95%84%ED%95%98-rest-api-%EC%84%9C%EB%B2%84-%EA%B0%9C%EB%B0%9C-3-daa2cce9d844)
4. [아하 REST API 서버 개발 (4)](https://medium.com/aha-official/%EC%95%84%ED%95%98-rest-api-%EA%B0%9C%EB%B0%9C-4-ad35ff26a014)
5. [아하 REST API 서버 개발 (5)](https://medium.com/aha-official/%EC%95%84%ED%95%98-rest-api-%EC%84%9C%EB%B2%84-%EA%B0%9C%EB%B0%9C-5-2633f380e129)
6. [아하 REST API 서버 개발 (6)](https://medium.com/aha-official/%EC%95%84%ED%95%98-rest-api-%EC%84%9C%EB%B2%84-%EA%B0%9C%EB%B0%9C-6-43568d94878a)
7. [아하 REST API 서버 개발 (7)](https://medium.com/aha-official/%EC%95%84%ED%95%98-rest-api-%EC%84%9C%EB%B2%84-%EA%B0%9C%EB%B0%9C-7-712e0588579f)
8. [아하 REST API 서버 개발 (8)](https://medium.com/aha-official/%EC%95%84%ED%95%98-rest-api-%EC%84%9C%EB%B2%84-%EA%B0%9C%EB%B0%9C-8-4f2d81e77466)
9. [아하 REST API 서버 개발 (9)](https://medium.com/aha-official/아하-rest-api-서버-개발-9-d75f4eab80d5)
10. [아하 REST API 서버 개발 (10)](https://medium.com/aha-official/아하-rest-api-서버-개발-10-c09764e116f9)
11. [아하 REST API 서버 개발 (11)](https://medium.com/aha-official/아하-rest-api-서버-개발-11-fbdd2cdb7e78)
12. [아하 REST API 서버 개발 (12)](https://medium.com/aha-official/아하-rest-api-서버-개발-12-80702e33ad47)
13. [아하 REST API 서버 개발 (13)](https://medium.com/aha-official/아하-rest-api-서버-개발-13-b90f6007a8f9)
14. [아하 REST API 서버 개발 (14)](https://medium.com/aha-official/아하-rest-api-서버-개발-14-3819ec9e90e9)
