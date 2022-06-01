const express = require('express')
const router = express.Router()
const AlunoController = require('../controllers/AlunoController')

router.get('/', AlunoController.showAlunos)
router.get('/add', AlunoController.createAluno)
router.post('/add', AlunoController.createAlunoSave)
router.post('/remove', AlunoController.removeAluno)
router.get('/edit/:id', AlunoController.updateAluno)
router.post('/edit', AlunoController.updateAlunoPost)
router.get('/dashboard', AlunoController.showDashboard)

router.post('/updatestatus', AlunoController.changeStatus)

module.exports = router
