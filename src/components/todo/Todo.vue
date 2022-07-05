<template>
	<li class="todo">
    <input type="checkbox" class="todo__checkbox" :id="`todo-item-${todo.id}`">
    <label class="todo__info" :for="`todo-item-${todo.id}`">
      <span class="todo__text">{{ todo.title }}</span>
      <span class="todo__desc">Lorem ipsum dolor sit amet.</span>
    </label>
  </li>
</template>

<script>
  export default {
    name: 'Todo',

    props: {
			todo: Object
		}
  }
</script>

<style lang="scss">
  .todo {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    text-align: left;
    font-family: Montserrat, sans-serif;

    &__info {
      display: flex;
      flex-direction: column;
    }

    &__text {
      font-weight: 500;
    }

    &__desc {
      font-weight: 400;
    }
  }
</style>