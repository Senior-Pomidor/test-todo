<template>
  <div class="todo-list">
    <div class="todo-list__header">
      <h2 class="todo-list__title">
        Todo list
      </h2>
      <button class="button button--accent">Add</button>
    </div>
    <label for="#123"></label>

      <ul class="todo-list__list">
        <Todo v-for="todo in todos" :key="todo.id" :todo="todo" class="todo-list__item"/>
      </ul>

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
  $list-padding: 30px;

  .todo-list {
    position: relative;
    width: 100%;
    max-width: 420px;
    height: 540px;
    font-family: Montserrat, sans-serif;
    font-weight: 500;
    color: $text-color;
    background-color: $bg-color;
    border-radius: 20px 0px 40px;
    padding: $list-padding;
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
      top: -35px;
      width: 93%;
      height: 70px;
      background: linear-gradient(180deg, #31394D 0%, #091739 100%);
      transform: rotate(-2.32deg);
      z-index: -1;
    }

    &::after {
      top: -60px;
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

    &__list {
      max-height: 380px;
      list-style: none;
      padding-left: 0;
      margin: 0;
      overflow-y: auto;
    }

    &__overlay {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 75px;
      box-sizing: border-box;
      padding: 0 $list-padding;
      background: linear-gradient(180deg, rgba(37, 46, 66, 0) 0%, #252E42 67.19%);
    }
  }
</style>
