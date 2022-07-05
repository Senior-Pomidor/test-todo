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
  }
</style>