<template>
  <todos-wrapper :todos="todos" />
</template>

<script>
import { todosWrapper } from '~/commons/Components/LazyLoadingComponents/lazyLoadingComponents'
import { fetchTodos } from '~/commons/Api/Todos/todos'

export default {
  components: {
    todosWrapper
  },
  async asyncData({ app: { $api } }) {
    const todos = await fetchTodos({ $api })

    return {
      todos
    }
  }
}
</script>
