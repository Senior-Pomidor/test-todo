<template>
	<li class="todo">
    <input type="checkbox" class="todo__checkbox" :name="`todo-item-${todo.id}`" :id="`todo-item-${todo.id}`" :checked="todo.completed">
    <label class="todo__info" :for="`todo-item-${todo.id}`">
      <span class="todo__text">{{ todo.title }}</span>
      <span class="todo__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, officiis! </span>
    </label>
  </li>
</template>

<script>
  export default {
    name: 'Todo',

    props: {
			todo: Object
		},

    data() {
      return {
        checked: Boolean
      }
    }
  }
</script>

<style lang="scss">
  $todo-info-color--checked: $color-light-grey;
  $todo-desc-color: $color-light-grey;
  $todo-text-color--hover: $color-orange;
  $checkbox-bg-color: $color-light-grey;
  $checkbox-bg-color--checked: $color-orange;
  $checkbox-color--checked: $color-white;
  $checkbox-bg-color--hover: $color-orange-opacity;

  .todo {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 5px 0;
      // overflow-x: hidden;
      // max-width: 100%;

    * {
      cursor: pointer;
    }

    &__checkbox {
      position: relative;
      visibility: hidden;
      width: 20px;
      min-width: 20px;
      height: 20px;
      margin-right: 15px;
      content: "";

      &::before {
        position: absolute;
        left: 0;
        top: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background-color: $checkbox-bg-color;
        border-radius: 6px;
        visibility: visible; 
        content: "";
      }

      &:checked {
        &::before {
          background-color: $checkbox-bg-color--checked;
          content: url('../../assets/images/icons/icon-checked.svg');
        }

        + .todo__info {
          color: $todo-info-color--checked;

          .todo__text {
            color: inherit;
            text-decoration-line: line-through;
            -webkit-text-decoration-line: line-through;
          }
        }
      }
    }

    &__info {
      display: flex;
      flex-direction: column;
      overflow-x: hidden;
    }

    &__text {
      font-size: 1rem;
      font-weight: 500;
    }

    &__desc {
      display: inline-block;
      position: relative;
      margin-top: 3px;
      font-size: .75rem;
      font-weight: 400;
      color: $todo-desc-color;
      white-space: nowrap;

      &::before {
        position: absolute;
        top: 0;
        right: 0;
        display: block;
        width: 2rem;
        height: 100%;

        background: linear-gradient(180deg, #252E42 9.38%, rgba(37, 46, 66, 0) 66.15%);
        content: "";
      }
    }

    &:hover {
      .todo__checkbox:not(:checked) {
        &::before {
          background-color: $checkbox-bg-color--hover;
        }

        + .todo__info {
          color:  $todo-text-color--hover;
        }
      }

      .todo__checkbox:checked {
        + .todo__info {
          color: $checkbox-color--checked;

          .todo__text {
            color: inherit;
          }
        }
      }
    }
  }
</style>