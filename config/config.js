
require('dotenv').config();
module.exports = {
  "development": {
    "username": "santander",
    "password": process.env.DEV_PSW,
    "database": "santander",
    "host": "127.0.0.1",
    "dialect": "postgresql"
  },
  "test": {
    "username": "santander",
    "password": process.env.TEST_PSW,
    "database": "santander",
    "host": "127.0.0.1",
    "dialect": "postgresql"
  },
  "production": {
    "username": "santander",
    "password": process.env.PROD_PSW,
    "database": "santander",
    "host": "127.0.0.1",
    "dialect": "postgresql"
  }
}
