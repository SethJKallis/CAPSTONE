<template>
    <div>
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addProductModal">
  Add Product
</button>

<div class="modal fade mt-5" id="addProductModal" tabindex="-1" aria-labelledby="addProductModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title text-dark" id="addProductModalLabel">Product Details</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
            <input class="form-control mb-1" type="text" name="prodName" id="prodName" placeholder="Name" v-model="payload.prodName" required>

            <input class="form-control mb-1" type="text" name="prodDescription" id="prodDescription" placeholder="Description" v-model="payload.prodDescription" required>

            <input class="form-control mb-1" type="text" name="prodPrice" id="prodPrice" placeholder="Price" v-model="payload.price" required>

            <input class="form-control mb-1" type="text" name="prodQuantity" id="prodQuantity" placeholder="Quantity" v-model="payload.quantity" required>

            <input class="form-control mb-1" type="text" name="prodImg" id="prodImg" placeholder="Image URL" v-model="payload.prodImg">

            <input class="form-control" type="number" name="prodCatID" id="prodCatID" placeholder="Category" min="1" max="3" v-model="payload.catID" required>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" v-on:click="addProduct">Save changes</button>
      </div>
    </div>
  </div>
</div>
    </div>
</template>

<script>
import { useStore } from 'vuex';
export default{
    setup(){
      const store = useStore();

      const userLoggedIn =JSON.parse(localStorage.getItem('user'));
      let user = userLoggedIn == null || userLoggedIn == undefined ? null: userLoggedIn;

      let payload = {
        prodName:'',
        prodDescription:'',
        price:'',
        quantity:'',
        prodImg:'',
        catID:''
      }

      let addProduct = async () => {
        if(payload.prodImg == '')payload.prodImg = 'https://i.postimg.cc/Kv1W7dSR/capstone-default.png';
        if(payload.catID < 1 || payload.catID > 3){
        return alert(`
        ACCEPTED CATEGORY:
        catID 1: Coffee
        catID 2: Tea 
        catID 3: Energy Drinks
         `);
        }
        await store.dispatch('addProduct', payload);
        await store.dispatch('fetchProducts');
        location.reload();
      }
      return{
        user,
        payload,
        addProduct
      }
    }
}
</script>