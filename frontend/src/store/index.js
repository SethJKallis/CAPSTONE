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
      const {results, err} = await res.data;
      if(results){
        context.commit('setUsers', results);
      } else context.commit('setMessage', err);
    },
    async fetchUserById(id, context){
      const res = await axios.get(`${renderLink}/users/${id}`);
      const {results, err} = await res.data;
      if(results){
        context.commit('setUsers', results);
      } else context.commit('setMessage', err);
    },
    async updateUser(payload, context){
      const res = await axios.put(`${renderLink}/users/${payload.userID}`);
      const {results, err} = await res.data;
      if(results){
        context.commit('setMessage', results);
      } else context.commit('setMessage', err);
    },
    async register(payload, context){
      const res = await axios.post(`${renderLink}/register`, payload);
      const {results, err} = await res.data;
      if(results){
        context.commit('setMessage', results);
      } else context.commit('setMessage', err);
    },
    async login(payload, context){
      const res = await axios.post(`${renderLink}/login`, payload);
      const {results, err} = await res.data;
      if(results){
        context.commit('setUser', results);
      } else context.commit('setMessage', err);
    },
    async deleteUser(id, context){
      const res = await axios.delete(`${renderLink}/users/${id}`);
      const {results, err} = await res.data;
      if(results){
        context.commit('setMessage', results);
      } else context.commit('setMessage', err);
    },

    async fetchProducts(context){
      const res = await axios.get(`${renderLink}/products`);
      const {results, err} = await res.data;
      if(results){
        context.commit('setProducts', results);
      } else context.commit('setMessage', err);
    }, 
    async fetchProductById(id, context){
      const res = await axios.get(`${renderLink}/products/${id}`);
      const {results, err} = await res.data;
      if(results){
        context.commit('setProduct', results);
      } else context.commit('setMessage', err);
    },
    async updateProduct(payload, context){
      const res = await axios.put(`${renderLink}/products/${payload.prodID}`, payload);
      const {results, err} = await res.data;
      if(results){
        context.commit('setMessage', results);
      } else context.commit('setMessage', err);
    },
    async addProduct(payload, context){
      const res = await axios.post(`${renderLink}/products`, payload);
      const {results, err} = await res.data;
      if(results){
        context.commit('setMessage', results);
      } else context.commit('setMessage', err);
    },
    async deleteProduct(id, context){
      const res = await axios.delete(`${renderLink}/products/${id}`);
      const {results, err} = await res.data;
      if(results){
        context.commit('setMessage', results);
      } else context.commit('setMessage', err);
    }
  },
  modules: {
  }
})
