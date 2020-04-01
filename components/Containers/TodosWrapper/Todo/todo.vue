<template>
  <card-wrapper class="todo-card-wrapper">
    <template #card-title>
      <span class="title primary-card-header-text--text">
        {{ $t('todos.todo.title') }}: {{ todo.title }}
      </span>
    </template>
    <template #card-content>
      <v-layout row wrap>
        <v-flex xs12>
          <text-wrapper :label="$t('todos.todo.completed')" :text="$t(convertCompletedAsKey)" />
        </v-flex>
      </v-layout>
    </template>
  </card-wrapper>
</template>

<script>
import { cardWrapper, textWrapper } from '~/commons/Components/LazyLoadingComponents/lazyLoadingComponents'
import { computed } from '@vue/composition-api'

export default {
  components: {
    cardWrapper,
    textWrapper
  },
  props: {
    todo: {
      type: Object,
      default: () => {}
    }
  },
  setup({ todo }) {
    const { completed } = todo
    const convertCompletedAsKey = computed(() => completed ? 'otherWords.yes' : 'otherWords.no')

    return {
      convertCompletedAsKey
    }
  }
}
</script>

<style scoped>
.todo-card-wrapper {
  min-width: 100%;
}
</style>
