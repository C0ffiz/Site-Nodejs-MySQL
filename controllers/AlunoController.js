const Cliente = require('../models/Cliente')
const Promo = require('../models/Promo')

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
      Promo.findAll({ raw: true })
      .then((data) => {
       

        res.render('layouts/main', { promos: data})
    })
        .catch((err) => console.log(err))
        
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
        
        let uploadPath;
        console.log(req.body);
        
        
        
        let {id, produto, preco, sampleFile} = req.body

        sampleFile = req.files.sampleFile;
        let img = sampleFile.name;
        console.log(img);
        let promo = {produto, preco, img}
        console.log(produto, preco, img);

        
        if(!req.files || Object.keys(req.files).length === 0){
            return res.status(400).send('Nenhuma imagem foi enviada.')
        }
            
            sampleFile = req.files.sampleFile;
            uploadPath = process.cwd() + '/public/imgs/' + sampleFile.name;
            
            console.log(sampleFile);
            
            
            sampleFile.mv(uploadPath, function (err) {
                if (err) return res.status(500).send(err);
            
            Promo.update(promo, { where: { id: id } })
                .then(res.redirect('dashboard'))
                .catch((err) => console.log())


            });
    }
}