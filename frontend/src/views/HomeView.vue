<template>
  <div class="content-container">
    <div class="home d-flex justify-content-around pt-1 row">
      <div class="left col pe-5 pe-lg-0">
        <h2 class="display-6">Site Name</h2>
        <p class="lead text-start w-100">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div class="right d-none d-lg-flex col">
        <img class="homeImage me-5" alt="Home Image" src="../assets/digitalcoffee.png">
      </div>
    </div>

    <div id="carouselCategory" class="carousel slide" data-bs-ride="false">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselCategory" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselCategory" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselCategory" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../assets/coffeeBanner.jpg" class="d-block" alt="ALT">
      <div class="carousel-caption">
        <h5 class="display-6 fw-bold">Coffee</h5>
        <p class="lead">All your favorite coffee beverages ready to be ordered at the click of  button!</p>
        <button class="btn btn-dark"><router-link class="linkBtn" to="/products">Coffee</router-link></button>

      </div>
    </div>
    <div class="carousel-item">
      <img src="../assets/pxfuel.jpg" class="d-block" alt="">
      <div class="carousel-caption ">
        <h5 class="display-6 fw-bold">Tea</h5>
        <p class="lead">Browse our range of imported and locally produced tea. We've got something for everyone!</p>
        <button class="btn btn-dark"><router-link class="linkBtn" to="/products">Teas</router-link></button>
      </div>
    </div>
    <div class="carousel-item">
      <img src="../assets/energyBanner.jpg" class="d-block" alt="">
      <div class="carousel-caption category">
        <h5 class="display-6 fw-bold">Energy Drinks</h5>
        <p class="lead">For those of you in need of serge of energy, we have a range of energy drinks that'll get you buzzing!</p>
        <button class="btn btn-dark"><router-link class="linkBtn" to="/products">Energy Drinks</router-link></button>

      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselCategory" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselCategory" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

    <!-- <div class="productCatContainer row mt-1 d-flex justify-content-around">
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
    </div> -->

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
  background-color: #000000c6;
  position: fixed;
  top: 4rem;
  z-index: 1000;
}
.content-container{
  background-color: #ff9a3c;
  overflow-x: hidden;
  min-height: 100vh;
  padding: 4em 0 1em 0;
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
  max-width: 20%;
  min-width: 50px;
  height: auto;
  /* transform: translateX(160px); */
  animation: roll 5s ease-in-out 0.5s 1 alternate forwards;
}

.category{
  /* border: 2px solid gold; */
  /* border-radius: 1em; */
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

/* .category:hover{
  scale: 1.025;
  box-shadow: 10px 10px 10px #000;
} */


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
    transform: translateX(250px);
  }
  
}


.carousel-caption button{
  transition: all 0.25s ease 0s;
}

.carousel-caption button:hover{
  scale: 1.05;
  box-shadow: 5px 5px 5px #000;
}
.carousel-item{
  position: relative;
  height: 100%;
}
.carousel-item img{
  height: 626px;
  max-height: 626px;
  width: 100%;
  margin: 0 auto;
}
#carouselCategory{
  width: 100%;
  min-width: 300px;
  height: 600px;
  margin: 0 auto;
  background-color: #ff9a3c;
}
.carousel-caption{
  position: absolute;
  top: 30%;
  bottom: 30%;
  /* border: 2px solid red; */
  background-color: #000000c2;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
}

h5{
  color: #ffffff;
}
.carousel-item p{
  color: #ffffff;
}
</style>
