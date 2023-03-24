<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand m-0 p-0" href="#"><img class="rounded-circle" src="../../public/sitelogo.png" alt="Site Logo" width="50" height="50"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mb-lg-0 d-flex justify-content-between w-100">
        <div class="firstRoutes d-lg-flex mx-auto ps-lg-5 ps-sm-0 w-75 justify-content-center">
            <li class="nav-item ms-lg-5 me-lg-3 my-sm-1 my-lg-0">
                <router-link to="/">Home</router-link>
            </li>
            <li class="nav-item me-lg-3 my-sm-1 my-lg-0">
                <router-link to="/products">Products</router-link>
            </li>
            <li class="nav-item me-lg-3 my-sm-1 my-lg-0">
                <router-link to="/about">About</router-link>
            </li>
            <li class="nav-item me-lg-3 my-sm-1 my-lg-0">
                <router-link to="/contact">Contact</router-link>
            </li>
            <li v-if="user !== null && user.userRole == 'admin'" class="nav-item my-1 my-lg-0">
              <router-link to="/admin">Admin</router-link>
            </li>
        </div>
        
        <div class="lastRoutes me-lg-1 text-center mx-auto px-auto d-flex">
            <li v-if="user == null" class="nav-item mt-sm-3 mt-lg-0">
                <router-link to="/userSign">Sign In/Sign Up</router-link>
            </li>
            <li v-if="user !== null" class="nav-item m-0 me-lg-3">
              <router-link to="/user/cart">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart4 d-none d-lg-block" viewBox="0 0 16 16">
  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
</svg>
<p class="d-block d-lg-none">Checkout</p>
</router-link>
            </li>
            <li v-if="user !== null" class="nav-item">
              <router-link to="/user"><img class="rounded-circle d-none d-lg-block" :src="user.userProfile" :alt="user.firstName" width="50" height="50"></router-link>
              <p class="d-block d-lg-none fw-bold fs-5">{{ user.firstName + ' ' + user.lastName }}</p>
            </li>
        </div>

      </ul>
    </div>
  </div>
</nav>
    </div>
</template>

<style scoped>
nav{
  z-index: 10000;
  position: fixed;
  top: 0;
  width: 100%;
}
li{
  display: flex;
  align-items: center;
}
@media screen and (max-width:992px) {
  li{
    display: block;
  }
  .lastRoutes{
    flex-flow: column nowrap;
  }
}
</style>

<script>
export default{
  setup(){
    const userLoggedIn =JSON.parse(localStorage.getItem('user'));
    let user = userLoggedIn == null || userLoggedIn == undefined ? null: userLoggedIn;
    return{
      user
    }
  }
}
</script>