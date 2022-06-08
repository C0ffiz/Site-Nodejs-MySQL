const express = require('express')
const router = express.Router()
const AlunoController = require('../controllers/AlunoController')

router.get('/', AlunoController.showCliente)
router.get('/add', AlunoController.createCliente)
router.post('/add', AlunoController.createClienteSave)
router.post('/remove', AlunoController.removeCliente)
router.get('/edit/:id', AlunoController.updateCliente)
router.post('/edit', AlunoController.updateClientePost)
router.get('/dashboard', AlunoController.showDashboard)
router.post('/updatepromo', AlunoController.updatePromotion)

router.post('/updatestatus', AlunoController.changeStatus)

module.exports = router