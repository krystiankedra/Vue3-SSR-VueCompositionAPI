<template>
  <page-wrapper>
    <template #page-title>
      <span class="headline primary-card-header-text--text">
        {{ $t('posts.pageTitle') }}
      </span>
    </template>
    <template #page-content>
      <v-layout row wrap>
        <v-flex xs12 md6 v-for="(post, idx) in posts" :key="idx" d-flex px-3 py-2>
          <post :post="post" />
        </v-flex>
      </v-layout>
    </template>
  </page-wrapper>
</template>

<script>
import { pageWrapper, post } from '~/commons/Components/LazyLoadingComponents/lazyLoadingComponents'
export default {
  components: {
    pageWrapper,
    post
  },
  props: {
    posts: {
      type: Array,
      default: () => []
    }
  }
}
</script>
