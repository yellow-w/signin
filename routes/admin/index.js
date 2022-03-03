const express = require(`express`)
const router = express.Router()
const adminController = require(`../admin/adminController`)
const {Auth} = require(`../auth`)

router.get(`/`,Auth, adminController.main)

module.exports = router
