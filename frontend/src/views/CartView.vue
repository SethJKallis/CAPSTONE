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
    <div class="checkout" v-else-if="!spinner && orderCheck">
        <h2 class="display-5 fw-bold">Checkout</h2>
        <table class="table table-dark table-hover table-striped">
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Remove/Edit</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="order in orders" :key="order">
                <td>{{ order.prodName }}</td>
                <td>{{ order.quantity }}</td>
                <td>R{{ order.total }}</td>
                <td class="d-flex justify-content-center">
                    <UpdateOrder :order="order" class="btn btn-primary"/>
                    <button class="removeBtn btn btn-danger ms-5" v-on:click="removeOrder(order)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                        </svg>
                    </button>
                </td>
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
                        R{{ ordersTotal(orders) }}
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

import UpdateOrder from '@/components/UpdateOrder.vue'
import SpinnerComponent from '../components/SpinnerComponent.vue'

export default{
    setup(){
        const store = useStore();
        let spinner = ref(false);
        let orderCheck = ref(false);

        
        const userLoggedIn =JSON.parse(localStorage.getItem('user'));
        let user = userLoggedIn == null || userLoggedIn == undefined ? null: userLoggedIn;
        
        store.dispatch('fetchUserOrders', user.userID);
        let orders = computed( () => store.state.orders);
        
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
            orderSetter()
      
        
        
        let ordersTotal = (orders) => {
            let itemsTotal = 0;
            try{
                orders.forEach((item) => {
                    itemsTotal += parseInt(item.total)
                });
            }catch(err){
                console.warn(err);
            }
            return itemsTotal
        }

        function removeOrder(order){
            store.dispatch('deleteOrder', order.orderID);
            location.reload();
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
        SpinnerComponent,
        UpdateOrder
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