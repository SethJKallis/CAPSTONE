<template>
    <div class="product">
        <h1>Single Product Page</h1>
    </div>
</template>

<script>
import { useStore } from 'vuex';
import {computed} from '@vue/runtime-core';

export default{
    setup(){
        const store = useStore();
        const user = computed(() => store.state.user);

        store.dispatch('fetchProductById');
        const product = computed(() => store.state.product);
        return{
            user,
            product
        }
    }
}
</script>