<template>
  <div class="todo-list">
    <div class="todo-list__header">
      <h2 class="todo-list__title">
        Todo list
      </h2>
      <button class="todo-list__button">Add</button>
    </div>
      <ul class="todo-list__list">
        <li v-for="task in tasks" :key="task.id" class="todo-list__item todo">
          <input type="checkbox" class="todo__checkbox" :id="`todo-item-${task.id}`">
          <label class="todo__label" :for="`todo-item-${task.id}`">
            <span class="todo__text">{{ task.title }}</span>
            <span class="todo__desc">Lorem ipsum dolor sit amet.</span>
          </label>
        </li>
      </ul>

      <div class="todo-list__overlay"></div>
  </div>
</template>

<script>
  export default {
    name: 'TodoList',

    data: () => ({
      tasks: []
    }),

    mounted() {
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          this.tasks = data
        })
        .catch((error) => console.log('ERROR: ' + error));
    },
  }
</script>

<style scoped lang="scss">
  @import '@/styles/imports.scss';
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
    overflow: hidden;

    h2 {
      font-weight: 700;
      line-height: 1.2;
    }

    &__list {
      max-height: 380px;
      list-style: none;
      padding-left: 0;
      overflow-y: auto;
    }

    &__overlay {
      position: absolute;
      left: 0;
      bottom: 0;
      height: 75px;
      margin: 0 $list-padding;
      background: linear-gradient(180deg, rgba(37, 46, 66, 0) 0%, #252E42 67.19%);
    }
  }

  .todo {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    text-align: left;

    &__label {
      display: flex;
      flex-direction: column;
    }
  }
</style>
