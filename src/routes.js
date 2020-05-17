const routes = require("express").Router();

const SessionController = require("./app/controllers/SessionController")

routes.post('/sessions', SessionController.strore)

module.exports = routes;