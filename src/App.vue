<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/todo">todo</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style lang="scss">
  // @import '@/styles/imports.scss';
  @keyframes bg-animation {
    0% {
      background-position: 0 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 50%;
    }
  }

  body {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    background: #161C2E;
    background:  linear-gradient(90deg, rgba(22,28,46,1) 2%,
                                        rgba(36,47,80,1) 36%,
                                        rgba(36,47,80,1) 67%,
                                        rgba(22,28,46,1) 100%);
    background-size: 150%;
    background-position: 0 0;

    animation: bg-animation ease-out infinite;
    animation-duration: 6s;
  }
</style>
