const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    //lista todos os produtos 
    async index(req, res){
        const { page = 1 } = req.query;
        const products = await Product.paginate({}, { page, limit: 10 });

        return res.json(products);
    },

    //lista um produto pelo seu id
    async show(req, res){
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },

    //cria um produto com os parametros do model Product.js
    async store(req, res) {
        const product = await Product.create(req.body);
        
        return res.json(product);
    },

    //atualiza um produto
    async update(req, res) {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
             new: true });

        return res.json(product);
    },
        
    //deleta um produto
    async destroy(req, res) {
        await Product.findByIdAndRemove(req.params.id);
        
        return res.send();
    },
};

