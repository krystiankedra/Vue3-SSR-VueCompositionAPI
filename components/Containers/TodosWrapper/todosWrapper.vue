<template>
  <page-wrapper>
    <template #page-title>
      <span class="headline primary-card-header-text--text">
        {{ $t('todos.pageTitle') }}
      </span>
    </template>
    <template #page-content>
      <v-layout row wrap>
        <v-flex v-for="(todo, idx) in todos" :key="idx" d-flex px-3 py-2 xs12 md6>
          <todo :todo="todo" />
        </v-flex>
      </v-layout>
    </template>
  </page-wrapper>
</template>

<script>
import { pageWrapper, todo } from '~/commons/Components/LazyLoadingComponents/lazyLoadingComponents'

export default {
  components: {
    pageWrapper,
    todo
  },
  props: {
    todos: {
      type: Array,
      default: () => []
    }
  }
}
</script>
