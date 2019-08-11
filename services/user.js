// Archivo utilizado para realizar lógica
const {User} = include('models');

function getUsers(res) {
    return User.findAll().then((users) => {
      res.status(200).json({
        status : 'success',
        data: users
      });
    })
}

function login(data, res) {
  let jwt = require('jsonwebtoken');
  // Ocupar un paquete para generar una llave rsa256.
  let token = jwt.sign(data, 'shhhhh');
  return res.json({
    status: 'success',
    token: token
  });
}

function create(data, res) {
  // Utilizar bcrypt para encriptar contraseña
  return User.create({
    first_name: data.first_name,
    last_name: data.last_name,
    password: data.password
  }).then( (user) => {
    res.status(200).json({
      status: 'success',
      data: user,
      message : 'user created'
    });
  });
}

module.exports = {
    get: getUsers,
    login,
    create,
}
