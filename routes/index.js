const express = require(`express`)
const router = express.Router()
const mainController = require(`./mainController`)
const routerUser = require(`./user/index`)
const routerAdmin = require(`./admin/index`)

router.get(`/`,mainController.main)
router.use(`/user`,routerUser)
router.use(`/admin`,routerAdmin)

module.exports = router