import { createStore } from 'vuex'
import axios from 'axios';

const renderLink = 'https://capstone-backend-5tch.onrender.com'

export default createStore({
  state: {
    user: null,
    users: null,
    product: null,
    products: null,
    orders: null,
    category: null,
    message: null,
    spinner:true
  },
  getters: {
  },
  mutations: {
    setUser(state, user){
      state.user = user;
    },
    setUsers(state, users){
      state.users = users;
    },
    setProduct(state, product){
      state.product = product;
    },
    setProducts(state, products){
      state.products = products;
    },
    setOrders(state, orders){
      state.orders = orders;
    },
    setCategory(state, category){
      state.category = category;
    },
    setMessage(state, message){
      state.message = message
    },
    setSpinner(state, spinner){
      state.spinner = spinner
    }

  },
  actions: {
    async fetchUsers(context){
      const res = await axios.get(`${renderLink}/users`);
      const {err,results} = await res.data;
      if(results){
        context.commit('setUsers', results);
        context.commit('setSpinner', false);
      } else context.commit('setMessage', err);
    },
    async fetchUserById(context, id){
      const res = await axios.get(`${renderLink}/users/${id}`);
      const {err,results} = await res.data;
      if(results){
        context.commit('setUser', results[0]);
        context.commit('setSpinner', false);
      } else context.commit('setMessage', err);
    },
    async updateUser(context, payload){
      const res = await axios.put(`${renderLink}/users/${payload.userID}`, payload);
      const {err,results} = await res.data;
      if(results){
        context.commit('setMessage', results);
        context.commit('setSpinner', false);
      } else context.commit('setMessage', err);
    },
    async register(context, payload){
      const res = await axios.post(`${renderLink}/register`, payload);
      const {err,results} = await res.data;
      if(results){
        context.commit('setMessage', results);
        context.commit('setSpinner', false);
      } else context.commit('setMessage', err);
    },
    async login(context, payload){
      const res = await axios.post(`${renderLink}/login`, payload);
      const {err, result} = await res.data;
      if(result !== undefined && result !== null){
        context.commit('setUser', result[0]);
        context.commit('setSpinner', false);
      } else {
        context.commit('setMessage', err);
      }
    },
    async deleteUser(context, id){
      const res = await axios.delete(`${renderLink}/users/${id}`);
      const {err,results} = await res.data;
      console.log(res)
      if(results){
        context.commit('setMessage', results);
      } else context.commit('setMessage', err);
    },

    async fetchProducts(context){
      const res = await axios.get(`${renderLink}/products`);
      const {err,results} = await res.data;
      if(results){
        context.commit('setProducts', results);
        context.commit('setSpinner', false);
      } else context.commit('setMessage', err);
    }, 
    async fetchProductById(context, id){
      const res = await axios.get(`${renderLink}/products/${id}`);
      const {err,results} = await res.data;
      if(results){
        context.commit('setProduct', results);
        context.commit('setSpinner', false);
      } else context.commit('setMessage', err);
    },
    async fetchProductByCatId(context, id){
      const res = await axios.get(`${renderLink}/product/category/${id}`);
      const {results ,err} = await res.data;
      if(results){
        context.commit('setProducts', results);
        context.commit('setSpinner', false);
      }
      else context.commit('setMessage', err);
    },
    async updateProduct(context, payload){
      const res = await axios.put(`${renderLink}/products/${payload.prodID}`, payload);
      const {err,results} = await res.data;
      if(results){
        context.commit('setMessage', results);
        context.commit('setSpinner', false);
      } else context.commit('setMessage', err);
    },
    async addProduct(context, payload){
      const res = await axios.post(`${renderLink}/products`, payload);
      const {err,results} = await res.data;
      if(results){
        context.commit('setMessage', results);
        context.commit('setSpinner', false);
      } else context.commit('setMessage', err);
    },
    async deleteProduct(context, id){
      const res = await axios.delete(`${renderLink}/products/${id}`);
      const {err,results} = await res.data;
      if(results){
        context.commit('setMessage', results);
        context.commit('setSpinner', false);
      } else context.commit('setMessage', err);
    },
    async fetchUserOrders(context, id){
      const res = await axios.get(`${renderLink}/orders/${id}`);
      const {err,results} = await res.data;
      if(results){
        context.commit('setOrders', results);
        // context.commit('setSpinner', false);
      } else context.commit('setMessage', err);
    },
    async addOrder(context, payload){
      const orders = await axios.get(`${renderLink}/orders`);
      let {results} = await orders.data;
      let sortedArray = await results.find(function(item){
        return item.userID == payload.userID && item.prodID == payload.prodID 
      })
      if(sortedArray !==null && sortedArray !==undefined && sortedArray.userID == payload.userID && sortedArray.prodID == payload.prodID){
        let message = "Product Has Already Been Added!"
        context.commit('setMessage', message);
      } else {
        const res = await axios.post(`${renderLink}/orders`, payload);
        const {err,results} = await res.data;
        if(results){
          let message = 'Product Added!'
            context.commit('setMessage', message);
          } else {
            context.commit('setMessage', err);
          }
      }
    },
    async updateOrder(context, payload){
      const res = await axios.put(`${renderLink}/orders/${payload.orderID}`, payload);
      const {err,results} = await res.data;
      if(results){
        context.commit('setMessage', results);
      } else context.commit('setMessage', err)
    },
    async deleteOrder(context, id){
      const res = await axios.delete(`${renderLink}/orders/${id}`);
      const {err,results} = await res.data;
      if(results){
        context.commit('setMessage', results);
      } else {
        context.commit('setMessage', err)
      }
    }
  },
  modules: {
  }
})
