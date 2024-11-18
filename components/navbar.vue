<template>
    <nav>
      <div class="flex justify-between items-center pt-6 pr-10">
        <div>
          <img class="h-10 px-10" src="/assets/images/logo_half_colo.svg" alt="" srcset="">
        </div>
        <div class="hidden md:flex justify-between space-x-4 pr-6" ref="menu">
          <nuxt-link to="/" class="nav-item" exact="">Home</nuxt-link>
          <nuxt-link to="/research" class="nav-item" exact="">Research</nuxt-link>
          <nuxt-link to="/members" class="nav-item" exact="">Lab members</nuxt-link>
          <nuxt-link to="/publication" class="nav-item" exact="">Publications</nuxt-link>
          <nuxt-link to="/contact" class="nav-item" exact="">Contact us</nuxt-link>
        </div>
  
        <div class="flex md:hidden button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 transition-all"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </div>
      <!--mobile menu-->
      <div class="mobile-menu hidden md:hidden mr-2">
        <div class="flex flex-col gap-2">
          <nuxt-link to="/" class="mobile-nav" exact="">Home</nuxt-link>
          <nuxt-link to="/research" class="mobile-nav" exact="">Research</nuxt-link>
          <nuxt-link to="/members" class="mobile-nav" exact="">Lab members</nuxt-link>
          <nuxt-link to="/publication" class="mobile-nav" exact="">Publications</nuxt-link>
          <nuxt-link to="/contact" class="mobile-nav" exact="">Contact us</nuxt-link>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    mounted() {
      const button = document.querySelector("div.button");
      const menu = document.querySelector("div.mobile-menu");
  
      button.addEventListener("click", () => {
        menu.classList.toggle("hidden");
      });
    },
  };
  </script>
  
  <style>
  .nav-item {
    @apply px-6 py-2 hover:cursor-pointer hover:bg-red-600 hover:text-white rounded-xl font-bold transition duration-200 ease-in;
  }
  .mobile-nav {
    @apply px-6 py-2 ;
  }
  a.nuxt-link-active {
    @apply bg-brand-green text-white font-bold;
  }
  </style>