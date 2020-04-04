<template>
  <card-wrapper>
    <template #card-title>
      <span class="title primary-card-header-text--text">
        {{ $t('posts.post.title') }}: {{ post.title }}
      </span>
    </template>
    <template #card-content>
      <v-layout row wrap px-2>
        <v-flex xs12>
          <text-wrapper :label="$t('posts.post.body')" :text="post.body" />
        </v-flex>
        <v-flex xs12 pt-3>
          <post-author :author="post.author" />
        </v-flex>
        <v-flex xs12 pt-3>
          <post-comments :comments="post.comments" />
        </v-flex>
      </v-layout>
    </template>
  </card-wrapper>
</template>

<script>
import {
  cardWrapper,
  postComments,
  textWrapper,
  expansionPanelWrapper,
  postAuthor
} from '~/common/Components/LazyLoadingComponents/lazyLoadingComponents'
export default {
  components: {
    cardWrapper,
    postComments,
    postAuthor,
    textWrapper,
    expansionPanelWrapper
  },
  props: {
    post: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
