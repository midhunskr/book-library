const express = require('express')
const { getAllCategories, getCategoryById, addNewCategory, updateCategory, deleteCategory } = require('../controllers/categoryControllers')
const router = express.Router()

// 1.Get all categories.
router.get('/', getAllCategories)
// 2. Get a category by ID.
router.get('/:categoryId', getCategoryById)

// 3. Add a category.
router.post('/', addNewCategory)

// 4. Update a category.
router.patch('/:categoryId', updateCategory)

// 5. Delete a category.
router.delete('/:categoryId', deleteCategory)

module.exports = router