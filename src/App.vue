<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/todo">todo</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap');

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
    background:  radial-gradient(50% 50% at 50% 50%, #252E42 0%, #161C2E 100%);
    background-size: 200%;
    // background-position: 0 0;

    animation: bg-animation ease infinite;
    animation-duration: 6s;
  }
</style>
