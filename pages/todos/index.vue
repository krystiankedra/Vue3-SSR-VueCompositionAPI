<template>
  <todos-wrapper :todos="todos" />
</template>

<script>
import { todosWrapper } from '~/common/Components/LazyLoadingComponents/lazyLoadingComponents'
import { fetchTodos } from '~/common/Api/Todos/todos'
import layoutProviderFactory from '~/mixins/Factories/LayoutProviderFactory/layoutProviderFactory'

export default {
  components: {
    todosWrapper
  },
  middleware: ['Client/Auth/auth'],
  mixins: [
    layoutProviderFactory()
  ],
  async asyncData({ app: { $api } }) {
    const todos = await fetchTodos({ $api })

    return {
      todos
    }
  }
}
</script>
