
function getUsers(data, res) {
    return res.json(data)
}

module.exports = {
    get: getUsers
}
