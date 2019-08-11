// Controllers can use multiples services and merge them

const { get, login, create } = include('services/user.js');

UserController = {};

UserController.get = (req, res) => {
  return get(res);
}

UserController.login = (req, res) => {
  let body = req.bodymen.body;
  return login(body,res);
}

UserController.create = (req, res) => {
  let body = req.bodymen.body;
  return create(body, res);
}

module.exports = UserController;
