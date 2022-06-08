const Cliente = require('../models/Cliente')

module.exports = class AlunoController {
    static createAluno(req, res) {
        res.render('alunos/create', {layout: "dashboard"})
    }

    static createAlunoSave(req, res) {
        const aluno = {
            nome: req.body.nome,
            telefone: req.body.telefone,
            status: false,
        }

        Cliente.create(aluno)
            .then(res.redirect('dashboard'))
            .catch((err) => console.log())
    }

    static showAlunos(req, res) {
      res.render('layouts/main', {})
    }

    static showDashboard(req, res) {
        // res.render('layouts/dashboard', {})
        Cliente.findAll({ raw: true })
            .then((data) => {
                let emptyAlunos = false

                if (data.length === 0) {
                    emptyAlunos = true
                }

                res.render('alunos/all', { alunos: data, emptyAlunos, layout: "dashboard" })
            })
            .catch((err) => console.log(err))

    }

    static removeAluno(req, res) {
        const id = req.body.id

        Cliente.destroy({ where: { id: id } })
            .then(res.redirect('dashboard'))
            .catch((err) => console.log())
    }

    static updateAluno(req, res) {
        const id = req.params.id

        Cliente.findOne({ where: { id: id }, raw: true })
            .then((data) => {
                res.render('alunos/edit', { aluno: data, layout: "dashboard" })
            })
            .catch((err) => console.log())
    }

    static updateAlunoPost(req, res) {
        const id = req.body.id

        const aluno = {
            nome: req.body.nome,
            telefone: req.body.telefone,
        }

        Cliente.update(aluno, { where: { id: id } })
            .then(res.redirect('dashboard'))
            .catch((err) => console.log())
    }

    static changeStatus(req, res) {
        const id = req.body.id

        console.log(req.body)

        const aluno = {
            status: req.body.status === '0' ? true : false,
        }

        console.log(aluno)

        Cliente.update(aluno, { where: { id: id } })
            .then(res.redirect('dashboard'))
            .catch((err) => console.log())
    }
}