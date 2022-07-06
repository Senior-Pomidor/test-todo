<template>
  <div class="todo-list">
    <div class="todo-list__header">
      <h2 class="todo-list__title">
        Todo list
      </h2>
      <button class="button button--accent">Add</button>
    </div>
    <div class="todo-list__scrollbox">
      <ul class="todo-list__list">
        <Todo v-for="todo in todos" :key="todo.id" :todo="todo" class="todo-list__item"/>
      </ul>
    </div>


      <div class="todo-list__overlay"></div>
  </div>
</template>

<script>
  import Todo from './Todo.vue'
  export default {
    name: 'TodoList',
    components: {
      Todo
    },

    data: () => ({
      todos: []
    }),

    mounted() {
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          this.todos = data
        })
        .catch((error) => console.log('ERROR: ' + error));
    },
  }
</script>

<style lang="scss">
  $bg-color: #252E42;
  $text-color: #fff;

  .todo-list {
    --list-padding: 30px;
    $scrollbar-bg: transparent;
    $scrollbar-thumb-bg: $color-orange;
    $scrollbar-width: 4px;
    $scrollbar-border-radius: 10px;

    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 420px;
    height: 540px;
    font-family: Montserrat, sans-serif;
    font-weight: 500;
    color: $text-color;
    background-color: $bg-color;
    border-radius: 20px 0px 40px;
    padding: var(--list-padding);
    box-sizing: border-box;
    // overflow: hidden;

    &::before,
    &::after {
      position: absolute;
      left: 0;
      display: block;
      border-radius: 20px;
      transform-origin: 100% 0;
      content: "";
    }

    &::before {
      top: -25px;
      width: 93%;
      height: 70px;
      background: linear-gradient(180deg, #31394D 0%, #091739 100%);
      transform: rotate(-2.32deg);
      z-index: -1;
    }

    &::after {
      top: -40px;
      width: 80%;
      height: 85px;
      background: linear-gradient(180deg, #4F5565 0%, #000000 53.65%);
      transform: rotate(-4.48deg);
      z-index: -2;
    }

    &__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }

    &__title {
      font-weight: 700;
      font-size: 1.75rem;
      line-height: 1.2;
      margin: 0;
    }

    &__scrollbox {
      flex-grow: 1;
      overflow-y: auto;
      width: 100%;
      padding-right: 15px;

      scrollbar-width: $scrollbar-width;
      scrollbar-color: $scrollbar-thumb-bg $scrollbar-bg;
      
      &::-webkit-scrollbar {
        position: absolute;
        width: $scrollbar-width;
      }

      &::-webkit-scrollbar-track {
        background-color: $scrollbar-bg;
      }

      &::-webkit-scrollbar-thumb {
        background-color: $scrollbar-thumb-bg;
        border-radius: 10px;
      }
    }

    &__list {
      list-style: none;
      padding-left: 0;
      margin: 0;
      box-sizing: border-box;
    }

    &__overlay {
      position: absolute;
      left: var(--list-padding);
      bottom: 5px;
      width: calc(100% - var(--list-padding) * 2);
      height: 70px;
      box-sizing: border-box;
      background: linear-gradient(180deg, rgba(37, 46, 66, 0) 0%, #252E42 67.19%);
      pointer-events: none;
    }
  }
</style>
