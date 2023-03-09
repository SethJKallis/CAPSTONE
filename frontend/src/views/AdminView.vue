<template>
    <div class="admin">
        <div class="productsTable">
            <h2 class="display-5 fw-bold">Products Table</h2>
            <table class="table table-hover table-striped table-dark mx-auto">
                <thead>
                    <tr>
                        <th class="lead fw-bold">Name</th>
                        <th class="d-none d-sm-table-cell lead fw-bold">Description</th>
                        <th class="lead fw-bold">Price</th>
                        <th class="lead fw-bold">Quantity</th>
                        <th class="lead d-none d-sm-table-cell fw-bold">Image</th>
                        <th class="lead fw-bold">Edit/Del</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in products" :key="product">
                        <td>{{ product.prodName }}</td>
                        <td class="d-none d-sm-table-cell">{{ product.prodDescription }}</td>
                        <td>R{{ product.price }}</td>
                        <td>{{ product.quantity }}</td>
                        <td class="d-none d-sm-table-cell"><img :src="product.prodImg" :alt="product.prodName" width="85" height="75"></td>
                        <td>
                                <button class="btn btn-dark">Edit</button>
                                <button class="btn btn-danger">Del</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="usersTable pb-2">
            <h2 class="display-5 fw-bold">Users Table</h2>
            <table class="table table-hover table-striped table-dark mb-0 mx-auto">
                <thead>
                    <tr>
                        <th class="lead fw-bold">Name</th>
                        <th class="lead fw-bold">Email Address</th>
                        <th class="lead fw-bold">Role</th>
                        <th class="lead d-none d-sm-table-cell fw-bold">Join Date</th>
                        <th class="lead d-none d-sm-table-cell fw-bold">Profile Image</th>
                        <th class="lead fw-bold">Edit/Del</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in users" :key="user">
                        <td>{{ user.firstName }} {{ user.lastName }}</td>
                        <td>{{ user.userEmail }}</td>
                        <td>{{ user.userRole }}</td>
                        <td class="d-none d-sm-table-cell">{{ user.joinDate }}</td>
                        <td class="d-none d-sm-table-cell"><img class="rounded-circle" :src="user.userProfile" :alt="user.firstName + ' ' + user.lastName" width="85" height="75"></td>
                        <td>
                                <button class="btn btn-dark">Edit</button>
                                <button class="btn btn-danger">Del</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex';
import {computed} from '@vue/runtime-core';
export default{
    setup(){
        const store = useStore();
        store.dispatch('fetchUsers');
        store.dispatch('fetchProducts');

        const users = computed(() => store.state.users);
        const products = computed(() => store.state.products);
        
        return{
            users,
            products
        }
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
</style>