const Product = require("../model/productModel");

const getAllProducts = async (req, res) => {
    const products = await Product.find({});
    res.json(products)
}

const getProductById = async (req, res) => {
    try{
        const product = await Product.findById(req.params.productId).exec()
        res.status(200).json(product)
    }
    catch(error){
        res.status(404).send('Product not found!')
    }
}

const addNewProduct = async (req, res) => {
    const productData = req.body
    const newProduct = new Product(productData)
    await newProduct.save()
    res.status(201).json(newProduct)
}

const updateProduct = (req, res) => {
    res.send('Got PATCH request at /user')
}

const deleteProduct = (req, res) => {
    res.send('Got DELETE request at /user')
}

module.exports = {
    getAllProducts,
    getProductById,
    addNewProduct,
    updateProduct,
    deleteProduct
}