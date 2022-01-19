<template>
  <header class="header_area">
    <div class="main_menu">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container">
          <!-- Brand and toggle get grouped for better mobile display -->
          <router-link class="navbar-brand logo_h" :to="{name: 'Home'}"><img src="frontend/img/logo.png" alt=""></router-link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
            <ul class="nav navbar-nav menu_nav justify-content-end" id="menu">
              <li class="nav-item ">
                <router-link class="nav-link" :to="{name:'Home'}">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'about'}">About</router-link>
              </li>
              <li class="nav-item"><router-link class="nav-link" :to="{name:'service'}">Services</router-link></li>
              <li class="nav-item"><router-link class="nav-link" :to="{name: 'portfolio'}">Portfolio</router-link></li>
              <li class="nav-item submenu dropdown">
                <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                   aria-expanded="false">Pages</a>
                <ul class="dropdown-menu">
                  <li  class="nav-item"><router-link class="nav-link" :to="{name: 'elements_pages'}">Elements</router-link></li >
                  <li  class="nav-item"><router-link class="nav-link" :to="{name: 'portfolio_details'}">Portfolio Details</router-link></li >
                </ul>
              </li>
              <li class="nav-item submenu dropdown">
                <r href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                   aria-expanded="false">Blog</r>
                <ul class="dropdown-menu">
                  <li  class="nav-item"><router-link class="nav-link" :to="{name: 'blog'}">Blog</router-link></li >
                  <li  class="nav-item"><router-link class="nav-link" :to="{name: 'single_blog'}">Blog Details</router-link></li >
                </ul>
              </li>
              <li class="nav-item"><router-link class="nav-link" :to="{name: 'contact'}">Contact</router-link></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
  #menu .router-link-exact-active{
    color: #4458dc;
  }
</style>