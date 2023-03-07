const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const router = express.Router();
const {control} = require('../controller/index');
const controller = new control();

//USER
router.get('^/$|/caffeine', (req,res) => {
    res.status(200).sendFile(path.join(__dirname, '../view/index.html'))
});

router.get('/users', controller.fetchUsers);

router.get('/users/:id', controller.fetchUserById);

router.post('/login', bodyParser.json(), controller.login);

router.post('/register', bodyParser.json(), controller.createUser);

router.patch('/users/:id', bodyParser.json(), controller.updateUser);

router.put('/users/:id', bodyParser.json(), controller.updateUser);

router.delete('/users/:id', controller.deleteUser);

//PRODUCTS
router.get('/products', controller.fetchProducts);

router.get('/products/:id', controller.fetchProductById);

router.post('/products', bodyParser.json(), controller.createProduct);

router.patch('/products/:id', bodyParser.json(), controller.updateProduct);

router.put('/products/:id', bodyParser.json(), controller.updateProduct);

router.delete('/products/:id', controller.deleteProduct);

//ORDERS
router.get('/orders', controller.fetchOrders);

router.get('/orders/:id', controller.fetchProductById);

router.post('/orders', bodyParser.json(), controller.createOrder);

router.patch('/orders/:id', bodyParser.json(), controller.updateOrder);

router.put('/orders/:id', bodyParser.json(), controller.updateOrder);

router.delete('/orders/:id', controller.deleteOrder);

//CATEGORIES
router.get('/category', controller.fetchCategory);

router.get('/category', controller.fetchCategoryById);

router.post('/category', bodyParser.json(), controller.createCategory);

router.patch('/category/:id', bodyParser.json(), controller.updateCategory);

router.put('/category/:id', bodyParser.json(), controller.updateCategory);

router.delete('/category/:id', controller.deleteCategory);

module.exports = router;