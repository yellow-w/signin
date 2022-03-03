const express = require(`express`)
const router = express.Router()
const userController = require(`./userController.js`)


router.get(`/login`,userController.login)
router.post(`/login`,userController.loginPost)


module.exports = router