const UserController = require('../modules/user/controller/user.controller');

module.exports = async (app) => {
    app.get(`/api/v1/users/:UserID`, UserController.findByID);
    app.post(`/api/v1/users`, UserController.create);
    app.patch(`/api/v1/users/:UserID`, UserController.update);
    app.delete(`/api/v1/users/:UserID`, UserController.deleteByID);
};
