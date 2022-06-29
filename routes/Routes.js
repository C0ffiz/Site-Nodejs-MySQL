const express = require('express')
const router = express.Router()
const Controller = require('../controllers/Controller')

router.get('/', Controller.showCliente)
router.get('/add', Controller.createCliente)
router.post('/add', Controller.createClienteSave)
router.post('/remove', Controller.removeCliente)
router.get('/edit/:id', Controller.updateCliente)
router.post('/edit', Controller.updateClientePost)
router.get('/dashboard', Controller.showDashboard)
router.post('/updatepromo', Controller.updatePromotion)
router.post('/updatesobre', Controller.updateSobre)

router.post('/updatestatus', Controller.changeStatus)

module.exports = router