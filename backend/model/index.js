const sql = require('../config/index');
const bcrypt = require('bcrypt');

class user {
    fetchUsers(result){
        sql.query(`SELECT userID, firstName, lastName, userEmail, userPass, userRole, userProfile, joinDate FROM users;`, (err,results) => {
            if(err) result(err, null);
            else result(null, results);
        })
    }

    fetchUserById(id, result){
        sql.query(`SELECT userID, firstName, lastName, userEmail, userPass, userRole, userProfile, joinDate FROM users WHERE userID = ?;`, [id], (err,results) => {
            if(err) result(err,null);
            else result(null,results);
        })
    }

    async createUser(data, result){
        data.userPass = await bcrypt.hash(data.userPass, 15);
        sql.query(`INSERT INTO users SET ?;`, [data], (err,results) => {
            if(err) result(err,null);
            else result(null,results);
        })
    }

    updateUser(data, id, result){
        if(data.userPass !== null || data.userPass !== undefined) data.userPass = bcrypt.hashSync(data.userPass, 15);
        sql.query(`UPDATE users SET ? WHERE userID = ?;`, [data, id], (err,results) => {
            if(err) result(err,null);
            else result(null,results)
        })
    }

    deleteUser(id, result){
        sql.query(`DELETE FROM users WHERE userID = ?;`, [id], (err,results) => {
            if(err) result(err,null);
            else result(null,results);
        })
    }

    login(data, result){
        const {userEmail, userPass} = data;
        sql.query(`SELECT userID, firstName, lastName, userEmail, userPass, userRole, userProfile, joinDate FROM users WHERE userEmail = ?;`, [userEmail], async (err,results) => {
            const userInformation = results;
            if(err) result(err,null);
            else {
                await bcrypt.compare(userPass, results[0].userPass, (err,results) => {
                    if(err) result({err,msg:"incorrect credentials"},null);
                    else result(null, (results, userInformation))
                })
            }
        })
    }
}

class products {
    fetchProducts(result){
        sql.query(`SELECT prodID, prodName, prodDescription, price, quantity, prodImg, catID FROM products`, (err,results) => {
            if(err) result(err,null);
            else result(null, results);
        })
    }

    fetchProductById(id, result){
        sql.query(`SELECT prodID, prodName, prodDescription, price, quantity, prodImg, catID FROM products WHERE prodID = ?;`, [id], (err,results) => {
            if(err) result(err,null);
            else result(null,results);
        })
    }

    createProduct(data, result){
        sql.query(`INSERT INTO products SET ?;`, [data], (err,results) => {
            if(err) result(err,null);
            else result(null,results);
        })
    }

    updateProduct(data, id, result){
        sql.query(`UPDATE products SET ? WHERE prodID = ?;`, [data,id], (err,results) => {
            if(err) result(err,null);
            else result(null,results);
        })
    }

    deleteProduct(id, result){
        sql.query(`DELETE FROM products WHERE prodID = ?;`, [id], (err,results) => {
            if(err) result(err,null);
            else result(null,results);
        })
    }
}

class category {
    fetchCategories(result){
        sql.query(`SELECT catID, catName FROM category;`, (err,results) => {
            if(err) result(err,null);
            else result(null,results)
        })
    }

    fetchCategoryById(result){
        sql.query(`SELECT catID, catName FROM category WHERE catID =?;`, [id], (err,results) => {
            if(err) result(err,null);
            else result(null,results);
        })
    }

    createCategory(result){
        sql.query(`INSERT INTO category SET ?;`, [data], (err,results) => {
            if(err) result(err,null);
            else result(null,results);
        })
    }

    updateCategory(data, id, result){
        sql.query(`INSERT INTO category SET ? WHERE catID = ?;`, [data, id] , (err,results) => {
            if(err) result(err,null);
            else result(null,results);
        })
    }

    deleteCategory(result){
        sql.query(`DELETE FROM category WHERE catID = ?;`, [id], (err,results) => {
            if(err) result(err,null);
            else result(null,results);
        })
    }
}

class order {
    fetchOrders(result){
        sql.query(`SELECT orderID, prodID, userID FROM orders;`, (err,results) => {
            if(err) result(err,null);
            else result(null,results);
        })
    }

    fetchOrderById(id, result){
        sql.query(`SELECT orderId, prodId, userID FROM orders WHERE userID = ?`, [id], (err,results) => {
            if(err) result(err,null);
            else result(null,results);
        })
    }

    createOrder(data, result){
        sql.query(`INSERT INTO orders SET ?;`, [data], (err,results) => {
            if(err) result(err,null);
            else result(null,results);
        })
    }

    updateOrder(data, id, result){
        sql.query(`UPDATE orders SET ? WHERE orderID = ?;`, [data, id], (err,results) => {
            if(err) result(err,null);
            else result(null,results);
        })
    }

    deleteOrder(result){
        sql.query(`DELETE FROM orders WHERE orderID = ?;`, [id], (err,results) => {
            if(err) result(err,null);
            else result(null,results);
        })
    }
}