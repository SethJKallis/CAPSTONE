<template>
    <div v-if="spinner" class="checkout d-flex justify-content-center align-content-center">
        <SpinnerComponent/>
    </div>
    <div v-if="!spinner && !orderCheck" class="checkout-spinner">
    <div class="spinner">
        <span>T</span>
        <span>R</span>
        <span>Y</span>
        <span>&nbsp;</span>
        <span>A</span>
        <span>D</span>
        <span>D</span>
        <span>I</span>
        <span>N</span>
        <span>G</span>
        <span>&nbsp;</span>
        <span>S</span>
        <span>O</span>
        <span>M</span>
        <span>E</span>
        <span>T</span>
        <span>H</span>
        <span>I</span>
        <span>N</span>
        <span>G</span>
        <span>!</span>
    </div>
    </div>
    <div v-else-if="!spinner && orderCheck" class="checkout">
        <h2 class="display-5 fw-bold">Checkout</h2>
        <table class="table table-dark table-hover table-striped">
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="order in orders" :key="order">
                <td>{{ order.prodName }}</td>
                <td>{{ order.quantity }}</td>
                <td>R{{ order.total }}</td>
                <td><button class="removeBtn btn btn-danger" v-on:click="removeOrder(user)">DEL</button></td>
                </tr>
            </tbody>
            <tfoot>
                <tr class="totalHeaderRow">
                    <th class="bg-transparent"></th>
                    <th class="bg-transparent"></th>
                    <th class="bg-transparent"></th>
                    <th class="totalHeader">TOTAL PRICE</th>
                </tr>
                <tr class="totalDataRow">
                    <td class="bg-transparent"></td>
                    <td class="bg-transparent"></td>
                    <td class="bg-transparent"></td>
                    <td class="totalData">
                        R{{ ordersTotal() }}
                    </td>
                </tr>
            </tfoot>
        </table>
        <button class="btn btn-dark">PURCHASE</button>
    </div>
</template>

<script>
import {useStore} from 'vuex';
import {computed} from '@vue/runtime-core';
import { ref } from 'vue';

import SpinnerComponent from '../components/SpinnerComponent.vue'

export default{
    setup(){
        const store = useStore();
        let spinner = ref(false);
        let orderCheck = ref(false);

        
        const userLoggedIn =JSON.parse(localStorage.getItem('user'));
        let user = userLoggedIn == null || userLoggedIn == undefined ? null: userLoggedIn;
        
        
        async function orderSetter(){
            spinner.value = !spinner.value
            let user = await  userLoggedIn == null || userLoggedIn == undefined ? null: userLoggedIn;
            
            await store.dispatch('fetchUserOrders', user.userID)
            let orderValues = computed(() => store.state.orders); 

            if(await orderValues.value.length == 0){
                localStorage.setItem('userOrders', JSON.stringify(null))
            } else {
                localStorage.setItem('userOrders', JSON.stringify(orderValues.value))
            }

            if(await JSON.parse(localStorage.getItem('userOrders')) == null){
                spinner.value = !spinner.value
                return
            } else {
                spinner.value=!spinner.value;
                orderCheck.value=!orderCheck.value
                return
            }
        }
        orderSetter();
        
        store.dispatch('fetchUserOrders', user.userID);
        let orders = computed( () => store.state.orders);
        
        let ordersTotal = () => {
            store.dispatch('fetchUserOrders', user.userID)
            let orders = computed(() => store.state.orders);
            orders = orders.value;
            let itemsTotal = 0;
            try{
                orders.forEach((item) => {
                    itemsTotal += parseInt(item.totalPrice)
                });
            }catch(err){
                console.log('Error');
            }
            return itemsTotal
        }

        function removeOrder(user){
            store.dispatch('deleteOrder', user.userID);
            store.dispatch('fetchUserOrders', user.userID);
        }

        return{
            user,
            orders,
            ordersTotal,
            orderCheck,
            removeOrder,
            spinner
        }
    },
    components:{
        SpinnerComponent
    }
}
</script>

<style scoped>
.checkout{
    background-color: #155263;
    padding: 5rem 0 4rem 0;
    min-height: 100vh;
}
.checkout-spinner{
    background-color: #155263;
    padding: 5rem 0 4rem 0;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
h2{
    color: #ff9a3c;
}
.spinner {
 height: 100%;
 width: 100%;
 margin: 0;
 padding: 0;
 font-size: 3vw;

 font-weight: 600;
 font-family: monospace;
 letter-spacing: 0.5em;
 color: #f5f5f5;
 filter: drop-shadow(0 0 10px);
 display: flex;
 justify-content: center;
 align-items: center;
}

.spinner span {
 animation: loading6454 1.75s ease infinite;
}

.spinner span:nth-child(2) {
 animation-delay: 0.25s;
}

.spinner span:nth-child(3) {
 animation-delay: 0.5s;
}

.spinner span:nth-child(4) {
 animation-delay: 0.75s;
}

.spinner span:nth-child(5) {
 animation-delay: 1s;
}

.spinner span:nth-child(6) {
 animation-delay: 1.25s;
}

.spinner span:nth-child(7) {
 animation-delay: 1.5s;
}
.spinner span:nth-child(8) {
 animation-delay: 1.75s;
}
.spinner span:nth-child(9) {
 animation-delay: 2s;
}
.spinner span:nth-child(10) {
 animation-delay: 2.25s;
}
.spinner span:nth-child(11) {
 animation-delay: 2.5s;
}
.spinner span:nth-child(12) {
 animation-delay: 2.75s;
}
.spinner span:nth-child(13) {
 animation-delay: 3s;
}
.spinner span:nth-child(14) {
 animation-delay: 3.25s;
}
.spinner span:nth-child(15) {
 animation-delay: 3.5s;
}
.spinner span:nth-child(16) {
 animation-delay: 3.75s;
}
.spinner span:nth-child(17) {
 animation-delay: 4s;
}
.spinner span:nth-child(18) {
 animation-delay: 4.25s;
}
.spinner span:nth-child(19) {
 animation-delay: 4.5s;
}
.spinner span:nth-child(20) {
 animation-delay: 4.75s;
}
.spinner span:nth-child(21) {
 animation-delay: 5s;
}

@keyframes loading6454 {
 0%, 100% {
  transform: translateY(0);
 }

 50% {
  transform: translateY(-10px);
 }
}
</style>