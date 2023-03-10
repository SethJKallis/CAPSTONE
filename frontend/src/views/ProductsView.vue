<template>
    <div class="products row d-flex justify-content-center align-content-center g-0">
        <div v-for="product in products" :key="product" class="productContainer g-0 col-6 col-md-4 col-lg-3 mx-2 my-2">
            <h2 class="display-6 fw-bold">{{ product.prodName }}</h2>
            <img class="prodImage mb-2" :src="product.prodImg" :alt="product.prodName">
            <p class="lead">{{ product.prodDescription }}</p>
            <p class="lead fw-bold fs-2">R{{ product.price }}</p>
            <button class="addBtn btn btn-dark">Add to Cart</button>
        </div>

    </div>
</template>

<script>
import { useStore } from 'vuex';
import {computed} from '@vue/runtime-core';

export default{
    setup(){
        const store = useStore();
        store.dispatch('fetchProducts');

        const user = computed(() => store.state.user);
        const products = computed(() => store.state.products);
        const showSpinner = computed(() => store.state.showSpinner);

        return{
            user,
            products,
            showSpinner
        }
    }
}
</script>

<style scoped>
.products{
    background-color: #155263;
    min-height: 100vh;
    padding: 5em 0 2em 0;

}
.productContainer{
    background-color: #ff9a3c;
    /* border: 2px solid red; */
    min-width: 299px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: center;
    padding: 1em 0;
    transition: all 0.25s ease 0s;
}
.productContainer:hover{
    scale: 1.025;
    box-shadow: 7px 7px 15px #000;

}
.prodImage{
    border-radius: 50%;
    transition: all 0.25s ease 0s;
    width: 85%;
    height: 300px;
    max-height: 400px;
    min-height: auto;
    min-width: 290px;
}
.prodImage:hover{
    scale: 1.025;
    border-radius: 0;
    box-shadow: 7px 7px 10px #000;
}
.addBtn{
    transition: all 0.25s ease 0s;
}

.addBtn:hover{
    scale: 1.025;
    box-shadow: 5px 5px 7px #000;
}
</style>