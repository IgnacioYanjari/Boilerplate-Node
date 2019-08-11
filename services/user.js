// Archivo utilizado para realizar lógica

const { User } = include('models');
const jwtModule = include('modules/jwt.js');
const bcrypt = require('bcrypt');

function getUsers(res) {
    User.findAll().then((users) => {
      res.status(200).json({
        status : 'success',
        data: users
      });
    });
}

function login(data, res) {

  User.findAll({
    where : {
      user : data.user,
      password : data.password
    }
  }).then( (user) => {
    if(user.length == 0){
      return res.json({
        status: 'fail',
        err: ['User not found']
      });
    }
    let token = jwtModule.sign(user[0].dataValues);
    return res.json({
      status : 'success',
      token : token
    });

  });
}

async function create(data, res) {
  // Utilizar bcrypt para encriptar contraseña
  data.password = bcrypt.hashSync(data.password, 10);

  return User.create({
    first_name: data.first_name,
    last_name: data.last_name,
    password: data.password,
    user: data.user
  }).then( (user) => {

    delete user.dataValues.password;
    delete user.dataValues.createdAt;
    delete user.dataValues.updatedAt;

    res.status(200).json({
      status: 'success',
      data: user,
      message : 'user created'
    });
  }).catch( (err) => {
    res.status(400).json({
      status: 'fail',
      err : err.errors.map(data => data.message)
    });
  });
}

module.exports = {
    get: getUsers,
    login,
    create,
}
