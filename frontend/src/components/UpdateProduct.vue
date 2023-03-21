<template>
        <!-- Button trigger modal -->
<button type="button" class="btn btn-primary h-50 ms-5" data-bs-toggle="modal" :data-bs-target="'#updateProductModal'+this.product.prodID">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
  <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
</svg>
</button>

<!-- Modal -->
<div class="modal fade mt-5" :id="'updateProductModal'+this.product.prodID" tabindex="-1" aria-labelledby="updateProductModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title text-dark" id="updateProductModalLabel">Edit {{ this.product.prodName }}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <input class="form-control mb-1" type="number" name="prodID" :id="'prodID'+this.product.prodID" :placeholder="this.product.prodID" :value="this.product.prodID" readonly>
        <input class="form-control mb-1" type="text" name="prodName" :id="'prodName'+this.product.prodID" :placeholder="this.product.prodName" v-model="payloadTemp.prodName" required>
        <input class="form-control mb-1" type="text" name="prodDescription" :id="'prodDescription'+this.product.prodID" :placeholder="this.product.prodDescription" v-model="payloadTemp.prodDescription" required>
        <input class="form-control mb-1" type="text" name="prodPrice" :id="'prodPrice'+this.product.prodID" :placeholder="this.product.price" v-model="payloadTemp.price" required>
        <input class="form-control mb-1" type="text" name="imgUrl" :id="'imgUrl'+this.product.prodID" :placeholder="this.product.prodImg"  v-model="payloadTemp.prodImg" required>
        <input class="form-control" type="number" name="catID" :id="'catID'+this.product.prodID" min="1" max="3" :placeholder="this.product.catID" :value="this.product.catID" readonly>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" v-on:click="editProduct(this.product)">Save changes</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {useStore} from 'vuex';

export default{
    inheritAttrs:false,
    props:['product'],
    setup(){
        const store = useStore();
        const userLoggedIn =JSON.parse(localStorage.getItem('user'));
        let user = userLoggedIn == null || userLoggedIn == undefined ? null: userLoggedIn;

        let payloadTemp = {
                prodID:'',
                prodName:'',
                prodDescription:'',
                price:'',
                prodImg:'',
                catID:''
            }

        let payloadConstructor = async (product) => {
            let payload =  await  {
                prodID:await product.prodID,
                prodName:payloadTemp.prodName,
                prodDescription:payloadTemp.prodDescription,
                price:payloadTemp.price,
                prodImg:payloadTemp.prodImg,
                catID:await product.catID
            }
            if(payload.prodName == '')payload.prodName=product.prodName;
            if(payload.prodDescription == '')payload.prodDescription=product.prodDescription;
            if(payload.price == '')payload.price=product.price;
            if(payload.prodImg == '')payload.prodImg=product.prodImg;
            return payload;
        }

        const editProduct = async (product) => {
            await store.dispatch('updateProduct', await payloadConstructor(product));
            await store.dispatch('fetchProducts');
            location.reload();

        }

        return{
            payloadTemp,
            user,
            payloadConstructor,
            editProduct
        }
    }
}
</script>