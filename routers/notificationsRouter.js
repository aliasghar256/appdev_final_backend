const express = require('express')
const notificationsRouter = express.Router()
const { fetchAllNotifications } = require('../controllers/notificationsController')

notificationsRouter.get('/fetch_all', fetchAllNotifications)

module.exports = notificationsRouter