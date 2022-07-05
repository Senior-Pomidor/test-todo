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
  body {
    margin: 0;
    padding: 0;
    background-color: #161C2E;
    width: 100vw;
    height: 100vh;

  }
  #app {
    * {
    font-family: Montserrat, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    }
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
