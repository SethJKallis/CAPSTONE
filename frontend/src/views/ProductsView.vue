<template>
<div v-if="spinner">
    <SpinnerComponent :class="'products'"/>
</div>

<div v-else class="products">
    <div class="dropdown mb-2">
        <button class="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Category
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a :href="$router.resolve({name:'products'}).href" class="dropdown-item">All</a></li>
    <li><a :href="$router.resolve({name:'productsCategory', params:{id:1}}).href" class="dropdown-item">Coffee</a></li>
    <li><a :href="$router.resolve({name:'productsCategory', params:{id:2}}).href" class="dropdown-item">Tea</a></li>
    <li><a :href="$router.resolve({name:'productsCategory', params:{id:3}}).href" class="dropdown-item">Energy Drinks</a></li>
  </ul>
</div>

<div class="d-flex justify-content-center">
  <div id="Dropdown" class="d-flex">
    <input type="text" id="searchInput" class="form-control me-1 w-100">
    <button class="btn btn-dark" v-on:click="searchProducts()">Search</button>
  </div>
</div>

<div class="productsContainer row d-flex justify-content-center align-content-center g-0">
    <div v-for="product in products" :key="product" class="productContainer g-0 col-6 col-md-4 col-lg-3 mx-2 my-2">
        <h2 class="display-6 fw-bold">{{ product.prodName }}</h2>
        <figure class="prodImage mb-2">
            <a class="imgLink" v-on:click="storeProdID(product)" :href="$router.resolve({name:'product'}).href">
                <figcaption>View Details</figcaption>
            </a>
                <img class="img" :src="product.prodImg" :alt="product.prodName">
            </figure>
        <p class="lead">{{ product.prodDescription }}</p>
        <p class="lead fw-bold fs-2">R{{ product.price }}</p>
        <div class="btnCOntainer d-flex flex-column justify-content-center align-content-center">
            <button class="addBtn btn btn-dark" v-on:click="addToCart(product, user)">Add to Cart</button>
            <select :name="'quantity'+product.prodID" :id="'quantity'+product.prodID" class="btn btn-dark mt-1 w-50 mx-auto">
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
    </div>
</div>
</div>
</template>

<script>
import { useStore } from 'vuex';
import {computed} from '@vue/runtime-core';
import SpinnerComponent from '../components/SpinnerComponent.vue';

export default{
    setup(){
        const store = useStore();

        let locationURL = location.pathname;
        let locationArr = locationURL.split('/');
        let catID = locationArr[locationArr.length-1];
        locationArr.pop();

        if(locationArr.join('/') == '/products/category'){
            store.dispatch('fetchProductByCatId', catID);
        } else{
            store.dispatch('fetchProducts');
        }

        const userLoggedIn = JSON.parse(localStorage.getItem('user'));
        let user = userLoggedIn == null || userLoggedIn == undefined ? null : userLoggedIn;
        const spinner = computed(() => store.state.spinner);
        let searchArr = [];
        function storeProdID(product){
            localStorage.setItem('prodID', product.prodID);
        }

        function tempAlert(message,messageTimeout){
            var createdElement = document.createElement("div");
            createdElement.setAttribute("style","position:fixed; top:4rem; background-color:green; color: white; width:100%; height:2rem; display:flex; justify-content: center; align-items: center; z-index: 10;");
            createdElement.innerHTML = message;
            setTimeout(function(){
            createdElement.parentNode.removeChild(createdElement);
        },messageTimeout);
        document.body.appendChild(createdElement);
        }
        
        async function addToCart(product, user){
            let { prodID } = product;
            let { userID } = user;
            let orderPayload = {
                userID: userID,
                prodID: prodID,
                quantity: parseInt(document.querySelector(`#quantity${prodID}`).value)
            };
            await store.dispatch('addOrder', orderPayload);
            let message = computed(() => store.state.message)
            tempAlert(await message.value, 1000)
            
        }
        
        async function searchProducts(){
        try{
            await store.dispatch('fetchProducts').then(async () => {
                let inputValue = document.querySelector('#searchInput').value;
                if(inputValue == '' || inputValue == undefined || inputValue == null){
                    alert('Nothing To Search')
                    return
                }
                let prodFilter = inputValue.toLowerCase();
                    let filteredArr = products.value.filter((item) => {
                        let itemName = item.prodName.toLowerCase();
                            return itemName.includes(`${prodFilter}`)
                        });
                        let newArr = filteredArr;
                        return store.commit('setProducts', newArr);
                    });
                } catch(err){
                    alert('Item Not Found!')
                }}
                
        const products = computed(() => store.state.products);
        return{
            user,
            products,
            spinner,
            storeProdID,
            addToCart,
            searchProducts,
            searchArr
        }
    },
    components:{
        SpinnerComponent
    },


}
</script>

<style scoped>
.products{
    background-color: #155263;
    min-height: 100vh;
    padding: 5em 0 2em 0;
}
.productContainer{
    background-color: #000000c6;
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
    position: relative;
    width: 100%;
    max-height: 400px;
    min-height: auto;
    min-width: 290px;
}
.prodImage .img{
    border-radius: 50%;
    width: 85%;
    height: 300px;
    transition: all 0.25s ease 0s;
}
.prodImage .imgLink{
    position: absolute;
    width: 100px;
    height: 50px;
    top: 50%;
    right: 50%;
    transform: translateX(50%) translateY(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000000cc;
    z-index: 2;
}
.addBtn{
    transition: all 0.25s ease 0s;
}

.addBtn:hover{
    scale: 1.025;
    box-shadow: 5px 5px 7px #000;
}
.dropdown-menu{
    z-index: 1;
}

.imgLink{
    text-decoration: none;
    color: #fff;
    transition: all 0.25s ease 0s;

}
.prodImage .imgLink:hover, 
.prodImage .img:hover,
.prodImage .imgLink:hover ~ .img{
    scale: 1.025;
    border-radius: 0;
    box-shadow: 7px 7px 10px #000;
}
</style>