<template>
    <div>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="'#updateOrderModal'+this.order.orderID">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
  <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
</svg>
</button>

<div class="modal fade mt-5" :id="'updateOrderModal'+this.order.orderID" tabindex="-1" aria-labelledby="updateOrderModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title text-dark" id="updateOrderModalLabel">Edit {{ order.prodName }}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <h2 class="display-6 fw-bolder">Quantity</h2>
        <p class="lead">DUE TO DEMAND WE'VE LIMITED PURCHASES TO 10 UNITS PER CUSTOMER, APOLOGIES FOR ANY INCONVENIENCE...</p>
        <select :name="'quantity'+order.orderID" :id="'quantity'+order.orderID" class="btn btn-dark mt-1 w-50 mx-auto">
                <option value="1" selected>1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" v-on:click="updateOrder(order)">Save changes</button>
      </div>
    </div>
  </div>
</div>
    </div>
</template>

<script>
import { useStore } from 'vuex';
export default{
    inheritAttrs:false,
    props:['order'],
    setup(){
        const store = useStore();

        let payload = {
            orderID:'',
            userID:'',
            prodID:'',
            quantity:''
        }

        async function updateOrder(order){
            payload = {
                orderID:order.orderID,
                userID:order.userID,
                prodID:order.prodID,
                quantity:parseInt(document.querySelector(`#quantity${order.orderID}`).value)
            }
            if(payload.quantity < 1 || payload.quantity > 10){
                return alert('Quantity is not valid!');
            } else {
                await store.dispatch('updateOrder', payload);
                await store.dispatch('fetchUserOrders', payload.userID);
            }
        }
        return {
            payload,
            updateOrder
        }
    }
}
</script>

<style scoped>
h2, 
p{
    color: #000;
}
</style>