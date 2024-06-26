const Category = require("../model/categoryModel");

const getAllCategories = async (req, res) => {
    const categories = await Category.find({});
    res.json(categories)
}

const getCategoryById = async (req, res) => {
    try{
        const category = await Category.findById(req.params.categoryId).exec()
        res.status(200).json(category)
    }
    catch(error){
        res.status(404).send('Category not found!')
    }   
}

const addNewCategory = async (req, res) => {
    const categoryData = req.body
    const newCategory = new Category(categoryData)
    await newCategory.save()
    res.status(201).json(newCategory)
}

const updateCategory = (req, res) => {
    res.send('Got PATCH request to update a Category.')
}

const deleteCategory = (req, res) => {
    res.send('Got DELETE request to delete a Category.')
}

module.exports = {
    getAllCategories,
    getCategoryById,
    addNewCategory,
    updateCategory,
    deleteCategory
}