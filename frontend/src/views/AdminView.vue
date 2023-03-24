<template>
    <div v-if="spinner" class="admin d-flex justify-content-center">
        <SpinnerComponent/>
    </div>
    <div v-else-if="!spinner" class="admin">
        <div class="productsTable"> 
            <h2 class="display-5 fw-bold">Products Table</h2>
            <table class="table table-hover table-striped table-dark mx-auto">
                <thead>
                    <tr>
                        <th class="lead d-none d-sm-table-cell fw-bold">Image</th>
                        <th class="lead fw-bold">Name</th>
                        <th class="d-none d-sm-table-cell lead fw-bold">Description</th>
                        <th class="lead fw-bold">Price</th>
                        <th class="lead fw-bold ps-5">Edit/Del</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in products" :key="product">
                        <td class="d-none d-sm-table-cell p-0">
                            <figure>
                                <img :src="product.prodImg" :alt="product.prodName" width="85" height="75">
                                <figcaption class="idDisplay">{{ product.prodID }}</figcaption>
                            </figure>
                        </td>

                        <td>{{ product.prodName }}</td>
                        <td class="d-none d-sm-table-cell">{{ product.prodDescription }}</td>
                        <td>R{{ product.price }}</td>
                        <td class="d-flex" height="92">
                                <UpdateProduct :product="product"/>
                                <button class="btn btn-danger h-50" v-on:click="deleteProduct(product)"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
</svg></button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <AddProduct class="btn btn-primary p-0 mb-5"/>
        </div>

        <div class="usersTable pb-2">
            <h2 class="display-5 fw-bold">Users Table</h2>
            <table class="table table-hover table-striped table-dark mx-auto">
                <thead>
                    <tr>
                        <th class="lead d-none d-sm-table-cell fw-bold">Profile Image</th>
                        <th class="lead fw-bold">Name</th>
                        <th class="lead fw-bold">Email Address</th>
                        <th class="lead fw-bold">Role</th>
                        <th class="lead d-none d-sm-table-cell fw-bold">Join Date</th>
                        <th class="lead fw-bold">Edit/Del</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in users" :key="user">
                        <td class="d-none d-sm-table-cell"><img class="rounded-circle" :src="user.userProfile" :alt="user.firstName + ' ' + user.lastName" width="85" height="75"></td>
                        <td>{{ user.firstName }} {{ user.lastName }}</td>
                        <td>{{ user.userEmail }}</td>
                        <td>{{ user.userRole }}</td>
                        <td class="d-none d-sm-table-cell">{{ user.joinDate }}</td>
                        <td>
                                <UpdateUser :userDetails="user" class="btn btn-dark"/>
                                <button class="btn btn-danger" v-on:click="deleteUser(user)">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
</svg>
                                </button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <AddUser class="btn btn-primary p-0"/>
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex';
import {computed} from '@vue/runtime-core';
import UpdateProduct from '../components/UpdateProduct.vue';
import AddProduct from '../components/AddProduct.vue';
import UpdateUser from '../components/UpdateUser.vue';
import AddUser from '../components/AddUser.vue';
import SpinnerComponent from '../components/SpinnerComponent.vue';

export default{
    setup(){
        const store = useStore();
        store.dispatch('fetchUsers');
        store.dispatch('fetchProducts');

        const users = computed(() => store.state.users);
        const products = computed(() => store.state.products);
        
        const userLoggedIn =JSON.parse(localStorage.getItem('user'));
        let user = userLoggedIn == null || userLoggedIn == undefined ? null: userLoggedIn;


        let deleteProduct = async (product) => {
            await store.dispatch('deleteProduct', product.prodID);
            await store.dispatch('fetchProducts');
        }

        let deleteUser = async (user) => {
            await store.dispatch('deleteUser', user.userID);
            await store.dispatch('fetchUsers');
        }
        const spinner = computed(() => store.state.spinner);
        return{
            user,
            users,
            userLoggedIn,
            products,
            deleteProduct,
            deleteUser,
            spinner
        }
    },
    components: {
        UpdateProduct,
        AddProduct,
        UpdateUser,
        AddUser,
        SpinnerComponent
    }
}
</script>

<style scoped>
.admin{
    background-image: url('../assets/digitalcoffee.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    min-height: 100vh;
    padding: 5em 0 2em 0;

    color: #ff9a3c;
}
table{
    width: 95%;
    min-width: 100px;
}
figure{
    position: relative;
    width: 100%;
}
.idDisplay{
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #0000006b;
}
</style>