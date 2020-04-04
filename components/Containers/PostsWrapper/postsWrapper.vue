<template>
  <page-wrapper>
    <template #page-title>
      <span class="headline primary-card-header-text--text">
        {{ $t('posts.pageTitle') }}
      </span>
    </template>
    <template #page-content>
      <v-layout row wrap>
        <v-flex v-for="(post, idx) in posts" :key="idx" xs12 md6 d-flex px-3 py-2>
          <post :post="post" />
        </v-flex>
      </v-layout>
    </template>
  </page-wrapper>
</template>

<script>
import { pageWrapper, post } from '~/common/Components/LazyLoadingComponents/lazyLoadingComponents'
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
