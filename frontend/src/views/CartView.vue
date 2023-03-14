<template>
    <div class="checkout">
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
                <td><button class="removeBtn btn btn-danger">DEL</button></td>
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

export default{
    setup(){
        const store = useStore();
        const userLoggedIn =JSON.parse(localStorage.getItem('user'));
        let user = userLoggedIn == null || userLoggedIn == undefined ? null: userLoggedIn;
        store.dispatch('fetchUserOrders', user.userID);

        let ordersTotal = () => {
            store.dispatch('fetchUserOrders', user.userID)
            let orders = computed(() => store.state.orders);
            orders = orders.value;
            let itemsTotal = 0;
            try{
                orders.forEach((item) => {
                    itemsTotal += parseInt(item.total)
                });
            }catch(err){
                console.log('Error Caught by Catch Block! forEach reads null due to async actions. However, functions dynamically calculates Total Price once order data is retrieved');
            }
            return itemsTotal
        }

        let orders = computed(() => store.state.orders);
        return{
            user,
            orders,
            ordersTotal
        }
    }
}
</script>

<style scoped>
.checkout{
    background-color: #155263;
    padding: 5rem 0 4rem 0;
    min-height: 100vh;
}
h2{
    color: #ff9a3c;
}

</style>