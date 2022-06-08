const Cliente = require('../models/Cliente')

module.exports = class AlunoController {
    static createCliente(req, res) {
        res.render('clientes/create', {layout: "dashboard"})
    }

    static createClienteSave(req, res) {
        const cliente = {
            nome: req.body.nome,
            telefone: req.body.telefone,
            status: false,
        }

        Cliente.create(cliente)
            .then(res.redirect('dashboard'))
            .catch((err) => console.log())
    }

    static showCliente(req, res) {
      res.render('layouts/main', {})
    }

    static showDashboard(req, res) {
        // res.render('layouts/dashboard', {})
        Cliente.findAll({ raw: true })
            .then((data) => {
                let emptyClientes = false

                if (data.length === 0) {
                    emptyClientes = true
                }

                res.render('clientes/all', { cliente: data, emptyClientes, layout: "dashboard" })
            })
            .catch((err) => console.log(err))

    }

    static removeCliente(req, res) {
        const id = req.body.id

        Cliente.destroy({ where: { id: id } })
            .then(res.redirect('dashboard'))
            .catch((err) => console.log())
    }

    static updateCliente(req, res) {
        const id = req.params.id

        Cliente.findOne({ where: { id: id }, raw: true })
            .then((data) => {
                res.render('clientes/edit', { cliente: data, layout: "dashboard" })
            })
            .catch((err) => console.log())
    }

    static updateClientePost(req, res) {
        const id = req.body.id

        const cliente = {
            nome: req.body.nome,
            telefone: req.body.telefone,
        }

        Cliente.update(cliente, { where: { id: id } })
            .then(res.redirect('dashboard'))
            .catch((err) => console.log())
    }

    static changeStatus(req, res) {
        const id = req.body.id

        console.log(req.body)

        const cliente = {
            status: req.body.status === '0' ? true : false,
        }

        console.log(cliente)

        Cliente.update(cliente, { where: { id: id } })
            .then(res.redirect('dashboard'))
            .catch((err) => console.log())
    }

    static updatePromotion(req, res) {
        let sampleFile;
        let uploadPath;
        console.log(req.body);
        


        if(!req.files || Object.keys(req.files).length === 0){
            return res.status(400).send('Nenhuma imagem foi enviada.')
        }

        sampleFile = req.files.sampleFile;
        console.log(sampleFile);

        

    }
}