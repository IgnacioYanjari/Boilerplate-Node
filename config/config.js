
// config json for connect postgresql

require('dotenv').config();
let environment = process.env;
module.exports = {
  "development": {
    "username": environment.DEV_USER,
    "password": environment.DEV_PSW,
    "database": environment.DEV_DB,
    "host": "127.0.0.1",
    "dialect": "postgresql"
  },
  "test": {
    "username": environment.TEST_USER,
    "password": environment.TEST_PSW,
    "database": environment.TEST_DB,
    "host": environment.TEST_HOST,
    "dialect": "postgresql"
  },
  "production": {
    "username": environment.PROD_USER,
    "password": environment.PROD_PSW,
    "database": environment.PROD_DB,
    "host": environment.PROD_HOST,
    "dialect": "postgresql"
  }
}
