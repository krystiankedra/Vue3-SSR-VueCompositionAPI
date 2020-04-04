<template>
  <todos-wrapper :todos="todos" />
</template>

<script>
import { todosWrapper } from '~/common/Components/LazyLoadingComponents/lazyLoadingComponents'
import { fetchTodos } from '~/common/Api/Todos/todos'

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
