<template>
    <div class="product" v-for="item in product" :key="item">
        <h2 class="fw-bold display-3">{{ item.prodName }}</h2>
        <figure>
            <img :src="item.prodImg" :alt="item.prodName" class="prodImage">
        </figure>
        <p class="display-6">{{ item.prodDescription }}</p>
        <p class="display-6">R{{ item.price }}</p>

        <div class="btnContainer d-flex flex-column justify-content-center align-content-center">
            <button class="btn btn-dark w-25 mx-auto mb-3 lead">Add to Cart</button>
            <button class="btn btn-warning mx-auto w-25 lead">Back</button>
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex';
import {computed} from '@vue/runtime-core';

export default{
    setup(){
        const store = useStore();

        const userLoggedIn =JSON.parse(localStorage.getItem('user'));
        let user = userLoggedIn == null || userLoggedIn == undefined ? null: userLoggedIn;
        
        const prodID = JSON.parse(localStorage.getItem('prodID'));
        store.dispatch('fetchProductById', prodID);
        

        let product = computed(() => store.state.product);
        let spinner = computed(() => store.state.spinner);

        return{
            user,
            product,
            spinner
        }
    }
}
</script>

<style scoped>
.product{
    background-color: #155263;
    min-height: 100vh;
    padding: 5em 0 2em 0;
}

.prodImage{
    border-radius: 50%;
    width: 250px;
    height: 250px;
}
</style>