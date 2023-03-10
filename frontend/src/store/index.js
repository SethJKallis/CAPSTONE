import { createStore } from 'vuex'
import axios from 'axios';

const renderLink = 'https://capstone-backend-5tch.onrender.com'

export default createStore({
  state: {
    user: null,
    users: null,
    product: null,
    products: null,
    category: null,
    showSpinner: true,
    message: null
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
    setCategory(state, category){
      state.category = category;
    },
    setMessage(state, message){
      state.message = message
    }

  },
  actions: {
    async fetchUsers(context){
      const res = await axios.get(`${renderLink}/users`);
      const {err,results} = await res.data;
      if(results){
        context.commit('setUsers', results);
      } else context.commit('setMessage', err);
    },
    async fetchUserById(context, id){
      const res = await axios.get(`${renderLink}/users/${id}`);
      const {err,results} = await res.data;
      if(results){
        context.commit('setUsers', results);
      } else context.commit('setMessage', err);
    },
    async updateUser(context, payload){
      const res = await axios.put(`${renderLink}/users/${payload.userID}`);
      const {err,results} = await res.data;
      if(results){
        context.commit('setMessage', results);
      } else context.commit('setMessage', err);
    },
    async register(context, payload){
      const res = await axios.post(`${renderLink}/register`, payload);
      const {err,results} = await res.data;
      if(results){
        console.log(results);
        context.commit('setMessage', results);
      } else context.commit('setMessage', err);
    },
    async login(context, payload){
      const res = await axios.post(`${renderLink}/login`, payload);
      const {err, result} = await res.data;
      if(result){
        console.log(result[0])
        context.commit('setUser', result[0]);
      } else {
        context.commit('setMessage', err);
      }
    },
    async deleteUser(context, id){
      const res = await axios.delete(`${renderLink}/users/${id}`);
      const {err,results} = await res.data;
      if(results){
        context.commit('setMessage', results);
      } else context.commit('setMessage', err);
    },

    async fetchProducts(context){
      const res = await axios.get(`${renderLink}/products`);
      const {err,results} = await res.data;
      if(results){
        context.commit('setProducts', results);
      } else context.commit('setMessage', err);
    }, 
    async fetchProductById(context, id){
      const res = await axios.get(`${renderLink}/products/${id}`);
      const {err,results} = await res.data;
      if(results){
        context.commit('setProduct', results);
      } else context.commit('setMessage', err);
    },
    async updateProduct(context, payload){
      const res = await axios.put(`${renderLink}/products/${payload.prodID}`, payload);
      const {err,results} = await res.data;
      if(results){
        context.commit('setMessage', results);
      } else context.commit('setMessage', err);
    },
    async addProduct(context, payload){
      const res = await axios.post(`${renderLink}/products`, payload);
      const {err,results} = await res.data;
      if(results){
        context.commit('setMessage', results);
      } else context.commit('setMessage', err);
    },
    async deleteProduct(context, id){
      const res = await axios.delete(`${renderLink}/products/${id}`);
      const {err,results} = await res.data;
      if(results){
        context.commit('setMessage', results);
      } else context.commit('setMessage', err);
    }
  },
  modules: {
  }
})
