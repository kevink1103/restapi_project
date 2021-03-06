# RESTful API Boilerplate

[![Build Status](https://travis-ci.org/kevink1103/restapi_project.svg?branch=master)](https://travis-ci.org/kevink1103/restapi_project)

A Production Grade RESTful API Boilerplate using Express.js, PostgreSQL and Redis as Caching.

- [x] Express.js
- [x] Sequelize
- [x] Docker Compose
- [x] PostgeSQL
- [x] Babel
- [x] Compression
- [x] Helmet
- [x] UUID
- [x] CRUD Separation
- [x] JWT
- [x] Unified Response
- [x] Redis
- [x] Jest
- [x] Supertest
- [x] Travis CI
- [x] Sentry
- [x] Slack

## Getting Started

```bash
# Get the latest snapshot
git clone https://github.com/kevink1103/restapi_project.git

# Change directory
cd restapi_project/src

# Make sure to set env variables
cp example.env .env && vi .env

# Run PostgreSQL and Redis using Docker
docker-compose up

# Open a new bash to proceed

# Install sequelize-cli and nodemon globally
npm install -g sequelize-cli
npm install -g nodemon

# Install NPM dependencies
npm install --save-dev
# If this does not work
sudo npm install --save-dev --unsafe-perm=true --allow-root

# Create a database for testing
# Replace <DB_USER> and <DB_TEST> to your own in .env
docker exec -it restapi_postgres psql -U <DB_USER> -c "CREATE DATABASE <DB_TEST>;"

# Try testing - this should be successful!
npm test

# Migrate using Sequelize
sequelize db:migrate

# Then simply start your app
npm start
```

## How to use (with Postman)

1. **Create a user**  
POST request  
Body - x-www-form-urlencoded  
KEY:  
email  
password  

```text
127.0.0.1:3000/v1/users/
```

2. **Get specific user with UUID**  
GET request  

```text
127.0.0.1:3000/v1/users/UUID_FROM_ABOVE_RESULT/
```

3. **Get all users**  
GET request  

```text
127.0.0.1:3000/v1/users/
```

4. **Login**  
POST request  
Body - x-www-form-urlencoded  
KEY:  
email  
password  

```text
127.0.0.1:3000/v1/auth/login/
```

5. **Test token**  
GET request  
Authorization - Bearer Token  
Token: TOKEN_RECEIVED_FROM_ABOVE_RESULT  

```text
127.0.0.1:3000/v1/auth/tokenTest/
```

6. **Delete all users**  
DELETE request  

```text
127.0.0.1:3000/v1/users/
```

You can start developing your server from here.  
Integration with Sequelize, PostgreSQL and Redis is done for you.

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
