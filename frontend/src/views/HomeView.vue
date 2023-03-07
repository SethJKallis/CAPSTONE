<template>
  <div class="content-container">
    <div class="home d-flex justify-content-around pt-1 row">
      <div class="left col pe-5 pe-lg-0">
        <h2 class="display-4">Site Name</h2>
        <p class="lead text-start w-100">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil eaque saepe numquam pariatur voluptatem excepturi asperiores nisi eos voluptas voluptates, impedit distinctio magni architecto. Laborum, culpa quae? Labore, nulla unde.</p>
        <button class="btn btn-dark align-self-start mb-sm-1 mb-0"><router-link class="linkBtn" to="/products"> See Products</router-link></button>
      </div>
      <div class="right d-none d-lg-flex col">
        <img class="homeImage me-5" alt="Home Image" src="../assets/digitalcoffee.png">
      </div>
    </div>
    <div class="productCatContainer row mt-1 d-flex justify-content-around">
      <div class="category col-3">
        <h2 class="display-6">Coffee</h2>
        <img class="catImage mb-2" src="../assets/homepageimg.png" alt="Cat Image" width="150" height="150">
        <button class="btn btn-dark"><router-link class="linkBtn" to="/products">Coffee Selection</router-link></button>
      </div>
      <div class="category col-3">
        <h2 class="display-6">Tea</h2>
        <img class="catImage mb-2" src="../assets/teadigitalart.png" alt="Cat Image" width="150" height="150">
        <button class="btn btn-dark"><router-link class="linkBtn" to="/products">Tea Selection</router-link></button>
      </div>
      <div class="category col-3">
        <h2 class="display-6">Energy Drinks</h2>
        <img class="catImage mb-2" src="../assets/energydrinkdigitalart.png" alt="Cat Image" width="150" height="150">
        <button class="btn btn-dark"><router-link class="linkBtn" to="/products">Energy Drink Selection</router-link></button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
  }
}
</script>

<style scoped>
.linkBtn{
  text-decoration: none;
  color: inherit;
}

.home{
  background-color: #ff9a3c;
}
.content-container{
  background-color: #155263;
  overflow-x: hidden;
  min-height: 87.3vh;
}

.left{
  /* border: 2px solid red; */
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: start;
  padding: 0 0 0 3.5em;
}
.right{
  /* border: 2px solid blue; */
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  padding: 0 2.5rem 0 0;
}

.homeImage{
  border-radius: 50%;
  max-width: 38%;
  min-width: 100px;
  height: auto;
  /* transform: translateX(160px); */
  animation: roll 5s ease-in-out 0.5s 1 alternate forwards;
}

.category{
  /* border: 2px solid gold; */
  border-radius: 1em;
  background-color: #ff9a3c;
  min-width: 200px;
  min-height: 300px;
  padding: 1em;
  margin: 1em;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  transition: all 0.25s ease 0s;
}

.category:hover{
  scale: 1.025;
  box-shadow: 10px 10px 10px #000;
}


@keyframes roll {
  0%{
    transform: translateX(0) rotateZ(0deg);
  }

  25%{
    transform: translateX(-120px) rotateZ(-90deg);

  }

  50%{
    transform: translateX(140px) rotateZ(90deg);

  }

  100%{
    transform: translateX(160px);
  }
  
}

.catImage{
  border-radius: 50%;
}

button{
  transition: all 0.25s ease 0s;
}

button:hover{
  scale: 1.05;
  box-shadow: 5px 5px 5px #000;
}
</style>
