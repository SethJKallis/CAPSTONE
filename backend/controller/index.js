const {users, products, category, orders} = require('../model/index');
const usersModel = new users();
const productsModel = new products();
const catModel = new category();
const ordersModel = new orders();
const {createWebToken} = require('../middleware/AuthenticatedUser');
class control {
    //USERS
    fetchUsers(req,res){
        usersModel.fetchUsers((err,results) => {
            if(err) res.send({err});
            else res.send({results});
        })
    }

    fetchUserById(req,res){
        const id = req.params.id;
        usersModel.fetchUserById(id, (err,results) => {
            if(err) res.send({err});
            else res.send({results});
        })
    }

    createUser(req,res){
        const data = req.body;
        let user = {
            email: data.userEmail,
            userPass: data.userPass
        };
        usersModel.createUser(data, (err,results) => {
            if(err) res.send({err});
            else{
                const jwt = createWebToken(user);
                res.cookie("LegitUser", jwt, {
                    maxAge: 3600000,
                    httpOnly: true
                });
                res.send({results, msg: 'Your account has been registered!'})
            };
        })
    }

    updateUser(req,res){
        const data = req.body;
        const id = req.params.id;
        usersModel.updateUser(data, id, (err,results) => {
            if(err) res.status(400).send({err});
            else res.status(200).send({results});
        })
    }

    deleteUser(req,res){
        const id = req.params.id;
        usersModel.deleteUser(id, (err,results) => {
            if(err) res.status(400).send({err});
            else res.status(200).send({results});
        })
    }

    login(req,res){
        const data = req.body;
        const {userEmail, userPass} = data;
        usersModel.login(data, (err,results) => {
            if(err) res.status(400).send({err});
            else {
                const jwt = createWebToken(
                    {
                        userEmail, userPass
                    }
                );
                res.cookie("LegitUser", jwt, {
                    maxAge: 3600000,
                    httpOnly: true
                })
                if(results){
                    res.status(200).send({message:"Logged In",jwt,result: results})
                } else {
                    res.status(401).send({err:"Your Credentials Are Invalid!"})
                }
            }
        })
    }

//PRODUCTS
    fetchProducts(req,res){
        productsModel.fetchProducts((err,results) => {
            if(err) res.status(400).send({err});
            else res.status(200).send({results});
        })
    }

    fetchProductById(req,res){
        const id = req.params.id;
        productsModel.fetchProductById(id, (err,results) => {
            if(err) res.status(400).send({err});
            else res.status(200).send({results});
        })
    }

    fetchProductByCatId(req,res){
        const id = req.params.id;
        productsModel.fetchProductByCatId(id, (err,results) => {
            if(err)res.status(400).send({err});
            else res.status(200).send({results});
        })
    }

    createProduct(req,res){
        const data = req.body;
        productsModel.createProduct(data, (err,results) => {
            if(err) res.status(400).send({err});
            else res.status(200).send({results});
        })
    }

    updateProduct(req,res){
        const data = req.body;
        const id = req.params.id;
        productsModel.updateProduct(data, id, (err,results) => {
            if(err) res.status(400).send({err});
            else res.status(200).send({results});
        })
    }

    deleteProduct(req,res){
        const id = req.params.id;
        productsModel.deleteProduct(id, (err,results) => {
            if(err) res.status(400).send({err});
            else res.status(200).send({results});
        })
    }

//ORDERS

    fetchOrders(req,res){
        ordersModel.fetchOrders((err,results) => {
            if(err) res.status(400).send({err});
            else res.status(200).send({results});
        })
    }

    fetchOrderByUserId(req,res){
        const id = req.params.id;
        ordersModel.fetchOrderByUserId(id, (err,results) => {
            if(err) res.status(400).send({err});
            else res.status(200).send({results});
        })
    }

    createOrder(req,res){
        const data = req.body;
        ordersModel.createOrder(data, (err,results) => {
            if(err) res.status(400).send({err});
            else res.status(200).send({results});
        })
    }

    updateOrder(req,res){
        const data = req.body;
        const id = req.params.id;
        ordersModel.updateOrder(data, id, (err,results) => {
            if(err) res.status(400).send({err});
            else res.status(200).send({results});
        })
    }

    deleteOrder(req,res){
        const id1 = req.params.id1;
        const id2 = req.params.id2;
        ordersModel.deleteOrder(id1, id2, (err,results) => {
            if(err) res.status(400).send({err});
            else res.status(200).send({results});
        })
    }


//CATEGORY

    fetchCategory(req,res){
        catModel.fetchCategories((err,results) => {
            if(err) res.status(400).send({err});
            else res.status(200).send({results});
        })
    }

    fetchCategoryById(req,res){
        const id = req.params.id;
        catModel.fetchCategoryById(id, (err,results) => {
            if(err) res.status(400).send({err});
            else res.status(200).send({results});
        })
    }

    createCategory(req,res){
        const data = req.body;
        catModel.createCategory(data, (err,results) => {
            if(err) res.status(400).send({err});
            else res.status(200).send({results});
        })
    }

    updateCategory(req,res){
        const data = req.body;
        const id = req.params.id;
        catModel.updateCategory(data, id, (err,results) => {
            if(err) res.status(400).send({err});
            else res.status(200).send({results});
        })
    }

    deleteCategory(req,res){
        const id = req.params.id;
        catModel.deleteCategory(id, (err,results) => {
            if(err) res.status(400).send({err});
            else res.status(200).send({results});
        })
    }
}

module.exports = {control};