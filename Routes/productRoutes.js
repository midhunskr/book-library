const express = require('express')
const { getAllProducts, getProductById, addNewProduct, updateProduct, deleteProduct } = require('../controllers/productControllers')
const router = express.Router()

// 1. Get all products.
router.get('/', getAllProducts)
// 2. get a product by ID.
router.get('/:productId', getProductById)
// 3. Add a product.
router.post('/', addNewProduct)
// 4. Update a product.
router.patch('/:productId', updateProduct)
// 5. Delete a product.
router.delete('/:productId', deleteProduct)
  
  module.exports = router