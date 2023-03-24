<template>
  <div class="content-container d-flex justify-content-center align-content-center" v-if="spinner">
    <SpinnerComponent/>
  </div>
  <div class="content-container" v-else-if="!spinner">
    <div class="home d-flex justify-content-around pt-1 row">
      <div class="left col-12 pe-lg-0 col-lg">
        <h2 class="display-6 fw-bolder">Cloud Café</h2>
        <p class="lead text-start w-100 d-none d-sm-block">Welcome to the Cloud Café, South Africa's leading E-Café. We offer caffeine products of all kinds as well as tea for those of you who prefer not to walk around buzzing!</p>
      </div>
      <div class="right d-none d-lg-flex col">
        <img class="homeImage me-5" alt="Home Image" src="../assets/digitalcoffee.png">
      </div>
    </div>

    <div id="carouselCategory" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselCategory" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselCategory" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselCategory" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="5000">
      <img src="../assets/coffeeBanner.jpg" class="carouselImg d-block" alt="ALT">
      <div class="carousel-caption">
        <h5 class="display-6 fw-bold homeHeader">Coffee</h5>
        <p class="lead">All your favorite coffee beverages ready to be ordered at the click of  button!</p>
        <button class="btn btn-dark"><router-link class="linkBtn" :to="{name:'productsCategory', params :{id:1}}">Coffee</router-link></button>

      </div>
    </div>
    <div class="carousel-item" data-bs-interval="5000">
      <img src="../assets/pxfuel.jpg" class="carouselImg d-block" alt="">
      <div class="carousel-caption ">
        <h5 class="display-6 fw-bold">Tea</h5>
        <p class="lead">Browse our range of imported and locally produced tea. We've got something for everyone!</p>
        <button class="btn btn-dark"><router-link class="linkBtn" :to="{name:'productsCategory', params:{id:2}}">Teas</router-link></button>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="5000">
      <img src="../assets/energyBanner.jpg" class="carouselImg d-block" alt="">
      <div class="carousel-caption category">
        <h5 class="display-6 fw-bold">Energy Drinks</h5>
        <p class="lead">For those of you in need of serge of energy, we have a range of energy drinks that'll get you buzzing!</p>
        <button class="btn btn-dark"><router-link class="linkBtn" :to="{name:'productsCategory', params: {id:3}}" >Energy Drinks</router-link></button>

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
  </div>
</template>

<script>
import { ref } from 'vue';
import SpinnerComponent from '@/components/SpinnerComponent.vue';


export default {
  name: 'HomeView',
  data(){
    let spinner = ref(true);
    return{
      spinner
    }
  },
  components: {
    SpinnerComponent,
},
  mounted(){
    setTimeout(() => {
      this.spinner=!this.spinner
    },1500)
  }
}
</script>

<style scoped>
*{
  overflow-y: hidden;

}
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
  background-color: #155263;
  overflow-x: hidden;
  min-height: 100vh;
  padding: 4em 0 1em 0;
}

.left{
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: start;
  padding: 0 0 0 3em;
  width: 100%;
}
.right{
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
  animation: roll 5s ease-in-out 0.5s 1 alternate forwards;
}

.category{
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
  height: 650px;
  
}
#carouselCategory{
  width: 100%;
  min-width: 300px;
  height: 570px;
  margin: 0 auto;
  background-color: #ff9a3c;
  overflow-y: hidden;
}
.carousel-caption{
  position: absolute;
  top: 30%;
  bottom: 30%;
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

@media screen and (max-width:575px) {
  .left{
    width: 102vw;
    text-align: center;
    align-items: center;
    padding: 0;
  }
  h2{
    text-align: center;
  }
}
</style>
