<template>
  <article class="todo-page">
    <TodoList class="todo-page__list"></TodoList>
    <p class="copyright">© 2022. Vladimir Bobylev</p>
  </article>
</template>

<script>
  import TodoList from '@/components/todo/TodoList.vue'

  export default {
    name: 'Todo',
    components: {
      TodoList
    },
  }


</script>

<style scoped lang="scss">
  .todo-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 15px;

    &__list {
      margin-top: 162px;
      box-shadow: 0px 14px 34px rgba(0, 0, 0, 0.25);;
    }

    .copyright {
      margin-top: 30px;
      color: #414B62;
      font-weight: 500;
    }

    @media screen and (max-width: 510px) {
      &__list {
        margin-top: 100px;
      }
    }
  }
</style>