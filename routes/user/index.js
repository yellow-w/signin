const express = require(`express`)
const router = express.Router()
const userController = require(`./userController.js`)

router.get('/signup',userController.singUp)
router.post('/idcheck',userController.idCheck)

router.get(`/signin`,userController.signIn)
router.post(`/signin`,userController.signInPost)

module.exports = router