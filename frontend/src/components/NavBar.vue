<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Site logo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mb-2 mb-lg-0 d-flex justify-content-between w-100">
        <div class="firstRoutes d-flex mx-auto ps-5 w-75 justify-content-center">
            <li class="nav-item me-lg-3">
                <router-link to="/">Home</router-link>
            </li>
            <li class="nav-item me-3">
                <router-link to="/products">Products</router-link>
            </li>
            <li class="nav-item me-lg-3">
                <router-link to="/about">About</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/contact">Contact</router-link>
            </li>
            
        </div>
        <div class="lastRoutes me-lg-3">
            <router-link to="/userSign">Sign In/Sign Up</router-link>
        </div>

      </ul>
    </div>
  </div>
</nav>
    </div>
</template>