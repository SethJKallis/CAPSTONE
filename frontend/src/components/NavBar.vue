<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand m-0 p-0" href="#"><img class="rounded-circle" src="../assets/sitelogo.png" alt="Site Logo" width="50" height="50"></a>
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
            <li v-if="user !== null" class="nav-item me-2">
              <router-link to="/user/cart">Cart</router-link>
            </li>
            <li v-if="user !== null" class="nav-item">
              <router-link to="/user">Profile</router-link>
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